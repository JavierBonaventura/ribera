import React, { useState } from 'react';
import { useSpring, animated, config } from "@react-spring/web";

const images = [
  'https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Imagen+1',
  'https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Imagen+2',
  'https://via.placeholder.com/600x300/5733FF/FFFFFF?text=Imagen+3',
  // ...añade más URLs de imágenes según sea necesario
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    config: { duration: 2000, easing: (t) => t }, // Puedes experimentar con diferentes funciones de easing
  });

  return (
    <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
      <animated.img
        src={images[index]}
        alt={`imagen-${index}`}
        style={{ width: '100%', height: '100%', ...props }}
      />
      <button onClick={handlePrev} style={{ position: 'absolute', top: '50%', left: '10px', zIndex: 1 }}>
        Prev
      </button>
      <button onClick={handleNext} style={{ position: 'absolute', top: '50%', right: '10px', zIndex: 1 }}>
        Next
      </button>
    </div>
  );
};

export default Slider;
