import { Container, Row } from "react-bootstrap";
import Header from "../../components/header/index";
import BlockCard from "../../components/block-card/index";
import TransactionsContainer from "../../components/transactions-container/index";

const sampleTransactions = [
  {
    id: 1,
    from: "0",
    to: "1",
    amount: "10",
    timestamp: "1568468164",
    valid: true,
  },
  {
    id: 2,
    from: "1",
    to: "2",
    amount: "10",
    timestamp: "1568468164",
    valid: true,
  },
  {
    id: 3,
    from: "2",
    to: "3",
    amount: "10",
    timestamp: "1568468164",
    valid: false,
  },
];

function HomePage() {
  return (
    <div className="home-page">
      <Header />
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
          />
          <BlockCard
            title="Block2"
            hash="cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv"
            previousHash="cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv"
            nonce="0"
            timestamp="468468164"
          />
          <BlockCard
            title="Block2"
            hash="cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv"
            previousHash="cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv"
            nonce="0"
            timestamp="468468164"
          />
        </Row>
      </Container>
      <Container fluid>
        <TransactionsContainer block={5} transactions={sampleTransactions} />
      </Container>
    </div>
  );
}

export default HomePage;
