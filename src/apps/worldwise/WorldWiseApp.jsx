import { Outlet } from "react-router-dom";
import styles from "./WorldWiseApp.module.css";

function WorldWiseApp() {
  return (
    <div className={styles.world_wise_layout}>
      <Outlet />
    </div>
  );
}

export default WorldWiseApp;
