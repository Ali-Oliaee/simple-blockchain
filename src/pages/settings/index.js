import { Container, Form } from "react-bootstrap";

function SettingsPage() {
  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <h6>
        Control how the blockchain behaves when new transactions or blocks are
        created. Changes are automatically saved.
      </h6>
      <Container fluid className="p-4">
        <h5>Difficulty</h5>
        <Form.Control className="mb-3" type="number" placeholder="Difficulty" />
        <p>
          Difficulty controls how long the mining process takes. Higher numbers
          will make mining a lot slower!
        </p>
        <h5>Mining reward</h5>
        <Form.Control
          className="mb-3"
          type="number"
          placeholder="Mining reward"
        />
        <p>
          How much coins a miner receives for successfully creating a new block
          for chain.
        </p>
      </Container>
    </div>
  );
}

export default SettingsPage;
