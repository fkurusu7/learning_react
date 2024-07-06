import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
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
