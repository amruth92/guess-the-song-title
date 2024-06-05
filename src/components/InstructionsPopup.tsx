// InstructionsPopup.tsx

import React from "react";

interface Props {
  show: boolean;
  onClose: () => void;
}

const InstructionsPopup: React.FC<Props> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="instructions-popup">
      <div className="instructions-content">
        <h2>Game Instructions</h2>
        <p>Write your instructions here...</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InstructionsPopup;
