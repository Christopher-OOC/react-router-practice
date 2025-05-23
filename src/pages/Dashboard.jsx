import styles from "./Dashboard.module.css";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <MainContent />
    </div>
  );
}
