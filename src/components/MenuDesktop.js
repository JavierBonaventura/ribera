import React, { useState } from "react";
import fondoDesktop from "../images/fondoDesktop.png";
import videoDesktop from "../images/videoHome.mp4";
import videoHistory from "../images/videoHistory.mp4";
import videoWines from "../images/videoWines.mp4";
import videoPatagonian from "../images/videoPatagonian.mp4";
import logoDesktop from "../images/logoDesktop-01.png";
import hambur from "../images/hambur-claro.png";
import iconIg from "../images/icon-ig-form.svg";
import { Link } from "react-router-dom";
import { Transition } from "@react-spring/web";
import { useSpring, animated } from "@react-spring/web";
import { useLocation } from "react-router-dom";

const MenuDesktop = () => {
  const [igHovered, setIgHovered] = useState(false);
  const handleMouseEnter = () => {
    setIgHovered(true);
  };

  const handleMouseLeave = () => {
    setIgHovered(false);
  };
  const [hamburHovered, sethamburHovered] = useState(false);
  const handlehamburMouseEnter = () => {
    sethamburHovered(true);
  };

  const handlehamburMouseLeave = () => {
    sethamburHovered(false);
  };
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
    setCurrentVideo(videoDesktop);
  };

  const handleMenu2Hover = () => {
    setMenu2Hovered(true);
    setMenu1Visible(false);
    setMenu3Visible(false);
    setCurrentVideo(videoPatagonian);
  };

  const handleMenu2Leave = () => {
    setMenu2Hovered(false);
    setMenu1Visible(true);
    setMenu3Visible(true);
    setCurrentVideo(videoDesktop);
  };

  const handleMenu3Hover = () => {
    setMenu3Hovered(true);
    setMenu1Visible(false);
    setMenu2Visible(false);
    setCurrentVideo(videoWines);
  };

  const handleMenu3Leave = () => {
    setMenu3Hovered(false);
    setMenu1Visible(true);
    setMenu2Visible(true);
    setCurrentVideo(videoDesktop);
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
              className={`video-background ${
                isMenu1Hovered || isMenu2Hovered || isMenu3Hovered
                  ? "hidden"
                  : ""
              }`}
              autoPlay
              muted
              loop
              playsInline
              src={videoDesktop}
            ></video>
            <video
              className={`video-background ${isMenu1Hovered ? "" : "hidden"}`}
              autoPlay
              muted
              loop
              playsInline
              src={videoHistory}
            ></video>
            <video
              className={`video-background ${isMenu2Hovered ? "" : "hidden"}`}
              autoPlay
              muted
              loop
              playsInline
              src={videoPatagonian}
            ></video>
            <video
              className={`video-background ${isMenu3Hovered ? "" : "hidden"}`}
              autoPlay
              muted
              loop
              playsInline
              src={videoWines}
            ></video>
            <div className="w-full h-full">
              <div className="border border-[#F2ECE1] w-full h-full p-2 relative flex flex-col justify-center items-center">
                <div className="w-full h-full border border-[#F2ECE1] relative">
                  <div className="flex justify-end items-center pr-4 py-5">
                    <Link to="/MenuHamburguesa"
                      onMouseEnter={handlehamburMouseEnter}
                      onMouseLeave={handlehamburMouseLeave}
                    >
                      <img
                        src={hambur}
                        alt="Hamburger"
                        className={`w-6 cursor-pointer ${
                          hamburHovered ? "" : "filter brightness-200"
                        }`} />                
                    </Link>
                  </div>
                  <div className="flex justify-center py-10 2xl:pb-24 2xl:pt-24">
                    <Link to="/">
                      <img src={logoDesktop} alt="Logo" className="w-44" />
                    </Link>
                  </div>

                  <div className="flex justify-center w-full xl:w-3/4 2xl:px-28 mx-auto ">
                    <div
                      id="menu1"
                      onMouseEnter={handleMenu1Hover}
                      onMouseLeave={handleMenu1Leave}
                      className={`flex flex-col items-center w-full transition-opacity duration-500 gap-y-8  ${
                        isMenu2Hovered || isMenu3Hovered
                          ? "opacity-30"
                          : "opacity-100"
                      }`}
                    >
                      <p
                        style={playfairFontRegular}
                        className={`menu-desk sombra-menu ${
                          isMenu1Hovered ? "text-[#f3eee3]" : "text-[#c4b27d]"
                        }`}
                      >
                        History
                      </p>
                      <ul className="text-center space-y-1.5">
                        <li>
                          <Link to="/family" style={robotoFontRegular}>
                            <span className="subMenu tracking-widest">
                              FAMILY
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/valleazul" style={robotoFontRegular}>
                            <span className="subMenu tracking-widest">
                              VALLE AZUL, PATAGONIA
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div
                      id="menu2"
                      onMouseEnter={handleMenu2Hover}
                      onMouseLeave={handleMenu2Leave}
                      className={`flex flex-col items-center w-full transition-opacity duration-500 gap-y-8  ${
                        isMenu1Hovered || isMenu3Hovered
                          ? "opacity-30"
                          : "opacity-100"
                      }`}
                    >
                      <p
                        style={playfairFontRegular}
                        className={`text-center menu-desk sombra-menu ${
                          isMenu2Hovered ? "text-[#f3eee3]" : "text-[#c4b27d]"
                        }`}
                      >
                        Patagonian Spirit
                      </p>
                      <ul className="text-center space-y-1.5">
                        <li>
                          <Link
                            to="/araucanavineyard"
                            style={robotoFontRegular}
                          >
                            <span className="subMenu tracking-widest">
                              ARAUCANA VINEYARD
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/workvineyard" style={robotoFontRegular}>
                            <span className="subMenu tracking-widest">
                              WORK IN THE VINEYARD
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/workwinery" style={robotoFontRegular}>
                            <span className="subMenu tracking-widest">
                              WORK IN THE WINERY
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/lifeonestate" style={robotoFontRegular}>
                            <span className="subMenu tracking-widest">
                              LIFE ON THE ESTATE
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/lifewater" style={robotoFontRegular}>
                            <span className="subMenu tracking-widest">
                              LIFE WATER
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div
                      id="menu3"
                      onMouseEnter={handleMenu3Hover}
                      onMouseLeave={handleMenu3Leave}
                      className={`flex flex-col items-center w-full transition-opacity duration-500 gap-y-8 ${
                        isMenu1Hovered || isMenu2Hovered
                          ? "opacity-30"
                          : "opacity-100"
                      }`}
                    >
                      <p
                        style={playfairFontRegular}
                        className={`text-center menu-desk sombra-menu ${
                          isMenu3Hovered ? "text-[#f3eee3]" : "text-[#c4b27d]"
                        }`}
                      >
                        Wines
                      </p>
                      <animated.div style={dropdownAnimation3}>
                        <ul className="text-center space-y-1.5">
                          <li>
                            <p style={robotoFontRegular} onClick={opcion4}>
                              <span className="!mb-0 subMenu tracking-widest">
                                IN ARGENTINA
                              </span>
                            </p>
                          </li>
                          <animated.div style={dropdownAnimation4}>
                            <ul className="text-center">
                              <li>
                                <Link to="/winesargentina">
                                  <p style={robotoFontRegular}>
                                    <span className="subMenu tracking-widest">
                                      View all
                                    </span>
                                  </p>
                                </Link>
                              </li>
                              <li>
                                <Link to="/winesargentina#posicion1">
                                  <p style={robotoFontRegular}>
                                    <span className="subMenu tracking-widest">
                                      Araucana Río de los Ciervos Malbec
                                    </span>
                                  </p>
                                </Link>
                              </li>
                              <li>
                                <Link to="/winesargentina#posicion1">
                                  <p style={robotoFontRegular}>
                                    <span className="subMenu tracking-widest">
                                      Araucana Río de los Ciervos Pinot Noir
                                    </span>
                                  </p>
                                </Link>
                              </li>
                              <li>
                                <Link to="/winesargentina#posicion2">
                                  <p style={robotoFontRegular}>
                                    <span className="subMenu tracking-widest">
                                      Araucana Malbec
                                    </span>
                                  </p>
                                </Link>
                              </li>
                              <li>
                                <Link to="/winesargentina#posicion3">
                                  <p style={robotoFontRegular}>
                                    <span className="subMenu tracking-widest">
                                      Araucana Azul
                                    </span>
                                  </p>
                                </Link>
                              </li>
                            </ul>
                          </animated.div>
                          <li>
                            <p style={robotoFontRegular} onClick={opcion5}>
                              <span className="!mb-0 subMenu tracking-widest">
                                IN THE WORLD
                              </span>
                            </p>
                          </li>
                          <animated.div style={dropdownAnimation5}>
                            <ul className="text-center">
                              <li>
                                <Link to="/winesworld">
                                  <p style={robotoFontRegular}>
                                    <span className="subMenu tracking-widest">
                                      View all
                                    </span>
                                  </p>
                                </Link>
                              </li>
                              <li>
                                <Link to="/winesworld#posicion1">
                                  <p style={robotoFontRegular}>
                                    <span className="subMenu tracking-widest">
                                      Ribera del Cuarzo Clásico
                                    </span>
                                  </p>
                                </Link>
                              </li>
                              <li>
                                <Link to="/winesworld#posicion2">
                                  <p style={robotoFontRegular}>
                                    <span className="subMenu tracking-widest">
                                      Ribera del Cuarzo Especial
                                    </span>
                                  </p>
                                </Link>
                              </li>
                              <li>
                                <Link to="/winesworld#posicion3">
                                  <p style={robotoFontRegular}>
                                    <span className="subMenu tracking-widest">
                                      Ribera del Cuarzo Reserva Estibada
                                    </span>
                                  </p>
                                </Link>
                              </li>
                            </ul>
                          </animated.div>
                        </ul>
                      </animated.div>
                    </div>
                  </div>
                  <div className="absolute bottom-5 px-5 w-full container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl  left-1/2 transform -translate-x-1/2">
                    <div className="flex justify-around items-center w-full text-[#F2ECE1] ">
                      <div className="w-1/3  flex justify-start items-center ">
                        <a
                          href="https://www.instagram.com/riberadelcuarzo/"
                          target="_blank"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <img
                            src={iconIg}
                            alt="LogoIg"
                            className={`w-5 ${
                              igHovered ? "filter-invert" : ""
                            }`}
                          />
                        </a>
                      </div>
                      <div
                        className="flex justify-center items-center w-1/3 gap-x-20 text-sm lg:text-base "
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
                        className="flex flex-col justify-center items-end w-1/3 cursor-default text-sm lg:text-base"
                        style={robotoFontRegular}
                      >
                        <div className="flex flex-col text-center">
                          <span className="uppercase">Río Negro</span>
                          <span>Patagonia Argentina</span>
                        </div>
                      </div>
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
