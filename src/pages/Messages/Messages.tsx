import type { FC } from "react";
import type { MessagesPage } from "../../store/store";
import Chats from "./Chats/Chats";
import { Outlet } from "react-router-dom";

const Messages: FC<MessagesPage> = ({ chats }) => {
  return (
    <div>
      <Chats chats={chats} />
      <Outlet/>
    </div>
  );
};

export default Messages;
