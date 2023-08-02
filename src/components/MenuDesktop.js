import React, { useState } from "react";
import fondoDesktop from "../images/fondoDesktop.png";
import videoDesktop from "../images/videoHome.mp4";
import videoHistory from "../images/videoHome.mp4";
import videoWines from "../images/videoHome.mp4";
import videoPatagonian from "../images/videoHome.mp4";


import logoDesktop from "../images/logoDesktop.png";
import hambur from "../images/menu-hambur.png";
import iconIg from "../images/icon-ig-form.png";
import { Link } from "react-router-dom";
import { Transition } from "@react-spring/web";
import { useSpring, animated } from "@react-spring/web";
import { useLocation } from "react-router-dom";

const MenuDesktop = () => {
  

  const [currentVideo, setCurrentVideo] = useState(videoDesktop);



  const [isMenu1Hovered, setMenu1Hovered] = useState(false);
  const [isMenu2Hovered, setMenu2Hovered] = useState(false);
  const [isMenu3Hovered, setMenu3Hovered] = useState(false);

  const [isMenu1Visible, setMenu1Visible] = useState(true);
  const [isMenu2Visible, setMenu2Visible] = useState(true);
  const [isMenu3Visible, setMenu3Visible] = useState(true);

  const handleMenu1Hover = () => {
    setMenu1Hovered(true);
    setMenu2Visible(false); 
    setMenu3Visible(false);
    setCurrentVideo(videoHistory);
  };

  const handleMenu1Leave = () => {
    setMenu1Hovered(false);
    setMenu2Visible(true); 
    setMenu3Visible(true); 
    setCurrentVideo(videoDesktop)
  };

  
  const handleMenu2Hover = () => {
    setMenu2Hovered(true);
    setMenu1Visible(false); 
    setMenu3Visible(false); 
    setCurrentVideo(videoPatagonian)

  };

  const handleMenu2Leave = () => {
    setMenu2Hovered(false);
    setMenu1Visible(true);
    setMenu3Visible(true); 
    setCurrentVideo(videoDesktop)

  };

  const handleMenu3Hover = () => {
    setMenu3Hovered(true);
    setMenu1Visible(false); 
    setMenu2Visible(false); 
    setCurrentVideo(videoWines)

  };

  const handleMenu3Leave = () => {
    setMenu3Hovered(false);
    setMenu1Visible(true); 
    setMenu2Visible(true); 
    setCurrentVideo(videoDesktop)

  };

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
<div className="h-screen relative p-5">
<video
  className="w-full h-full object-cover absolute top-0 left-0 z-0"
  autoPlay
  loop
  muted
  playsInline
  preload="auto" // Añadir el atributo preload con el valor "auto"
  src={currentVideo} // Use the currentVideo as the source
/>
            <div className="w-full h-full">
              <div className="border border-[#F2ECE1] w-full h-full p-2 relative flex flex-col justify-center items-center">
                <div className="w-full h-full border border-[#F2ECE1]">
                  <div className="flex justify-end items-center pr-10 py-5">
                    <Link to="/MenuHamburguesa">
                      <img
                        src={hambur}
                        alt="Hamburger"
                        className="w-8 cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex justify-center py-10 2xl:py-12 ">
                    <Link to="/">
                      <img src={logoDesktop} alt="Logo" className="w-44" />
                    </Link>
                  </div>

                  <div className="flex justify-center w-2/3 2xl:w-2/3 mx-auto">
                    <div
                      id="menu1"
                      onMouseEnter={handleMenu1Hover}
                      onMouseLeave={handleMenu1Leave}
                      className={`flex flex-col items-center w-full transition-opacity duration-500 ${isMenu2Hovered || isMenu3Hovered ? "opacity-30" : "opacity-100"}`}
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
                      onMouseEnter={handleMenu2Hover}
                      onMouseLeave={handleMenu2Leave}

                      className={`flex flex-col items-center w-full transition-opacity duration-500 ${isMenu1Hovered || isMenu3Hovered ? "opacity-30" : "opacity-100"}`}
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
                      onMouseEnter={handleMenu3Hover}
                      onMouseLeave={handleMenu3Leave}

                      className={`flex flex-col items-center w-full transition-opacity duration-500 ${isMenu1Hovered || isMenu2Hovered ? "opacity-30" : "opacity-100"}`}
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
                </div>

                <div className="absolute bottom-5 2xl:bottom-5 w-full">
                  <div className="flex justify-around items-center w-full text-[#F2ECE1] ">
                    <div className="w-1/3  flex justify-center items-center">
                      <a
                        href="https://www.instagram.com/riberadelcuarzo/"
                        target="_blank"
                      >
                        <img src={iconIg} alt="LogoIg" className="w-5" />
                      </a>
                    </div>
                    <div
                      className="flex justify-center items-center w-1/3 gap-x-20 "
                      style={robotoFontRegular}
                    >
                      <div>
                        <Link
                          to="/contacto"
                          className="hover:text-[#cab57e]  duration-300 transition ease-in-out"
                          style={robotoFontRegular}
                        >
                          Contact
                        </Link>
                      </div>
                      <div>
                        <a
                          href=""
                          className="hover:text-[#cab57e]  duration-300 transition ease-in-out"
                        >
                          News
                        </a>
                      </div>
                    </div>
                    <div
                      className="flex flex-col justify-center items-center w-1/3 cursor-default"
                      style={robotoFontRegular}
                    >
                      <span className="uppercase">Río Negro</span>
                      <span>Patagonia Argentina</span>
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

export default MenuDesktop;
