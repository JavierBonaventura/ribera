import React, { useState } from 'react';

import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import araucanaWine from "../images/araucana-wine.png";
import iconDownload from "../images/icon-download.png";
import araucanaMalbec from "../images/araucana-malbec-wine.png";
import araucanaAzul from "../images/araucana-azul-wine.png";
import riberaClasico from "../images/ribera-clasico-wine.png";
import riberaEspecial from "../images/ribera-especial-wine.png";
import riberaReserva from "../images/ribera-reserva-wine.png";
import iconIg from '../images/icon-ig.png'

const Header = () => {
  return (
    <header className="bg-[#231F20] py-3">
    <div className="container mx-auto">
      <div className="flex bg-[#231F20] justify-between items-center">
        <div className="w-1/3">
          <img src={logo} alt="" className="w-full" />
        </div>

        <div className="w-8">
          <img src={hambur} alt="" className="w-full" />
        </div>
      </div>
    </div>
  </header>
  );
};

const Slider = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    setCurrentScreen(currentScreen + 1);
  };

  const handlePrev = () => {
    setCurrentScreen(currentScreen - 1);
  };

  return (
    <div>
      <Header />
      <div>
        {/* Contenido del slider */}
        {currentScreen === 0 && <Screen1 />}
        {currentScreen === 1 && <Screen2 />}
        {currentScreen === 2 && <Screen3 />}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center mr-2"
          onClick={handlePrev}
        >
          <svg
            className="w-6 h-6 text-gray-500 transform rotate-180"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center"
          onClick={handleNext}
        >
          <svg
            className="w-6 h-6 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Screen1 = () => {
  return (
    <div>
      {/* Contenido de la pantalla 1 */}
      <h2>Pantalla 1</h2>
      <p>Contenido de la pantalla 1</p>
    </div>
  );
};

const Screen2 = () => {
  return (
    <div>
      {/* Contenido de la pantalla 2 */}
      <h2>Pantalla 2</h2>
      <p>Contenido de la pantalla 2</p>
    </div>
  );
};

const Screen3 = () => {
  return (
    <div>
      {/* Contenido de la pantalla 3 */}
      <h2>Pantalla 3</h2>
      <p>Contenido de la pantalla 3</p>
    </div>
  );
};

export default Slider;
