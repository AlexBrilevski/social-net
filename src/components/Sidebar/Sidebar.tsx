import type { FC } from "react";

import styles from "./Sidebar.module.css";
import NavBar from "./NavBar/NavBar";

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <NavBar />
    </div>
  );
};

export default Sidebar;
