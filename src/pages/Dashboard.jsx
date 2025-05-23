import styles from "./Dashboard.module.css";
import Sidebar from "../components/sidebar/Sidebar";
import MainContent from "../components/main/MainContent";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <MainContent />
    </div>
  );
}
