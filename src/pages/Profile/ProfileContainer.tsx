import type { FC } from "react";
import Profile from "./Profile";
import { StoreContext } from "../../store/StoreContext";

const ProfileContainer: FC = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        return <Profile store={store} />;
      }}
    </StoreContext.Consumer>
  );
};

export default ProfileContainer;
