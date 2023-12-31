import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import riberaClasicoWine from "../images/ribera-clasico.png";
import iconDownload from "../images/icon-download.png";
import riberaEspecial from "../images/ribera-especial.png";
import riberaReserva from "../images/ribera-reserva.png";
import araucanaWine from "../images/araucana-rio-ciervos.png";
import araucanaMalbec from "../images/araucana-malbec.png";
import araucanaAzul from "../images/araucana-azul.png";
import araucanaPinot from "../images/araucana-pinot-noir.png";
import logoTransparencia from "../images/Isologo-transparencia.svg";
import portada from "../images/wines-portada.png";
import iconIg from "../images/icon-ig.png";
import { useSpring, Transition, animated } from "@react-spring/web";

import "../App.css";
function RioCiervos() {
  const [igHovered, setIgHovered] = useState(false);
  const handleMouseEnter = () => {
    setIgHovered(true);
  };
  const handleMouseLeave = () => {
    setIgHovered(false);
  };

  const locationAnimacion = useLocation();

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  const dropdownAnimation1 = useSpring({
    height: showDropdown1 ? "100px" : "0px",
    opacity: showDropdown1 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 500 },
  });

  const dropdownAnimation2 = useSpring({
    height: showDropdown2 ? "100px" : "0px",
    opacity: showDropdown2 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 500 },
  });

  const dropdownAnimation3 = useSpring({
    height: showDropdown3 ? "100px" : "0px",
    opacity: showDropdown3 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 500 },
  });

  const handleDownloadClick1 = () => {
    setShowDropdown2(false);
    setShowDropdown3(false);
    setShowDropdown1(!showDropdown1);
  };

  const handleDownloadClick2 = () => {
    setShowDropdown1(false);
    setShowDropdown3(false);

    setShowDropdown2(!showDropdown2);
  };

  const handleDownloadClick3 = () => {
    setShowDropdown1(false);
    setShowDropdown2(false);

    setShowDropdown3(!showDropdown3);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#posicion0") {
      const element = document.getElementById("posicion0");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const location1 = useLocation();

  useEffect(() => {
    if (location1.hash === "#posicion1") {
      const element = document.getElementById("posicion1");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location1]);

  const location2 = useLocation();

  useEffect(() => {
    if (location2.hash === "#posicion2") {
      const element = document.getElementById("posicion2");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location2]);

  const location3 = useLocation();

  useEffect(() => {
    if (location3.hash === "#posicion3") {
      const element = document.getElementById("posicion3");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location3]);

  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const robotoFontRegular = {
    fontFamily: "Roboto Regular , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "16px",
  };

  const bondiniFontRegular = {
    fontFamily: "Bondini, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const playfairFontItalic = {
    fontFamily: "Playfair Italic, serif",
    fontWeight: "normal",
    fontStyle: "italic",
  };

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  return (
    <Transition
      items={locationAnimacion}
      keys={(location) => location.pathname}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{ duration: 1000 }}
    >
      {(style, item) => (
        <animated.div style={{ ...style, width: "100%" }}>
          <div>
            <div id="posicion0"></div>
            <header className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-5 xl:py-10 px-5 2xl:px-0  fixed top-0 left-0 right-0 z-50">
              <div class="flex justify-between items-center">
                <div class="w-24 md:w-28">
                  <Link to="/">
                    <img src={logo} alt="" className="w-full" />
                  </Link>
                </div>
                <div class="mt-4">
                  <Link to="/MenuHamburguesa">
                    <img
                      src={hambur}
                      alt=""
                      className="w-7 hover:scale-90 transition ease-in-out duration-500"
                    />
                  </Link>
                </div>
              </div>
            </header>

            <div className="bg-[#231F20]">
              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 flex flex-col justify-center items-center pt-24 2xl:pt-36 pb-16 gap-y-5 2xl:gap-y-10">
                <div class="flex flex-col justify-center items-center  bg-[#231F20] ">
                  <h1
                    class="text-xs md:text-lg tracking-widest text-[#F3EEE3]"
                    style={playfairFontItalic}
                  >
                    <i style={playfairFontItalic}>Wines</i>
                  </h1>

                  <h2
                    style={playfairFontBlack}
                    className="text-base md:text-2xl text-[#C4B27D] text-center tracking-wider uppercase"
                  >
                    In the world
                  </h2>
                </div>
                <div className=" flex flex-col gap-y-5 contenido-dinamico-contact">
                  <div className="px-4 w-full  md:w-4/6 mx-auto">
                    <img
                      src={portada}
                      alt=""
                      className="w-full object-cover shadow-custom"
                    />
                  </div>

                  <p
                    className="text-[#F3EEE3] text-xs md:text-base tracking-wider w-2/3 mx-auto text-center md:px-5 hidden"
                    style={playfairFontRegular}
                  >
                    We craft wines with the adventurous spirit inherent to
                    Patagonia, respecting the environment and listening to
                    nature. The result is a collection of wines that never cease
                    to amaze.
                  </p>
                </div>
              </div>
            </div>
            <div id="posicion1"></div>
            <div className=" py-10 bg-[#231F20]">
              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 flex flex-col gap-y-16 md:gap-y-32 md:py-20">
                {/* wine 1 */}
                <div className="flex flex-col justify-center items-center gap-y-5 md:gap-y-0">
                  <div className="flex flex-col md:flex-row gap-y-5 ">
                    <div className="w-1/3 md:w-full mx-auto md:flex md:justify-center md:items-center relative">
                      <img
                        src={riberaClasicoWine}
                        alt=""
                        className="w-full md:w-1/4 z-50"
                      />
                      <img
                        src={logoTransparencia}
                        alt=""
                        className="absolute top-24 contenido-dinamico-contact md:w-[21rem] md:mr-2"
                      />
                    </div>
                    <div className="flex flex-col gap-y-2 md:hidden w-2/3 mx-auto">
                      <h1
                        className="uppercase text-[#C4B27D] text-justify tracking-widest"
                        style={robotoFontRegular}
                      >
                        <span className="text-base md:text-[1.35rem] md:leading-[1.75rem]">
                          Ribera del Cuarzo <br />{" "}
                          <span className="font-bold">CLÁSICO</span>
                        </span>
                      </h1>
                      <h4
                        className=" text-[#F3EEE3] text-justify tracking-widest"
                        style={robotoFontRegular}
                      >
                        <span className="text-xs md:text-base">
                          <i>Patagonia, Argentina</i>
                        </span>
                      </h4>
                    </div>
                    <div className="flex flex-col gap-y-5 md:w-full md:justify-center">
                      <div className="contenido-dinamico-contact flex-col gap-y-2 ">
                        <h1
                          className="uppercase text-[#C4B27D] text-center md:text-left  tracking-widest"
                          style={robotoFontRegular}
                        >
                          <span className="text-base md:text-[1.35rem] md:leading-[1.75rem]">
                            Ribera del Cuarzo <br />{" "}
                            <span className="font-bold">CLÁSICO</span>
                          </span>
                        </h1>
                        <h4
                          className=" text-[#F3EEE3] text-center md:text-left  tracking-widest"
                          style={robotoFontRegular}
                        >
                          <span className="text-xs md:text-base ">
                            <i>Patagonia, Argentina</i>
                          </span>
                        </h4>
                      </div>
                      <div className="w-2/3 mx-auto  md:mx-0 ">
                        <p
                          className="text-[#F3EEE3] text-xs md:text-base tracking-wider text-center text-justify"
                          style={playfairFontRegular}
                        >
                          Clasico Malbec´s grapes come from 8 vineyards located
                          along the 200km on both sides of the river. Through
                          this wine, we aim to showcase the diversity of the
                          classic area of the Río Negro valley.
                        </p>
                      </div>

                      <div className="w-2/3 mx-auto md:mx-0 hidden">
                        <div className="flex justify-center md:justify-start">
                          <a
                            className="border-b border-[#C4B27D]"
                            onClick={handleDownloadClick1}
                          >
                            <div className="w-2 inline-block">
                              <img
                                src={iconDownload}
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <span className="ml-2 text-xs text-[#C4B27D] tracking-wider md:text-lg">
                              Download technical sheet
                            </span>
                          </a>
                        </div>

                        <animated.div style={dropdownAnimation1}>
                          <div className="mt-2 w-48 mx-auto md:mx-0 md:w-2/3">
                            <ul className="text-xs text-[#C4B27D] text-center">
                              <li className="py-2 px-4 hover:bg-gray-100">
                                Opción 1
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100">
                                Opción 2
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100">
                                Opción 3
                              </li>
                            </ul>
                          </div>
                        </animated.div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* wine 1 */}

                {/* wine 2 */}
                <div id="posicion2"></div>
                <div className="flex flex-col justify-center items-center gap-y-5 md:gap-y-0 ">
                  <div className="flex flex-col md:flex-row gap-y-5">
                    <div className="w-1/3 md:w-full mx-auto md:flex md:justify-center md:items-center relative">
                      <img
                        src={riberaEspecial}
                        alt=""
                        className="w-full md:w-1/4 z-50"
                      />
                      <img
                        src={logoTransparencia}
                        alt=""
                        className="absolute top-24 contenido-dinamico-contact bottom-24 md:w-[21rem] md:mr-2"
                      />
                    </div>
                    <div className="flex md:hidden flex-col gap-y-2 w-2/3 mx-auto">
                      <h1
                        className="uppercase text-[#C4B27D] text-justify tracking-widest"
                        style={robotoFontRegular}
                      >
                        <span className="text-base md:text-3xl">
                          Ribera del Cuarzo <br />{" "}
                          <span className="font-bold">especial</span>
                        </span>
                      </h1>
                      <h4
                        className=" text-[#F3EEE3] text-justify  tracking-widest"
                        style={robotoFontRegular}
                      >
                        <span className="text-xs md:text-xl">
                          <i>Patagonia, Argentina</i>
                        </span>
                      </h4>
                    </div>

                    <div className="flex flex-col gap-y-5  md:w-full md:justify-center">
                      <div className="contenido-dinamico-contact flex-col gap-y-2">
                        <h1
                          className="uppercase text-[#C4B27D] text-center md:text-left tracking-widest"
                          style={robotoFontRegular}
                        >
                          <span className="text-base md:text-[1.35rem] md:leading-[1.75rem]">
                            Ribera del Cuarzo <br />{" "}
                            <span className="font-bold">especial</span>
                          </span>
                        </h1>
                        <h4
                          className=" text-[#F3EEE3] text-center md:text-left  tracking-widest"
                          style={robotoFontRegular}
                        >
                          <span className="text-xs md:text-base">
                            <i>Patagonia, Argentina</i>
                          </span>
                        </h4>
                      </div>
                      <div className="w-2/3 mx-auto md:mx-0">
                        <p
                          className="text-[#F3EEE3] text-xs tracking-wider text-justify md:text-base"
                          style={playfairFontRegular}
                        >
                          Especial malbec comes from our 5ha Araucana Vineyard
                          that has unique and distinctive characteristics.
                          Calcareous soils, cold nights and constant winds are
                          permanent challenges for our vines, which react by
                          generating excellent concentration and marked acidity.
                        </p>
                      </div>

                      <div className="w-2/3 mx-auto md:m-0 hidden">
                        <div className="flex justify-center md:justify-start">
                          <a
                            className="border-b border-[#C4B27D]"
                            onClick={handleDownloadClick2}
                          >
                            <div className="w-2 inline-block">
                              <img
                                src={iconDownload}
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <span className="ml-2 text-xs md:text-lg text-[#C4B27D] tracking-wider">
                              Download technical sheet
                            </span>
                          </a>
                        </div>

                        <animated.div style={dropdownAnimation2}>
                          <div className="mt-2 w-48 mx-auto md:mx-0 md:w-2/3">
                            <ul className="text-xs text-[#C4B27D] text-center">
                              <li className="py-2 px-4 hover:bg-gray-100">
                                Opción 1
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100">
                                Opción 2
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100">
                                Opción 3
                              </li>
                            </ul>
                          </div>
                        </animated.div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* wine 2 */}

                {/* wine 3 */}
                <div id="posicion3"></div>
                <div className="flex flex-col justify-center items-center gap-y-5 md:gap-y-0">
                  <div className="flex flex-col md:flex-row gap-y-5">
                    <div className="w-1/3 md:w-full mx-auto md:flex md:justify-center md:items-center relative">
                      <img
                        src={riberaReserva}
                        alt=""
                        className="w-full md:w-1/4 z-50"
                      />
                      <img
                        src={logoTransparencia}
                        alt=""
                        className="absolute top-24 contenido-dinamico-contact md:w-[21rem] md:mr-2"
                      />
                    </div>
                    <div className="flex md:hidden flex-col gap-y-2 w-2/3 mx-auto ">
                      <h1
                        className="uppercase text-[#C4B27D] text-justify md:text-start tracking-widest leading-5"
                        style={robotoFontRegular}
                      >
                        <span className="text-base md:text-3xl">
                          Ribera del Cuarzo <br />{" "}
                          <span className="font-bold">GRAN RESERVA</span>
                        </span>
                      </h1>
                      <h4
                        className="text-[#F3EEE3] text-justify md:text-start  tracking-widest"
                        style={robotoFontRegular}
                      >
                        <span className="text-xs md:text-xl">
                          <i>Patagonia, Argentina</i>
                        </span>
                      </h4>
                    </div>

                    <div className="flex flex-col gap-y-5 md:w-full md:justify-center">
                      <div className="contenido-dinamico-contact flex-col gap-y-2 ">
                        <h1
                          className="uppercase text-[#C4B27D] text-center md:text-start tracking-widest leading-5"
                          style={robotoFontRegular}
                        >
                          <span className="text-base md:text-[1.35rem] md:leading-[1.75rem]">
                            Ribera del Cuarzo <br />{" "}
                            <span className="font-bold">GRAN RESERVA</span>
                          </span>
                        </h1>
                        <h4
                          className="text-[#F3EEE3] text-center md:text-start  tracking-widest"
                          style={robotoFontRegular}
                        >
                          <span className="text-xs md:text-base">
                            <i>Patagonia, Argentina</i>
                          </span>
                        </h4>
                      </div>
                      <div className="w-2/3 mx-auto md:mx-0">
                        <p
                          className="text-[#F3EEE3] text-xs tracking-wider text-justify md:text-base"
                          style={playfairFontRegular}
                        >
                          Gran Reserva is a barrel blend. We select the barrels
                          that show the most elegance from the Southern sector
                          of the vineyard, where the higher limestone content
                          results in greater power and expression.
                        </p>
                      </div>

                      <div className="w-2/3 mx-auto md:mx-0 hidden">
                        <div className="flex justify-center md:justify-start">
                          <a
                            className="border-b border-[#C4B27D]"
                            onClick={handleDownloadClick3}
                          >
                            <div className="w-2 inline-block">
                              <img
                                src={iconDownload}
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <span className="ml-2 text-xs text-[#C4B27D] tracking-wider md:text-lg">
                              Download technical sheet
                            </span>
                          </a>
                        </div>

                        <animated.div style={dropdownAnimation3}>
                          <div className="mt-2 w-48 mx-auto md:mx-0 md:w-2/3 ">
                            <ul className="text-xs text-[#C4B27D] text-center">
                              <li className="py-2 px-4 hover:bg-gray-100">
                                Opción 1
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100">
                                Opción 2
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100">
                                Opción 3
                              </li>
                            </ul>
                          </div>
                        </animated.div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* wine 3 */}
              </div>
            </div>

            <div className="bg-[#231F20]">
              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 pt-20 pb-10">
                <p
                  className="text-[#F3EEE3] text-sm md:text-2xl text-center leading-5"
                  style={playfairFontItalic}
                >
                  <i>
                    Creating unique wines in Patagonia <br />
                    Pioneer in winegrowing at the foot of the <i>barda</i>
                    <br />
                    Small family run winery
                  </i>
                </p>
              </div>
            </div>

            <div className="bg-[#231F20] pt-10 px-5 flex flex-col gap-y-8">
              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 ">
                <div className="w-full md:w-3/4 md:mx-auto border border-[#C4B27D] py-4 md:py-20">
                  <div className="grid grid-cols-4 w-full mx-auto">
                    <div className="flex gap-y-4 md:gap-y-0 flex-col">
                      <img
                        src={araucanaWine}
                        alt=""
                        className="w-full mx-auto md:w-3/4"
                      />
                    </div>
                    <div className="flex gap-y-4 md:gap-y-0 flex-col">
                      <img
                        src={araucanaPinot}
                        alt=""
                        className="w-full mx-auto md:w-3/4"
                      />
                    </div>
                    <div className="flex gap-y-4 md:gap-y-0 flex-col">
                      <img
                        src={araucanaMalbec}
                        alt=""
                        className="w-full mx-auto md:w-3/4"
                      />
                    </div>
                    <div className="flex gap-y-4 md:gap-y-0 flex-col">
                      <img
                        src={araucanaAzul}
                        alt=""
                        className="w-full mx-auto md:w-3/4"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/winesargentina#posicion0">
                <div className="flex justify-center  md:pt-6">
                  <a href="" style={robotoFontRegular}>
                    <span className="uppercase text-xs md:text-xl md:border md:border-transparent md:hover:border-transparent transition ease-in-out duration-500 text-[#F3EEE3] tracking-widest bg-[#C4B27D]  md:hover:bg-[#F3EEE3] md:hover:text-[#C4B27D] rounded-md p-2 md:py-2 md:px-8">
                      View wines in Argentina
                    </span>
                  </a>
                </div>
              </Link>
            </div>

            <div class=" bg-[#231F20]">
              <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 py-20">
                <div class="flex justify-center">
                  <a
                    className={`border border-[#C4B27D] rounded-full p-7 md:p-8 ${
                      igHovered
                        ? "bg-[#C4B27D] transition-bg ease-in-out duration-200"
                        : "bg-transparent transition-bg ease-in-out duration-200"
                    }`}
                    href="https://www.instagram.com/riberadelcuarzo/"
                    target="_blank"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={iconIg}
                      alt=""
                      className={`w-5 md:w-7 ${
                        igHovered ? "filter brightness-200" : ""
                      }`}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
}

export default RioCiervos;
