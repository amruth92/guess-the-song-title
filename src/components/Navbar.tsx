import React from "react";
import styles from "./Navbar.module.css"; // Import the CSS module

const toggleInstructions = () => {
  const instructionsPopup = document.getElementById("instructions-popup");
  if (instructionsPopup) {
    instructionsPopup.classList.toggle(styles.show);
  }
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
        <div id="instructions-popup" className={styles.popup}> {/* Use the CSS module class */}
          <div className={styles.popupContent}> {/* Use the CSS module class */}
            <span className={styles.close} onClick={toggleInstructions}>
              &times;
            </span>
            <h2>Instructions</h2>
            <p>
              Insert your game instructions here. Describe how to play the game,
              its objectives, rules, controls, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
