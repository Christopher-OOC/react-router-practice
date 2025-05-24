import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import Spinner from "./Spinner";
import Product from "./Product";

function ProductList() {
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
        console.log(data);
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.top}>Product List</p>
      {isLoading && <Spinner />}
      {error && <p>{error}</p>}
      {!isLoading && products.length > 0 && (
        <ul className={styles.productList}>
          {products.map((product) => (
            <Product product={product} />
          ))}
        </ul>
      )}
      {!isLoading && products.length === 0 && <p>No product available!</p>}
    </div>
  );
}

export default ProductList;
