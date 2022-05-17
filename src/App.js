import "bootstrap/dist/css/bootstrap.min.css";
import BlockCard from "./components/block-card";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <BlockCard
        title="Block1"
        description="genesis block"
        hash="cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv"
        previousHash="cs6ac468v46sb84g6b4ddvsfd8646f4sv1d534v54df7vsdv"
        nonce="0"
        timestamp="468468164"
      />
    </div>
  );
}

export default App;
