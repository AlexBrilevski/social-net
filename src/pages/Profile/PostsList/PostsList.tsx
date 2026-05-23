import type { FC, ChangeEvent, SubmitEvent } from "react";
import type { PostType } from "../../../store/store";
import Post from "./Post/Post";

import styles from "./PostsList.module.css";

type PostsListProps = {
  postsData: Array<PostType>,
  newPostText: string,
  updateNewPostText: (text: string) => void,
  addNewPost: (postText: string) => void,
};

const PostsList: FC<PostsListProps> = ({
  postsData,
  newPostText,
  updateNewPostText,
  addNewPost,
}) => {
  const onNewPostTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    updateNewPostText(value);
  };

  const onAddNewPostSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPostText.trim() !== "") {
      addNewPost(newPostText);
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
              value={newPostText}
              placeholder="Type your post here"
              onChange={onNewPostTextChange}
            >
            </textarea>
          </div>
          <div className="from-actions">
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
