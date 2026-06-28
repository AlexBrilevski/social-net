import type { FC } from "react";
import type { User } from "../../store/usersReducer";
import { UserItem } from "./UsetItem";
import styles from "./UsersList.module.css";

type UsersProps = {
  users: User[],
  setUsers: (users: User[]) => void,
  followUser: (id: number) => void,
  unfollowUser: (id: number) => void,
};

export const UsersList: FC<UsersProps> = ({ users, followUser, unfollowUser }) => {
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
