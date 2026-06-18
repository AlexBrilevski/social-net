import { combineReducers, createStore } from "redux";
import profileReducer, { type ProfileAction } from "./profileReducer";
import messagesReducer, { type MessagesAction } from "./messagesReducer";

export type RootState = ReturnType<typeof rootReducer>;

export type RootAction =
  ProfileAction |
  MessagesAction;

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
});

export const store = createStore(rootReducer);
