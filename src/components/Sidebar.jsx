import styles from "./Sidebar.module.css";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarMain from "./SidebarMain";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <SidebarHeader />
      </div>
      <div className={styles.main}>
        <SidebarMain />
      </div>
      <div className={styles.footer}>
        <SidebarFooter />
      </div>
    </div>
  );
}
