import { Link } from "react-router-dom";
import styles from "./SidebarMain.module.css";

function SidebarMain() {
  return (
    <ul className={styles.nav}>
      <Link to="dashboard">
        <li>Dashboard</li>
      </Link>
      <Link to="products">
        <li>Products</li>
      </Link>
      <Link to="cart">
        <li>Cart</li>
      </Link>
      <Link to="orders">
        <li>Orders</li>
      </Link>
      <Link to="transactions">
        <li>Transaction History</li>
      </Link>
      <Link to="admin">
        <li>Admin</li>
      </Link>
    </ul>
  );
}

export default SidebarMain;
