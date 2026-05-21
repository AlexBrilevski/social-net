import type { FC } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsList from "./PostsList/PostsList";
import type { ProfilePage } from "../../store/store";

const Profile: FC<ProfilePage> = ({ profile, postsData, newPostText }) => {
  return (
    <div>
      <ProfileInfo profile={profile} />
      <PostsList postsData={postsData} newPostText={newPostText} />
    </div>
  );
};

export default Profile;
