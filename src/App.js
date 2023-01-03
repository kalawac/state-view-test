import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import SplashPage from "./components/SplashPage";
import OneCard from "./components/OneCard";
import EverythingEverywhere from "./components/EverythingEverywhere";

const PROPS = [
  {
    id: 0,
    datetime: new Date(2022, 11, 27, 15, 22),
    message: "Today is a brand new day!",
    princeAli: "He's got 75 golden camels",
    class: "mistyrose",
  },
  {
    id: 1,
    datetime: new Date(2023, 0, 1),
    message: "Happy new year!",
    princeAli: "Don't they look lovely, June?",
    class: "floralwhite",
  },
  {
    id: 2,
    datetime: new Date(2022, 2, 28, 7),
    message: "I'm changing the things I cannot accept",
    princeAli: "Purple peacocks, he's got 53",
    class: "aliceblue",
  },
  {
    id: 3,
    datetime: new Date(2020, 2, 5, 21, 57),
    message:
      "Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day",
    princeAli: "Fabulous, Harry. I love the feathers.",
    class: "firebrick",
  },
];

function App() {
  let [viewState, setViewState] = useState({
    home: false,
    id: null,
    prev: null,
  });

  const setView = (viewData) => {
    setViewState(viewData);
    return;
  };

  const viewSplash = (viewState) => {
    if (!viewState.home && viewState.id === null) {
      return <SplashPage viewFunc={setView} />;
    }
    return null;
  };

  const viewHome = (viewState) => {
    if (viewState.home) {
      return <Home viewFunc={setView} />;
    }
    return null;
  };

  const viewOneCard = (viewState) => {
    if (viewState.id > 0) {
      return (
        <OneCard
          propData={PROPS[viewState.id - 1]}
          stateData={viewState}
          viewFunc={setView}
        />
      );
    }
    return null;
  };

  const viewAllCards = (viewState) => {
    if (viewState.id === 0) {
      return <EverythingEverywhere propData={PROPS} viewFunc={setView} />;
    }
    return null;
  };

  return (
    <div className="App">
      {viewSplash(viewState)}
      {viewHome(viewState)}
      {viewOneCard(viewState)}
      {viewAllCards(viewState)}
    </div>
  );
}

export default App;
