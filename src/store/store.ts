import type { ProfileAction } from "./profileReducer";
import profileReducer from "./profileReducer";

export type ProfileType = {
  userId: string,
  fullName: string,
  avatar: string,
};

export type PostType = {
  id: string,
  postText: string,
  likesCount: number,
};

export type ProfilePage = {
  profile: ProfileType | null,
  postsData: Array<PostType>,
  newPostText: string,
};

export type ChatType = {
  id: string,
  userId: string,
  name: string,
};

export type MessageType = {
  id: string,
  userId: string,
  text: string,
};

export type Messages = {
  [chatId: string]: {
    messages: Array<MessageType>,
    newMessageText: string,
  },
};

export type MessagesPage = {
  chats: Array<ChatType>,
  messages: Messages,
};

export type RootAppState = {
  isAuth: boolean,
  profilePage: ProfilePage,
  messagesPage: MessagesPage,
};

type UpdateNewMessageTextAction = ReturnType<typeof updateNewMessageTextAC>;

type SendNewMessageToChatAction = ReturnType<typeof sendNewMessageToChatAC>;

const ACTION_TYPES = {
  UPDATE_NEW_POST_TEXT: "profile/UPDATE-NEW-POST-TEXT",
  ADD_NEW_POST: "profile/ADD-NEW-POST",
  UPDATE_NEW_MESSAGE_TEXT: "messages/UPDATE-NEW-MESSAGE-TEXT",
  SEND_NEW_MESSAGE_TO_CHAT: "messages/SEND-NEW-MESSAGE-TO-CHAT",
} as const;

export type ActionType =
  ProfileAction |
  UpdateNewMessageTextAction |
  SendNewMessageToChatAction;

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
    switch (action.type) {
      case ACTION_TYPES.UPDATE_NEW_MESSAGE_TEXT:
        this._state.messagesPage.messages[action.chatId].newMessageText = action.text;
        this._callSubscriber();
        break;
      case ACTION_TYPES.SEND_NEW_MESSAGE_TO_CHAT:
        const newMessage: MessageType = {
          id: generateId(),
          userId: action.userId,
          text: action.text,
        };

        this._state.messagesPage.messages[action.chatId].messages.push(newMessage);
        this._state.messagesPage.messages[action.chatId].newMessageText = "";
        this._callSubscriber();
        break;
    }

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._callSubscriber();
  },
};

export const updateNewMessageTextAC = (chatId: string, text: string) => {
  return { type: ACTION_TYPES.UPDATE_NEW_MESSAGE_TEXT, chatId, text };
};

export const sendNewMessageToChatAC = (chatId: string, userId: string, text: string) => {
  return { type: ACTION_TYPES.SEND_NEW_MESSAGE_TO_CHAT, chatId, userId, text };
};
