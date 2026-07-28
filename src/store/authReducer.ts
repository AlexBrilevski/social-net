import type { RootAction } from "./store";
import type { ProfileType } from "./profileReducer";

const AUTH_ACTIONS = {
  SET_AUTH_USER_DATA: "auth/SET_AUTH_USER_DATA",
  SET_AUTH_USER_PROFILE: "auth/SET_AUTH_USER_PROFILE",
} as const;

export type AuthInitState = typeof initState;

export type AuthAction =
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof setAuthUserProfile>;

const initState = {
  userId: 0,
  email: "",
  login: "",
  isAuth: false,
  profile: {} as ProfileType,
};

export const authReducer = (
  state: AuthInitState = initState,
  action: RootAction,
): AuthInitState => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.userData,
        isAuth: true,
      };
    case AUTH_ACTIONS.SET_AUTH_USER_PROFILE:
      return {
        ...state,
        profile: action.userProfile,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (
  userId: number,
  email: string,
  login: string,
) => {
  return {
    type: AUTH_ACTIONS.SET_AUTH_USER_DATA,
    userData: { userId, email, login },
  };
};

export const setAuthUserProfile = (profile: ProfileType) => {
  return {
    type: AUTH_ACTIONS.SET_AUTH_USER_PROFILE,
    userProfile: profile,
  };
};
