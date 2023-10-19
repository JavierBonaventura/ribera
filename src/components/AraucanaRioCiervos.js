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
import bottleBottom from "../images/bottle-bottom.png";

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

  const windsorLight = {
    fontFamily: "WindsorLigth, sans-serif",
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
          <div className="bg-[#000]">
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

            <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 flex flex-col justify-center items-center pt-24 2xl:pt-36 pb-16 gap-y-5 2xl:gap-y-10">
              {/* Titular start */}
              <div class="flex flex-col justify-center items-center">
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
              {/* Titular end */}

              {/* Wine start */}
              <div>
                {/* img wine start */}
                <div className="w-32 md:w-52 mx-auto relative flex justify-center items-start py-16 md:py-24">
                  <img
                    src={ImgAraucanaRioCiervos}
                    alt=""
                    className="w-full z-50"
                  />
                  <div className=" absolute w-[20rem] md:w-[29rem] ">
                    <img src={ImgMarcaAgua} alt="" className="w-full " />
                  </div>
                </div>
                {/* img wine end */}
                <div className="flex flex-col gap-y-5  md:gap-y-14   w-2/4 mx-auto ">
                  {/* titular wine start */}
                  <div className="space-y-5 md:space-y-14">
                    <h1
                      className="uppercase text-[#C4B27D] text-center tracking-widest"
                      style={windsorLight}
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
                      located along both sides of the river. Through this wine,
                      we aim to showcase the diversity of the classic area of
                      the Rio Negro valley.
                    </p>
                  </div>
                  {/* titular wine end */}
                  {/* Fichas tecnicas start */}
                  <div>
                    <div className="flex justify-center">
                      <a
                        className="border-b border-[#C4B27D] cursor-pointer"
                        onClick={handleDownloadClick1}
                      >
                        <div className="w-2 inline-block">
                          <img src={iconDownload} alt="" className="w-full" />
                        </div>
                        <span className="ml-2 text-xs md:text-lg text-[#C4B27D] tracking-wider">
                          Download Technical Sheet
                        </span>
                      </a>
                    </div>
                    <animated.div style={dropdownAnimation1}>
                      <div className="w-2/4 mx-auto">
                        <ul className="text-xs md:text-lg text-[#C4B27D] text-center">
                          <li className="py-2 px-4 ">
                            <a href="" className="hover:underline">
                              2021
                            </a>
                          </li>
                        </ul>
                      </div>
                    </animated.div>
                  </div>
                  {/* Fichas tecnicas end */}
                </div>
              </div>
              {/* Wine end */}
            </div>

            {/* Img pre footer start */}
            <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 space-y-20 py-10  md:py-32">
              <div className="py-40 md:py-80 relative" style={bg}>
                <div className="p-6 absolute top-0 w-full h-full ">
                  <div className="border w-full h-full "></div>
                </div>
                <div className="p-8 absolute top-0 w-full h-full ">
                  <div className="border w-full h-full "></div>
                </div>
              </div>
            </div>
            {/* Img pre footer start */}

            {/* Footer bottle start */}
            <div className="pt-[36rem] md:pt-96 lg:pt-[36rem]">
              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 relative">
                <div
                  className="flex flex-col md:flex-row absolute bottom-0  text-[#C4B27D] w-full gap-y-10 md:gap-x-32"
                  style={windsorLight}
                >
                  {/* Bottle 1 start */}
                  <div className="border border-[#C4B27D] px-3 pt-3 md:border-0 md:p-0">
                    <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4">
                      <Link
                        to=""
                        className="text-white text-sm lg:text-lg hover:underline"
                      >
                        READ MORE
                      </Link>
                      <div className="flex flex-col justify-center items-center text-base lg:text-2xl">
                        <span>ARAUCANA</span>
                        <span>Pinot Noir</span>
                      </div>
                    </div>
                    <div className="">
                      <img
                        src={bottleBottom}
                        alt=""
                        className="w-1/2 md:w-auto mx-auto"
                      />
                    </div>
                  </div>
                  {/* Bottle 1 end */}

                  {/* Bottle 2 start */}
                  <div className="border border-[#C4B27D] px-3 pt-3 md:border-0 md:p-0">
                    <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4">
                      <Link
                        to=""
                        className="text-white text-sm lg:text-lg hover:underline"
                      >
                        READ MORE
                      </Link>
                      <div className="flex flex-col justify-center items-center text-base lg:text-2xl">
                        <span>ARAUCANA</span>
                        <span>Malbec</span>
                      </div>
                    </div>
                    <div className="">
                      <img
                        src={bottleBottom}
                        alt=""
                        className="w-1/2 md:w-auto mx-auto"
                      />
                    </div>
                  </div>
                  {/* Bottle 2 end */}

                  {/* Bottle 3 start */}
                  <div className="border border-[#C4B27D] px-3 pt-3 md:border-0 md:p-0">
                    <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4">
                      <Link
                        to=""
                        className="text-white text-sm lg:text-lg hover:underline"
                      >
                        READ MORE
                      </Link>
                      <div className="flex flex-col justify-center items-center text-base lg:text-2xl">
                        <span>ARAUCANA</span>
                        <span>Azul</span>
                      </div>
                    </div>
                    <div className="">
                      <img
                        src={bottleBottom}
                        alt=""
                        className="w-1/2 md:w-auto mx-auto"
                      />
                    </div>
                  </div>
                  {/* Bottle 3 end */}

                  {/* Bottle 4 start */}
                  <div className="border border-[#C4B27D] px-3 pt-3 md:border-0 md:p-0">
                    <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4">
                      <Link
                        to=""
                        className="text-white text-sm lg:text-lg hover:underline"
                      >
                        READ MORE
                      </Link>
                      <div className="flex flex-col justify-center items-center text-base lg:text-2xl">
                        <span>RIBERA DEL CUARZO</span>
                        <span>Parcela Única</span>
                      </div>
                    </div>
                    <div className="">
                      <img
                        src={bottleBottom}
                        alt=""
                        className="w-1/2 md:w-auto mx-auto"
                      />
                    </div>
                  </div>
                  {/* Bottle 4 end */}
                </div>
              </div>
            </div>
            {/* Footer bottle end */}
          </div>
        </animated.div>
      )}
    </Transition>
  );
}

export default Araucana;
