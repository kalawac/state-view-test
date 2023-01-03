import React from "react";
import MessageCard from "./MessageCard";
import "./OneCard.css";

const goBack = (props) => {
  console.log("back link pressed");
  if (props.stateData.prev === "home") {
    return props.viewFunc({ home: true, id: null, prev: "oneCard" });
  }

  if (props.stateData.prev === "all") {
    return props.viewFunc({ home: false, id: 0, prev: "oneCard" });
  }
};

const OneCard = (props) => {
  return (
    <div className="OneCard">
      <main>
        {/* <h4>I am but a solo Message Card and some text.</h4> */}
        <MessageCard
          message={props.propData.message}
          class={props.propData.class}
        />
      </main>
      <nav>
        <div>
          <button
            onClick={() => {
              goBack(props);
            }}
          >
            Return to previous view
          </button>
        </div>
      </nav>
    </div>
  );
};

export default OneCard;
