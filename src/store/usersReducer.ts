import type { RootAction } from "./store";

const USERS_ACTIONS = {
  SET_USERS: "users/SET-USERS",
  FOLLOW_USER: "users/FOLLOW-USER",
  UNFOLLOW_USER: "users/UNFOLLOW_USER",
} as const;

export type User = {
  id: number;
  name: string;
  status: string;
  photos: {
    large: string;
    small: string;
  };
  followed: boolean;
};

export type UsersPageState = typeof initState;

export type UserActions =
  ReturnType<typeof setUsersAC> | 
  ReturnType<typeof followUserAC> | 
  ReturnType<typeof unfollowUserAC>;

const initState = {
  users: [] as User[],
};

export const usersReducer = (
  state = initState,
  action: RootAction,
): UsersPageState => {
  switch (action.type) {
    case USERS_ACTIONS.SET_USERS: {
      return { users: [...state.users, ...action.users] };
    }
    case USERS_ACTIONS.FOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, followed: true } : user,
        ),
      };
    }
    case USERS_ACTIONS.UNFOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, followed: false } : user,
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export const setUsersAC = (users: User[]) => {
  return { type: USERS_ACTIONS.SET_USERS, users };
};
export const followUserAC = (id: number) => {
  return { type: USERS_ACTIONS.FOLLOW_USER, id };
};
export const unfollowUserAC = (id: number) => {
  return { type: USERS_ACTIONS.UNFOLLOW_USER, id };
};
