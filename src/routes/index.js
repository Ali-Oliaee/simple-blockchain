import { Route, Routes } from "react-router-dom";
import CreateTransactionPage from "../pages/create-transaction";
import HomePage from "../pages/home";
import NotFoundPage from "../pages/not-found";
import PendingTransactionsPage from "../pages/pending-transactions";
import SettingsPage from "../pages/settings";
import TransactionPage from "../pages/transaction";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/new-transaction" element={<CreateTransactionPage />} />
      <Route
        path="/pending-transactions"
        element={<PendingTransactionsPage />}
      />
      <Route path="/transaction/:id" element={<TransactionPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default MainRouter;
