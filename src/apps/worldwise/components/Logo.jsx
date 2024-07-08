import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/worldwise">
      <img src="/logo_ww.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
