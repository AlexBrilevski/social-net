import type { FC, ChangeEvent, SubmitEvent } from "react";
import type { PostType, ActionType } from "../../../store/store";
import Post from "./Post/Post";

import styles from "./PostsList.module.css";

type PostsListProps = {
  postsData: Array<PostType>,
  newPostText: string,
  dispatch: (action: ActionType) => void,
};

const PostsList: FC<PostsListProps> = ({
  postsData,
  newPostText,
  dispatch,
}) => {
  const onNewPostTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    dispatch({type: "profile/UPDATE-NEW-POST-TEXT", text: value});
  };

  const onAddNewPostSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPostText.trim() !== "") {
      dispatch({type: "profile/ADD-NEW-POST", postText: newPostText});
    }
  };

  return (
    <div className={styles["user-posts"]}>
      <h2>My Posts</h2>
      <div className={styles["new-post-section"]}>
        <form className={styles["new-post-form"]} onSubmit={onAddNewPostSubmit}>
          <div className="form-group">
            <label htmlFor="new-post-text">New post</label>
            <textarea
              id="new-post-text"
              className="form-control"
              name="new-post-text"
              value={newPostText}
              placeholder="Type your post here"
              onChange={onNewPostTextChange}
            >
            </textarea>
          </div>
          <div className="form-actions">
            <button>Add new post</button>
          </div>
        </form>
      </div>
      <div>
        <ul className={styles["posts-list"]}>
          {postsData.map(post =>
            <li key={post.id}>
              <Post {...post} />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PostsList;
