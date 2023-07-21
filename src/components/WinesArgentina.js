import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import iconDownload from "../images/icon-download.png";
import araucanaWine from "../images/araucana-rio-wine.png";
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
            <header className="py-10 fixed top-0 left-0 right-0 z-50  ">
              <div class="container mx-auto">
                <div class="flex justify-between items-center px-5 ">
                  <div class="w-24 md:w-36 ">
                    <Link to="/">
                      <img src={logo} alt="" className="w-full" />
                    </Link>{" "}
                  </div>

                  <div class="  mt-4">
                    <Link to="/MenuHamburguesa">
                      <img src={hambur} alt="" className="w-7" />
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </header>

            <div className="container mx-auto flex flex-col justify-center items-center  bg-[#231F20] pt-28 pb-16 gap-y-10 ">
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
                  Wines in Argentina
                </h2>
              </div>
              <div className=" flex flex-col gap-y-5">
                <div className="px-4">
                  <img src={cava} alt="" className="w-full" />
                </div>
                <p
                  className="text-[#F2ECE1] text-xs tracking-wider w-2/3 mx-auto  text-center "
                  style={playfairFontRegular}
                >
                  We craft wines with the adventurous spirit inherent to
                  Patagonia, respecting the environment and listening to nature.
                  The result is a collection of wines that never cease to amaze.
                </p>
              </div>
            </div>

            <div className="bg-[#231F20] container mx-auto flex flex-col gap-y-44">
              <div className="flex flex-col justify-center items-center gap-y-5">
                <div id="posicion1"></div>
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-2">
                    <h1
                      className="uppercase text-[#C3B17D] text-center tracking-widest"
                      style={robotoFontRegular}
                    >
                      <span className="text-base">
                        Araucana <br /> Río de los ciervos
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
                  <div className="w-1/3 mx-auto ">
                    <img src={araucanaWine} alt="" className="w-full" />
                  </div>
                  <div className="flex flex-col gap-y-5">
                    <div className="w-2/3 mx-auto">
                      <p
                        className="text-[#F2ECE1] text-xs tracking-wider text-center"
                        style={playfairFontRegular}
                      >
                        Río de los Ciervos´ grapes come from 8 vineyards located
                        along the 200km on both sides of the river. Through this
                        wine, we aim to showcase the diversity of the classic
                        area of the Río Negro valley.
                      </p>
                    </div>
                    <div className="w-2/3 mx-auto flex justify-center">
                      <a
                        className="border-b border-[#C3B17D]"
                        onClick={handleDownloadClick1}
                      >
                        <div className="w-2 inline-block">
                          <img src={iconDownload} alt="" className="w-full" />
                        </div>
                        <span className="ml-2 text-xs text-[#C3B17D] tracking-wider">
                          Download technical sheet
                        </span>
                      </a>
                    </div>
                    <animated.div style={dropdownAnimation1}>
                      <div className="mt-2 w-48 mx-auto">
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

              <div className="flex flex-col justify-center items-center gap-y-5">
                <div id="posicion2"></div>
                <div className="flex flex-col gap-y-2">
                  <h1
                    className="uppercase text-[#C3B17D] text-center tracking-widest"
                    style={robotoFontRegular}
                  >
                    <span className="text-base">
                      Araucana <br /> Malbec
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
                <div className="w-1/3 mx-auto">
                  <img src={araucanaMalbec} alt="" className="w-full" />
                </div>
                <div className="bg-[#C3B17D] px-5 py-1 rounded-md hidden">
                  <a href="" style={robotoFontRegular}>
                    <span className="uppercase text-xs text-[#F2ECE1] tracking-widest">
                      Read more
                    </span>
                  </a>
                </div>
                <div className="flex flex-col gap-y-5">
                  <div className="w-2/3 mx-auto">
                    <p
                      className="text-[#F2ECE1] text-xs tracking-wider text-center"
                      style={playfairFontRegular}
                    >
                      Araucana malbec comes from our 5 ha Araucana Vineyard that
                      has unique and distinctive characteristics. Calcareous
                      soils, cold nights and constant winds are permanent
                      challenges for our vines, which react by generating
                      excellent concentration and marked acidity.
                    </p>
                  </div>
                  <div className="w-2/3 mx-auto flex justify-center">
                    <a
                      className="border-b border-[#C3B17D]"
                      onClick={handleDownloadClick2}
                    >
                      <div className="w-2 inline-block">
                        <img src={iconDownload} alt="" className="w-full" />
                      </div>
                      <span className="ml-2 text-xs text-[#C3B17D] tracking-wider">
                        Download technical sheet
                      </span>
                    </a>
                  </div>
                  <animated.div style={dropdownAnimation2}>
                    <div className="mt-2 w-48 mx-auto">
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

              <div className="flex flex-col justify-center items-center gap-y-5 ">
                <div id="posicion3"></div>
                <div className="flex flex-col gap-y-2">
                  <h1
                    className="uppercase text-[#C3B17D] text-center tracking-widest"
                    style={robotoFontRegular}
                  >
                    <span className="text-base">
                      Araucana <br /> Azul
                    </span>
                  </h1>
                  <h4
                    className="text-[#F2ECE1] text-center tracking-widest"
                    style={robotoFontRegular}
                  >
                    <span className="text-xs">
                      {" "}
                      <i>Patagonia, Argentina</i>
                    </span>
                  </h4>
                </div>
                <div className="w-1/3 mx-auto">
                  <img src={araucanaAzul} alt="" className="w-full" />
                </div>
                <div className="flex flex-col gap-y-5">
                  <div className="w-2/3 mx-auto">
                    <p
                      className="text-[#F2ECE1] text-xs tracking-wider text-center"
                      style={playfairFontRegular}
                    >
                      Azul is a barrel blend. We select the barrels that show
                      the most elegance from the Southern sector of the
                      vineyard, where the higher limestone content results in
                      greater power and expression.
                    </p>
                  </div>
                  <div className="w-2/3 mx-auto flex justify-center">
                    <a
                      className="border-b border-[#C3B17D]"
                      onClick={handleDownloadClick3}
                    >
                      <div className="w-2 inline-block">
                        <img src={iconDownload} alt="" className="w-full" />
                      </div>
                      <span className="ml-2 text-xs text-[#C3B17D] tracking-wider">
                        Download technical sheet
                      </span>
                    </a>
                  </div>
                  <animated.div style={dropdownAnimation3}>
                    <div className="mt-2 w-48 mx-auto">
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

            <div className="container mx-auto bg-[#231F20] pt-20 pb-10">
              <div>
                <p
                  className="text-[#F2ECE1] text-sm text-center leading-5"
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
              <div className="container mx-auto ">
                <div className="grid grid-cols-3 gap-x-4 ">
                  <div className="flex gap-y-4 flex-col ">
                    <img
                      src={riberaClasico}
                      alt=""
                      className="w-2/3  mx-auto "
                    />
                  </div>
                  <div className="flex gap-y-4 flex-col ">
                    <img
                      src={riberaEspecial}
                      alt=""
                      className="w-2/3 mx-auto"
                    />
                  </div>

                  <div className="flex gap-y-4 flex-col ">
                    <img
                      src={riberaReserva}
                      alt=""
                      className="w-2/3 mx-auto "
                    />
                  </div>
                </div>
              </div>
              <Link to="/winesworld#posicion0">
                <div className="flex justify-center">
                  <a href="" style={robotoFontRegular}>
                    <span className="uppercase text-xs text-[#F2ECE1] tracking-widest bg-[#C3B17D] rounded-md p-2">
                      View wines in the world
                    </span>
                  </a>
                </div>
              </Link>
            </div>

            <div class="container mx-auto bg-[#231F20]">
              <div class="py-20">
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
