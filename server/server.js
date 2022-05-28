const express = require("express");
const cors = require("cors");
const { Blockchain, Transaction } = require("./blockchain");

const app = express();
const PORT = process.env.PORT ?? 8000;
app.use(cors());
const shitCoin = new Blockchain();

app.get("/get-blocks/", (req, res) => {
  res.send(shitCoin.chain);
});
app.get("/get-block-transactions/:id", (req, res) => {
  const { id } = req.params;
  res.send(shitCoin.chain[id].transactions);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
