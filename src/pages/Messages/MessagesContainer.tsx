import { connect } from "react-redux";
import type { RootState } from "../../store/store";
import type { ChatType } from "../../store/messagesReducer";
import Messages from "./Messages";

type MapStateToProps = {
  chats: Array<ChatType>,
};

type MapDispatchToProps = {};

export type MessagesProps = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    chats: state.messagesPage.chats,
  };
};

const mapDispatchToProps = (): MapDispatchToProps => {
  return {};
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
