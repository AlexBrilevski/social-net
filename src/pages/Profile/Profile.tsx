import type { FC } from "react";
import type { ProfileType } from "../../store/profileReducer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostListContainer from "./PostsList/PostListContainer";
import Preloader from "../../components/UI/Preloader/Preloader";

type ProfileProps = {
  profile: ProfileType | null,
};

const Profile: FC<ProfileProps> = ({ profile }) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <ProfileInfo profile={profile} />
      <PostListContainer />
    </div>
  );
};

export default Profile;
