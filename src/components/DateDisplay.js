import React from "react";

const DateDisplay = (props) => {
  return <span>{props.datetime.toDateString()}</span>;
};

export default DateDisplay;
