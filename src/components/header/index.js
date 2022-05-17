import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="mb-3">
      <Container fluid>
        <Navbar.Brand to="/" as={Link}>
          Ali's ShitCoin blockchain
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav navbarScroll>
            <Nav.Link to="/settings" as={Link} tabIndex={-1}>
              <Button variant="outline-light">Settings</Button>
            </Nav.Link>
            <Nav.Link to="/new-transaction" as={Link} tabIndex={-1}>
              <Button variant="outline-light">Create transaction</Button>
            </Nav.Link>
            <Nav.Link to="/pending-transactions" as={Link} tabIndex={-1}>
              <Button variant="outline-light">Pending transactions</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
