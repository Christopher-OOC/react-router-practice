import styles from "./SidebarMain.module.css";

function SidebarMain() {
  return (
    <ul className={styles.nav}>
      <li>Dashboard</li>
      <li>Products</li>
      <li>Cart</li>
      <li>Orders</li>
      <li>Transaction History</li>
      <li>Admin</li>
    </ul>
  );
}

export default SidebarMain;
