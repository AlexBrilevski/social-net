import { connect } from "react-redux";
import { withRouter, type RouteComponentProps } from "react-router-dom";
import axios from "axios";
import type { RootState } from "../../store/store";
import { setUserProfile, type ProfileType } from "../../store/profileReducer";
import Profile from "./Profile";
import { Component } from "react";

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
      axios
        .get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
          this.props.setUserProfile(response.data);
        });
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
