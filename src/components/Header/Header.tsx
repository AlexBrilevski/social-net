import type { FC } from "react";
import logo from '../../assets/images/logo.png';

import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="DevNet" width="120" height="20"/>
      </div>
    </header>
  );
};

export default Header;
