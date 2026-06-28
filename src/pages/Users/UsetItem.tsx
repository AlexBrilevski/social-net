import type { FC } from "react";
import type { User } from "../../store/usersReducer";

type UserItemProps = {
  user: User,
  follow: (id: number) => void,
  unfollow: (id: number) => void,
};

export const UserItem: FC<UserItemProps> = ({ user, follow, unfollow }) => {
  return (
    <div>
      <div>{user.fullName}</div>
      {user.followed ?
        <button onClick={() => unfollow(user.id)}>
          Unfollow
        </button>
        :
        <button onClick={() => follow(user.id)}>
          Follow
        </button>
      }
    </div>
  );
};
