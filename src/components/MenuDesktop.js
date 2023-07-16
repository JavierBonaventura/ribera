import React, { useState } from 'react';
import fondoDesktop from '../images/fondoDesktop.png';
import logoDesktop from '../images/logoDesktop.png';
import hambur from "../images/menu-hambur.png";
import { Link } from "react-router-dom";



const MenuDesktop = () => {
  const [isMenu1Hovered, setMenu1Hovered] = useState(false);
  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const handleMenu1Hover = () => {
    console.log("test")
    setMenu1Hovered(true);
  };

  const handleMenu1Leave = () => {
    setMenu1Hovered(false);
  };

  return (
    <div
      className={`h-screen bg-[imagen] bg-no-repeat bg-cover bg-center relative`}
      style={{ backgroundImage: `url(${fondoDesktop})` }}
    >
      <div className="absolute inset-0 mx-6 my-6 border border-white opacity-60"></div>
      <div className="absolute inset-0 mx-8 my-8 border border-white opacity-40"></div>
      <div className="fixed top-10 left-1/2 -ml-20 w-36">
  <img
    src={logoDesktop}
    alt="Logo"
    className=""
  />
</div>

           
                <Link to="/MenuHamburguesa">
<img
        src={hambur}
        alt="Hamburger"
        className="fixed top-16 right-16 w-6 h-6 cursor-pointer"
      />
     </Link>
      <div className="flex justify-center items-center h-full">
        <div className="w-1/5"></div>
        <div id='menu1'  onMouseEnter={handleMenu1Hover}  onMouseLeave={handleMenu1Leave}  className=" w-1/5 flex flex-col items-center"> {/* Alinear los elementos en una columna */}
          <p style={playfairFontRegular} className="text-center menu sombra-menu tracking-wider">History</p>
          <p style={playfairFontRegular} className="text-center subMenu tracking-widest ">FAMILY</p> 
          <p style={playfairFontRegular} className="text-center subMenu tracking-widest">VALLE AZUL PATAGONIA</p> 
          <p style={playfairFontRegular} className="text-center subMenu tracking-widest opacity-0">SubMenu</p> 
          <p style={playfairFontRegular} className="text-center subMenu tracking-widest opacity-0">SubMenu</p> 

        </div>
       
        <div id='menu2'  className={`w-1/3 flex flex-col items-center ${isMenu1Hovered ? 'opacity-50' : 'opacity-100'}`}> {/* Alinear los elementos en una columna */}
          <p style={playfairFontRegular} className="text-center menu sombra-menu tracking-wider">Patagonian Spirit</p>
          <p style={playfairFontRegular} className="text-center subMenu tracking-widest">ARAUCANA VINEYARD</p> 
          <p style={playfairFontRegular} className="text-center subMenu tracking-widest">WORK IN THE VINEYARD</p> 
          <p style={playfairFontRegular} className="text-center subMenu tracking-widest">WINES PRESERVATION</p> 
          <p style={playfairFontRegular} className="text-center subMenu tracking-widest">LIFE IN THE VINEYARD</p> 
        </div>
        <div id='menu3' className="w-1/5 flex flex-col items-center"> {/* Alinear los elementos en una columna */}
          <p style={playfairFontRegular} className="text-center menu sombra-menu tracking-wider">Wines</p>
          <p style={playfairFontRegular} className="text-center subMenu tracking-widest">IN ARGENTINA</p> 
          <p style={playfairFontRegular} className="text-center subMenu tracking-widest">IN THE WORLD</p>
          <p style={playfairFontRegular} className="text-center subMenu tracking-widest opacity-0">SubMenu</p> 
          <p style={playfairFontRegular} className="text-center subMenu tracking-widest opacity-0">SubMenu</p> 
 
        </div>
        <div className="w-1/5"></div>
      </div>
    </div>
  );
};

export default MenuDesktop;
