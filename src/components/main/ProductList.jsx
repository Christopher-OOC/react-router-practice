import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import Spinner from "./Spinner";
import Product from "./Product";
import { useProducts } from "./useProducts";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

function ProductList() {
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const { products, isLoading, error } = useProducts();

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(
    function () {
      if (search) {
        const ps = products.filter(
          (p) => p.name.includes(search) || p.description.includes(search)
        );
        console.log("PS: " + ps);
        setSearchProducts(ps);
      } else {
        setSearchProducts(products);
      }
    },
    [search, products]
  );

  function handleSearch(e) {
    e.preventDefault();
    console.log(search);
  }

  function handleChangeColor(color) {
    setOption(color);
    navigate(`?color=${color}`);
  }

  console.log("Search P: " + searchProducts);
  console.log("Option: " + option);

  return (
    <div className={styles.container}>
      <form>
        <label>Search</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
      <label>ID: </label>
      <select
        value={option}
        onChange={(e) => handleChangeColor(e.target.value)}
      >
        <option value={null}>Select</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </select>
      <p className={styles.top}>Product List</p>
      {isLoading && <Spinner />}
      {error && <p>{error}</p>}
      {!isLoading && searchProducts.length > 0 && (
        <ul className={styles.productList}>
          {searchProducts.map((product) => (
            <Product product={product} />
          ))}
        </ul>
      )}
      {!isLoading && searchProducts.length === 0 && (
        <p>No product available!</p>
      )}
    </div>
  );
}

export default ProductList;
