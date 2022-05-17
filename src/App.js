import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import MainRouter from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container fluid>
        <MainRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
