import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [position3, setPosition3] = useState(0);
  const [mostrarMenu1, setMostrarMenu1] = useState(false);
  const [mostrarMenu2, setMostrarMenu2] = useState(false);
  const [mostrarMenu3, setMostrarMenu3] = useState(false);


 
  const menu1 = false
  
  const opcion1 = () => {
    
    setMostrarMenu1(true);
    setMostrarMenu2(false);
    setMostrarMenu3(false);
    if (mostrarMenu1 === true) {setMostrarMenu1(false)}
    // if (position2 === 0 && position3 === 0) {setPosition2(position2 + 10); setPosition3(position3 + 10)}
    // if (position2 === 10 && position3 === 10) {setPosition2(position2 - 10); setPosition3(position3 - 10)}
    };

  const opcion2 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(true);
    setMostrarMenu3(false);
    if (mostrarMenu2 === true) {setMostrarMenu2(false)}
    // if (position2 === 10 && position3 === 10) {setPosition2(position2 -10)}
    // if (position3 === 0 ) {setPosition3(position3 + 10); };
    // if (position2 === 0 && position3 === 10) {setPosition3(position3 - 10); }
  };

  const opcion3 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(false);
    setMostrarMenu3(true);
    if (mostrarMenu3 === true) {setMostrarMenu3(false)}
    // if (position3 == 10) {setPosition2(position3 - 10)};
  };

  return (
    <div className="container">
      {/* <div
        className="text"
        style={{ transform: `translateY(${position}px)` }}
      >
        Texto
      </div> */}
      <div className="body">
      <div className="container">        
        <p className="menu" style={{ transform: `translateY(${position1}px)` }} onClick={opcion1}>Le Domaine</p>
        {mostrarMenu1  && <div className="subMenu">LE TERROIR</div>}
        {mostrarMenu1  && <div className="subMenu">L'HISTOIRE</div>}
        {mostrarMenu1  && <div className="subMenu">LES EQUIPES</div>}
        <p className="menu" style={{ transform: `translateY(${position2}px)` }} onClick={opcion2}>Le Savoir-Faire</p>
        {mostrarMenu2  && <div className="subMenu">LE TRAVIAL DE LA VIGNE</div>}
        {mostrarMenu2  && <div className="subMenu">LE TRAVIAL DAS CHAIS</div>}
        {mostrarMenu2  && <div className="subMenu">LA CONSERVATION DE NOS VINS</div>}
        {mostrarMenu2  && <div className="subMenu">LE SERVICE & LA DEGUSTATION</div>}
        <p className="menu" style={{ transform: `translateY(${position3}px)` }} onClick={opcion3}>Les Vins</p>
        {mostrarMenu3  && <div className="subMenu">GRAND VIN</div>}
        {mostrarMenu3  && <div className="subMenu">PAVILLON ROUGE</div>}
        {mostrarMenu3  && <div className="subMenu">PAVILLON BLANC</div>}
        {mostrarMenu3  && <div className="subMenu">MARGAUX</div>}

        <div className="footer">
          
          <p className="footerItems">Contact & visites</p>
          <br></br>
          <p className="footerItems">Actualities</p>
          <br></br>
          <p className="footerItems">Authentication</p>

        </div>

      </div>
    </div>
    </div>
  );
};

export default App;
