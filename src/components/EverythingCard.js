import React from "react";
import Aladdin from "./Aladdin.js";
import DateDisplay from "./DateDisplay.js";
import MessageCard from "./MessageCard.js";
import TimeDisplay from "./TimeDisplay.js";
import "./EverythingCard.css";

const enlargeMessage = (props, num) => {
  return props.viewFunc({ home: false, id: num + 1, prev: "all" });
};

export default function EverythingCard(props) {
  return (
    <li>
      <button
        className="polaroid"
        onClick={() => {
          enlargeMessage(props, props.id);
        }}
      >
        <MessageCard message={props.message} class="#ffeb99" />
        <Aladdin lyrics={props.lyrics} />
        <div>
          <p>
            <DateDisplay datetime={props.datetime} />{" "}
            <TimeDisplay datetime={props.datetime} />
          </p>
        </div>
      </button>
    </li>
  );
}
