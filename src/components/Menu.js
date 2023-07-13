import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/Escudo Bodega Ribera del Cuarzo-FINALcurvas-02.png";
import { useSpring, animated } from "@react-spring/web";
import hambur from "../images/menu-hambur.png";
import { useLocation } from "react-router-dom";
import { Transition } from "@react-spring/web";

const Home = () => {
  const location = useLocation();

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
  const [mostrarMenu4, setMostrarMenu4] = useState(false);
  const [mostrarMenu5, setMostrarMenu5] = useState(false);

  const dropdownAnimation1 = useSpring({
    height: mostrarMenu1 ? "120px" : "0px",
    opacity: mostrarMenu1 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const dropdownAnimation2 = useSpring({
    height: mostrarMenu2 ? "200px" : "0px",
    opacity: mostrarMenu2 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const dropdownAnimation3 = useSpring({
    height: mostrarMenu3 ? "195px" : "0px",
    opacity: mostrarMenu3 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const dropdownAnimation4 = useSpring({
    height: mostrarMenu4 ? "120px" : "0px",
    opacity: mostrarMenu4 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const dropdownAnimation5 = useSpring({
    height: mostrarMenu5 ? "120px" : "0px",
    opacity: mostrarMenu5 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const bondiniFontRegular = {
    fontFamily: "Bondini, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const opcion1 = () => {
    setMostrarMenu1(true);
    setMostrarMenu2(false);
    setMostrarMenu3(false);
    setMostrarMenu4(false);
    setMostrarMenu5(false);
    if (mostrarMenu1 === true) {
      setMostrarMenu1(false);
    }
  };

  const opcion2 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(true);
    setMostrarMenu3(false);
    setMostrarMenu4(false);
    setMostrarMenu5(false);

    if (mostrarMenu2 === true) {
      setMostrarMenu2(false);
    }
  };

  const opcion3 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(false);
    setMostrarMenu3(true);
    setMostrarMenu4(false);
    setMostrarMenu5(false);

    if (mostrarMenu3 === true) {
      setMostrarMenu3(false);
    }
  };

  const opcion4 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(false);
    setMostrarMenu3(true);
    setMostrarMenu4(true);
    setMostrarMenu5(false);
    if (mostrarMenu4 === true) {
      setMostrarMenu4(false);
    }
  };

  const opcion5 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(false);
    setMostrarMenu3(true);
    setMostrarMenu4(false);
    setMostrarMenu5(true);

    if (mostrarMenu5 === true) {
      setMostrarMenu5(false);
    }
  };

  return (
    <Transition
      items={location}
      keys={(location) => location.pathname}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{ duration: 1000 }}
    >
      {(style, item) => (
        <animated.div style={{ ...style, width: "100%" }}>
          <div className="containerHome pt-8 background">
            <div className="w-full grid justify-items-end pr-6">
              <div className="w-8 ">
                <Link to="/MenuHamburguesa">
                  <img src={hambur} alt="" className="w-full" />
                </Link>
              </div>
            </div>
            <Link to="/">
              <img src={logo} alt="" className="logo" />
            </Link>{" "}
            <div className="body">
              <div className="containerHome pt-12 ">
                <p
                  style={playfairFontRegular}
                  className="menu sombra-menu tracking-wider"
                  onClick={opcion1}
                >
                  History
                </p>
                <animated.div style={dropdownAnimation1}>
                  <ul className="text-center -mt-2 space-y-1">
                    <li>
                      {" "}
                      <Link
                        to="/family"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        FAMILY
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link
                        to="/bluevalley"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        VALLE AZUL, PATAGONIA
                      </Link>
                    </li>
                  </ul>
                </animated.div>

                <p
                  style={playfairFontRegular}
                  className="menu sombra-menu px-2 tracking-wider"
                  onClick={opcion2}
                >
                  Patagonian Spirit
                </p>
                <animated.div style={dropdownAnimation2}>
                  <ul className="text-center -mt-2 space-y-1">
                    <li>
                      {" "}
                      <Link
                        to="/araucanavineyard"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        ARAUCANA VINEYARD
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/workvineyard"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        WORK IN THE VINEYARD
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/winespreservation"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        WORK IN THE WINERY
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lifeonestate"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        LIFE ON THE ESTATE
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lifewater"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        LIFE WATER
                      </Link>
                    </li>
                  </ul>
                </animated.div>

                <p
                  style={playfairFontRegular}
                  className="menu sombra-menu tracking-wider"
                  onClick={opcion3}
                >
                  Wines
                </p>
                <animated.div style={dropdownAnimation3}>
                  <ul className="text-center  space-y-1">
                    <li>
                      {" "}
                      <p
                        
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                        onClick={opcion4}
                      >
                        WINES IN THE WORLD
                      </p>
                    </li>
                    <animated.div style={dropdownAnimation4}>
                      <ul className="text-center  -space-y-2">
                        <li>
                          {" "}
                          <Link to="/riociervos">
                            <p
                              className="subMenu tracking-widest  "
                              style={playfairFontRegular}
                            >
                              View all
                            </p>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/riociervos#posicion1">
                            <p
                              className="subMenu tracking-widest"
                              style={playfairFontRegular}
                            >
                              Ribera del Cuarzo Clásico
                            </p>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/riociervos#posicion2">
                            <p
                              className="subMenu tracking-widest"
                              style={playfairFontRegular}
                            >
                              Ribera del Cuarzo Especial
                            </p>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/riociervos#posicion3">
                            <p
                              className="subMenu tracking-widest"
                              style={playfairFontRegular}
                            >
                              Ribera del Cuarzo Reserva Estibada
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </animated.div>
                    <li>
                      {" "}
                      <p
                        
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                        onClick={opcion5}
                      >
                        WINES IN ARGENTINA
                      </p>
                    </li>
                    <animated.div style={dropdownAnimation5}>
                      <ul className="text-center  -space-y-3 ">
                        <li>
                          {" "}
                          <Link to="/araucana">
                            <p
                              className="subMenu tracking-widest"
                              style={playfairFontRegular}
                            >
                              View all
                            </p>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/araucana#posicion1">
                            <p
                              className="subMenu tracking-widest"
                              style={playfairFontRegular}
                            >
                              Araucana Río de los Ciervos
                            </p>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/araucana#posicion2">
                            <p
                              className="subMenu tracking-widest"
                              style={playfairFontRegular}
                            >
                              Araucana Malbec
                            </p>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/araucana#posicion3">
                            <p
                              className="subMenu tracking-widest"
                              style={playfairFontRegular}
                            >
                              Araucana Azul
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </animated.div>
                  </ul>
                </animated.div>
                <div className="flex flex-col text-center mt-6">
                  <Link
                    to="/contacto"
                    className="footerItems tracking-widest"
                    style={robotoFontRegular}
                  >
                    Contact
                  </Link>
                  <br></br>
                  <p
                    style={robotoFontRegular}
                    className="footerItems tracking-widest"
                  >
                    News
                  </p>
                  <br></br>
                  <p
                    style={robotoFontRegular}
                    className="footerItems tracking-widest"
                  >
                    Casa Pirque
                  </p>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default Home;
