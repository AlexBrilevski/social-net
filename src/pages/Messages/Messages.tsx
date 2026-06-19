import type { FC } from "react";
import type { ChatType } from "../../store/messagesReducer";
import Chats from "./Chats/Chats";
import { Outlet } from "react-router-dom";

import styles from "./Messages.module.css";

type MessagesProps = {
  chats: Array<ChatType>,
};

const Messages: FC<MessagesProps> = ({ chats }) => {
  return (
    <div className={styles["messages-page-content"]}>
      <Chats chats={chats} />
      <Outlet />
    </div>
  );
};

export default Messages;
