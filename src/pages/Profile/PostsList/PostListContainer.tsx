import type { FC } from "react";
import type { RootStore } from "../../../store/store";
import { addNewPostAC, updateNewPostTextAC } from "../../../store/profileReducer";
import PostsList from "./PostsList";

type PostListContainerProps = {
  store: RootStore,
};

const PostListContainer: FC<PostListContainerProps> = ({ store }) => {
  const state = store.getState().profilePage;

  const addPost = (newPostText: string) => {
    store.dispatch(addNewPostAC(newPostText));
  };

  const updateNewPostText = (text: string) => {
    store.dispatch(updateNewPostTextAC(text));
  };

  return (
    <PostsList
      postsData={state.postsData}
      newPostText={state.newPostText}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />
  );
};

export default PostListContainer;
