import { connect } from "react-redux";
import type { RootAction, RootState } from "../../store/store";
import { followUserAC, setUsersAC, unfollowUserAC, type User } from "../../store/usersReducer";
import { UsersList } from "./UsersList";


type MapStateToProps = {
  users: User[],
};

type MapDispatchToProps = {
  setUsers: (users: User[]) => void,
  followUser: (id: number) => void,
  unfollowUser: (id: number) => void,
};

const mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch: (action: RootAction) => void): MapDispatchToProps => {
  return {
    setUsers: (users: User[]) => {
      dispatch(setUsersAC(users))
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
