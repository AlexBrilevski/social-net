import { Component } from "react";
import { connect } from "react-redux";
import { withRouter, type RouteComponentProps } from "react-router-dom";
import type { ProfileType } from "../../models/profile";
import { profileAPI } from "../../api/api";
import type { RootState } from "../../store/store";
import { setUserProfile } from "../../store/profileReducer";
import Profile from "./Profile";

type PathParams = {
  userId: string,
};

type MapStateToProps = {
  profile: ProfileType | null;
};

type MapDispatchToProps = {
  setUserProfile: (profile: ProfileType) => void,
};

type ProfileContainerProps = RouteComponentProps<PathParams> & MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    profile: state.profilePage.profile,
  };
};

class ProfileContainer extends Component<ProfileContainerProps> {
  componentDidMount() {
    const userId = this.props.match.params.userId;

    if (userId) {
      profileAPI.getUserProfile(userId).then(data => this.props.setUserProfile(data));
    }
  }

  render() {
    const userId = this.props.match.params.userId;

    if (!userId) {
      return;
    }

    return (
      <Profile profile={this.props.profile} />
    );
  }
};

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
