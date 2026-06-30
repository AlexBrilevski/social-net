import type { FC } from "react";
import type { UsersListProps } from "./UsersContainer";
import { UserItem } from "./UsetItem";
import styles from "./UsersList.module.css";
import axios from "axios";
import type { User } from "../../store/usersReducer";

type UsersAPIResponseData = {
  items: User[],
  totalCount: number,
  error: string,
};

export const UsersList: FC<UsersListProps> = ({
  users,
  setUsers,
  followUser,
  unfollowUser
}) => {
  const onGetUsersClick = () => {
    if (users.length === 0) {
      axios
        .get<UsersAPIResponseData>("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          setUsers(response.data.items);
        });
    }
  }

  return (
    <div className={styles["users-page"]}>
      <button
        className="btn-primary"
        onClick={onGetUsersClick}
        style={{ marginBottom: "12px" }}
      >
        Get users
      </button>
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
