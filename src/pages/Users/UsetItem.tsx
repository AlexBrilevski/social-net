import type { FC } from "react";
import { NavLink } from "react-router-dom";
import type { User } from "../../models/user";
import styles from "./UsersList.module.css";
import defaultUserAvatar from "../../assets/images/man_avatar.png";

type UserItemProps = {
  user: User,
  follow: (id: number) => void,
  unfollow: (id: number) => void,
};

export const UserItem: FC<UserItemProps> = ({ user, follow, unfollow }) => {
  return (
    <div className={styles["user"]}>
      <div className={styles["user-avatar"]}>
        <img src={user.photos.large ?? defaultUserAvatar} alt="" width="150" height="150" />
      </div>
      <div className={styles["user-info"]}>
        <p className={styles["user-name"]}>
          <NavLink to={`profile/${user.id}`}>
            {user.name}
          </NavLink>
        </p>
        <p className={styles["user-status"]}>{user.status}</p>
        {
          user.followed ?
            <button className="btn-primary" onClick={() => unfollow(user.id)}>
              Unfollow
            </button>
            :
            <button className="btn-primary" onClick={() => follow(user.id)}>
              Follow
            </button>
        }
      </div>
    </div>
  );
};
