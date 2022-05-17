import TransactionsTable from "../transactions-table";

function TransactionsContainer({ blockName, transactions }) {
  return (
    <div>
      <h2>Transactions inside {blockName}</h2>
      <TransactionsTable transactions={transactions} />
    </div>
  );
}

export default TransactionsContainer;
