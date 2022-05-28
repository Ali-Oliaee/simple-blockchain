const SHA256 = require("crypto-js/sha256");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const key = ec.genKeyPair();
const publicKey = key.getPublic("hex");
const privateKey = key.getPrivate("hex");

const myKey = ec.keyFromPrivate(
  "04d3cb2381294a658dc3f0cc305efedc60d6d66e16e7a9e5bb919d90af755dfc32e08277f2cef2469b960cf312f86e3d750d7243d525af090ccef998afdac5d55a"
);
const myWalletAddress = myKey.getPublic("hex");

class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }

  calculateHash = () =>
    SHA256(this.fromAddress + this.toAddress + this.amount).toString();

  signTransaction(signingKey) {
    if (signingKey.getPublic("hex") !== this.fromAddress)
      throw new Error("you cannot sign transactions from another wallets!");

    const hashTx = this.calculateHash();
    const sig = signingKey.sign(hashTx, "base64");
    this.signature = sig.toDER("hex");
  }

  isValid() {
    if (!this.fromAddress) return true;
    if (!this.signature || this.signature.length === 0)
      throw new Error("No signature in this transaction!");

    const publicKey = ec.keyFromPublic(this.fromAddress, "hex");
    return publicKey.verify(this.calculateHash(), this.signature);
  }
}

class Block {
  constructor(timestamp, transactions, previousHash = "") {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.nonce = 0;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash = () =>
    SHA256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.transactions) +
        this.nonce
    ).toString();

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    console.log("Block mined: " + this.hash);
  }

  hasValidTransactions() {
    for (let i = 1; i < this.transactions.length; i++)
      if (!this.transactions[i].isValid()) return false;
    return true;
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2;
    this.pendingTransactions = [];
    this.miningReward = 100;
  }

  createGenesisBlock = () => new Block(Date.now(), "genesis block", "0");
  getLatestBlock = () => this.chain[this.chain.length - 1];

  minePendingTransactions(miningRewardAddress) {
    let block = new Block(Date.now(), this.pendingTransactions);
    block.mineBlock(this.difficulty);

    console.log("block mined successfully");
    this.chain.push(block);

    this.pendingTransactions = [
      new Transaction(null, miningRewardAddress, this.miningReward),
    ];
  }

  addTransaction(transaction) {
    if (!transaction.fromAddress || !transaction.toAddress)
      throw new Error("transaction must include from and to addresses!");
    if (!transaction.isValid())
      throw new Error("cannot add invalid transaction to chain!");
    this.pendingTransactions.push(transaction);
  }

  getBalanceOfAddress(address) {
    let balance = 0;
    for (const block in this.chain) {
      for (const transaction in block.transactions) {
        if (transaction.fromAddress === address) balance -= transaction.amount;
        if (transaction.toAddress === address) balance += transaction.amount;
      }
    }
    return balance;
  }

  isChainValid() {
    for (let i = 0; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (!currentBlock.hasValidTransactions()) return false;
      if (currentBlock.hash !== currentBlock.calculateHash()) return false;
      // if (currentBlock.previousHash !== previousBlock.hash) return false;
    }
    return true;
  }
}

module.exports = Blockchain;
