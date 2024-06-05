import React from "react";

interface Props {
  onClose: () => void;
}

const InstructionsPopup: React.FC<Props> = ({ onClose }) => {
  if (typeof window === 'undefined') return null; // Don't render on server

  return (
    <>
      <div className="instructions-popup">
        <div className="instructions-content">
          <h2>Game Instructions</h2>
          <p>Write your code here...</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
};

export default InstructionsPopup;
