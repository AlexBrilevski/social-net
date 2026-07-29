import { Component } from "react";
import { connect } from "react-redux";
import type { RootState } from "../../store/store";
import {
  followUser,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollowUser,
  type User,
  type UsersPageState
} from "../../store/usersReducer";
import Preloader from "../../components/UI/Preloader/Preloader";
import { UsersList } from "./UsersList";
import axios from "axios";

type UsersAPIResponseData = {
  items: User[],
  totalCount: number,
  error: string,
};

type FollowAPIResponseData = {
  resultCode: number,
  messages: Array<string>,
  data: {},
};

type MapStateToProps = UsersPageState;

type MapDispatchToProps = {
  setUsers: (users: User[]) => void,
  setTotalUsersCount: (totalCount: number) => void,
  setCurrentPage: (pageNumber: number) => void,
  followUser: (id: number) => void,
  unfollowUser: (id: number) => void,
  toggleIsFetching: (isFetching: boolean) => void,
};

type UsersContainerProps = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

class UsersContainer extends Component<UsersContainerProps> {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.toggleIsFetching(true);
      axios
        .get<UsersAPIResponseData>(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
          { withCredentials: true },
        )
        .then(response => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  }

  setCurrentPage = (pageNumber: number) => {
    this.props.toggleIsFetching(true);
    axios
      .get<UsersAPIResponseData>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        { withCredentials: true },
      )
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setCurrentPage(pageNumber);
      });
  }

  followUser(userId: number) {
    axios
      .post<FollowAPIResponseData>(
        `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {},
        { withCredentials: true, headers: { "API-KEY": "07a6853a-00ae-46be-89bd-7635822fedbc" } }
      )
      .then(response => {
        if (response.data.resultCode === 0) this.props.followUser(userId);
      });
  }

  unfollowUser(userId: number) {
    axios
      .delete<FollowAPIResponseData>(
        `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        { withCredentials: true, headers: { "API-KEY": "07a6853a-00ae-46be-89bd-7635822fedbc" } }
      )
      .then(response => {
        if (response.data.resultCode === 0) this.props.unfollowUser(userId);
      });
  }

  render() {
    return (
      this.props.isFetching ?
        <Preloader />
        :
        <UsersList
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          setCurrentPage={this.setCurrentPage.bind(this)}
          followUser={this.followUser.bind(this)}
          unfollowUser={this.unfollowUser.bind(this)}
        />
    );
  }
};

export default connect(mapStateToProps, {
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  followUser,
  unfollowUser,
  toggleIsFetching,
})(UsersContainer);
