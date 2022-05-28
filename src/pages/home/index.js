import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import BlockCard from "../../components/block-card";
import TransactionsTable from "../../components/transactions-table";
import { getBlock, getBlocks } from "../../utils/api";

function HomePage() {
  const { data: blocks, isLoading } = useQuery("blocks", getBlocks);
  const [blockId, setBlockId] = useState(0);
  const { data: blockTransactions } = useQuery("block", () =>
    getBlock(blockId)
  );

  if (isLoading) return <div>Loading...</div>;
  return (
    <Container fluid>
      <h2 className="font-weight-bold">Blocks on chain</h2>
      <h6>
        Each card represent a block on the chain. Click on a block to see the
        transactions stored inside.
      </h6>
      <Row>
        {blocks.map((block, index) => (
          <BlockCard
            key={index}
            id={index}
            onClick={() => setBlockId(index)}
            title={`Block ${index + 1}`}
            description={block.description}
            hash={block.hash}
            previousHash={block.previousHash}
            nonce={block.nonce}
            timestamp={block.timestamp}
          />
        ))}
        {blockTransactions && (
          <Container fluid className="mt-2">
            <h2>Transactions inside</h2>
            <TransactionsTable transactions={blockTransactions || []} />
          </Container>
        )}
      </Row>
    </Container>
  );
}

export default HomePage;
