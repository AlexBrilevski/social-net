import type { ChangeEvent, FC } from "react";
import type { Messages } from "../../../store/store";
import Message from "./Message/Message";

type ChatProps = {
  messagesData: Messages,
};

const Chat: FC<ChatProps> = (props) => {
  const chatId = "c1";
  const messagesData = props.messagesData[chatId];
  const messages = messagesData.messages;
  const newMessageText = messagesData.newMessageText;

  const onNewMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div>
        {messages.map(message => <Message key={message.id} {...message} />)}
      </div>
      <form>
        <textarea
          value={newMessageText}
          placeholder="Type your message here"
          onChange={onNewMessageTextChange}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
