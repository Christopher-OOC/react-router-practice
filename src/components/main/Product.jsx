import { Link } from "react-router-dom";
import styles from "./Product.module.css";

function Product({ product }) {
  return (
    <li className={styles.product}>
      <Link to={`${product.id}`}>
        <img className={styles.image} src={product.image} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </Link>
    </li>
  );
}

export default Product;
