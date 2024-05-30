import Sidebar from "./Sidebar";
import Home from "./Home";
import styles from "./Layout.module.css";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
