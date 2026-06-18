import type { FC } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsList from "./PostsList/PostsList";
import type { RootAction } from "../../store/store";
import type { ProfilePage } from "../../store/profileReducer";

type ProfilePageProps = ProfilePage & {
  dispatch: (action: RootAction) => void,
};

const Profile: FC<ProfilePageProps> = ({
  profile,
  postsData,
  newPostText,
  dispatch,
}) => {
  return (
    <div>
      <ProfileInfo profile={profile} />
      <PostsList
        postsData={postsData}
        newPostText={newPostText}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Profile;
