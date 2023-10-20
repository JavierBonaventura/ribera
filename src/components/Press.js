import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import iconIg from "../images/icon-ig.png";
import leftArrowImage from "../images/flechaIzquierda.png";
import rightArrowImage from "../images/flechaDerecha.png";
import PressTitulares from "./PressTitulares";

// incluir las imagenes por año
import bgNota1_2022 from "../images/nota-press-1.png";
import bgNota2_2022 from "../images/nota-press-2.png";
import bgNota3_2022 from "../images/nota-press-3.png";

import bgNota1_2023 from "../images/nota-press-3.png";
import bgNota2_2023 from "../images/nota-press-1.png";
import bgNota3_2023 from "../images/nota-press-2.png";

import { Transition, animated } from "@react-spring/web";

import "../App.css";

function Press() {
  const [anoVisible, setAnoVisible] = useState(0);

  // Para que se creen nuevos titulares (componentes) se deben agregar registros en el arreglo titulares2022 o titulares2023

  const anos = ["2022", "2023"];

  const fechas2022 = [
    "31 de Agosto 2022",
    "22 de Mayo 2022",
    "07 de Enero 2022",
  ];

  const titulares2022 = [
    "Entre la barda 2022, un río magnífico y vinos imponentes: un viaje hacia la bodega patagónica Casa Pirque, en Valle Azul",
    "Entre la barda, un río magnífico y vinos imponentes: un viaje hacia la bodega patagónica Casa Pirque, en Valle Azul",
    "Entre la barda 2022, un río magnífico y vinos imponentes: un viaje hacia la bodega patagónica Casa Pirque, en Valle Azul",
  ];

  const fechas2023 = [
    "31 de Agosto 2023",
    "22 de Mayo 2023",
    "13 de Abril 2023",
  ];

  const titulares2023 = [
    "Entre la barda 2023, un río magnífico y vinos imponentes: un viaje hacia la bodega patagónica Casa Pirque, en Valle Azul",
    "Entre la barda, un río magnífico y vinos imponentes: un viaje hacia la bodega patagónica Casa Pirque, en Valle Azul",
  ];

  const imagenes2022 = [bgNota1_2022, bgNota2_2022, bgNota3_2022];

  const imagenes2023 = [bgNota1_2023, bgNota2_2023, bgNota3_2023];

  // funcion para avanzar y retroceder en anios

  const handlePrevClick = () => {
    if (anoVisible > 0) {
      setAnoVisible(anoVisible - 1);
    } else {
      // Si ya estás en el primer año, al hacer clic en "Prev" deberías ir al último año.
      setAnoVisible(anos.length - 1);
    }
  };

  const handleNextClick = () => {
    if (anoVisible < anos.length - 1) {
      setAnoVisible(anoVisible + 1);
    } else {
      // Si ya estás en el último año, al hacer clic en "Next" deberías volver al primer año.
      setAnoVisible(0);
    }
  };

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

            <div className="bg-[#000]">
              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 flex flex-col justify-center items-center pt-24 2xl:pt-36 pb-16 gap-y-5 2xl:gap-y-10">
                <div class="flex flex-col justify-center items-center">
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
                      onClick={handlePrevClick}
                    />
                  </div>
                  <div>
                    <h1
                      className="text-5xl lg:text-9xl text-[#C4B27D]"
                      style={playfairFontBlack}
                    >
                      {anos[anoVisible]}
                    </h1>
                  </div>
                  <div className="w-12 lg:w-20">
                    <img
                      src={rightArrowImage}
                      alt="derecha"
                      className="w-full hover:scale-90 transition ease-in-out duration-300 cursor-pointer"
                      onClick={handleNextClick}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-20 lg:gap-y-40 py-14 lg:py-32 items-center justify-center px-4">
                  <PressTitulares
                    fechas2022={fechas2022}
                    imagenes2022={imagenes2022}
                    titulares2022={titulares2022}
                    fechas2023={fechas2023}
                    imagenes2023={imagenes2023}
                    titulares2023={titulares2023}
                    anoVisible={anoVisible}
                  />
                </div>
              </div>
            </div>

            <div class=" bg-[#000]">
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
