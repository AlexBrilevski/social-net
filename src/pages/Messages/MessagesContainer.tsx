import type { FC } from "react";
import Messages from "./Messages";
import { StoreContext } from "../../store/StoreContext";

const MessagesContainer: FC = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().messagesPage;

        return (
          <Messages chats={state.chats} />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
