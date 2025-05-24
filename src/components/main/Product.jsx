import { Link } from "react-router-dom";
import styles from "./Product.module.css";

function Product({ product, color }) {
  return (
    <li className={styles.product}>
      <Link to={`${product.id}`}>
        <img className={styles.image} src={product.image} />
        <div style={color ? { backgroundColor: color } : {}}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      </Link>
    </li>
  );
}

export default Product;
