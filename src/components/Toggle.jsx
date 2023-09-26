import React, { useState } from "react";

const Toggle = ({ isToggled, handleToggle }) => {
  const toggleStyles = {
    backgroundColor: isToggled ? "rgb(95, 121, 95)" : "rgb(205, 133, 133)",
    color: "black",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "10px",
  };

  return (
    <button style={toggleStyles} onClick={() => handleToggle()}>
      {isToggled ? "On" : "Off"}
    </button>
  );
};

export default Toggle;
