import type { FC } from "react";
import type { User } from "../../store/usersReducer";
import styles from "./UsersList.module.css";

type UserItemProps = {
  user: User,
  follow: (id: number) => void,
  unfollow: (id: number) => void,
};

export const UserItem: FC<UserItemProps> = ({ user, follow, unfollow }) => {
  return (
    <div className={styles["user"]}>
      <div className={styles["user-avatar"]}>
        <img src={user.avatarUrl} alt="" width="150" height="150" />
      </div>
      <div className={styles["user-info"]}>
        <p className={styles["user-name"]}>{user.fullName}</p>
        <p className={styles["user-status"]}>{user.status}</p>
        {user.location.country && user.location.city && (
          <p className={styles["user-location"]}>
            {user.location.country}, {user.location.city}
          </p>
        )}
        {
          user.followed ?
            <button onClick={() => unfollow(user.id)}>Unfollow</button>
            :
            <button onClick={() => follow(user.id)}>Follow</button>
        }
      </div>
    </div>
  );
};
