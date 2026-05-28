import type { FC } from "react";
import type { ChatType } from "../../../store/store";
import { NavLink } from "react-router-dom";

type ChatsProps = {
  chats: Array<ChatType>
};

const Chats: FC<ChatsProps> = ({ chats }) => {
  return (
    <div>
      <ul>
        {chats.map(chat => (
          <li key={chat.id}>
            <NavLink
              to={`${chat.id}`}
              className={({ isActive }) => isActive ? "active" : undefined}>
              {chat.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chats;
