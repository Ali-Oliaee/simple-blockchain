import { Card, ListGroup } from "react-bootstrap";

function BlockCard({
  title,
  description,
  hash,
  previousHash,
  nonce,
  timestamp,
}) {
  return (
    <Card className="m-4">
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Card.Title>Hash</Card.Title>
          <Card.Link>{hash}</Card.Link>
          <Card.Title>Hash of previous block</Card.Title>
          <Card.Link>{previousHash}</Card.Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Card.Title>Nonce</Card.Title>
          <Card.Text>{nonce}</Card.Text>
        </ListGroup.Item>
        <ListGroup.Item>
          <Card.Title>Timestamp</Card.Title>
          <Card.Text>{timestamp}</Card.Text>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default BlockCard;
