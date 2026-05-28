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

type Messages = {
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

type Store = {
  _state: RootAppState,
  _callSubscriber: () => void,
  getState: () => RootAppState,
  subscribe: (observer: () => void) => void,
  updateNewPostText: (text: string) => void,
  addNewPost: (postText: string) => void,
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
      { id: "m1", userId: "u0", text: "Hello!" },
      { id: "m2", userId: "u1", text: "How's things?" },
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
  updateNewPostText(text) {
    this._state.profilePage.newPostText = text;
    this._callSubscriber();
  },
  addNewPost(postText) {
    const newPost: PostType = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2),
      postText,
      likesCount: 0,
    };

    this._state.profilePage.postsData.unshift(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber();
  },
};
