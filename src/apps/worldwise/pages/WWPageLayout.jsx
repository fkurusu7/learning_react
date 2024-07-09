import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./WWPageLayout.module.css";

function WWPageLayout() {
  return (
    <div className={styles.appww}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default WWPageLayout;
