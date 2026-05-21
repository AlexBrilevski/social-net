import type { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/messages">Messages</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
