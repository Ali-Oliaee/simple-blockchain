import { Card, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function BlockCard({
  title,
  description,
  hash,
  previousHash,
  nonce,
  timestamp,
  onClick,
}) {
  return (
    <Col className="mb-4">
      <Card onClick={onClick}>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {description ?? "(no description)"}
          </Card.Subtitle>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Card.Title>Hash</Card.Title>
            <Card.Text className="text-success">{hash}</Card.Text>
            <Card.Title>Hash of previous block</Card.Title>
            <Card.Text className="text-success">{previousHash}</Card.Text>
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
    </Col>
  );
}

export default BlockCard;
