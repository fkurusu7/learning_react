import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
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
        <li>
          <NavLink to={"/worldwise/login"} className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
