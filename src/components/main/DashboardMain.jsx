import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import styles from "./DashboardMain.module.css";
import { useAuth } from "../../contexts/AuthContext";

const URL = "http://localhost:8000/user";

function DashboardMain({ users, isLoading, error }) {
  const { user } = useAuth();

  return (
    <div className={styles.content}>
      {isLoading && !error && <Spinner />}
      {!isLoading && <p>Welcome {user?.email ? user.email : "Unknown"}</p>}
    </div>
  );
}

export default DashboardMain;
