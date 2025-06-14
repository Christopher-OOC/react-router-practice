import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import DashboardMain from "./components/main/DashboardMain";
import ProductList from "./components/main/ProductList";
import ProductDetails from "./components/main/ProductDetails";
import LoginPage from "./pages/LoginPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";

import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/main/ProtectedRoute";
import ProtectedAdminRoute from "./components/main/ProtectedAdminRoute";

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
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LoginPage />} />
          <Route path="/unauthorize" element={<UnauthorizedPage />} />
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route
              path="dashboard"
              element={
                <DashboardMain
                  user={user}
                  isLoading={isLoading}
                  error={error}
                />
              }
            />
            <Route path="products" element={<ProductList />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="cart" element={<p>Cart</p>} />
            <Route path="orders" element={<p>Orders</p>} />
            <Route path="transactions" element={<p>Transactions</p>} />
            <Route
              path="admin"
              element={
                <ProtectedAdminRoute>
                  <p>Admin</p>
                </ProtectedAdminRoute>
              }
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
