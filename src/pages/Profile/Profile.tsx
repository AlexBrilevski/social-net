import type { FC } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import type { ProfileType } from "../../store/profileReducer";
import PostListContainer from "./PostsList/PostListContainer";

type ProfilePageProps = {
  profile: ProfileType | null,
};

const Profile: FC<ProfilePageProps> = ({ profile }) => {
  return (
    <div>
      <ProfileInfo profile={profile} />
      <PostListContainer />
    </div>
  );
};

export default Profile;
