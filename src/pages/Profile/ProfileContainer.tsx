import { connect } from "react-redux";
import type { RootState } from "../../store/store";
import type { ProfileType } from "../../store/profileReducer";
import Profile from "./Profile";

type MapStateToProps = {
  profile: ProfileType | null;
};

type MapDispatchToProps = {};

export type ProfileProps = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    profile: state.profilePage.profile,
  };
};

const mapDispatchToProps = (): MapDispatchToProps => {
  return {};
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
