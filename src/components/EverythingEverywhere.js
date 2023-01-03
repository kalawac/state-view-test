import React from "react";
import EverythingCard from "./EverythingCard";
import "./EverythingEverywhere.css";

const goHome = (props) => {
  // console.log("home button pressed");
  return props.viewFunc({ home: true, id: null, prev: "all" });
};

const EverythingEverywhere = (props) => {
  const getCards = (props) => {
    return props.propData.map((card) => {
      return (
        <EverythingCard
          key={card.id}
          id={card.id}
          datetime={card.datetime}
          message={card.message}
          lyrics={card.princeAli}
          class={card.class}
          viewFunc={props.viewFunc}
        />
      );
    });
  };

  return (
    <>
      <main className="EE">
        <ul>{getCards(props)}</ul>
      </main>
      <nav>
        <button
          className="homeButton"
          onClick={() => {
            goHome(props);
          }}
        >
          🏠
        </button>
      </nav>
    </>
  );
};

export default EverythingEverywhere;
