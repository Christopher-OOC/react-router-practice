import { Link, useNavigate } from "react-router-dom";
import styles from "./Product.module.css";

function Product({ product, color }) {
  const navigate = useNavigate();

  return (
    <li className={styles.product}>
      <Link to={`${product.id}`}>
        <img className={styles.image} src={product.image} />
        <div style={color ? { backgroundColor: color } : {}}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </Link>
    </li>
  );
}

export default Product;
