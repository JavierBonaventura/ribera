import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo-menu.png";
import { useSpring, animated } from "@react-spring/web";
import hambur from "../images/menu-hambur.png";
import iconIg from "../images/icon-ig-form.png";
import { useLocation } from "react-router-dom";
import { Transition } from "@react-spring/web";

const Home = () => {
  const location = useLocation();

  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
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
    height: mostrarMenu1 ? "80px" : "0px",
    opacity: mostrarMenu1 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const dropdownAnimation2 = useSpring({
    height: mostrarMenu2 ? "170px" : "0px",
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
    height: mostrarMenu4 ? "140px" : "0px",
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
          <div className="containerHome  background pt-8">
            <div className="w-full grid justify-items-end pr-6 ">
              <div className="w-8">
                <Link to="/MenuHamburguesa">
                  <img src={hambur} alt="" className="w-full" />
                </Link>
              </div>
            </div>
            <div className="w-32  py-4">
              <Link to="/">
                <img src={logo} alt="" className="" />
              </Link>{" "}
            </div>
            <div className="body  py-20">
              <div className="containerHome">
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
                      <Link
                        to="/family"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        FAMILY
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/valleazul"
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
                        to="/workwinery"
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
                      <p
                        className="!mb-0 subMenu tracking-widest"
                        style={robotoFontRegular}
                        onClick={opcion4}
                      >
                        IN ARGENTINA
                      </p>
                    </li>
                    <animated.div style={dropdownAnimation4}>
                      <ul className="text-center  -space-y-2">
                        <li>
                          <Link to="/winesargentina">
                            <p
                              className="subMenu tracking-widest  "
                              style={robotoFontRegular}
                            >
                              View all
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesargentina#posicion1">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              Araucana Río de los Ciervos Malbec
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesargentina#posicion1">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              Araucana Río de los Ciervos Pinot Noir
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesargentina#posicion2">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              Araucana Malbec
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesargentina#posicion3">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              Araucana Azul
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </animated.div>
                    <li>
                      <p
                        className="!mb-0 subMenu tracking-widest"
                        style={robotoFontRegular}
                        onClick={opcion5}
                      >
                        IN THE WORLD
                      </p>
                    </li>
                    <animated.div style={dropdownAnimation5}>
                      <ul className="text-center  -space-y-3 ">
                        <li>
                          <Link to="/winesworld">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              View all
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesworld#posicion1">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              Ribera del Cuarzo Clásico
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesworld#posicion2">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              Ribera del Cuarzo Especial
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesworld#posicion3">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              Ribera del Cuarzo Reserva Estibada
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </animated.div>
                  </ul>
                </animated.div>
              </div>
            </div>
            <div className="flex flex-col text-center pt-0  gap-y-4 ">
              <Link
                to="/contacto"
                className="footerItems tracking-widest"
                style={robotoFontRegular}
              >
                Contact
              </Link>

              <p
                style={robotoFontRegular}
                className="footerItems tracking-widest"
              >
                News
              </p>

              <div className="container mx-auto flex justify-center">
                <a
                  href="https://www.instagram.com/riberadelcuarzo/"
                  target="_blank"
                >
                  <img src={iconIg} alt="" className="w-5" />
                </a>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default Home;
