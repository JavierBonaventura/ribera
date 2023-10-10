import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import iconDownload from "../images/icon-download.png";
import { useSpring, Transition, animated } from "@react-spring/web";
import ImgAraucanaRioCiervos from "../images/araucana-rio-ciervos.png";
import ImgMarcaAgua from "../images/agua-sombra.png";
import BgAraucanaRioCiervos from "../images/bg-araucana-rio-ciervos.jpg";

import "../App.css";
function Araucana() {
  const bg = {
    backgroundImage: `url(${BgAraucanaRioCiervos})`, // Establece la imagen de fondo a bmw
    backgroundSize: "cover", // Ajusta el tamaño de la imagen de fondo según el contenedor
    backgroundRepeat: "no-repeat", // Evita que la imagen de fondo se repita
  };
  const locationAnimacion = useLocation();
  const [showDropdown1, setShowDropdown1] = useState(false);

  const dropdownAnimation1 = useSpring({
    height: showDropdown1 ? "100px" : "0px",
    opacity: showDropdown1 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 500 },
  });

  const handleDownloadClick1 = () => {
    setShowDropdown1(!showDropdown1);
  };

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
                    In Argentina
                  </h2>
                </div>
              </div>
            </div>

            <div className=" bg-[#231F20]">
              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 space-y-20  py-20">
                {/* wine 1 */}
                <div className="w-52  mx-auto relative flex justify-center items-start ">
                  <img
                    src={ImgAraucanaRioCiervos}
                    alt=""
                    className="w-full z-50"
                  />
                  <div className=" absolute w-[29rem] ">
                    <img src={ImgMarcaAgua} alt="" className="w-full " />
                  </div>
                </div>

                <div className="flex flex-col gap-y-5   w-2/4 mx-auto ">
                  <h1
                    className="uppercase text-[#C4B27D] text-center tracking-widest"
                    style={robotoFontRegular}
                  >
                    <span className="text-base md:text-[1.35rem] md:leading-[1.75rem]">
                      Araucana <br />{" "}
                      <span className="font-bold">Río de los ciervos</span>
                    </span>
                  </h1>

                  <p
                    className="text-[#F3EEE3] text-xs md:text-base tracking-wider text-justify md:text-justify"
                    style={playfairFontRegular}
                  >
                    Río de los Ciervos Malbec´s grapes come from 8 vineyards
                    located along both sides of the river. Through this wine, we
                    aim to showcase the diversity of the classic area of the Rio
                    Negro valley.
                  </p>

                  <div className="flex justify-center">
                    <a
                      className="border-b border-[#C4B27D]"
                      onClick={handleDownloadClick1}
                    >
                      <div className="w-2 inline-block">
                        <img src={iconDownload} alt="" className="w-full" />
                      </div>
                      <span className="ml-2 text-xs md:text-lg text-[#C4B27D] tracking-wider">
                        Download technical sheet
                      </span>
                    </a>
                  </div>

                  <animated.div style={dropdownAnimation1}>
                    <div className="w-2/4 mx-auto">
                      <ul className="text-xs text-[#C4B27D] text-center">
                        <li className="py-2 px-4 ">
                          <a href="" className="hover:underline">
                            2022
                          </a>
                        </li>
                        <li className="py-2 px-4 ">
                          <a href="" className="hover:underline">
                            2020
                          </a>
                        </li>{" "}
                        <li className="py-2 px-4 ">
                          <a href="" className="hover:underline">
                            2018
                          </a>
                        </li>
                      </ul>
                    </div>
                  </animated.div>
                </div>

                <div className="py-80 relative " style={bg}>
                  <div className="p-6 absolute top-0 w-full h-full ">
                    <div className="border w-full h-full "></div>
                  </div>
                  <div className="p-8 absolute top-0 w-full h-full ">
                    <div className="border w-full h-full "></div>
                  </div>
                </div>

                {/* wine 1 */}
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
}

export default Araucana;
