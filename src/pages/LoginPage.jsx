import { useState } from "react";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <form className={styles.formLogin}>
        <p>Please provide ur email and password to login!</p>
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={(e) => handleLogin(e)}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
