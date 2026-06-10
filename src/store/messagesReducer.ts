import { type MessagesPage, type ActionType, type MessageType, generateId } from "./store";

const MESSAGES_ACTION_TYPES = {
    UPDATE_NEW_MESSAGE_TEXT: "messages/UPDATE-NEW-MESSAGE-TEXT",
    SEND_NEW_MESSAGE_TO_CHAT: "messages/SEND-NEW-MESSAGE-TO-CHAT",
} as const;

export type MessagesAction =
    ReturnType<typeof updateNewMessageTextAC> |
    ReturnType<typeof sendNewMessageToChatAC>;

export const updateNewMessageTextAC = (chatId: string, text: string) => {
    return { type: MESSAGES_ACTION_TYPES.UPDATE_NEW_MESSAGE_TEXT, chatId, text };
};

export const sendNewMessageToChatAC = (chatId: string, userId: string, text: string) => {
    return { type: MESSAGES_ACTION_TYPES.SEND_NEW_MESSAGE_TO_CHAT, chatId, userId, text };
};

const messagesReducer = (state: MessagesPage, action: ActionType) => {
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

export default messagesReducer;