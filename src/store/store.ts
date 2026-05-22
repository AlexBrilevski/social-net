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
  getState: () => RootAppState,
};

const DUMMY_POSTS = [
  { id: "p1", postText: "Some text 1", likesCount: 0 },
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
  getState() {
    return this._state;
  },
};