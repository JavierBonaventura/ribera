import React, { useState, useEffect } from 'react';

function App() {
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const animationDuration = 1000; // Duración de la animación en milisegundos (1 segundo en este caso)
    const startTime = Date.now();

    const animateCircle = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < animationDuration) {
        // Calcular el progreso actual de la animación
        const currentProgress = (elapsedTime / animationDuration) * 360;
        setProgress(currentProgress);

        // Programar el próximo fotograma de animación
        requestAnimationFrame(animateCircle);
      } else {
        // La animación ha terminado, establecer el progreso en 360 grados
        setProgress(360);
      }
    };

    if (isHovered) {
      animateCircle();
    }
  }, [isHovered]);

  return (
    <div className="App">
      <svg width="200" height="200">
        {/* Círculo tenue */}
        <circle
          cx="100"
          cy="100"
          r="50"
          fill="transparent"
          stroke="lightgray"
          strokeWidth="2"
          onMouseEnter={() => setIsHovered(true)}
        />

        {/* Círculo definitivo */}
        <circle
          cx="100"
          cy="100"
          r="50"
          fill="transparent"
          stroke="blue"
          strokeWidth="2"
          strokeDasharray={Math.PI * 100} // Longitud de la circunferencia
          strokeDashoffset={Math.PI * 100 - (Math.PI * 100 * progress) / 360} // Valor para el trazado
        />
      </svg>
    </div>
  );
}

export default App;
