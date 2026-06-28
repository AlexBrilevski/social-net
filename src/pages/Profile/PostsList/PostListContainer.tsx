import { connect } from "react-redux";
import type { Dispatch } from "redux";
import type { RootAction, RootState } from "../../../store/store";
import { addNewPostAC, updateNewPostTextAC, type PostType } from "../../../store/profileReducer";
import PostsList from "./PostsList";

type MapStateToProps = {
  postsData: Array<PostType>,
  newPostText: string,
};

type MapDispatchToProps = {
  addPost: (newPostText: string) => void,
  updateNewPostText: (text: string) => void,
};

export type PostsListProps = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): MapDispatchToProps => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addNewPostAC(newPostText));
    },
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostTextAC(text));
    },
  };
};

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostsList);

export default PostListContainer;
