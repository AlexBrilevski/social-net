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

export type RootAppState = {
  isAuth: boolean,
  profilePage: ProfilePage,
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
]

export const store: Store = {
  _state: {
    isAuth: false,
    profilePage: {
      profile: null,
      postsData: DUMMY_POSTS,
      newPostText: "",
    }
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
