import type { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar: FC = () => {
  return (
    <nav className={styles["main-nav"]}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={styles["active"]}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages" activeClassName={styles["active"]}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName={styles["active"]}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
