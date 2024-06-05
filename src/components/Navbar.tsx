import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    // Initial setup code, if needed
  }, []); // Empty dependency array to run only once on mount

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className="my-5 border bg-white shadow-sm">
      <div className="container mx-auto py-5">
        <div className="justify-center items-center text-center">
          <img
            src="http://ravi.am/wp-content/uploads/2024/06/ravle-logo-1.jpg"
            alt="Ravi Amruth Logo"
            className="mx-auto"
          />
        </div>
        <p className="text-1xl text-center">
          Something new is coming on the 19th of July - but can you guess what
          it is called?
        </p>
        <button onClick={toggleInstructions} className="btn">
          Instructions
        </button>
        {showInstructions && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleInstructions}>
                &times;
              </span>
              <h2>Instructions</h2>
              <p>
                Insert your game instructions here. Describe how to play the
                game, its objectives, rules, controls, etc.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
