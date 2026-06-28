import type { FC } from "react";
import type { UsersListProps } from "./UsersContainer";
import { UserItem } from "./UsetItem";
import styles from "./UsersList.module.css";

export const UsersList: FC<UsersListProps> = ({ users, followUser, unfollowUser }) => {
  return (
    <div className={styles["users-page"]}>
      {users.length > 0 && (
        <ul className={styles["users-list"]}>
          {users.map(user => (
            <li key={user.id}>
              <UserItem
                user={user}
                follow={followUser}
                unfollow={unfollowUser}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
