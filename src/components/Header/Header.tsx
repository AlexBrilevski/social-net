import type { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="DevNet" width="120" height="20" />
        </Link>
      </div>
      <div>
        <Link to="/login">Sign In</Link>
      </div>
    </header>
  );
};

export default Header;
