import type { FC } from "react";
import type { MessageType } from "../../../../store/store";

const Message: FC<MessageType> = ({ text }) => {
  return (
    <div>{text}</div>
  );
};

export default Message;
