import React from 'react';
import imagen1 from '../images/wines.png';
import '../App.css';
import backgroundImage from '../images/CAÑADON (2).jpg';


function wines() {
  return ( 
    <div
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
    }}
  >
  <img src={imagen1} alt="Imagen 1" className="image" />;
  </div>
  )
}

export default wines;