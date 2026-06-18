import type { FC } from "react";
import type { ChatType } from "../../../store/_store";
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
          const setChatItemClasses = (isActive: boolean): string => isActive ?
            `${styles["chat-list-item"]} ${styles["active"]}` : styles["chat-list-item"];

          return (
            <li key={chat.id}>
              <NavLink
                to={`${chat.id}`}
                className={({ isActive }) => setChatItemClasses(isActive)}>
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
