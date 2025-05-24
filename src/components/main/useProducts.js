import { useState, useEffect } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const URL = "http://localhost:8000/products";

  useEffect(function () {
    async function fetchProducts() {
      setIsLoading(true);
      setError("");
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, isLoading, error };
}

export { useProducts };
