import { Card, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function BlockCard({
  title,
  description,
  hash,
  previousHash,
  nonce,
  timestamp,
}) {
  return (
    <Col className="mb-4">
      <Card>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {description}
          </Card.Subtitle>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Card.Title>Hash</Card.Title>
            <Card.Link as={Link} to={`transaction/${hash}`}>
              {hash}
            </Card.Link>
            <Card.Title>Hash of previous block</Card.Title>
            {previousHash === "0" ? (
              <Card.Text>0</Card.Text>
            ) : (
              <Card.Link as={Link} to={`transaction/${previousHash}`}>
                {previousHash}
              </Card.Link>
            )}
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
