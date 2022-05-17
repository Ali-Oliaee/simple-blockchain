import { Table } from "react-bootstrap";

function TransactionsTable({ transactions = [] }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
          <th>Timestamp</th>
          <th>valid?</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.from}</td>
            <td>{transaction.to}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.timestamp}</td>
            <td>{transaction.valid}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TransactionsTable;
