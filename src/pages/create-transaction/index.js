import { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";

function CreateTransactionPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="create-transaction-page">
      <h1>Create Transaction</h1>
      <h4>Transfer some money to someone!</h4>
      <Container fluid>
        <Form
          className="p-4"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <h5>From address</h5>
          <Form.Control
            className="mb-3"
            type="text"
            disabled
            value="v4fd6v4f8sd4sfd4v8dv4v546s786t7gt86r4hdv64d68g4t4s"
          />
          <p>
            This is your wallet address. You cannot change it because you can
            only spend your own coins.
          </p>
          <h5>To address</h5>
          <Form.Group className="mb-3">
            <Form.Control
              required
              type="text"
              placeholder="Enter address"
              controlId="validationCustom01"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid address.
            </Form.Control.Feedback>
            <p>
              The address of the wallet where you want to send the money to. You
              can type random text here (if you are not interested in recovering
              the funds)
            </p>
          </Form.Group>
          <h5>Amount</h5>
          <Form.Group className="mb-3">
            <Form.Control required type="number" placeholder="Enter amount" />
            <Form.Control.Feedback type="invalid">
              Please enter a valid amount.
            </Form.Control.Feedback>
            <p>
              You can transfer any amount. Account balance is not checked in
              this demo. Have at it!
            </p>
          </Form.Group>
          <Button type="submit">Create Transaction</Button>
        </Form>
      </Container>
    </div>
  );
}

export default CreateTransactionPage;
