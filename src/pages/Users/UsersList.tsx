import { type FC } from "react";
import type { User } from "../../store/usersReducer";
import { UserItem } from "./UsetItem";
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
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [] as number[];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

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
      {pagesCount > 1 && (
        <ul className={styles["pagination"]}>
          {pages.map((page, i) => (
            <li key={"page-" + i}>
              <button
                className={page === props.currentPage ? styles["selected-page"] : undefined}
                onClick={() => props.setCurrentPage(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
