import type { FC } from "react";
import type { ChatType } from "../../../store/messagesReducer";
import { NavLink } from "react-router-dom";

import styles from "./Chats.module.css";

type ChatsProps = {
  chats: Array<ChatType>,
};

const Chats: FC<ChatsProps> = ({ chats }) => {
  return (
    <div className={styles["chats"]}>
      <ul className={styles["chats-list"]}>
        {chats.map(chat => {
          return (
            <li key={chat.id}>
              <NavLink
                to={`/messages/${chat.id}`}
                className={styles["chat-list-item"]}
                activeClassName={styles["active"]}>
                {chat.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Chats;
