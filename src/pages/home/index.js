import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import BlockCard from "../../components/block-card";
import TransactionsContainer from "../../components/transactions-container";

const blocks = {
  block1: {
    id: 1,
    title: "Block1",
    description: "genesis block",
    hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
    previousHash: "0",
    nonce: "0",
    timestamp: "468468164",
    transactions: [
      {
        id: 1,
        title: "Transaction1",
        description: "Transaction1",
        hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
        previousHash: "0",
        nonce: "0",
        timestamp: "468468164",
        from: "ali",
        to: "ahmed",
        amount: "100",
        valid: true,
      },
      {
        id: 2,
        title: "Transaction2",
        description: "Transaction2",
        hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
        previousHash: "0",
        nonce: "0",
        timestamp: "468468164",
        from: "ali",
        to: "ahmed",
        amount: "100",
        valid: false,
      },
      {
        id: 3,
        title: "Transaction3",
        description: "Transaction3",
        hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
        previousHash: "0",
        nonce: "0",
        timestamp: "468468164",
        from: "ali",
        to: "ahmed",
        amount: "100",
        valid: true,
      },
    ],
  },
  block2: {
    id: 2,
    title: "Block2",
    hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
    previousHash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
    nonce: "0",
    timestamp: "468468164",
    transactions: [
      {
        id: 1,
        title: "Transaction1",
        description: "Transaction1",
        hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
        nonce: "0",
        timestamp: "468468164",
        from: "ali",
        to: "ahmed",
        amount: "100",
        valid: true,
      },
      {
        id: 2,
        title: "Transaction2",
        description: "Transaction2",
        hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
        nonce: "0",
        timestamp: "468468164",
        from: "ali",
        to: "ahmed",
        amount: "320",
        valid: false,
      },
    ],
  },
  block3: {
    id: 3,
    title: "Block3",
    hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
    previousHash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
    nonce: "0",
    timestamp: "468468164",
    transactions: [
      {
        id: 1,
        title: "Transaction1",
        description: "Transaction1",
        hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
        nonce: "0",
        timestamp: "468468164",
        from: "ali",
        to: "ahmed",
        amount: "80",
        valid: true,
      },
      {
        id: 2,
        title: "Transaction2",
        description: "Transaction2",
        hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
        nonce: "0",
        timestamp: "468468164",
        from: "ali",
        to: "ahmed",
        amount: "50",
        valid: false,
      },
    ],
  },
};

function HomePage() {
  const [block, setBlock] = useState(blocks.block1);

  return (
    <div className="home-page">
      <Container fluid>
        <h2 className="font-weight-bold">Blocks on chain</h2>
        <h6>
          Each card represent a block on the chain. Click on a block to see the
          transactions stored inside.
        </h6>
        <Row>
          <BlockCard
            title="Block1"
            description="genesis block"
            hash="cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv"
            previousHash="0"
            nonce="0"
            timestamp="468468164"
            onClick={() => setBlock(blocks.block1)}
          />
          <BlockCard
            title="Block2"
            hash="cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv"
            previousHash="cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv"
            nonce="0"
            timestamp="468468164"
            onClick={() => setBlock(blocks.block2)}
          />
          <BlockCard
            title="Block2"
            hash="cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv"
            previousHash="cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv"
            nonce="0"
            timestamp="468468164"
            onClick={() => setBlock(blocks.block3)}
          />
        </Row>
      </Container>
      <Container fluid>
        <TransactionsContainer block={5} transactions={block.transactions} />
      </Container>
    </div>
  );
}

export default HomePage;
