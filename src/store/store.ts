import { combineReducers, createStore } from "redux";
import profileReducer, { type ProfileAction } from "./profileReducer";
import messagesReducer, { type MessagesAction } from "./messagesReducer";
import { usersReducer, type UserActions } from "./usersReducer";

export type RootStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;

export type RootAction =
  ProfileAction |
  MessagesAction | 
  UserActions;

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
});

export const store = createStore(rootReducer);
