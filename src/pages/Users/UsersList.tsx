import { type FC } from "react";
import type { User } from "../../store/usersReducer";
import { UserItem } from "./UsetItem";
import { Pagination } from "../../components/UI/Pagination/Pagination";
import styles from "./UsersList.module.css";

type UsersListProps = {
  users: Array<User>,
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
  setCurrentPage: (pageNumber: number) => void,
  followUser: (user_ID: number) => void,
  unfollowUser: (user_ID: number) => void,
};

export const UsersList: FC<UsersListProps> = (props) => {
  return (
    <div className={styles["users-page"]}>
      {props.users.length > 0 && (
        <ul className={styles["users-list"]}>
          {props.users.map(user => (
            <li key={user.id}>
              <UserItem
                user={user}
                follow={props.followUser}
                unfollow={props.unfollowUser}
              />
            </li>
          ))}
        </ul>
      )}
      <Pagination
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
      />
    </div>
  );
};
