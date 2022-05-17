import { Button } from "react-bootstrap";
import TransactionTable from "../../components/transactions-table";

function PendingTransactionsPage() {
  return (
    <div className="pending-transaction-page p-4">
      <h1>Pending Transactions</h1>
      <p>
        This transactions are waiting to be included in the next block. Next
        block is created when you start the mining process.
      </p>
      <TransactionTable />
      <Button>Start mining</Button>
    </div>
  );
}

export default PendingTransactionsPage;
