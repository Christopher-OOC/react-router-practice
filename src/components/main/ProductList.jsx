import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import Spinner from "./Spinner";
import Product from "./Product";
import { useProducts } from "./useProducts";

function ProductList() {
  const [search, setSearch] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const { products, isLoading, error } = useProducts();

  return (
    <div className={styles.container}>
      <form>
        <label>Search</label>
        <input
          type="text"
          value={search}
          onClick={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </form>
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
