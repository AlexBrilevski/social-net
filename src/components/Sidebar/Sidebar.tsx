import type { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
