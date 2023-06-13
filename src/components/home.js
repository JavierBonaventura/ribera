import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../App.css';


const Home = () => {
  const [mostrarMenu1, setMostrarMenu1] = useState(false);
  const [mostrarMenu2, setMostrarMenu2] = useState(false);
  const [mostrarMenu3, setMostrarMenu3] = useState(false);


  
  const opcion1 = () => {
    
    setMostrarMenu1(true);
    setMostrarMenu2(false);
    setMostrarMenu3(false);
    if (mostrarMenu1 === true) {setMostrarMenu1(false)}
    };

  const opcion2 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(true);
    setMostrarMenu3(false);
    if (mostrarMenu2 === true) {setMostrarMenu2(false)}
  };

  const opcion3 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(false);
    setMostrarMenu3(true);
    if (mostrarMenu3 === true) {setMostrarMenu3(false)}
  };

  return (
    <div className="container">
      <div className="body">
      <div className="container">        
        <p className="menu" onClick={opcion1}>Le Domaine</p>
        {mostrarMenu1  &&  <Link to="/terroir" className="subMenu">LE TERROIR</Link>}
        {mostrarMenu1  && <Link to="/historie" className="subMenu">L'HISTOIRE</Link>}
        {mostrarMenu1  && <Link to="/equipes" className="subMenu">LES EQUIPES</Link>}
        <p className="menu"  onClick={opcion2}>Le Savoir-Faire</p>
        {mostrarMenu2  && <div className="subMenu">LE TRAVIAL DE LA VIGNE</div>}
        {mostrarMenu2  && <div className="subMenu">LE TRAVIAL DAS CHAIS</div>}
        {mostrarMenu2  && <div className="subMenu">LA CONSERVATION DE NOS VINS</div>}
        {mostrarMenu2  && <div className="subMenu">LE SERVICE & LA DEGUSTATION</div>}
        <p className="menu"  onClick={opcion3}>Les Vins</p>
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

export default Home;
