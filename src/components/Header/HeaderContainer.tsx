import { Component } from "react";
import { connect } from "react-redux";
import { authAPI, profileAPI } from "../../api/api";
import type { RootState } from "../../store/store";
import { setAuthUserData, setAuthUserProfile } from "../../store/authReducer";
import type { ProfileType } from "../../models/profile";
import Header from "./Header";

type MapStateToProps = {
  login: string,
  isAuth: boolean,
  profile: ProfileType,
};

type MapDispatchProps = {
  setAuthUserData: (id: number, email: string, login: string) => void
  setAuthUserProfile: (profile: ProfileType) => void
};

type HeaderContainerProps = MapStateToProps & MapDispatchProps;

const mapStateToProps = (state: RootState): MapStateToProps => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  profile: state.auth.profile,
});

class HeaderContainer extends Component<HeaderContainerProps> {
  componentDidMount() {
    authAPI.me().then(data => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
        return profileAPI.getUserProfile(id.toString());
      }
    }).then(data => data && this.props.setAuthUserProfile(data));
  };
  render() {
    return <Header {...this.props} />;
  };
}

export default connect(mapStateToProps, { setAuthUserData, setAuthUserProfile })(HeaderContainer);
