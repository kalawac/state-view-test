import React from "react";
import "./MessageCard.css";

const MessageCard = (props) => {
  return (
    <div
      className="MessageCard"
      style={{
        backgroundColor: props.class,
      }}
    >
      <h2 style={{ margin: 50 }}>{props.message}</h2>
    </div>
  );
};

export default MessageCard;
