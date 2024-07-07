import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to={"/worldwise"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/worldwise/product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"/worldwise/pricing"}>Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
