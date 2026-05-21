import type { FC } from "react";
import type { ProfileType } from "../../../store/store";

type ProfileProps = {
  profile: ProfileType | null,
};

const ProfileInfo: FC<ProfileProps> = () => {
  return (
    <div>Profile Info</div>
  );
};

export default ProfileInfo;
