import React, { useState, useEffect } from 'react';
import leftArrowImage from "../images/flechaIzquierda.png";

function App() {
  const [percentage, setPercentage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        if (percentage < 100) {
          setPercentage(percentage + 1);
        } else {
          clearInterval(interval);
        }
      }, 5);

      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        if (percentage !== 0) {
          setPercentage(percentage - 1);
        } else {
          clearInterval(interval);
        }
      }, 5);

      return () => clearInterval(interval);
    }
  }, [percentage, isHovered]);

  const imageWidth = 165; // Cambia el valor según el tamaño deseado
  const imageHeight = 165; // Cambia el valor según el tamaño deseado

  return (
    <div className="App">
      <svg
        width="200"
        height="200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#C4B27D"
          strokeWidth="6"
          strokeDasharray="502"
          strokeDashoffset={502 - (502 * percentage) / 100}
        />
        {/* Colocar la imagen en el centro del círculo */}
        <image
          x={(200 - imageWidth) / 2} // Calcula la posición x para centrar la imagen
          y={(200 - imageHeight) / 2} // Calcula la posición y para centrar la imagen
          width={imageWidth}
          height={imageHeight}
          xlinkHref={leftArrowImage}
        />
      </svg>
    </div>
  );
}

export default App;
