import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import MainRouter from "./routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <Header />
      <Container fluid>
        <QueryClientProvider client={queryClient}>
          <MainRouter />
        </QueryClientProvider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
