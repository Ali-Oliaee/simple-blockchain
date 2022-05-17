import { Button, Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/">Ali's ShitCoin blockchain</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav navbarScroll>
            <Nav.Link href="/">
              <Button variant="outline-light">Settings</Button>
            </Nav.Link>
            <Nav.Link href="/">
              <Button variant="outline-light">Create transaction</Button>
            </Nav.Link>
            <Nav.Link href="/">
              <Button variant="outline-light">Pending transactions</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
