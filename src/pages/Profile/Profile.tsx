import type { FC } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import type { RootStore } from "../../store/store";
import PostListContainer from "./PostsList/PostListContainer";

type ProfilePageProps = {
  store: RootStore,
};

const Profile: FC<ProfilePageProps> = ({ store }) => {
  const profile = store.getState().profilePage.profile;

  return (
    <div>
      <ProfileInfo profile={profile} />
      <PostListContainer store={store} />
    </div>
  );
};

export default Profile;
