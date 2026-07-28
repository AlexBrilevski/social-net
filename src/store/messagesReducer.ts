import { generateId } from "../utils/helpers";
import type { RootAction } from "./store";

const DUMMY_CHATS = [
  { id: "c1", userId: "u1", name: "Karina" },
  { id: "c2", userId: "u2", name: "Sergei" },
  { id: "c3", userId: "u3", name: "Nastya" },
];

const DUMMY_MESSAGES = {
  "c1": {
    messages: [
      { id: "m1", userId: "u1", text: "Hi!" },
      { id: "m2", userId: "u0", text: "Hello!" },
      { id: "m3", userId: "u1", text: "How's things?" },
    ],
    newMessageText: "",
  },
  "c2": {
    messages: [
      { id: "m1", userId: "u0", text: "Yo!" },
    ],
    newMessageText: "",
  },
  "c3": {
    messages: [
      { id: "m1", userId: "u3", text: "What's up?" },
    ],
    newMessageText: "",
  },
};

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
  chats: DUMMY_CHATS,
  messages: DUMMY_MESSAGES,
};

export const messagesReducer = (state: MessagesPage = initState, action: RootAction): MessagesPage => {
  switch (action.type) {
    case MESSAGES_ACTION_TYPES.UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state, 
        messages: {
          ...state.messages, 
          [action.chatId]: {
            ...state.messages[action.chatId],
            newMessageText: action.text,
          }
        }
      };
    }
    case MESSAGES_ACTION_TYPES.SEND_NEW_MESSAGE_TO_CHAT: {
      const newMessage: MessageType = {
        id: action.newMessageId,
        userId: action.userId,
        text: action.text,
      };

      return {
        ...state,
        messages: {
          ...state.messages,
          [action.chatId]: {
            messages: [...state.messages[action.chatId].messages, newMessage],
            newMessageText: action.text,
          }
        }
      };
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
  const newMessageId = generateId();
  return { type: MESSAGES_ACTION_TYPES.SEND_NEW_MESSAGE_TO_CHAT, newMessageId, chatId, userId, text };
};

export default messagesReducer;