import React, { useState } from "react";

const Navbar = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const InstructionsPopup = () => {
    const [isClient, setIsClient] = useState(false);

    React.useEffect(() => {
      setIsClient(true);
    }, []);

    return (
      <>
        {isClient && showInstructions && (
          <div className="instructions-popup">
            <div className="instructions-content">
              <h2>Game Instructions</h2>
              <p>Write your code here...</p>
              <button onClick={toggleInstructions}>Close</button>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="my-5 border bg-white shadow-sm">
      <div className="container mx-auto py-5">
        <div className="justify-center items-center text-center">
          <img src="http://ravi.am/wp-content/uploads/2024/06/ravle-logo-1.jpg" alt="Ravi Amruth Logo" className="mx-auto" />
        </div>
        <p className="text-1xl text-center">Something new is coming on the 19th of July - but can you guess what it is called?</p>
        <button onClick={toggleInstructions}>Show Instructions</button>
      </div>
      <InstructionsPopup />
    </div>
  );
};

export default Navbar;
