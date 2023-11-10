import React, { useState, useEffect } from 'react';
import './YearPicker.css'; // Asegúrate de importar el archivo CSS

const YearPicker = ({ anos }) => {
  const [currentYear, setCurrentYear] = useState(0);
  const [nextYear, setNextYear] = useState(null);
  const [isTransitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (nextYear !== null) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentYear(nextYear);
        setNextYear(null);
        setTransitioning(false);
      }, 500); // Ajusta el tiempo según tus preferencias
    }
  }, [nextYear]);

  const incrementYear = () => {
    if (currentYear < anos.length - 1) {
      setNextYear(currentYear + 1);
    }
  };

  const decrementYear = () => {
    if (currentYear > 0) {
      setNextYear(currentYear - 1);
    }
  };

const renderYearDigits = () => {
  const digits = anos[currentYear].toString();

  return digits.split('').map((digit, index) => (
    <span
      key={index}
      className={`digit ${isTransitioning ? 'transition-out' : 'transition-in'}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {digit}
    </span>
  ));
};


  return (
    <div className="flex items-center justify-center space-x-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={decrementYear}>
        Atrás
      </button>
      <div className="text-2xl font-bold year-container">
        {renderYearDigits()}
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={incrementYear}>
        Adelante
      </button>
    </div>
  );
};

export default YearPicker;
