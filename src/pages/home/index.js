import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import BlockCard from "../../components/block-card";
import TransactionsTable from "../../components/transactions-table";

const blocks = {
  block1: {
    id: 1,
    title: "Block1",
    description: "genesis block",
    hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
    previousHash: "0",
    bordered: true,
    nonce: "0",
    timestamp: "1652799797",
    transactions: [
      {
        id: 1,
        title: "Transaction1",
        description: "Transaction1",
        hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
        previousHash: "0",
        nonce: "0",
        timestamp: "1652799797",
        from: "6v54s84vs6t87bs34s68t746s8rt455464v68stsr6b5srb",
        to: "vs64f684vs3d8f4bs87ffs84r87g6s8v46s87j87u7ikl87ol84y",
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
        timestamp: "1652799797",
        from: "6v54s84vs6t87bs34s68t746s8rt455464v68stsr6b5srb",
        to: "vs64f684vs3d8f4bs87ffs84r87g6s8v46s87j87u7ikl87ol84y",
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
        timestamp: "1652799797",
        from: "6v54s84vs6t87bs34s68t746s8rt455464v68stsr6b5srb",
        to: "vs64f684vs3d8f4bs87ffs84r87g6s8v46s87j87u7ikl87ol84y",
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
    bordered: false,
    timestamp: "1652799797",
    transactions: [
      {
        id: 1,
        title: "Transaction1",
        description: "Transaction1",
        hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
        nonce: "0",
        timestamp: "1652799797",
        from: "6v54s84vs6t87bs34s68t746s8rt455464v68stsr6b5srb",
        to: "vs64f684vs3d8f4bs87ffs84r87g6s8v46s87j87u7ikl87ol84y",
        amount: "100",
        valid: true,
      },
      {
        id: 2,
        title: "Transaction2",
        description: "Transaction2",
        hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
        nonce: "0",
        timestamp: "1652799797",
        from: "6v54s84vs6t87bs34s68t746s8rt455464v68stsr6b5srb",
        to: "vs64f684vs3d8f4bs87ffs84r87g6s8v46s87j87u7ikl87ol84y",
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
    bordered: false,
    timestamp: "1652799797",
    transactions: [
      {
        id: 1,
        title: "Transaction1",
        description: "Transaction1",
        hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
        nonce: "0",
        timestamp: "1652799797",
        from: "6v54s84vs6t87bs34s68t746s8rt455464v68stsr6b5srb",
        to: "vs64f684vs3d8f4bs87ffs84r87g6s8v46s87j87u7ikl87ol84y",
        amount: "80",
        valid: true,
      },
      {
        id: 2,
        title: "Transaction2",
        description: "Transaction2",
        hash: "cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv",
        nonce: "0",
        timestamp: "1652799797",
        from: "6v54s84vs6t87bs34s68t746s8rt455464v68stsr6b5srb",
        to: "vs64f684vs3d8f4bs87ffs84r87g6s8v46s87j87u7ikl87ol84y",
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
          {Object.entries(blocks).map((mappedBlock) => (
            <BlockCard
              key={mappedBlock[1].id}
              title={mappedBlock[1].title}
              description={mappedBlock[1].description}
              hash={mappedBlock[1].hash}
              previousHash={mappedBlock[1].previousHash}
              nonce={mappedBlock[1].nonce}
              timestamp={mappedBlock[1].timestamp}
              onClick={() => setBlock(mappedBlock[1])}
              bordered={Object.entries(blocks).map((searchBlock) => {
                if (searchBlock[1].id === block.id)
                  searchBlock[1].bordered = true;
                else searchBlock[1].bordered = false;
                return searchBlock[1].bordered;
              })}
              id={mappedBlock[1].id}
            />
          ))}
        </Row>
      </Container>
      <Container fluid>
        <h2>Transactions inside {block.title}</h2>
        <TransactionsTable transactions={block.transactions} />
      </Container>
    </div>
  );
}

export default HomePage;
