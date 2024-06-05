import React from "react";

const InstructionsPopup = ({ onClose }) => {
  return (
    <div className="instructions-popup">
      <div className="instructions-content">
        <h2>Game Instructions</h2>
        <p>Write your code here...</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InstructionsPopup;
