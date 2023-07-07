import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../images/Escudo Bodega Ribera del Cuarzo-FINALcurvas-02.png';





const Home = () => {
  
  const playfairFontRegular = {
    fontFamily: 'Playfair Regular, sans-serif',
    fontWeight: 'normal',
    fontStyle: 'normal',
  };

  const playfairFontBlack = {
    fontFamily: 'Playfair Black, sans-serif',
    fontWeight: 'normal',
    fontStyle: 'normal',
  };
  const playfairFontItalic = {
    fontFamily: "Playfair Italic , sans-serif",
    fontWeight: 'normal',
    fontStyle: 'normal',
  };

  const playfairFontBold = {
    fontFamily: "Playfair Bold , sans-serif",
    fontWeight: 'normal',
    fontStyle: 'normal',
  };

  const playfairFontExtraBold = {
    fontFamily: "Playfair ExtraBold , sans-serif",
    fontWeight: 'normal',
    fontStyle: 'normal',
  };

  const robotoFontThin = {
    fontFamily: "Roboto Thin , sans-serif",
    fontWeight: 'normal',
    fontStyle: 'normal',
  };

  const robotoFontRegular = {
    fontFamily: "Roboto Regular , sans-serif",
    fontWeight: 'normal',
    fontStyle: 'normal',
  };

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
       <img src={logo} alt="Imagen 1" className="logo" />
 
      <div className="body">
      <div className="containerHome pt-16">        
        <p style={playfairFontRegular} className="menu" onClick={opcion1}>Family</p>
        {mostrarMenu1  &&  <Link to="/history" className="subMenu" style={robotoFontRegular}>HISTORY</Link>}
        <p style={playfairFontRegular} className="menu"  onClick={opcion2}>Patagonian Spirit</p>
        {mostrarMenu2  && <Link to="/araucanavineyard" className="subMenu" style={robotoFontRegular}>ARAUCANA VINEYARD</Link>}
        {mostrarMenu2  && <Link to="/workvineyard" className="subMenu" style={robotoFontRegular}>WORK IN THE VINEYARD</Link>}
        {mostrarMenu2  && <Link to="/winespreservation" className="subMenu" style={robotoFontRegular}>WINES PRESERVATION</Link>}
        {mostrarMenu2  && <Link to="/wineyard" className="subMenu" style={robotoFontRegular}>THE VINEYARD</Link>}
        <p style={playfairFontRegular} className="menu"  onClick={opcion3}>Wines</p>
        {mostrarMenu3  && <Link to="/riociervos" className="subMenu" style={robotoFontRegular}>RÍO DE LOS CIERVOS</Link>}
        {mostrarMenu3  && <Link to="/araucana" className="subMenu" style={robotoFontRegular}>ARAUCANA</Link>}
        {mostrarMenu3  && <Link to="/araucanaazul" className="subMenu" style={robotoFontRegular}>ARAUCANA AZUL</Link>}
        {mostrarMenu3  && <Link to="/clasico" className="subMenu" style={robotoFontRegular}>CLÁSICO</Link>}
        {mostrarMenu3  && <Link to="/especial" className="subMenu" style={robotoFontRegular}>ESPECIAL</Link>}
        {mostrarMenu3  && <Link to="/reservaestibada" className="subMenu" style={robotoFontRegular}>RESERVA ESTIBADA</Link>}

        <div className="footer">
          
          <p style={robotoFontRegular} className="footerItems">Contact</p>
          <br></br>
          <p style={robotoFontRegular} className="footerItems">News</p>
          <br></br>
          <p  style={robotoFontRegular} className="footerItems">Casa Pirque</p>

        </div>

      </div>
    </div>
    </div>
  );
};

export default Home;
