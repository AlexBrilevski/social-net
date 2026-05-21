import type { FC } from "react";
import type { PostType } from "../../../store/store";

type PostsListProps = {
  postsData: Array<PostType>,
  newPostText: string,
};

const PostsList: FC<PostsListProps> = () => {
  return (
    <div>Posts list</div>
  );
};

export default PostsList;
