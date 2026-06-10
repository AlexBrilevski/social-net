import type { ChangeEvent, FC, SubmitEvent } from "react";
import { type Messages, type ActionType } from "../../../store/store";
import { sendNewMessageToChatAC, updateNewMessageTextAC } from "../../../store/messagesReducer";
import Message from "./Message/Message";

import styles from "./Chat.module.css";

type ChatProps = {
  messagesData: Messages,
  dispatch: (action: ActionType) => void,
};

const Chat: FC<ChatProps> = (props) => {
  const chatId = "c1";
  const authUserId = "u0";
  const messagesData = props.messagesData[chatId];
  const messages = messagesData.messages;
  const newMessageText = messagesData.newMessageText;

  const onNewMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewMessageTextAC(chatId, e.target.value));
  };

  const onSendMessageFormSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.dispatch(sendNewMessageToChatAC(chatId, authUserId, newMessageText));
  };

  return (
    <div className={styles["chat"]}>
      <div className={styles["messages"]}>
        {messages.map(message => (
          <Message
            key={message.id}
            authUserId={authUserId}
            {...message}
          />
        ))}
      </div>
      <form className={styles["new-message-form"]} onSubmit={onSendMessageFormSubmit}>
        <div className="form-group">
          <label htmlFor="new-message-text">New message</label>
          <textarea
            id="new-message-text"
            className="form-control"
            name="new-message-text"
            value={newMessageText}
            placeholder="Type your message here"
            onChange={onNewMessageTextChange}
          >
          </textarea>
        </div>
        <div className="form-actions">
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
