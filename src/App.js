import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import MainRouter from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
