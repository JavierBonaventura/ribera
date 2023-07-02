import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import iconIg from '../images/icon-ig.png'


import logo from "../images/logo.svg";

const Home = () => {
  const roboto = {
    fontFamily: "Roboto, sans-serif",
  };

  const [mostrarMenu1, setMostrarMenu1] = useState(false);
  const [mostrarMenu2, setMostrarMenu2] = useState(false);
  const [mostrarMenu3, setMostrarMenu3] = useState(false);

  const opcion1 = () => {
    setMostrarMenu1(true);
    setMostrarMenu2(false);
    setMostrarMenu3(false);
    if (mostrarMenu1 === true) {
      setMostrarMenu1(false);
    }
  };

  const opcion2 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(true);
    setMostrarMenu3(false);
    if (mostrarMenu2 === true) {
      setMostrarMenu2(false);
    }
  };

  const opcion3 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(false);
    setMostrarMenu3(true);
    if (mostrarMenu3 === true) {
      setMostrarMenu3(false);
    }
  };

  return (
    <div className="containerHome pt-8 backgroundHambuerguesa">
      <div className="flex">
        <img src={logo} alt="Imagen 1" className=" ml-36 w-1/4" />;
        <Link to="/">
          <svg
            className="ml-10 pt-5"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="16"
              stroke="#C3B17D"
              fill="transparent"
              strokeWidth="2"
            />
            <line
              x1="44"
              y1="44"
              x2="56"
              y2="56"
              stroke="#C3B17D"
              strokeWidth="2"
            />
            <line
              x1="44"
              y1="56"
              x2="56"
              y2="44"
              stroke="#C3B17D"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>
      <div className="body">
        <div className="containerHome pt-16">
          <p className="menu" onClick={opcion1}>
            Family
          </p>
          {mostrarMenu1 && (
            <Link to="/history" className="subMenu">
              HISTORY
            </Link>
          )}
          <p className="menu" onClick={opcion2}>
            Patagonian Spirit
          </p>
          {mostrarMenu2 && (
            <Link to="/araucanavineyard" className="subMenu">
              ARAUCANA VINEYARD
            </Link>
          )}
          {mostrarMenu2 && (
            <Link to="/workvineyard" className="subMenu">
              WORK IN THE VINEYARD
            </Link>
          )}
          {mostrarMenu2 && (
            <Link to="/winespreservation" className="subMenu">
              WINES PRESERVATION
            </Link>
          )}
          {mostrarMenu2 && (
            <Link to="/wineyard" className="subMenu">
              THE VINEYARD
            </Link>
          )}
          <p className="menu" onClick={opcion3}>
            Wines
          </p>
          {mostrarMenu3 && (
            <Link to="/riociervos" className="subMenu">
              RÍO DE LOS CIERVOS
            </Link>
          )}
          {mostrarMenu3 && (
            <Link to="/araucana" className="subMenu">
              ARAUCANA
            </Link>
          )}
          {mostrarMenu3 && (
            <Link to="/araucanaazul" className="subMenu">
              ARAUCANA AZUL
            </Link>
          )}
          {mostrarMenu3 && (
            <Link to="/clasico" className="subMenu">
              CLÁSICO
            </Link>
          )}
          {mostrarMenu3 && (
            <Link to="/especial" className="subMenu">
              ESPECIAL
            </Link>
          )}
          {mostrarMenu3 && (
            <Link to="/reservaestibada" className="subMenu">
              RESERVA ESTIBADA
            </Link>
          )}

          <div className="flex w-full mt-10">
            <div className="w-1/3">
              <p style={roboto} className="text-sm footerItems">Contact</p>
            </div>
            <div className="w-1/3">
              <p style={roboto} className="text-sm footerItems">News</p>
            </div>
            <div className="w-1/3">
              <p style={roboto} className="text-sm footerItems">Casa Pirque</p>
            </div>
          </div>
          <div className="flex space-x-4 mt-10">
            <div className="w-1/2 ">
              <p style={roboto} className="text-sm footerItems">english</p>
            </div>
            <div className="w-1/2 ">
              <p style={roboto}className=" text-sm footerItems">spanish</p>
            </div>

          </div>
          <div className="flex mt-10">
            <div className="w-100">
              <p style={roboto} className="text-xs footerItems">Legals</p>
            </div>

          </div>
          <div class="py-20">
        <div class="container mx-auto flex justify-center">
          <div class="mt-16">
            <img src={iconIg} alt="" class="w-5" />
          </div>
        </div>
      </div>

        </div>
      </div>


      
    </div>
  );
};

export default Home;
