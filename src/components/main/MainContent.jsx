import Header from "./Header";
import Content from "./Content";
import styles from "./MainContent.module.css";
import { Outlet } from "react-router-dom";

export default function MainContent() {
  return (
    <div className={styles.main}>
      <Header />
      <Outlet />
    </div>
  );
}
