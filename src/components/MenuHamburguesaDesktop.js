import React, { useState } from "react";
import fondoHamburguesaDesktop from "../images/fondoHamburguesaDesktop.png";
import logoDesktop from "../images/logo.svg";
import logo from "../images/logo.svg";
import close from "../images/icon-close.svg";
import iconIg from "../images/icon-ig.png";
import { Link } from "react-router-dom";
import { Transition } from "@react-spring/web";
import { useSpring, animated } from "@react-spring/web";
import { useLocation } from "react-router-dom";

const MenuHamburguesaDesktop = () => {
  const location = useLocation();

  const [isMenu1Hovered, setMenu1Hovered] = useState(false);
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

  const handleMenu1Hover = () => {
    console.log("test");
    setMenu1Hovered(true);
  };

  const handleMenu1Leave = () => {
    setMenu1Hovered(false);
  };
  const [mostrarMenu1, setMostrarMenu1] = useState(false);
  const [mostrarMenu2, setMostrarMenu2] = useState(false);
  const [mostrarMenu3, setMostrarMenu3] = useState(true);
  const [mostrarMenu4, setMostrarMenu4] = useState(false);
  const [mostrarMenu5, setMostrarMenu5] = useState(false);

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
          <div
            className={`h-screen bg-[imagen] bg-no-repeat bg-cover bg-center relative p-5`}
            style={{ backgroundImage: `url(${fondoHamburguesaDesktop})` }}
          >
            <div className="left-1/2 z-50 top-8 transform -translate-x-1/2 max-w-screen-xl container mx-auto absolute ">
              {" "}
              <header className="py-10  px-5 md:px-0 md:py-2 ">
                <div class="flex justify-between items-center  ">
                  <div class="w-24 md:w-36 ">
                    <Link to="/">
                      <img src={logo} alt="" className="w-full xl:w-28" />
                    </Link>
                  </div>
                  <div class="">
                    <Link to="/">
                      <img src={close} alt="" className="w-14" />
                    </Link>
                  </div>
                </div>
              </header>
            </div>
            <div className="flex justify-end items-center absolute top-0 right-0 hidden">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
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
            <div className="w-full h-full">
              <div className="border border-[#F2ECE1] w-full h-full p-2 relative flex flex-col justify-center items-center">
                <div className="w-full h-full border border-[#F2ECE1]  flex flex-col justify-center  ">
                  <div className="flex justify-center py-0 2xl:pb-5 hidden">
                    <Link to="/">
                      <img
                        src={logoDesktop}
                        alt="Logo"
                        className="w-40 2xl:w-44"
                      />
                    </Link>
                  </div>

                  <div className="flex justify-center w-2/3 2xl:w-2/3 mx-auto ">
                    <div
                      id="menu1"
                      onMouseEnter={handleMenu1Hover}
                      onMouseLeave={handleMenu1Leave}
                      className="flex flex-col items-center  w-full"
                    >
                      <p
                        style={playfairFontRegular}
                        className="text-center menu-desk sombra-menu tracking-wider pb-5"
                      >
                        History
                      </p>
                      <Link
                        to="/family"
                        className="subMenu tracking-widest text-center"
                        style={robotoFontRegular}
                      >
                        FAMILY
                      </Link>
                      <Link
                        to="/valleazul"
                        className="subMenu tracking-widest text-center"
                        style={robotoFontRegular}
                      >
                        VALLE AZUL, PATAGONIA
                      </Link>
                    </div>

                    <div
                      id="menu2"
                      className="flex flex-col items-center w-full "
                    >
                      <p
                        style={playfairFontRegular}
                        className="text-center menu-desk sombra-menu tracking-wider  pb-5"
                      >
                        Patagonian Spirit
                      </p>
                      <Link
                        to="/araucanavineyard"
                        className="subMenu tracking-widest text-center"
                        style={robotoFontRegular}
                      >
                        ARAUCANA VINEYARD
                      </Link>
                      <Link
                        to="/workvineyard"
                        className="subMenu tracking-widest text-center"
                        style={robotoFontRegular}
                      >
                        WORK IN THE VINEYARD
                      </Link>
                      <Link
                        to="/workwinery"
                        className="subMenu tracking-widest text-center"
                        style={robotoFontRegular}
                      >
                        WORK IN THE WINERY
                      </Link>
                      <Link
                        to="/lifeonestate"
                        className="subMenu tracking-widest text-center"
                        style={robotoFontRegular}
                      >
                        LIFE ON THE ESTATE
                      </Link>
                      <Link
                        to="/lifewater"
                        className="subMenu tracking-widest text-center"
                        style={robotoFontRegular}
                      >
                        LIFE WATER
                      </Link>
                    </div>
                    <div
                      id="menu3"
                      className="flex flex-col items-center w-full "
                    >
                      <p
                        style={playfairFontRegular}
                        className="text-center menu-desk sombra-menu tracking-wider pb-5"
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

                  <div
                    className="flex flex-col gap-y-2 justify-center w-2/3 2xl:w-1/3 mx-auto pt-5"
                    style={robotoFontRegular}
                  >
                    <div className="w-full flex justify-center items-center gap-x-16 text-xl">
                      <div className="text-[#F2ECE1] hover:text-[#cab57e]">
                        <Link
                          to="/contacto"
                          className="hover:text-[#cab57e]"
                          style={robotoFontRegular}
                        >
                          Contact
                        </Link>
                      </div>
                      <div className="text-[#F2ECE1] hover:text-[#cab57e]">
                        <a href="">News</a>
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <a href="https://casapirque.com.ar" target="_blank">
                        <h1 className="text-center pb-2 text-[#c4b27d] text-base">
                          <i>Our distribution office</i>
                        </h1>
                        <p className="text-center uppercase font-semibold text-[#F2ECE1] hover:text-[#cab57e] text-base">
                          Casa Pirque
                        </p>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-5 2xl:bottom-5 w-full container mx-auto max-w-screen-xl">
                  <div className="flex justify-around items-center w-full text-[#F2ECE1]">
                    <div className="w-1/3 flex justify-center items-center">
                      <a
                        href="https://www.instagram.com/riberadelcuarzo/"
                        target="_blank"
                      >
                        <img src={iconIg} alt="LogoIg" className="w-5" />
                      </a>
                    </div>
                    <div
                      className="flex justify-center items-center w-1/3 gap-x-20 text-base "
                      style={robotoFontRegular}
                    >
                      <div>
                        <a
                          href=""
                          className="hover:text-[#cab57e] duration-300 transition ease-in-out"
                        >
                          Fact Sheet
                        </a>
                      </div>
                      <div>
                        <a
                          href=""
                          className="hover:text-[#cab57e] duration-300 transition ease-in-out"
                        >
                          Virtual Tour
                        </a>
                      </div>
                    </div>
                    <div
                      className="flex justify-center items-center w-1/3 cursor-default gap-x-5"
                      style={robotoFontRegular}
                    >
                      <span className="font-bold">english</span>
                      <span>spanish</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default MenuHamburguesaDesktop;
