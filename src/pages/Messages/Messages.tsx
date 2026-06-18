import type { FC } from "react";
import type { MessagesPage } from "../../store/messagesReducer";
import Chats from "./Chats/Chats";
import { Outlet } from "react-router-dom";

import styles from "./Messages.module.css";

const Messages: FC<MessagesPage> = ({ chats }) => {
  return (
    <div className={styles["messages-page-content"]}>
      <Chats chats={chats} />
      <Outlet />
    </div>
  );
};

export default Messages;
