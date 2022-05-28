const express = require("express");
const cors = require("cors");
const Blockchain = require("./blockchain");

const app = express();
const PORT = process.env.PORT ?? 8000;
app.use(cors());
const shitCoin = new Blockchain();

app.get("/get-blocks/", (req, res) => {
  res.send(shitCoin.chain);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
