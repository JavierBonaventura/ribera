import React from "react";
import { Link } from "react-router-dom";

function AgeConfirmationPopup({ onAgeConfirmed }) {
  const handleAgeConfirmed = (isAdult) => {
    onAgeConfirmed(isAdult);
  };

  return (
    <div className="age-confirmation-popup">
      <div className="age-confirmation-popup-inner">
        <p>¿Eres mayor de 18 años?</p>
        <button onClick={() => handleAgeConfirmed(true)}>Soy mayor</button>
        <br /> 
        <button onClick={() => handleAgeConfirmed(false)}>Soy menor</button>
      </div>
    </div>
  );
}

export default AgeConfirmationPopup;
