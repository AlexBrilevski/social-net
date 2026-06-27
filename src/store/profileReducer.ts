import { generateId } from "../utils/helpers";
import type { RootAction } from "./store";

const DUMMY_POSTS = [
  { id: "p1", postText: "Some text 1", likesCount: 2 },
  { id: "p2", postText: "Some text 2", likesCount: 15 },
  { id: "p3", postText: "Some text 3", likesCount: 1 },
  { id: "p4", postText: "Some text 4", likesCount: 10 },
  { id: "p5", postText: "Some text 5", likesCount: 5 },
];

const PROFILE_ACTION_TYPES = {
  UPDATE_NEW_POST_TEXT: "profile/UPDATE-NEW-POST-TEXT",
  ADD_NEW_POST: "profile/ADD-NEW-POST",
} as const;

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

export type ProfileAction =
  ReturnType<typeof updateNewPostTextAC> |
  ReturnType<typeof addNewPostAC>;

const initState = {
  profile: null,
  postsData: DUMMY_POSTS,
  newPostText: "",
};

const profileReducer = (state: ProfilePage = initState, action: RootAction): ProfilePage => {
  switch (action.type) {
    case PROFILE_ACTION_TYPES.UPDATE_NEW_POST_TEXT: {
      return {...state, newPostText: action.text};
    }
    case PROFILE_ACTION_TYPES.ADD_NEW_POST: {
      const newPost: PostType = {
        id: generateId(),
        postText: action.postText,
        likesCount: 0,
      };

      return {
        ...state, 
        postsData: [newPost, ...state.postsData],
        newPostText: "",
      };
    }
    default: {
      return state;
    }
  }
};

export const updateNewPostTextAC = (text: string) => {
  return { type: PROFILE_ACTION_TYPES.UPDATE_NEW_POST_TEXT, text };
};

export const addNewPostAC = (postText: string) => {
  return { type: PROFILE_ACTION_TYPES.ADD_NEW_POST, postText };
};

export default profileReducer;
