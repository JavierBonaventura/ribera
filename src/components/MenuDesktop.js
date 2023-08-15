import React, { useState, useRef, useEffect } from "react";
import fondoDesktop from "../images/fondoDesktop.png";
import videoDesktop from "../images/videoHome.mp4";
import videoHistory from "../images/videoHistory.mp4";
import videoWines from "../images/videoWines.mp4";
import videoPatagonian from "../images/videoPatagonian.mp4";
import logoDesktop from "../images/logoDesktop-01.png";
import hambur from "../images/hambur-claro.png";
import iconIg from "../images/icon-ig-form.svg";
import iconUbi from "../images/icon-ubi.png";
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

  // Codigo para que los videos esten en reproduccion aunque esten con clase hidden

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  useEffect(() => {
    // Función para iniciar la reproducción de un video si está cargado
    const playHiddenVideo = (videoRef) => {
      if (videoRef && videoRef.current) {
        if (!videoRef.current.paused && videoRef.current.currentTime > 0) {
          // Si el video ya está reproduciéndose, no hagas nada
          return;
        }
        videoRef.current.play();
      }
    };

    // Iniciar la reproducción de los videos ocultos
    playHiddenVideo(videoRef2);
    playHiddenVideo(videoRef3);
    playHiddenVideo(videoRef4);
  }, []);

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
              ref={videoRef1}
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
              ref={videoRef2}
              className={`video-background ${isMenu1Hovered ? "" : "hidden"}`}
              autoPlay
              muted
              loop
              playsInline
              src={videoHistory}
            ></video>
            <video
              ref={videoRef3}
              className={`video-background ${isMenu2Hovered ? "" : "hidden"}`}
              autoPlay
              muted
              loop
              playsInline
              src={videoPatagonian}
            ></video>
            <video
              ref={videoRef4}
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
                    <Link
                      to="/MenuHamburguesa"
                      onMouseEnter={handlehamburMouseEnter}
                      onMouseLeave={handlehamburMouseLeave}
                    >
                      <img
                        src={hambur}
                        alt="Hamburger"
                        className={`w-6 cursor-pointer ${
                          hamburHovered ? "" : "filter brightness-200"
                        }`}
                      />
                    </Link>
                  </div>
                  <div className="flex justify-center py-10 2xl:pb-24 2xl:pt-24">
                    <Link to="/">
                      <img
                        src={logoDesktop}
                        alt="Logo"
                        className="w-32 lg:w-44"
                      />
                    </Link>
                  </div>

                  <div className="flex justify-center w-full xl:w-3/4 2xl:px-28 mx-auto ">
                    <div
                      id="menu1"
                      onMouseEnter={handleMenu1Hover}
                      onMouseLeave={handleMenu1Leave}
                      className={`flex flex-col items-center w-full transition-opacity duration-500 gap-y-2 xl:gap-y-8   ${
                        isMenu2Hovered || isMenu3Hovered
                          ? "opacity-30"
                          : "opacity-100"
                      }`}
                    >
                      <p
                        style={playfairFontRegular}
                        className={`menu-desk sombra-menu tracking-wider ${
                          isMenu1Hovered ? "text-[#f3eee3]" : "text-[#c4b27d]"
                        }`}
                      >
                        History
                      </p>
                      <ul className="text-center space-y-0 lg:space-y-1.5">
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
                      className={`flex flex-col items-center w-full transition-opacity duration-500 gap-y-2 xl:gap-y-8  ${
                        isMenu1Hovered || isMenu3Hovered
                          ? "opacity-30"
                          : "opacity-100"
                      }`}
                    >
                      <p
                        style={playfairFontRegular}
                        className={`text-center menu-desk sombra-menu  tracking-wider ${
                          isMenu2Hovered ? "text-[#f3eee3]" : "text-[#c4b27d]"
                        }`}
                      >
                        Patagonian Spirit
                      </p>
                      <ul className="text-center space-y-0 lg:space-y-1.5">
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
                      className={`flex flex-col items-center w-full transition-opacity duration-500 gap-y-2 xl:gap-y-8 ${
                        isMenu1Hovered || isMenu2Hovered
                          ? "opacity-30"
                          : "opacity-100"
                      }`}
                    >
                      <p
                        style={playfairFontRegular}
                        className={`text-center menu-desk sombra-menu  tracking-wider ${
                          isMenu3Hovered ? "text-[#f3eee3]" : "text-[#c4b27d]"
                        }`}
                      >
                        Wines
                      </p>
                      <animated.div style={dropdownAnimation3}>
                        <ul className="text-center space-y-0 lg:space-y-1.5">
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
                                <Link to="/winesargentina#posicion4">
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
                    <div className="flex flex-row-reverse justify-around items-end w-full text-[#F2ECE1] ">
                      <div className="w-1/3  flex justify-end items-center ">
                        <a
                          href="https://www.instagram.com/riberadelcuarzo/"
                          target="_blank"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          {" "}
                          <div className="p-3 border border-white rounded-full hover:border-[#cab57e] transition duration-300 ease-in-out">
                            <img
                              src={iconIg}
                              alt="LogoIg"
                              className={`w-5 ${
                                igHovered ? "filter-invert" : ""
                              }`}
                            />
                          </div>
                        </a>
                      </div>
                      <div
                        className="flex justify-center items-end md:w-2/4 lg:w-1/3 gap-x-5 xl:gap-x-10 text-sm"
                        style={robotoFontRegular}
                      >
                        <div className=" ">
                          <Link
                            to="/contacto"
                            className="hover:text-[#cab57e]  duration-300 transition ease-in-out uppercase tracking-widest"
                            style={robotoFontRegular}
                          >
                            Contact
                          </Link>
                        </div>

                        <div className="" style={robotoFontRegular}>
                          <a
                            href=""
                            className="hover:text-[#cab57e]  duration-300 transition ease-in-out"
                          >
                            <div className="flex flex-col items-center ">
                              <span className="text-center">
                                <i>Our distribution office</i>
                              </span>
                              <span className="uppercase tracking-widest text-center">
                                Casa Pirque
                              </span>
                            </div>
                          </a>
                        </div>

                        <div className="uppercase">
                          <a
                            href=""
                            className="hover:text-[#cab57e]  duration-300 transition ease-in-out tracking-widest"
                          >
                            News
                          </a>
                        </div>
                      </div>
                      <div
                        className="flex flex-col justify-center items-start w-1/3 cursor-default "
                        style={playfairFontRegular}
                      >
                        <img
                          src={iconUbi}
                          className="w-4 absolute -top-3 left-[3.7rem]"
                        />
                        <div className="flex flex-col text-center">
                          <span className="uppercase tracking-[0.17em] text-xs lg:text-sm ">
                            Río Negro
                          </span>
                          <span className="text-xs tracking-tighter">
                            Patagonia Argentina
                          </span>
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
