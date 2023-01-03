import React, { useEffect } from "react";
import cheetarah from "./cheetarah.jpg";

const goHome = (props) => {
  console.log("home button pressed");
  return props.viewFunc({ home: true, id: null, prev: "splash" });
};

const Splash = (props) => {
  useEffect(() => {
    const homeTimer = setTimeout(() => {
      goHome(props);
    }, 5000);
    return () => clearTimeout(homeTimer);
  });

  return (
    <main style={{ backgroundColor: "lightsalmon" }}>
      <h1>Welcome to the View Test App</h1>
      <img
        src={cheetarah}
        alt="snow leopard sitting majestically"
        style={{ maxHeight: 600 }}
      />
      <p>
        This view has no presentational components.
        <br />
        In five seconds, it will self-destruct.
      </p>
      <p style={{ fontWeight: "bolder" }}>SNOW LEOPARDS ROAR!</p>
      {/* <button
        onClick={() => {
          goHome(props);
        }}
      >
        Let's go!
      </button> */}
    </main>
  );
};

export default Splash;
