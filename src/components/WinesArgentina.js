import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import iconDownload from "../images/icon-download.png";
import araucanaWine from "../images/araucana-rio-wine.png";
import pinotWine from "../images/araucana-pino-wine.png";
import araucanaMalbec from "../images/araucana-malbec-wine.png";
import araucanaAzul from "../images/araucana-azul-wine.png";
import riberaClasico from "../images/ribera-clasico-wine.png";
import riberaEspecial from "../images/ribera-especial-wine.png";
import riberaReserva from "../images/ribera-reserva-wine.png";
import cava from "../images/cava.jpg";
import iconIg from "../images/icon-ig.png";
import { useSpring, Transition, animated } from "@react-spring/web";

import "../App.css";
function Araucana() {
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
    if (location3.hash === "#posicion2") {
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
            <header className="container mx-auto py-10 fixed top-0 left-0 right-0 z-50 px-5 md:px-0 md:py-2  max-w-screen-xl">
              <div class="flex justify-between items-center">
                <div class="w-24 md:w-28">
                  <Link to="/">
                    <img src={logo} alt="" className="w-full" />
                  </Link>
                </div>
                <div class="mt-4">
                  <Link to="/MenuHamburguesa">
                    <img src={hambur} alt="" className="w-7 " />
                  </Link>
                </div>
              </div>
            </header>

            <div className="bg-[#231F20]">
              <div className="container mx-auto max-w-screen-xl flex flex-col justify-center items-center pt-28 pb-16 gap-y-10 ">
                <div class="flex flex-col justify-center items-center  bg-[#231F20] ">
                  <h1
                    class="text-xs tracking-widest text-[#F2ECE1]"
                    style={playfairFontItalic}
                  >
                    <i style={playfairFontItalic}>Wines</i>
                  </h1>
                  <h2
                    style={playfairFontBlack}
                    className="text-base text-[#C4AC77] text-center tracking-wider uppercase"
                  >
                    In Argentina
                  </h2>
                </div>
                <div className=" flex flex-col gap-y-5">
                  <div className="px-4">
                    <img
                      src={cava}
                      alt=""
                      className="w-full md:w-5/6 mx-auto"
                    />
                  </div>
                  <p
                    className="text-[#F2ECE1] text-xs tracking-wider w-2/3 mx-auto text-center md:text-lg"
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

            <div className="bg-[#231F20]">
              <div className="container mx-auto max-w-screen-xl flex flex-col gap-y-16 md:gap-y-32 md:py-20 ">
                <div className="flex flex-col justify-center items-center gap-y-5 md:gap-y-0">
                  <div id="posicion1"></div>
                  <div className="flex flex-col md:flex-row gap-y-5">
                    <div className="w-1/3 md:w-full mx-auto md:flex md:justify-center">
                      <img
                        src={araucanaWine}
                        alt=""
                        className="w-full md:w-32"
                      />
                    </div>
                    <div className="flex flex-col gap-y-2 md:hidden">
                      <h1
                        className="uppercase text-[#C3B17D] text-center tracking-widest"
                        style={robotoFontRegular}
                      >
                        <span className="text-base">
                          Araucana <br />{" "}
                          <span className="font-bold">
                            Río de los ciervos Malbec
                          </span>
                        </span>
                      </h1>
                      <h4
                        className=" text-[#F2ECE1] text-center tracking-widest"
                        style={robotoFontRegular}
                      >
                        <span className="text-xs">
                          <i>Patagonia, Argentina</i>
                        </span>
                      </h4>
                    </div>

                    <div className="flex flex-col gap-y-5 md:w-full">
                      <div className="hidden flex-col gap-y-2 md:flex">
                        <h1
                          className="uppercase text-[#C3B17D] text-center md:text-left tracking-widest"
                          style={robotoFontRegular}
                        >
                          <span className="text-base md:text-3xl">
                            Araucana <br />{" "}
                            <span className="font-bold">
                              Río de los ciervos
                            </span>
                          </span>
                        </h1>
                        <h4
                          className=" text-[#F2ECE1] text-center md:text-left tracking-widest"
                          style={robotoFontRegular}
                        >
                          <span className="text-xs md:text-xl">
                            <i>Patagonia, Argentina</i>
                          </span>
                        </h4>
                      </div>
                      <div className="w-2/3 mx-auto md:mx-0">
                        <p
                          className="text-[#F2ECE1] text-xs md:text-lg tracking-wider text-center md:text-justify"
                          style={playfairFontRegular}
                        >
                          Río de los Ciervos´ grapes come from 8 vineyards
                          located along the 200km on both sides of the river.
                          Through this wine, we aim to showcase the diversity of
                          the classic area of the Río Negro valley.
                        </p>
                      </div>
                      <div className="w-2/3 mx-auto md:mx-0">
                        <div className="flex justify-center md:justify-start">
                          <a
                            className="border-b border-[#C3B17D]"
                            onClick={handleDownloadClick1}
                          >
                            <div className="w-2 inline-block">
                              <img
                                src={iconDownload}
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <span className="ml-2 text-xs md:text-lg text-[#C3B17D] tracking-wider">
                              Download technical sheet
                            </span>
                          </a>
                        </div>

                        <animated.div style={dropdownAnimation1}>
                          <div className="mt-2 w-48 mx-auto md:w-2/3 md:mx-0">
                            <ul className="text-xs text-[#C3B17D] text-center">
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

                <div className="flex flex-col justify-center items-center gap-y-5 md:gap-y-0">
                  <div id="posicion4"></div>
                  <div className="flex flex-col md:flex-row gap-y-5">
                    <div className="w-1/3 md:w-full mx-auto md:flex md:justify-center">
                      <img src={pinotWine} alt="" className="w-full md:w-32" />
                    </div>
                    <div className="flex flex-col gap-y-2 md:hidden">
                      <h1
                        className="uppercase text-[#C3B17D] text-center tracking-widest"
                        style={robotoFontRegular}
                      >
                        <span className="text-base">
                          Araucana <br />{" "}
                          <span className="font-bold">
                            Río de los ciervos Pinot Noir
                          </span>
                        </span>
                      </h1>
                      <h4
                        className=" text-[#F2ECE1] text-center tracking-widest"
                        style={robotoFontRegular}
                      >
                        <span className="text-xs">
                          <i>Patagonia, Argentina</i>
                        </span>
                      </h4>
                    </div>

                    <div className="flex flex-col gap-y-5 md:w-full">
                      <div className="hidden flex-col gap-y-2 md:flex">
                        <h1
                          className="uppercase text-[#C3B17D] text-center md:text-left tracking-widest"
                          style={robotoFontRegular}
                        >
                          <span className="text-base md:text-3xl">
                            Araucana <br />{" "}
                            <span className="font-bold">
                              Río de los ciervos
                            </span>
                          </span>
                        </h1>
                        <h4
                          className=" text-[#F2ECE1] text-center md:text-left tracking-widest"
                          style={robotoFontRegular}
                        >
                          <span className="text-xs md:text-xl">
                            <i>Patagonia, Argentina</i>
                          </span>
                        </h4>
                      </div>
                      <div className="w-2/3 mx-auto md:mx-0">
                        <p
                          className="text-[#F2ECE1] text-xs md:text-lg tracking-wider text-center md:text-justify"
                          style={playfairFontRegular}
                        >
                          Río de los Ciervos´ grapes come from 8 vineyards
                          located along the 200km on both sides of the river.
                          Through this wine, we aim to showcase the diversity of
                          the classic area of the Río Negro valley.
                        </p>
                      </div>
                      <div className="w-2/3 mx-auto md:mx-0">
                        <div className="flex justify-center md:justify-start">
                          <a
                            className="border-b border-[#C3B17D]"
                            onClick={handleDownloadClick1}
                          >
                            <div className="w-2 inline-block">
                              <img
                                src={iconDownload}
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <span className="ml-2 text-xs md:text-lg text-[#C3B17D] tracking-wider">
                              Download technical sheet
                            </span>
                          </a>
                        </div>

                        <animated.div style={dropdownAnimation1}>
                          <div className="mt-2 w-48 mx-auto md:w-2/3 md:mx-0">
                            <ul className="text-xs text-[#C3B17D] text-center">
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

                <div className="flex flex-col justify-center items-center gap-y-5 md:gap-y-0">
                  <div id="posicion2"></div>
                  <div className="flex flex-col md:flex-row gap-y-5 ">
                    <div className="w-1/3 md:w-full mx-auto md:flex md:justify-center ">
                      <img
                        src={araucanaMalbec}
                        alt=""
                        className="w-full md:w-32"
                      />
                    </div>
                    <div className="flex md:hidden flex-col md:fl gap-y-2">
                      <h1
                        className="uppercase text-[#C3B17D] text-center tracking-widest"
                        style={robotoFontRegular}
                      >
                        <span className="text-base">
                          Araucana <br />{" "}
                          <span className="font-bold">Malbec</span>
                        </span>
                      </h1>
                      <h4
                        className=" text-[#F2ECE1] text-center tracking-widest"
                        style={robotoFontRegular}
                      >
                        {" "}
                        <span className="text-xs">
                          <i>Patagonia, Argentina</i>
                        </span>
                      </h4>
                    </div>
                    <div className="flex flex-col gap-y-5 md:w-full ">
                      <div className="md:flex hidden flex-col gap-y-2">
                        <h1
                          className="uppercase text-[#C3B17D] text-center md:text-left tracking-widest"
                          style={robotoFontRegular}
                        >
                          <span className="text-base md:text-3xl">
                            Araucana <br />{" "}
                            <span className="font-bold">Malbec</span>
                          </span>
                        </h1>
                        <h4
                          className=" text-[#F2ECE1] text-center md:text-left tracking-widest"
                          style={robotoFontRegular}
                        >
                          {" "}
                          <span className="text-xs md:text-lg">
                            <i>Patagonia, Argentina</i>
                          </span>
                        </h4>
                      </div>
                      <div className="w-2/3 mx-auto md:mx-0">
                        <p
                          className="text-[#F2ECE1] text-xs md:text-justify md:text-lg tracking-wider text-center"
                          style={playfairFontRegular}
                        >
                          Araucana malbec comes from our 5 ha Araucana Vineyard
                          that has unique and distinctive characteristics.
                          Calcareous soils, cold nights and constant winds are
                          permanent challenges for our vines, which react by
                          generating excellent concentration and marked acidity.
                        </p>
                      </div>
                      <div className="w-2/3 mx-auto md:mx-0">
                        <div className="flex justify-center md:justify-start">
                          <a
                            className="border-b border-[#C3B17D]"
                            onClick={handleDownloadClick2}
                          >
                            <div className="w-2 inline-block">
                              <img
                                src={iconDownload}
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <span className="ml-2 text-xs md:text-lg text-[#C3B17D] tracking-wider">
                              Download technical sheet
                            </span>
                          </a>
                        </div>
                        <animated.div style={dropdownAnimation2}>
                          <div className="mt-2 w-48 mx-auto md:mx-0 md:w-2/3">
                            <ul className="text-xs text-[#C3B17D] text-center">
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

                <div className="flex flex-col justify-center items-center gap-y-5 md:gap-y-0">
                  <div id="posicion3"></div>
                  <div className="flex flex-col md:flex-row gap-y-5">
                    <div className="w-1/3 md:w-full mx-auto md:flex md:justify-center  ">
                      <img
                        src={araucanaAzul}
                        alt=""
                        className="w-full md:w-32"
                      />
                    </div>
                    <div className="flex md:hidden flex-col gap-y-2">
                      <h1
                        className="uppercase text-[#C3B17D] text-center tracking-widest"
                        style={robotoFontRegular}
                      >
                        <span className="text-base">
                          Araucana <br />{" "}
                          <span className="font-bold">Azul</span>
                        </span>
                      </h1>
                      <h4
                        className="text-[#F2ECE1] text-center tracking-widest"
                        style={robotoFontRegular}
                      >
                        <span className="text-xs">
                          <i>Patagonia, Argentina</i>
                        </span>
                      </h4>
                    </div>
                    <div className="flex flex-col gap-y-5 md:w-full">
                      <div className="hidden md:flex flex-col gap-y-2">
                        <h1
                          className="uppercase text-[#C3B17D] text-center md:text-left tracking-widest"
                          style={robotoFontRegular}
                        >
                          <span className="text-base md:text-3xl">
                            Araucana <br />{" "}
                            <span className="font-bold">Azul</span>
                          </span>
                        </h1>
                        <h4
                          className="text-[#F2ECE1] text-center md:text-left tracking-widest"
                          style={robotoFontRegular}
                        >
                          <span className="text-xs md:text-lg">
                            {" "}
                            <i>Patagonia, Argentina</i>
                          </span>
                        </h4>
                      </div>
                      <div className="w-2/3 mx-auto md:mx-0">
                        <p
                          className="text-[#F2ECE1] text-xs md:text-lg tracking-wider text-center md:text-justify"
                          style={playfairFontRegular}
                        >
                          Azul is a barrel blend. We select the barrels that
                          show the most elegance from the Southern sector of the
                          vineyard, where the higher limestone content results
                          in greater power and expression.
                        </p>
                      </div>
                      <div className="w-2/3 mx-auto md:mx-0">
                        <div className="flex justify-center md:justify-start">
                          <a
                            className="border-b border-[#C3B17D]"
                            onClick={handleDownloadClick3}
                          >
                            <div className="w-2 inline-block">
                              <img
                                src={iconDownload}
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <span className="ml-2 text-xs md:text-lg text-[#C3B17D] tracking-wider">
                              Download technical sheet
                            </span>
                          </a>
                        </div>
                        <animated.div style={dropdownAnimation3}>
                          <div className="mt-2 w-48 mx-auto md:mx-0 md:w-2/3 ">
                            <ul className="text-xs text-[#C3B17D] text-center">
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
              </div>
            </div>

            <div className="bg-[#231F20]">
              <div className="container mx-auto max-w-screen-xl pt-20 pb-10">
                <p
                  className="text-[#F2ECE1] text-sm md:text-4xl text-center leading-5"
                  style={playfairFontItalic}
                >
                  <i>
                    Creating unique wines in Patagonia <br />
                    Pioneer in winegrowing at the foot of the <i>barda</i>.{" "}
                    <br />
                    Small family run winery
                  </i>
                </p>
              </div>
            </div>

            <div className="bg-[#231F20] px-5 pt-10 flex flex-col gap-y-8">
              <div className="container mx-auto  ">
                <div className="w-full md:w-3/4 md:mx-auto md:border md:border-[#C3B17D] md:py-8 md:border-opacity-30">
                  <div className="grid grid-cols-3 gap-x-4 md:gap-x-0 md:w-3/4 md:mx-auto">
                    <div className="flex gap-y-4 md:gap-y-0 flex-col ">
                      <img
                        src={riberaClasico}
                        alt=""
                        className="w-2/3 mx-auto md:w-40"
                      />
                    </div>
                    <div className="flex gap-y-4 md:gap-y-0 flex-col md:pt-5 ">
                      <img
                        src={riberaEspecial}
                        alt=""
                        className="w-2/3 mx-auto md:w-40"
                      />
                    </div>
                    <div className="flex gap-y-4  md:gap-y-0 flex-col">
                      <img
                        src={riberaReserva}
                        alt=""
                        className="w-2/3 mx-auto md:w-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/winesworld#posicion0">
                <div className="flex justify-center md:-mt-12">
                  <a href="" style={robotoFontRegular}>
                    <span className="uppercase text-xs md:text-2xl md:border md:border-transparent md:hover:border-[#C3B17D] transition ease-in-out duration-500 text-[#F2ECE1] tracking-widest bg-[#C3B17D] md:hover:bg-[#231F20] md:hover:text-[#C3B17D] rounded-md p-2 md:py-2 md:px-8">
                      View wines in the world
                    </span>
                  </a>
                </div>
              </Link>
            </div>

            <div class=" bg-[#231F20]">
              <div class="container mx-auto max-w-screen-xl py-20">
                <div class="flex justify-center">
                  <a
                    class="border border-[#C3B17D] rounded-full p-7"
                    href="https://www.instagram.com/riberadelcuarzo/"
                    target="_blank"
                  >
                    <img src={iconIg} alt="" class="w-5" />
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

export default Araucana;
