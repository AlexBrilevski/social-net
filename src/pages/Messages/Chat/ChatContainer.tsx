import type { FC } from "react";
import { sendNewMessageToChatAC, updateNewMessageTextAC } from "../../../store/messagesReducer";
import Chat from "./Chat";
import { StoreContext } from "../../../store/StoreContext";

const ChatContainer: FC = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
      }}
    </StoreContext.Consumer>
  );
};

export default ChatContainer;
