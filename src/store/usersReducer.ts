import type { RootAction } from "./store";

const USERS_ACTIONS = {
  SET_USERS: "users/SET-USERS",
  FOLLOW_USER: "users/FOLLOW-USER",
  UNFOLLOW_USER: "users/UNFOLLOW_USER",
} as const;

export type User = {
  id: number;
  avatarUrl: string;
  fullName: string;
  status: string;
  location: {
    country: string;
    city: string;
  };
  followed: boolean;
};

export type UsersPageState = typeof initState;

export type UserActions =
  ReturnType<typeof setUsersAC> | 
  ReturnType<typeof followUserAC> | 
  ReturnType<typeof unfollowUserAC>;

const initState = {
  users: [
      {
        id: 1,
        avatarUrl: "",
        fullName: "Dmitri K.",
        status: "I am looking for a job right now...",
        location: {country: "Belarus", city: "Minsk"},
        followed: false,
      },
      {
        id: 2,
        avatarUrl: "",
        fullName: "Svetlana D.",
        status: "I am so pretty",
        location: {country: "Belarus", city: "Minsk"},
        followed: false,
      },
      {
        id: 3,
        avatarUrl: "",
        fullName: "Sergei S.",
        status: "I like football!!!",
        location: {country: "Ukraine", city: "Kiev"},
        followed: true,
      },
      {
        id: 4,
        avatarUrl: "",
        fullName: "Andrew T.",
        status: "I am free to help you to create good Video Production",
        location: {country: "United States", city: "Philadelphia"},
        followed: true,
      },
    ] as User[],
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
