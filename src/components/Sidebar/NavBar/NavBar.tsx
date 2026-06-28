import type { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar: FC = () => {
  return (
    <nav className={styles["main-nav"]}>
      <ul>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => isActive ? styles.active : undefined}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            className={({ isActive }) => isActive ? styles.active : undefined}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => isActive ? styles.active : undefined}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
