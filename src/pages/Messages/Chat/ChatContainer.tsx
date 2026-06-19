import type { FC } from "react";
import type { RootStore } from "../../../store/store";
import { sendNewMessageToChatAC, updateNewMessageTextAC } from "../../../store/messagesReducer";
import Chat from "./Chat";

type ChatContainerProps = {
  store: RootStore,
};

const ChatContainer: FC<ChatContainerProps> = ({ store }) => {
  const state = store.getState().messagesPage;

  const updateNewMessageText = (chatId: string, text: string) => {
    store.dispatch(updateNewMessageTextAC(chatId, text));
  };

  const sendMessage = (chatId: string, authUserId: string, newMessageText: string) => {
    store.dispatch(sendNewMessageToChatAC(chatId, authUserId, newMessageText));
  };

  return (
    <Chat
      messagesData={state.messages}
      updateNewMessageText={updateNewMessageText}
      sendMessage={sendMessage}
    />
  );
};

export default ChatContainer;
