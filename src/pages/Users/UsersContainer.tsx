import { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import type { RootAction, RootState } from "../../store/store";
import {
  followUserAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleIsFetchingAC,
  unfollowUserAC,
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

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): MapDispatchToProps => {
  return {
    setUsers: (users: User[]) => {
      dispatch(setUsersAC(users));
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    followUser: (id: number) => {
      dispatch(followUserAC(id));
    },
    unfollowUser: (id: number) => {
      dispatch(unfollowUserAC(id));
    },
    toggleIsFetching: (isFetching: boolean) => {
      dispatch(toggleIsFetchingAC(isFetching));
    }
  };
};

class UsersContainer extends Component<UsersContainerProps> {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.toggleIsFetching(true);
      axios
        .get<UsersAPIResponseData>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
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
      .get<UsersAPIResponseData>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setCurrentPage(pageNumber);
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
          setCurrentPage={this.setCurrentPage}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
        />
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
