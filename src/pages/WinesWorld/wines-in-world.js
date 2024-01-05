import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import hambur from "../../images/menu-hambur.png";
import iconDownload from "../../images/icon-download.png";
import { useSpring, Transition, animated } from "@react-spring/web";
import ImgMarcaAgua from "../../images/agua-sombra.png";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "../../App.css";
function WinesInWorld() {
  //ANIMACIONES
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible2(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible3(true);
    }, 1300);

    return () => clearTimeout(timeout);
  }, []);

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

  //FUENTES TIPOGRAFICAS
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

  //CONEXION A API REST
  const { t, i18n } = useTranslation();
  //Obtener el idioma seleccionado
  const idiomaSeleccionado = i18n.language;
  console.log(idiomaSeleccionado);
  const { slug } = useParams();
  console.log(slug);
  const [wineData, setWineData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://back-ribera-gl7lw5cfra-uc.a.run.app/api/wines?populate=mainBottleImage%2C%20secondaryImage%2C%20technicalSheet%2C%20relatedImage%20&filters%5Bslug%5D=${slug}&locale=${idiomaSeleccionado}`
        );

        // Incorpora la información de la API aquí
        const fetchedWineData = response.data.data[0]; // Selecciona el primer elemento del array data
        setWineData(fetchedWineData);
      } catch (error) {
        console.error("Error al llamar a la API", error);
      }
    };

    fetchData();
  }, []);

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
                  <i style={playfairFontItalic}>{t("wines.title")}</i>
                </h1>
                <h2
                  style={playfairFontBlack}
                  className={`text-base md:text-2xl text-[#C4B27D] text-center tracking-wider uppercase ${
                    isVisible2 ? "appear-from-bottom" : "invisible"
                  }`}
                >
                  {t("wines.world.title")}
                </h2>
              </div>
              {/* Titular end */}

              {/* Wine start */}
              <div>
                {/* img wine start */}
                {wineData && (
                  <div className="w-32 md:w-52 mx-auto relative flex justify-center items-center py-16 md:py-24">
                    <img
                      src={
                        wineData.attributes.mainBottleImage.data.attributes
                          .formats.small.url
                      }
                      alt={
                        wineData.attributes.mainBottleImage.data.attributes.name
                      }
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
                )}
                {/* img wine end */}
                <div className="flex flex-col gap-y-5  md:gap-y-14   w-2/4 mx-auto ">
                  {/* titular wine start */}
                  {wineData && (
                    <div className="space-y-5 md:space-y-14">
                      <h1
                        className="uppercase text-[#C4B27D] text-center tracking-widest"
                        style={windsorLight}
                      >
                        <span className="text-base md:text-[1.35rem] md:leading-[1.75rem]">
                          {wineData.attributes.familyName} <br />{" "}
                          <span className="font-bold">
                            {wineData.attributes.name}
                          </span>
                        </span>
                      </h1>

                      <p
                        className="text-[#F3EEE3] text-xs md:text-base tracking-wider text-justify md:text-justify"
                        style={playfairFontRegular}
                      >
                        {wineData.attributes.description[0].children[0].text}
                      </p>
                    </div>
                  )}
                  {/* titular wine end */}
                  {/* Fichas tecnicas start */}
                  {wineData && (
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
                            {t("wines.btnSheet")}
                          </span>
                        </a>
                      </div>
                      <animated.div style={dropdownAnimation1}>
                        <div className="w-2/4 mx-auto pt-4">
                          <ul className="text-xs md:text-lg text-[#C4B27D] text-center">
                            {wineData.attributes.technicalSheet &&
                              wineData.attributes.technicalSheet.map(
                                (sheet, index) => (
                                  <li className="py-2 px-4">
                                    <a
                                      key={index}
                                      href={sheet.href}
                                      target={sheet.target}
                                    >
                                      {sheet.text}
                                    </a>
                                  </li>
                                )
                              )}
                          </ul>
                        </div>
                      </animated.div>
                    </div>
                  )}
                  {/* Fichas tecnicas end */}
                </div>
              </div>
              {/* Wine end */}
            </div>

            {/* Img pre footer start */}
            {wineData && (
              <div className="flex justify-center items-center h-full ">
                <div className="container contenedor mx-auto max-w-screen-xl xl:max-w-screen-2xl">
                  <div className="w-full aspect-video h-auto xl:h-[40rem]">
                    <div className="recuadro-1"></div>
                    <div className="recuadro-2"></div>
                    <img
                      src={
                        wineData.attributes.secondaryImage.data.attributes
                          .formats.large.url
                      }
                      className="imagen  absolute xl:top-[-70px] 2xl:top-[-200px]"
                      alt={
                        wineData.attributes.secondaryImage.data.attributes.name
                      }
                    />
                  </div>
                </div>
              </div>
            )}
            {/* Img pre footer start */}
          </div>
        </animated.div>
      )}
    </Transition>
  );
}

export default WinesInWorld;
