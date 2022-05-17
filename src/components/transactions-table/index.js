import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function TransactionsTable({ transactions = [] }) {
  return (
    <Table striped bordered hover responsive className="text-center">
      <thead>
        <tr>
          <th>Id</th>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
          <th>Timestamp</th>
          <th>valid</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>
              <Link to={`/wallet/${transaction.from}`}>{transaction.from}</Link>
            </td>
            <td>
              <Link to={`/wallet/${transaction.to}`}>{transaction.to}</Link>
            </td>
            <td>{transaction.amount}</td>
            <td>
              <span>
                {new Date(+transaction.timestamp).toLocaleDateString(
                  undefined,
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
                <br />
                {new Date(+transaction.timestamp).toLocaleTimeString()}
              </span>
            </td>
            <td>
              {transaction.valid ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <FontAwesomeIcon icon={faXmark} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TransactionsTable;
