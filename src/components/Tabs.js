import React, { useState } from "react";

const Tabs = ({ color, text, status, setStatus }) => {
  let tabStyles = {
    backgroundColor: color,
    height: status ? "70dvh" : "10dvh",
  };

  let textStyle = {
    opacity: status ? 1 : 0,
    transitionDelay: "350ms",
  };

  return (
    <div className="tab" style={tabStyles} onClick={setStatus}>
      <h1 style={textStyle}>{text}</h1>
    </div>
  );
};

export default Tabs;
