import TransactionTable from "../../components/transactions-table";

function WalletPage() {
  const url = window.location.href.split("/");
  const walletAddress = url[url.length - 1];

  return (
    <div className="wallet-page p-4">
      <h1>Wallet details</h1>
      <h3>Address: </h3>
      <span>{walletAddress}</span>
      <h3>Balance: </h3>
      <span>{1200}</span>
      <hr />
      <TransactionTable />
    </div>
  );
}

export default WalletPage;
