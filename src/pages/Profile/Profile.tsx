import type { FC } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsList from "./PostsList/PostsList";
import type { ProfilePage, ActionType } from "../../store/store";

type ProfilePageProps = ProfilePage & {
  dispatch: (action: ActionType) => void,
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
