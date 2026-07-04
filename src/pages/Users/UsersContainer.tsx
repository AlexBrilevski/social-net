import { connect } from "react-redux";
import type { Dispatch } from "redux";
import type { RootAction, RootState } from "../../store/store";
import {
  followUserAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowUserAC,
  type User
} from "../../store/usersReducer";
import { UsersList } from "./UsersList";


type MapStateToProps = {
  users: User[],
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
};

type MapDispatchToProps = {
  setUsers: (users: User[]) => void,
  setTotalUsersCount: (totalCount: number) => void,
  setCurrentPage: (pageNumber: number) => void,
  followUser: (id: number) => void,
  unfollowUser: (id: number) => void,
};

export type UsersListProps = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
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
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersContainer;
