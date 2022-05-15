const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "6e917d481dd3f2b978ea57b6618447553cf991ef47777d0d9ba1376fc27365ab"
);
const myWalletAddress = myKey.getPublic("hex");

let myShitCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key", 10);
tx1.signTransaction(myKey);
myShitCoin.addTransaction(tx1);

console.log("starting miner...");
myShitCoin.minePendingTransactions(myWalletAddress);

console.log("my wallet balance: ", myShitCoin.getBalance(myWalletAddress));
console.log("blockchain is valid? ", myShitCoin.isChainValid());
