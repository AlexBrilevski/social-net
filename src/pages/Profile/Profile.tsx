import type { FC } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsList from "./PostsList/PostsList";
import type { ProfilePage } from "../../store/store";

type ProfilePageProps = ProfilePage & {
  updateNewPostText: (text: string) => void,
};

const Profile: FC<ProfilePageProps> = ({
  profile,
  postsData,
  newPostText,
  updateNewPostText,
}) => {
  return (
    <div>
      <ProfileInfo profile={profile} />
      <PostsList 
      postsData={postsData} 
      newPostText={newPostText} 
      updateNewPostText={updateNewPostText}
      />
    </div>
  );
};

export default Profile;
