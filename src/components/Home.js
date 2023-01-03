import React from "react";

const onClickFunc = ({ viewFunc }, num) => {
  console.log(`${num} button pressed!`);
  return viewFunc({ home: false, id: num, prev: "home" });
};

const Home = (props) => {
  return (
    <main style={{ backgroundColor: "honeydew" }}>
      <h1>Home pages are so homey!</h1>
      <button
        onClick={() => {
          onClickFunc(props, 0);
        }}
      >
        View all the cards!
      </button>
      <h2>View one card!</h2>
      <button
        onClick={() => {
          onClickFunc(props, 1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          onClickFunc(props, 2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          onClickFunc(props, 3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          onClickFunc(props, 4);
        }}
      >
        4
      </button>
    </main>
  );
};

export default Home;
