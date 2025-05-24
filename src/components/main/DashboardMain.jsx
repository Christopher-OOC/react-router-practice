import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import styles from "./DashboardMain.module.css";

const URL = "http://localhost:8000/user";

function DashboardMain({ user, isLoading, error }) {
  // const [user, setUser] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  // useEffect(function () {
  //   async function fetchUser() {
  //     setIsLoading(true);
  //     setError("");
  //     try {
  //       const res = await fetch(URL);
  //       const data = await res.json();
  //       console.log(data);
  //       setUser(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchUser();
  // }, []);

  return (
    <div className={styles.content}>
      {isLoading && <Spinner />}
      {!isLoading && !error && (
        <p>Welcome {user?.name ? user.name : "Unknown"}</p>
      )}
    </div>
  );
}

export default DashboardMain;
