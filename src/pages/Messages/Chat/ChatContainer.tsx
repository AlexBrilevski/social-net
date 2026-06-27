import { connect } from "react-redux";
import type { RootAction, RootState } from "../../../store/store";
import { sendNewMessageToChatAC, updateNewMessageTextAC, type Messages } from "../../../store/messagesReducer";
import Chat from "./Chat";

type MapStateToProps = {
  messagesData: Messages,
};

type MapDispatchToProps = {
  updateNewMessageText: (chatId: string, text: string) => void,
  sendMessage: (chatId: string, authUserId: string, newMessageText: string) => void,
};

const mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    messagesData: state.messagesPage.messages,
  };
};

const mapDispatchToProps = (dispatch: (action: RootAction) => void): MapDispatchToProps => {
  return {
    updateNewMessageText: (chatId: string, text: string) => {
      dispatch(updateNewMessageTextAC(chatId, text));
    },
    sendMessage: (chatId: string, authUserId: string, newMessageText: string) => {
      dispatch(sendNewMessageToChatAC(chatId, authUserId, newMessageText));
    },
  };
};

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
