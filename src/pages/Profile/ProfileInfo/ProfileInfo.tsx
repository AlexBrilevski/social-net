import type { FC } from "react";
import type { ProfileType } from "../../../store/store";
import defaultAvatar from "../../../assets/images/man_avatar.png";

import styles from "./ProfileInfo.module.css";

type ProfileProps = {
  profile: ProfileType | null,
};

const ProfileInfo: FC<ProfileProps> = ({ profile }) => {
  const avatarSrc = profile?.avatar ?? defaultAvatar;

  return (
    <div className={styles["profile-info"]}>
      <div>
        <img src={avatarSrc} alt="User name" width="150" height="150" />
      </div>
      <div>
        <h1>User name</h1>
      </div>
    </div>
  );
};

export default ProfileInfo;
