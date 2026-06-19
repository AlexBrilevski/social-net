import type { FC } from "react";
import type { RootStore } from "../../store/store";
import Messages from "./Messages";

type MessagesContainerProps = {
  store: RootStore,
};

const MessagesContainer: FC<MessagesContainerProps> = ({ store }) => {
  const state = store.getState().messagesPage;

  return (
    <Messages chats={state.chats} />
  );
};

export default MessagesContainer;
