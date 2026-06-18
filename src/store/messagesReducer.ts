import { generateId } from "./_store";
import type { RootAction } from "./store";

const MESSAGES_ACTION_TYPES = {
  UPDATE_NEW_MESSAGE_TEXT: "messages/UPDATE-NEW-MESSAGE-TEXT",
  SEND_NEW_MESSAGE_TO_CHAT: "messages/SEND-NEW-MESSAGE-TO-CHAT",
} as const;

export type ChatType = {
  id: string,
  userId: string,
  name: string,
};

export type MessageType = {
  id: string,
  userId: string,
  text: string,
};

export type Messages = {
  [chatId: string]: {
    messages: Array<MessageType>,
    newMessageText: string,
  },
};

export type MessagesPage = {
  chats: Array<ChatType>,
  messages: Messages,
};

export type MessagesAction =
  ReturnType<typeof updateNewMessageTextAC> |
  ReturnType<typeof sendNewMessageToChatAC>;

const initState = {
  chats: [],
  messages: {},
};

const messagesReducer = (state: MessagesPage = initState, action: RootAction): MessagesPage => {
  switch (action.type) {
    case MESSAGES_ACTION_TYPES.UPDATE_NEW_MESSAGE_TEXT: {
      state.messages[action.chatId].newMessageText = action.text;

      return state;
    }
    case MESSAGES_ACTION_TYPES.SEND_NEW_MESSAGE_TO_CHAT: {
      const newMessage: MessageType = {
        id: generateId(),
        userId: action.userId,
        text: action.text,
      };

      state.messages[action.chatId].messages.push(newMessage);
      state.messages[action.chatId].newMessageText = "";

      return state;
    }
    default: {
      return state;
    }
  }
};

export const updateNewMessageTextAC = (chatId: string, text: string) => {
  return { type: MESSAGES_ACTION_TYPES.UPDATE_NEW_MESSAGE_TEXT, chatId, text };
};

export const sendNewMessageToChatAC = (chatId: string, userId: string, text: string) => {
  return { type: MESSAGES_ACTION_TYPES.SEND_NEW_MESSAGE_TO_CHAT, chatId, userId, text };
};

export default messagesReducer;