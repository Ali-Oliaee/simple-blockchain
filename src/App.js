import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import BlockCard from "./components/block-card";
import Header from "./components/header";
import TransactionsContainer from "./components/transactions-container";

function App() {
  return (
    <div className="App">
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
        <TransactionsContainer block={5} />
      </Container>
    </div>
  );
}

export default App;
