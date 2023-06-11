import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [position3, setPosition3] = useState(0);
  const [mostrarMenu1, setMostrarMenu1] = useState(false);
 
  const menu1 = false
  
  const opcion1 = () => {
    setMostrarMenu1(true);
    if (position2 === 0 && position3 === 0) {setPosition2(position2 + 10); setPosition3(position3 + 10)}
    if (position2 === 10 && position3 === 10) {setPosition2(position2 - 10); setPosition3(position3 - 10)}
    };

  const opcion2 = () => {
    if (position2 === 10 && position3 === 10) {setPosition2(position2 -10)}
    if (position3 === 0 ) {setPosition3(position3 + 10); };
    if (position2 === 0 && position3 === 10) {setPosition3(position3 - 10); }
  };

  const opcion3 = () => {
    if (position3 == 10) {setPosition2(position3 - 10)};
  };

  return (
    <div className="container">
      {/* <div
        className="text"
        style={{ transform: `translateY(${position}px)` }}
      >
        Texto
      </div> */}
      <div className="buttons">
        <p className="text" style={{ transform: `translateY(${position1}px)` }} onClick={opcion1}>Opcion 1</p>
        {mostrarMenu1  && <div>¡Este es el div que se mostrará!</div>}
        <p className="text" style={{ transform: `translateY(${position2}px)` }} onClick={opcion2}>Opcion 2</p>
        <p className="text" style={{ transform: `translateY(${position3}px)` }} onClick={opcion3}>Opcion 3</p>

      </div>
    </div>
  );
};

export default App;
