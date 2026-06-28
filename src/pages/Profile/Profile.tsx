import type { FC } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import type { ProfileProps } from "./ProfileContainer";
import PostListContainer from "./PostsList/PostListContainer";

const Profile: FC<ProfileProps> = ({ profile }) => {
  return (
    <div>
      <ProfileInfo profile={profile} />
      <PostListContainer />
    </div>
  );
};

export default Profile;
