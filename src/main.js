const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "a796791190e7ed964dca24a185d67466fc0fbaa4e9a3c22ebec130eb9b3191d7"
);
const myWalletAddress = myKey.getPublic("hex");

let myShitCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key", 200);
tx1.signTransaction(myKey);
myShitCoin.addTransaction(tx1);

console.log("starting miner...");
myShitCoin.minePendingTransactions(myWalletAddress);

console.log("mojoodi mmd: ", myShitCoin.getBalance(myWalletAddress));

/*
publicKey 04b1fdd270d60bfe9ca9df51fd1745234b2cd25393a60435789969b9efd2e254c0ebce0bf98e873076bdab399af1893eaef230ad08128ec3bd6c133cb3076cc4ae
privateKey a796791190e7ed964dca24a185d67466fc0fbaa4e9a3c22ebec130eb9b3191d7
*/
