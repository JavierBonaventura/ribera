import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../images/Escudo Bodega Ribera del Cuarzo-FINALcurvas-02.png';
import { useSpring, animated } from '@react-spring/web';
import hambur from "../images/menu-hambur.png";




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
  const dropdownAnimation1 = useSpring({
    height: mostrarMenu1 ? '25px' : '0px',
    opacity: mostrarMenu1 ? 1 : 0,
    overflow: 'hidden',
    config: { duration: 300 },
  });

  const dropdownAnimation2 = useSpring({
    height: mostrarMenu2 ? '115px' : '0px',
    opacity: mostrarMenu2 ? 1 : 0,
    overflow: 'hidden',
    config: { duration: 300 },
  });
  
  const dropdownAnimation3 = useSpring({
    height: mostrarMenu3 ? '94px' : '0px',
    opacity: mostrarMenu3 ? 1 : 0,
    overflow: 'hidden',
    config: { duration: 300 },
  });
  
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
                  <div className="w-full grid justify-items-end pr-6">
                  <div className="w-8 ">
              <Link to="/MenuHamburguesa">
                <img src={hambur} alt="" className="w-full" />
              </Link>
            </div>
            </div>
       <img src={logo} alt="Imagen 1" className="logo" />
 
      <div className="body">
      <div className="containerHome pt-12 ">        
        <p style={playfairFontRegular} className="menu" onClick={opcion1}>Family</p>
        <animated.div style={dropdownAnimation1}>
        <ul className='text-center -mt-2 space-y-1'  >
        <li>  <Link to="/history" className="subMenu" style={robotoFontRegular}>HISTORY</Link></li>
      </ul>
      </animated.div>

        <p style={playfairFontRegular} className="menu"  onClick={opcion2}>Patagonian Spirit</p>
        <animated.div style={dropdownAnimation2}>
        <ul className='text-center -mt-2 space-y-1'  >
        <li> <Link to="/araucanavineyard" className="subMenu" style={robotoFontRegular}>ARAUCANA VINEYARD</Link></li>
        <li><Link to="/workvineyard" className="subMenu" style={robotoFontRegular}>WORK IN THE VINEYARD</Link></li>
        <li><Link to="/winespreservation" className="subMenu" style={robotoFontRegular}>WINES PRESERVATION</Link></li>
        <li><Link to="/wineyard" className="subMenu" style={robotoFontRegular}>THE VINEYARD</Link></li>
       </ul>
        </animated.div>

        <p style={playfairFontRegular} className="menu"  onClick={opcion3}>Wines</p>
        <animated.div style={dropdownAnimation3}>
        <ul className='text-center -mt-2 space-y-1'  >
        <li>    <Link to="/riociervos" className="subMenu" style={robotoFontRegular}>RÍO DE LOS CIERVOS</Link></li>
        <li>    <Link to="/araucana" className="subMenu" style={robotoFontRegular}>ARAUCANA</Link></li>
       <li>    <Link to="/araucanaazul" className="subMenu" style={robotoFontRegular}>ARAUCANA AZUL</Link></li>
       <li>  <Link to="/clasico" className="subMenu" style={robotoFontRegular}>CLÁSICO</Link></li>
       <li><Link to="/especial" className="subMenu" style={robotoFontRegular}>ESPECIAL</Link></li>
    <li>  <Link to="/reservaestibada" className="subMenu" style={robotoFontRegular}>RESERVA ESTIBADA</Link></li>
        </ul>
        </animated.div>
        <div className="flex flex-col -space-y-4 text-center pt-10">
          
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
