import { Route, Routes } from "react-router-dom";
import CreateTransactionPage from "../pages/create-transaction";
import HomePage from "../pages/home";
import PendingTransactionsPage from "../pages/pending-transactions";
import SettingsPage from "../pages/settings";

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
      <Route path="/transaction/:id" element={<SettingsPage />} />
    </Routes>
  );
}

export default MainRouter;
