import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import type { RootState } from "../../store/store";
import { setAuthUserData, setAuthUserProfile } from "../../store/authReducer";
import type { ProfileType } from "../../store/profileReducer";
import Header from "./Header";

type MapStateToProps = {
  login: string
  isAuth: boolean
  profile: ProfileType
};

type MapDispatchProps = {
  setAuthUserData: (id: number, email: string, login: string) => void
  setAuthUserProfile: (profile: ProfileType) => void
};

type HeaderContainerProps = MapStateToProps & MapDispatchProps;

type AuthResponseData = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: number
  messages: Array<string>
};

const mapStateToProps = (state: RootState): MapStateToProps => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  profile: state.auth.profile,
});

class HeaderContainer extends Component<HeaderContainerProps> {
  componentDidMount() {
    axios.get<AuthResponseData>(
      "https://social-network.samuraijs.com/api/1.0/auth/me",
      { withCredentials: true }
    ).then(response => {
      if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
        this.props.setAuthUserData(id, email, login);
        axios.get<ProfileType>("https://social-network.samuraijs.com/api/1.0/profile/" + id)
          .then(response => this.props.setAuthUserProfile(response.data));
      }
    });
  };
  render() {
    return <Header {...this.props} />;
  };
}

export default connect(mapStateToProps, { setAuthUserData, setAuthUserProfile })(HeaderContainer);
