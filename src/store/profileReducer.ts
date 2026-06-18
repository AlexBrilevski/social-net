import { type ProfilePage, type PostType, generateId } from "./_store";
import type { RootAction } from "./store";

const PROFILE_ACTION_TYPES = {
  UPDATE_NEW_POST_TEXT: "profile/UPDATE-NEW-POST-TEXT",
  ADD_NEW_POST: "profile/ADD-NEW-POST",
} as const;

export type ProfileAction =
  ReturnType<typeof updateNewPostTextAC> |
  ReturnType<typeof addNewPostAC>;

const profileReducer = (state: ProfilePage, action: RootAction): ProfilePage => {
  switch (action.type) {
    case PROFILE_ACTION_TYPES.UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.text;

      return state;
    }
    case PROFILE_ACTION_TYPES.ADD_NEW_POST: {
      const newPost: PostType = {
        id: generateId(),
        postText: action.postText,
        likesCount: 0,
      };

      state.postsData.unshift(newPost);
      state.newPostText = "";

      return state;
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
