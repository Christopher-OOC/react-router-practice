import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Welcome to our home page</h1>
        <ul>
          <Link to="app">
            <li>dashboard</li>
          </Link>
          <Link to="login">
            <li>login</li>
          </Link>
          <Link to="signup">
            <li>sign up</li>
          </Link>
          <Link to="logout">
            <li>logout</li>
          </Link>
        </ul>
      </div>
      <div className={styles.content}>
        Eiusmod nisi elit laboris aliquip est enim laboris elit sint. Commodo
        labore ipsum nostrud velit adipisicing elit non commodo tempor excepteur
        eu excepteur enim. Minim in ea occaecat c ulpa ullamco magna laborum
        enim irure irure. Duis duis laboris officia fugiat culpa aliqua adi
        pisicing. Laborum consectetur irure reprehenderit ipsum amet minim
        occaecat. Dolor magna dolore pariatur tempor reprehenderit ullamco
        fugiat officia dolor. Ullamco amet tempor officia voluptate culpa
        tempor. Ad ipsum ipsum occaecat labore Lorem eu Lorem officia amet
        adipisicing. Non voluptate sit sit dolore ea. Reprehenderit magna ipsum
        Lorem consequat ex sunt id consequat nisi mollit irure anim enim.
      </div>
    </div>
  );
}

export default HomePage;
