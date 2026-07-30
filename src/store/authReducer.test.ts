import type { ProfileType } from "../models/profile";
import {
  type AuthInitState,
  authReducer,
  setAuthUserData,
  setAuthUserProfile,
} from "./authReducer";

let initState: AuthInitState;

beforeEach(() => {
  initState = {
    userId: 0,
    email: "",
    login: "",
    isAuth: false,
    profile: {} as ProfileType,
  };
});

test("Authorised user data should be set to state", () => {
  const userData = {
    userId: 2,
    email: "mail@example.com",
    login: "User",
    isAuth: true,
    profile: {},
  };
  const { userId, email, login } = userData;
  const newState = authReducer(
    initState,
    setAuthUserData(userId, email, login),
  );

  expect(newState).not.toBe(initState);
  expect(newState.userId).toBe(userId);
  expect(newState.email).toBe(email);
  expect(newState.login).toBe(login);
  expect(newState.isAuth).toBeTruthy();
  expect(initState.isAuth).toBeFalsy();
});

test("Authorised user profile should be set to state", () => {
  const userProfile: ProfileType = {
    userId: 2,
    lookingForAJob: true,
    lookingForAJobDescription: "",
    fullName: "User",
    contacts: {
      github: "",
    },
    photos: {
      small: "",
      large: "",
    },
  };
  const newState = authReducer(initState, setAuthUserProfile(userProfile));

  expect(newState).not.toBe(initState);
  expect(newState.profile).toEqual(userProfile);
});
