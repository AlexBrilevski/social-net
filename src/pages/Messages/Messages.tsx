import type { FC } from "react";
import type { MessagesProps } from "./MessagesContainer";
import Chats from "./Chats/Chats";
import { Outlet } from "react-router-dom";

import styles from "./Messages.module.css";

const Messages: FC<MessagesProps> = ({ chats }) => {
  return (
    <div className={styles["messages-page-content"]}>
      <Chats chats={chats} />
      <Outlet />
    </div>
  );
};

export default Messages;
