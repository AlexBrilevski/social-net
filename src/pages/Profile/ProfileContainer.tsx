import type { FC } from "react";
import type { RootStore } from "../../store/store";
import Profile from "./Profile";

type ProfileContainerProps = {
  store: RootStore,
};

const ProfileContainer: FC<ProfileContainerProps> = (props) => {
  return (
    <Profile store={props.store} />
  );
};

export default ProfileContainer;
