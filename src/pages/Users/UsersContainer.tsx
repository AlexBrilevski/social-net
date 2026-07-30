import { Component } from "react";
import { connect } from "react-redux";
import type { User } from "../../models/user";
import { followAPI, usersAPI } from "../../api/api";
import type { RootState } from "../../store/store";
import {
  followUser,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollowUser,
  type UsersPageState
} from "../../store/usersReducer";
import Preloader from "../../components/UI/Preloader/Preloader";
import { UsersList } from "./UsersList";

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
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
    }
  }

  setCurrentPage = (pageNumber: number) => {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setCurrentPage(pageNumber);
    });
  }

  followUser(userId: number) {
    followAPI.follow(userId).then(data => {
      if (data.resultCode === 0) this.props.followUser(userId);
    });
  }

  unfollowUser(userId: number) {
    followAPI.unfollow(userId).then(data => {
      if (data.resultCode === 0) this.props.unfollowUser(userId);
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
