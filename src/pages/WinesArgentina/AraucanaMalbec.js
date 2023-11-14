import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import hambur from "../../images/menu-hambur.png";
import iconDownload from "../../images/icon-download.png";
import { useSpring, Transition, animated } from "@react-spring/web";
import ImgAraucanaMalbec from "../../images/araucana-malbec.png";
import ImgMarcaAgua from "../../images/agua-sombra.png";
import BgAraucanaMalbec from "../../images/bg-araucana-malbec.jpg";
import bottleBottom from "../../images/bottle-bottom.png";
import bottleBottomPinot from "../../images/bottle-bottom-pinot.png";
import fichaTecnica2019 from "../../fichas/ficha-tecnica-araucana-malbec-2019.pdf";
import fichaTecnica2020 from "../../fichas/ficha-tecnica-araucana-malbec-2020.pdf";
import fichaTecnica2021 from "../../fichas/ficha-tecnica-araucana-malbec-2021.pdf";
import fichaTecnica2022 from "../../fichas/ficha-tecnica-araucana-malbec-2022.pdf";
import "../../App.css";
function Araucana() {
  // Desplaza a la parte superior cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // retraso de apariciones

  // inicio codigo para retrasar la aparicion de wines
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);
  // fin codigo para retrasar la aparicion de History

  // inicio codigo para retrasar la aparicion de IN ARGENTINA
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible2(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  // fin codigo para retrasar la aparicion de los titulos

  // inicio codigo para retrasar la aparicion de la foto del vino
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible3(true);
    }, 1300);

    return () => clearTimeout(timeout);
  }, []);
  // fin codigo para retrasar la aparicion de los titulos

  // fin retraso de apariciones

  const locationAnimacion = useLocation();
  const [showDropdown1, setShowDropdown1] = useState(false);

  const dropdownAnimation1 = useSpring({
    height: showDropdown1 ? "120px" : "0px",
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
          <div className="bg-[#000000e9]">
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

            <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 flex flex-col justify-center items-center pt-24 2xl:pt-36 pb-24 gap-y-5 2xl:gap-y-10">
              {/* Titular start */}
              <div class="flex flex-col justify-center items-center">
                <h1
                  style={playfairFontItalic}
                  className={`text-xs md:text-lg tracking-widest text-[#F3EEE3] ${
                    isVisible
                      ? "opacity-100 transition-opacity duration-500"
                      : "opacity-0 transition-opacity duration-500"
                  }`}
                >
                  <i style={playfairFontItalic}>Wines</i>
                </h1>
                <h2
                  style={playfairFontBlack}
                  className={`text-base md:text-2xl text-[#C4B27D] text-center tracking-wider uppercase ${
                    isVisible2 ? "appear-from-bottom" : "invisible"
                  }`}
                >
                  In Argentina
                </h2>
              </div>
              {/* Titular end */}

              {/* Wine start */}
              <div>
                {/* img wine start */}
                <div className="w-32 md:w-52 mx-auto relative flex justify-center items-center py-16 md:py-24">
                  <img
                    src={ImgAraucanaMalbec}
                    alt=""
                    className={`w-full z-50 ${
                      isVisible3
                        ? "opacity-100 transition-opacity duration-500"
                        : "opacity-0 transition-opacity duration-500"
                    }`}
                  />
                  <div className=" absolute w-[20rem] md:w-[25rem] ">
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
                        <span className="font-bold">Malbec</span>
                      </span>
                    </h1>

                    <p
                      className="text-[#F3EEE3] text-xs md:text-base tracking-wider text-justify md:text-justify"
                      style={playfairFontRegular}
                    >
                      Araucana Malbec comes from our 5ha Araucana Vineyard that
                      has unique and distinctive characteristics. Calcareous
                      soils, cool nights, and strong winds, are constant
                      challenges for our vines, which leads to wines with
                      excellent concentration and marked natural acidity.
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
                            <a
                              href={fichaTecnica2022}
                              target="_blank"
                              className="hover:underline"
                            >
                              2022
                            </a>
                          </li>
                          <li className="py-2 px-4 ">
                            <a
                              href={fichaTecnica2021}
                              target="_blank"
                              className="hover:underline"
                            >
                              2021
                            </a>
                          </li>
                          <li className="py-2 px-4 ">
                            <a
                              href={fichaTecnica2020}
                              target="_blank"
                              className="hover:underline"
                            >
                              2020
                            </a>
                          </li>
                          <li className="py-2 px-4 ">
                            <a
                              href={fichaTecnica2019}
                              target="_blank"
                              className="hover:underline"
                            >
                              2019
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
            <div className="flex justify-center items-center h-full ">
              <div className="container contenedor mx-auto max-w-screen-xl xl:max-w-screen-2xl">
                <div className="w-full aspect-video h-auto xl:h-[40rem]">
                  <div className="recuadro-1"></div>
                  <div className="recuadro-2"></div>
                  <img
                    src={BgAraucanaMalbec}
                    className="imagen "
                    alt="Araucana"
                  />
                </div>
              </div>
            </div>
            {/* Img pre footer start */}

            {/* Footer bottle start */}
            <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 !pt-20 md:!pt-40 ">
              <div
                className="flex flex-col md:flex-row 0 text-[#C4B27D] w-full gap-y-10 md:gap-x-20 2xl:gap-x-32"
                style={windsorLight}
              >
                {/* Bottle 1 start */}
                <div className="border border-[#C4B27D] flex flex-col justify-between px-3 pt-3 md:border-0 md:p-0">
                  <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4">
                    <Link
                      to="/AraucanaPinotNoir"
                      className="text-white text-sm lg:text-lg border-b border-transparent hover:border-[#C4B27D] hover:text-[#C4B27D] transition duration-300 ease-in-out"
                    >
                      READ MORE
                    </Link>
                    <div className="flex flex-col justify-center items-center text-base  lg:text-xl xl:text-2xl text-center">
                      <span>ARAUCANA</span>
                      <span>Río de los Ciervos Pinot Noir</span>
                    </div>
                  </div>
                  <Link to="/AraucanaPinotNoir">
                    <img
                      src={bottleBottomPinot}
                      alt=""
                      className="w-1/2 md:w-auto mx-auto hover:scale-110 transition ease-in-out duration-300"
                    />
                  </Link>
                </div>
                {/* Bottle 1 end */}

                {/* Bottle 2 start */}
                <div className="border border-[#C4B27D] flex flex-col justify-between px-3 pt-3 md:border-0 md:p-0">
                  <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4">
                    <Link
                      to="/AraucanaRioCiervos"
                      className="text-white text-sm lg:text-lg border-b border-transparent hover:border-[#C4B27D] hover:text-[#C4B27D] transition duration-300 ease-in-out"
                    >
                      READ MORE
                    </Link>
                    <div className="flex flex-col justify-center items-center text-base  lg:text-xl xl:text-2xl text-center">
                      <span>ARAUCANA</span>
                      <span>Río de los Ciervos Malbec</span>
                    </div>
                  </div>
                  <Link to="/AraucanaRioCiervos">
                    <img
                      src={bottleBottom}
                      alt=""
                      className="w-1/2 md:w-auto mx-auto hover:scale-110 transition ease-in-out duration-300"
                    />
                  </Link>
                </div>
                {/* Bottle 2 end */}

                {/* Bottle 3 start */}
                <div className="border border-[#C4B27D] flex flex-col justify-between px-3 pt-3 md:border-0 md:p-0">
                  <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4">
                    <Link
                      to="/AraucanaAzul"
                      className="text-white text-sm lg:text-lg border-b border-transparent hover:border-[#C4B27D] hover:text-[#C4B27D] transition duration-300 ease-in-out"
                    >
                      READ MORE
                    </Link>
                    <div className="flex flex-col justify-center items-center  text-base  lg:text-xl xl:text-2xl text-center">
                      <span>ARAUCANA</span>
                      <span>Azul</span>
                    </div>
                  </div>
                  <Link to="/AraucanaAzul">
                    <img
                      src={bottleBottom}
                      alt=""
                      className="w-1/2 md:w-auto mx-auto hover:scale-110 transition ease-in-out duration-300"
                    />
                  </Link>
                </div>
                {/* Bottle 3 end */}

                {/* Bottle 4 start */}
                <div className="border border-[#C4B27D] flex flex-col justify-between px-3 pt-3 md:border-0 md:p-0">
                  <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4">
                    <Link
                      to="/RiberaParcelaUnicaArg"
                      className="text-white text-sm lg:text-lg border-b border-transparent hover:border-[#C4B27D] hover:text-[#C4B27D] transition duration-300 ease-in-out"
                    >
                      READ MORE
                    </Link>
                    <div className="flex flex-col justify-center items-center text-base lg:text-xl xl:text-2xl text-center">
                      <span>RIBERA DEL CUARZO</span>
                      <span>Parcela Única</span>
                    </div>
                  </div>
                  <Link to="/RiberaParcelaUnicaArg">
                    <img
                      src={bottleBottom}
                      alt=""
                      className="w-1/2 md:w-auto mx-auto hover:scale-110 transition ease-in-out duration-300"
                    />
                  </Link>
                </div>
                {/* Bottle 4 end */}
              </div>
            </div>
          </div>
          {/* Footer bottle end */}
        </animated.div>
      )}
    </Transition>
  );
}

export default Araucana;
