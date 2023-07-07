import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/Escudo Bodega Ribera del Cuarzo-FINALcurvas-02.png";
import { useSpring, animated } from "@react-spring/web";
import hambur from "../images/menu-hambur.png";

import iconIg from "../images/icon-ig.png";

const Home = () => {
  const roboto = {
    fontFamily: "Roboto, sans-serif",
  };

  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };
  const playfairFontItalic = {
    fontFamily: "Playfair Italic , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const playfairFontBold = {
    fontFamily: "Playfair Bold , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const playfairFontExtraBold = {
    fontFamily: "Playfair ExtraBold , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const robotoFontThin = {
    fontFamily: "Roboto Thin , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const robotoFontRegular = {
    fontFamily: "Roboto Regular , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };
  const [mostrarMenu1, setMostrarMenu1] = useState(false);
  const [mostrarMenu2, setMostrarMenu2] = useState(false);
  const [mostrarMenu3, setMostrarMenu3] = useState(false);

  const dropdownAnimation1 = useSpring({
    height: mostrarMenu1 ? "50px" : "0px",

    opacity: mostrarMenu1 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const dropdownAnimation2 = useSpring({
    height: mostrarMenu2 ? "115px" : "0px",
    opacity: mostrarMenu2 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const dropdownAnimation3 = useSpring({
    height: mostrarMenu3 ? "160px" : "0px",

    opacity: mostrarMenu3 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

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
        <img src={logo} alt="Imagen 1" className=" ml-44 w-1/4" />;
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
        <div className="containerHome pt-12 ">
          <p style={playfairFontRegular} className="menu" onClick={opcion1}>
            History
          </p>
          <animated.div style={dropdownAnimation1}>
            <ul className="text-center -mt-2 space-y-1">
              <li>
                {" "}
                <Link
                  to="/family"
                  className="subMenu"
                  style={robotoFontRegular}
                >
                  Family
                </Link>
              </li>

              <li>
                {" "}
                <Link
                  to="/bluevalley"
                  className="subMenu"
                  style={robotoFontRegular}
                >
                  Blue valley patagonia
                </Link>
              </li>
            </ul>
          </animated.div>

          <p style={playfairFontRegular} className="menu" onClick={opcion2}>
            Patagonian Spirit
          </p>
          <animated.div style={dropdownAnimation2}>
            <ul className="text-center -mt-2 space-y-1">
              <li>
                {" "}
                <Link
                  to="/araucanavineyard"
                  className="subMenu"
                  style={robotoFontRegular}
                >
                  ARAUCANA VINEYARD
                </Link>
              </li>
              <li>
                <Link
                  to="/workvineyard"
                  className="subMenu"
                  style={robotoFontRegular}
                >
                  WORK IN THE VINEYARD
                </Link>
              </li>
              <li>
                <Link
                  to="/winespreservation"
                  className="subMenu"
                  style={robotoFontRegular}
                >
                  WINES PRESERVATION
                </Link>
              </li>
              <li>
                <Link
                  to="/wineyard"
                  className="subMenu"
                  style={robotoFontRegular}
                >
                  THE VINEYARD
                </Link>
              </li>
            </ul>
          </animated.div>

          <p style={playfairFontRegular} className="menu" onClick={opcion3}>
            Wines
          </p>
          <animated.div style={dropdownAnimation3}>
            <ul className="text-center -mt-2 space-y-1">
              <li>
                {" "}
                <Link
                  to="/riociervos?scroll=0"
                  className="subMenu"
                  style={robotoFontRegular}
                >
                  RÍO DE LOS CIERVOS
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/riociervos?scroll=980"
                  className="subMenu"
                  style={robotoFontRegular}
                >
                  ARAUCANA
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/riociervos?scroll=1520"
                  className="subMenu"
                  style={robotoFontRegular}
                >
                  ARAUCANA AZUL
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/araucana?scroll=0"
                  className="subMenu"
                  style={robotoFontRegular}
                >
                  CLÁSICO
                </Link>
              </li>
              <li>
                <Link
                  to="/araucana?scroll=980"
                  className="subMenu"
                  style={robotoFontRegular}
                >
                  ESPECIAL
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/araucana?scroll=1450"
                  className="subMenu"
                  style={robotoFontRegular}
                >
                  RESERVA ESTIBADA
                </Link>
              </li>
            </ul>
          </animated.div>

          <div className="flex w-full mt-10">
            <div className="w-1/3">
              <p style={roboto} className="text-sm footerItems">
                Contact
              </p>
            </div>
            <div className="w-1/3">
              <p style={roboto} className="text-sm footerItems">
                News
              </p>
            </div>
            <div className="w-1/3">
              <p style={roboto} className="text-sm footerItems">
                Casa Pirque
              </p>
            </div>
          </div>
          <div className="flex space-x-4 mt-10">
            <div className="w-1/2 ">
              <p style={roboto} className="text-sm footerItems">
                english
              </p>
            </div>
            <div className="w-1/2 ">
              <p style={roboto} className=" text-sm footerItems">
                spanish
              </p>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="w-100">
              <p style={roboto} className="text-xs footerItems">
                Legals
              </p>
            </div>
          </div>
          <div className="py-20">
            <div className="container mx-auto flex justify-center">
              <div className="mt-16">
                <img src={iconIg} alt="" className="w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
