import React, { useEffect, useRef, useState } from "react";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import riberaClasicoWine from "../images/ribera-clasico-wine.png";
import iconDownload from "../images/icon-download.png";
import riberaEspecial from "../images/ribera-especial-wine.png";
import riberaReserva from "../images/ribera-reserva-wine.png";
import araucanaWineShort from "../images/araucana-wine-short.png";
import araucanaMalbecWineShort from "../images/araucana-malbec-wine-short.png";
import araucanaAzulWineShort from "../images/araucana-azul-wine-short.png";
import cava from "../images/cava.jpg";
import iconIg from "../images/icon-ig.png";
import { Transition, animated } from "@react-spring/web";

import "../App.css";
function RioCiervos() {
  const locationAnimacion = useLocation();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDownloadClick = () => {
    setShowDropdown(!showDropdown);
  };

  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollPosition = parseInt(params.get("scroll") || "0", 10);

    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      window.scrollTo(0, scrollPosition);
    }
  }, [location]);

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
            <header className="py-10 fixed top-0 left-0 right-0 z-50 ">
              <div class="container mx-auto">
                <div class="flex justify-between items-center px-5">
                  <div class="w-20 md:w-36">
                    <Link to="/">
                      <img src={logo} alt="" className="w-full" />
                    </Link>{" "}
                  </div>

                  <div class="w-8">
                    <Link to="/MenuHamburguesa">
                      <img src={hambur} alt="" className="w-full" />
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </header>

            <div className="container mx-auto flex flex-col justify-center items-center  bg-[#231F20] py-28">
              <div className=" flex flex-col gap-y-5">
                <img src={cava} alt="" className="w-full" />
                <p
                  className="text-[#F2ECE1] text-xs tracking-wider px-5  text-center"
                  style={playfairFontRegular}
                >
                  We craft wines with the adventurous spirit inherent to
                  Patagonia, respecting the environment and listening to nature.
                  The result is a collection of wines that never cease to amaze.
                </p>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="bg-[#231F20] flex flex-col gap-y-20"
            >
              <div className="container mx-auto flex flex-col justify-center items-center gap-y-5">
                <div className="w-1/3">
                  <img src={riberaClasicoWine} alt="" className="w-full" />
                </div>

                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-5">
                    <h1
                      className="uppercase text-xs text-[#C3B17D] text-center tracking-widest"
                      style={robotoFontRegular}
                    >
                      Ribera del Cuarzo CLÁSICO
                    </h1>
                    <h4
                      className="text-xs text-[#F2ECE1] text-center  tracking-widest"
                      style={robotoFontRegular}
                    >
                      <i>Patagonia, Argentina</i>
                    </h4>
                  </div>
                  <div className="flex flex-col gap-y-5">
                    <div className="w-2/3 mx-auto">
                      <p
                        className="text-[#F2ECE1] text-xs tracking-wider"
                        style={playfairFontRegular}
                      >
                        Clasico Malbec´s grapes come from 8 vineyards located
                        along the 200km on both sides of the river. Through this
                        wine, we aim to showcase the diversity of the classic
                        area of the Río Negro valley.
                      </p>
                    </div>

                    <div className="w-2/3 mx-auto">
                      <div className="flex justify-center">
                        <a
                          className="border-b border-[#C3B17D]"
                          onClick={handleDownloadClick}
                        >
                          <div className="w-2 inline-block">
                            <img src={iconDownload} alt="" className="w-full" />
                          </div>
                          <span className="ml-2 text-xs text-[#C3B17D] tracking-wider">
                            Download technical sheet
                          </span>
                        </a>
                      </div>

                      {showDropdown && (
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
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="container mx-auto flex flex-col justify-center items-center gap-y-5">
                <div className="w-1/3">
                  <img src={riberaEspecial} alt="" />
                </div>
                <div className="flex flex-col gap-y-5">
                  <h1
                    className="uppercase text-xs text-[#C3B17D] text-center tracking-widest"
                    style={robotoFontRegular}
                  >
                    Ribera del Cuarzo especial
                  </h1>
                  <h4
                    className="text-xs text-[#F2ECE1] text-center  tracking-widest"
                    style={robotoFontRegular}
                  >
                    <i>Patagonia, Argentina</i>
                  </h4>
                </div>
                <div className="flex flex-col gap-y-5">
                  <div className="w-2/3 mx-auto">
                    <p
                      className="text-[#F2ECE1] text-xs tracking-wider"
                      style={playfairFontRegular}
                    >
                      ESPECIAL MALBEC comes from our 5ha Araucana Vineyard that
                      has unique and distinctive characteristics. Calcareous
                      soils, cold nights and constant winds are permanent
                      challenges for our vines, which react by generating
                      excellent concentration and marked acidity.
                    </p>
                  </div>

                  <div className="w-2/3 mx-auto">
                    <div className="flex justify-center">
                      <a
                        className="border-b border-[#C3B17D]"
                        onClick={handleDownloadClick}
                      >
                        <div className="w-2 inline-block">
                          <img src={iconDownload} alt="" className="w-full" />
                        </div>
                        <span className="ml-2 text-xs text-[#C3B17D] tracking-wider">
                          Download technical sheet
                        </span>
                      </a>
                    </div>

                    {showDropdown && (
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
                    )}
                  </div>
                </div>
              </div>

              <div className="container mx-auto flex flex-col justify-center items-center gap-y-5">
                <div className="w-1/3">
                  <img src={riberaReserva} alt="" />
                </div>
                <div className="flex flex-col gap-y-5">
                  <h1
                    className="uppercase text-xs text-[#C3B17D] text-center tracking-widest leading-5"
                    style={robotoFontRegular}
                  >
                    Ribera del Cuarzo <br /> RESERVA ESTIBADA
                  </h1>
                  <h4
                    className="text-xs text-[#F2ECE1] text-center  tracking-widest"
                    style={robotoFontRegular}
                  >
                    <i>Patagonia, Argentina</i>
                  </h4>
                </div>
                <div className="flex flex-col gap-y-5">
                  <div className="w-2/3 mx-auto">
                    <p
                      className="text-[#F2ECE1] text-xs tracking-wider"
                      style={playfairFontRegular}
                    >
                      RESERVA ESTIBADA is a barrel blend. We select the barrels
                      that show the most elegance from the Southern sector of
                      the vineyard, where the higher limestone content results
                      in greater power and expression.
                    </p>
                  </div>

                  <div className="w-2/3 mx-auto">
                    <div className="flex justify-center">
                      <a
                        className="border-b border-[#C3B17D]"
                        onClick={handleDownloadClick}
                      >
                        <div className="w-2 inline-block">
                          <img src={iconDownload} alt="" className="w-full" />
                        </div>
                        <span className="ml-2 text-xs text-[#C3B17D] tracking-wider">
                          Download technical sheet
                        </span>
                      </a>
                    </div>

                    {showDropdown && (
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
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="container mx-auto bg-[#231F20] pt-20 pb-10">
              <div>
                <p
                  className="text-[#F2ECE1] text-xs text-center leading-5"
                  style={bondiniFontRegular}
                >
                  {" "}
                  <i>
                    Creating unique wines in Patagonia <br />
                    Pioneer in winegrowing at the foot of the "barda". <br />
                    Small family run winery
                  </i>
                </p>
              </div>
            </div>

            <div className="bg-[#231F20] py-10 px-5">
              <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-x-4">
                  <div className="flex gap-y-4 flex-col">
                    <img src={araucanaWineShort} alt="" />
                    <div className="bg-[#C3B17D] rounded-md flex justify-center py-2">
                      <a href="" style={robotoFontRegular}>
                        <span className="uppercase text-xs text-[#F2ECE1] tracking-widest">
                          Read more
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-y-4 flex-col">
                    <img src={araucanaMalbecWineShort} alt="" />
                    <div className="bg-[#C3B17D] rounded-md flex justify-center py-2">
                      <a href="" style={robotoFontRegular}>
                        <span className="uppercase text-xs text-[#F2ECE1] tracking-widest">
                          Read more
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-y-4 flex-col">
                    <img src={araucanaAzulWineShort} alt="" />
                    <div className="bg-[#C3B17D] rounded-md flex justify-center py-2">
                      <a href="" style={robotoFontRegular}>
                        <span className="uppercase text-xs text-[#F2ECE1] tracking-widest">
                          Read more
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#231F20] py-10">
              <div className="container mx-auto flex flex-col gap-y-5 ">
                <div className="">
                  <h1
                    className="text-[#C3B17D] text-center text-xs uppercase tracking-widest"
                    style={robotoFontRegular}
                  >
                    Ribera del cuarzo
                  </h1>
                </div>
                <div>
                  <h2
                    className="text-[#F2ECE1] text-center text-xs tracking-widest"
                    style={robotoFontRegular}
                  >
                    <i>Patagonia, Argentina</i>
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-[#231F20] py-20">
              <div className="container mx-auto flex justify-center">
                <div className="border border-[#C3B17D] rounded-full p-7">
                  <img src={iconIg} alt="" className="w-5" />
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
