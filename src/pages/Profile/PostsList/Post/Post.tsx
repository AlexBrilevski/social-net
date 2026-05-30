import type { FC } from "react";
import type { PostType } from "../../../../store/store";

import styles from "./Post.module.css";

type PostProps = PostType;

const Post: FC<PostProps> = ({ postText, likesCount }) => {
  return (
    <div className={styles["post"]}>
      <div>
        {postText}
      </div>
      <div className={styles["post-data"]}>
        Likes: {likesCount}
      </div>
    </div>
  );
};

export default Post;
