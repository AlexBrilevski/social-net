import { connect } from "react-redux";
import axios from "axios";
import type { RootState } from "../../store/store";
import { setUserProfile, type ProfileType } from "../../store/profileReducer";
import Profile from "./Profile";
import { Component } from "react";

type MapStateToProps = {
  profile: ProfileType | null;
};

type MapDispatchToProps = {
  setUserProfile: (profile: ProfileType) => void,
};

export type ProfileContainerProps = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    profile: state.profilePage.profile,
  };
};

class ProfileContainer extends Component<ProfileContainerProps> {
  componentDidMount() {
    axios
      .get<ProfileType>("https://social-network.samuraijs.com/api/1.0/profile/2")
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <Profile profile={this.props.profile} />
    );
  }
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
