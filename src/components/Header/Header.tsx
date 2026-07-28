import type { FC } from "react";
import { Link } from "react-router-dom";
import type { ProfileType } from "../../store/profileReducer";
import logo from "../../assets/images/logo.png";
import defaultAvatar from "../../assets/images/man_avatar.png";
import styles from "./Header.module.css";

type HeaderProps = {
  login: string,
  isAuth: boolean,
  profile: ProfileType
};

const Header: FC<HeaderProps> = ({ isAuth, profile, login }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="DevNet" width="120" height="20" />
        </Link>
      </div>
      <div className={styles["login-block"]}>
        {isAuth ?
          !profile.userId ?
            <span>Loading...</span>
            :
            <div className={styles["container"]}>
              <Link to={"/profile/" + profile.userId}>
                <img
                  src={profile.photos.small ? profile.photos.small : defaultAvatar}
                  alt={profile.fullName}
                />
              </Link>
              <div className={styles.userInfo}>
                <p>{profile.fullName}</p>
                <p>{login}</p>
              </div>
            </div>
          :
          <Link to="/login">Sign In</Link>
        }
      </div>
    </header>
  );
};

export default Header;
