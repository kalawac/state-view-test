import React from "react";

const TimeDisplay = (props) => {
  return <span>{props.datetime.toLocaleTimeString()}</span>;
};

export default TimeDisplay;
