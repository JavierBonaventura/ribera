import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../images/Escudo Bodega Ribera del Cuarzo-FINALcurvas-02.png';





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
    <div className="containerHome pt-8 background">
       <img src={logo} alt="Imagen 1" className="logo" />;
 
      <div className="body">
      <div className="containerHome pt-16">        
        <p className="menu" onClick={opcion1}>Family</p>
        {mostrarMenu1  &&  <Link to="/history" className="subMenu">HISTORY</Link>}
        <p className="menu"  onClick={opcion2}>Patagonian Spirit</p>
        {mostrarMenu2  && <Link to="/araucanavineyard" className="subMenu">ARAUCANA VINEYARD</Link>}
        {mostrarMenu2  && <Link to="/workvineyard" className="subMenu">WORK IN THE VINEYARD</Link>}
        {mostrarMenu2  && <Link to="/winespreservation" className="subMenu">WINES PRESERVATION</Link>}
        {mostrarMenu2  && <Link to="/wineyard" className="subMenu">THE VINEYARD</Link>}
        <p className="menu"  onClick={opcion3}>Wines</p>
        {mostrarMenu3  && <Link to="/riociervos" className="subMenu">RÍO DE LOS CIERVOS</Link>}
        {mostrarMenu3  && <Link to="/araucana" className="subMenu">ARAUCANA</Link>}
        {mostrarMenu3  && <Link to="/araucanaazul" className="subMenu">ARAUCANA AZUL</Link>}
        {mostrarMenu3  && <Link to="/clasico" className="subMenu">CLÁSICO</Link>}
        {mostrarMenu3  && <Link to="/especial" className="subMenu">ESPECIAL</Link>}
        {mostrarMenu3  && <Link to="/reservaestibada" className="subMenu">RESERVA ESTIBADA</Link>}

        <div className="footer">
          
          <p className="footerItems">Contact</p>
          <br></br>
          <p className="footerItems">News</p>
          <br></br>
          <p className="footerItems">Casa Pirque</p>

        </div>

      </div>
    </div>
    </div>
  );
};

export default Home;
