import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import DashboardMain from "./components/main/DashboardMain";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<Dashboard />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<DashboardMain />} />
          <Route path="products" element={<p>Products</p>} />
          <Route path="cart" element={<p>Cart</p>} />
          <Route path="orders" element={<p>Orders</p>} />
          <Route path="transactions" element={<p>Transactions</p>} />
          <Route path="admin" element={<p>Admin</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
