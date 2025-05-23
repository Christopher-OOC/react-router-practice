import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import DashboardMain from "./components/main/DashboardMain";

const URL = "http://localhost:8000/user";

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchUser() {
      setIsLoading(true);
      setError("");
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<Dashboard />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route
            path="dashboard"
            element={
              <DashboardMain user={user} isLoading={isLoading} error={error} />
            }
          />
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
