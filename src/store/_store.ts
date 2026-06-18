import type { MessagesAction, MessagesPage } from "./messagesReducer";
import messagesReducer from "./messagesReducer";
import type { ProfileAction, ProfilePage } from "./profileReducer";
import profileReducer from "./profileReducer";

type RootAppState = {
  isAuth: boolean,
  profilePage: ProfilePage,
  messagesPage: MessagesPage,
};

type ActionType =
  ProfileAction |
  MessagesAction;

type Store = {
  _state: RootAppState,
  _callSubscriber: () => void,
  getState: () => RootAppState,
  subscribe: (observer: () => void) => void,
  dispatch: (action: ActionType) => void,
};

const DUMMY_POSTS = [
  { id: "p1", postText: "Some text 1", likesCount: 2 },
  { id: "p2", postText: "Some text 2", likesCount: 15 },
  { id: "p3", postText: "Some text 3", likesCount: 1 },
  { id: "p4", postText: "Some text 4", likesCount: 10 },
  { id: "p5", postText: "Some text 5", likesCount: 5 },
];

const DUMMY_CHATS = [
  { id: "c1", userId: "u1", name: "Karina" },
  { id: "c2", userId: "u2", name: "Sergei" },
  { id: "c3", userId: "u3", name: "Nastya" },
];

const DUMMY_MESSAGES = {
  "c1": {
    messages: [
      { id: "m1", userId: "u1", text: "Hi!" },
      { id: "m2", userId: "u0", text: "Hello!" },
      { id: "m3", userId: "u1", text: "How's things?" },
    ],
    newMessageText: "",
  },
  "c2": {
    messages: [
      { id: "m1", userId: "u0", text: "Yo!" },

    ],
    newMessageText: "",
  },
  "c3": {
    messages: [
      { id: "m1", userId: "u3", text: "What's up?" },
    ],
    newMessageText: "",
  },
};

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export const store: Store = {
  _state: {
    isAuth: false,
    profilePage: {
      profile: null,
      postsData: DUMMY_POSTS,
      newPostText: "",
    },
    messagesPage: {
      chats: DUMMY_CHATS,
      messages: DUMMY_MESSAGES,
    },
  },
  _callSubscriber() {
    console.log('State updated');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._callSubscriber();
  },
};
