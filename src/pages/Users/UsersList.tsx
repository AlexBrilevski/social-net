import { Component } from "react";
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

export class UsersList extends Component<UsersListProps> {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get<UsersAPIResponseData>("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          this.props.setUsers(response.data.items);
        });
    }
  }

  render() {
    return (
      <div className={styles["users-page"]}>
        {this.props.users.length > 0 && (
          <ul className={styles["users-list"]}>
            {this.props.users.map(user => (
              <li key={user.id}>
                <UserItem
                  user={user}
                  follow={this.props.followUser}
                  unfollow={this.props.unfollowUser}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
