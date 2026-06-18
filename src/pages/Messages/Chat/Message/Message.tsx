import type { FC } from "react";
import type { MessageType } from "../../../../store/messagesReducer";

import styles from "./Message.module.css";

type MessageProps = { authUserId: string } & MessageType;

const Message: FC<MessageProps> = ({ authUserId, userId, text }) => {
  const messageClasses =
    `${styles["message"]} ${authUserId === userId ? styles["outgoing"] : styles["incoming"]}`;

  return (
    <div className={messageClasses}>
      <span className={styles["text"]}>{text}</span>
    </div>
  );
};

export default Message;
