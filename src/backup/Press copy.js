import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import iconIg from "../images/icon-ig.png";
import leftArrowImage from "../images/flechaIzquierda.png";
import rightArrowImage from "../images/flechaDerecha.png";
import bgNota1 from "../images/nota-press-1.png";
import bgNota2 from "../images/nota-press-2.png";
import bgNota3 from "../images/nota-press-3.png";
import { Transition, animated } from "@react-spring/web";

import "../App.css";
function Press() {

  const anios = [
    "2020",
    "2021",
    "2022",
    "2023",
  ];


  const [igHovered, setIgHovered] = useState(false);
  const handleMouseEnter = () => {
    setIgHovered(true);
  };
  const handleMouseLeave = () => {
    setIgHovered(false);
  };

  const locationAnimacion = useLocation();

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

  const bgNotasPrensa1 = {
    backgroundImage: `url(${bgNota1})`, // Establece la imagen de fondo a bmw
    backgroundSize: "cover", // Ajusta el tamaño de la imagen de fondo según el contenedor
    backgroundRepeat: "no-repeat", // Evita que la imagen de fondo se repita
  };

  const bgNotasPrensa2 = {
    backgroundImage: `url(${bgNota2})`, // Establece la imagen de fondo a bmw
    backgroundSize: "cover", // Ajusta el tamaño de la imagen de fondo según el contenedor
    backgroundRepeat: "no-repeat", // Evita que la imagen de fondo se repita
  };

  const bgNotasPrensa3 = {
    backgroundImage: `url(${bgNota3})`, // Establece la imagen de fondo a bmw
    backgroundSize: "cover", // Ajusta el tamaño de la imagen de fondo según el contenedor
    backgroundRepeat: "no-repeat", // Evita que la imagen de fondo se repita
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
                  <h2
                    style={playfairFontBlack}
                    className="text-base md:text-2xl text-[#C4B27D] text-center tracking-wider uppercase"
                  >
                    Press
                  </h2>
                  <h1
                    class="text-xs md:text-lg tracking-widest text-[#F3EEE3]"
                    style={playfairFontRegular}
                  >
                    Lorem ipsum dolor sit amet, consectetuer
                  </h1>
                </div>

                <div className=" flex justify-around items-center w-full">
                  <div className="w-12 lg:w-20">
                    <img
                      src={leftArrowImage}
                      className="w-full hover:scale-90 transition ease-in-out duration-300 cursor-pointer"
                      alt="izquierda"
                    />
                  </div>
                  <div>
                    <h1
                      className="text-5xl lg:text-9xl text-[#C4B27D]"
                      style={playfairFontBlack}
                    >
                      2023
                    </h1>
                  </div>
                  <div className="w-12 lg:w-20">
                    <img
                      src={rightArrowImage}
                      alt="derecha"
                      className="w-full hover:scale-90 transition ease-in-out duration-300 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-20 lg:gap-y-40 py-14 lg:py-32 items-center justify-center px-4">
                  <div className="flex flex-col lg:flex-row w-full lg:gap-x-10 ">
                    <div
                      style={bgNotasPrensa1}
                      className="aspect-video object-cover w-full lg:w-1/3
                       "
                    ></div>
                    <div className="text-[#F3EEE3] w-full lg:w-2/3 flex flex-col justify-between gap-y-2 lg:gap-y-0 py-2 lg:py-0">
                      <div>
                        <span
                          className="text-sm lg:text-base"
                          style={playfairFontItalic}
                        >
                          31 de Agosto 2023
                        </span>
                      </div>
                      <div>
                        <span
                          className="text-base lg:text-lg text-[#C4B27D]"
                          style={playfairFontRegular}
                        >
                          Rescatando el patrimonio del Pinot Noir patagónico
                        </span>
                      </div>
                      <a
                        href=""
                        className="bg-[#C4B27D] rounded-lg px-3 py-2 flex
                       justify-center items-center w-24  hover:opacity-90 transition ease-in-out duration-300"
                      >
                        <span href="" className="text-xs text-white">
                          Read more
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row w-full lg:gap-x-10 ">
                    <div
                      style={bgNotasPrensa2}
                      className="aspect-video object-cover w-full lg:w-1/3
                       "
                    ></div>
                    <div className="text-[#F3EEE3] w-full lg:w-2/3 flex flex-col justify-between gap-y-2 lg:gap-y-0 py-2 lg:py-0">
                      <div>
                        <span
                          className="text-sm lg:text-base"
                          style={playfairFontItalic}
                        >
                          22 de Mayo 2023
                        </span>
                      </div>
                      <div>
                        <span
                          className="text-base lg:text-lg text-[#C4B27D]"
                          style={playfairFontRegular}
                        >
                          Los mejores del mundo. Cuáles son y cuánto cuestan los
                          vinos que, por tiempo limitado, podés beber “por copa”
                          en Buenos Aires
                        </span>
                      </div>
                      <a
                        href=""
                        className="bg-[#C4B27D] rounded-lg px-3 py-2 flex
                       justify-center items-center w-24 hover:opacity-90 transition ease-in-out duration-300"
                      >
                        <span href="" className="text-xs text-white">
                          Read more
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row w-full lg:gap-x-10 ">
                    <div
                      style={bgNotasPrensa3}
                      className="aspect-video object-cover w-full lg:w-1/3
                       "
                    ></div>
                    <div className="text-[#F3EEE3] w-full lg:w-2/3 flex flex-col justify-between  gap-y-2 lg:gap-y-0 py-2 lg:py-0">
                      <div>
                        <span
                          className="text-sm lg:text-base"
                          style={playfairFontItalic}
                        >
                          13 de Abril 2023
                        </span>
                      </div>
                      <div>
                        <span
                          className="text-base lg:text-lg text-[#C4B27D]"
                          style={playfairFontRegular}
                        >
                          From Penguins to Pinot, a Glimpse at Winemaking in
                          Patagonia
                        </span>
                      </div>
                      <a
                        href=""
                        className="bg-[#C4B27D] rounded-lg px-3 py-2 flex
                       justify-center items-center w-24  hover:opacity-90 transition ease-in-out duration-300"
                      >
                        <span href="" className="text-xs text-white">
                          Read more
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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

export default Press;
