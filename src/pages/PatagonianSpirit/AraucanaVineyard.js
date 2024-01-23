import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useParams } from "react-router-dom";
import logo from "../../images/logo.svg";
import hambur from "../../images/menu-hambur.png";
import iconIg from "../../images/icon-ig.png";
import "../../App.css";

const ConstructionPage = () => {
  // inicio codigo para retrasar la aparicion de History
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);
  // fin codigo para retrasar la aparicion de History

  // inicio codigo para retrasar la aparicion de los titulos
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible2(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  // fin codigo para retrasar la aparicion de los titulos

  // inicio codigo para retrasar la aparicion del sub menu
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible3(true);
    }, 1300);

    return () => clearTimeout(timeout);
  }, []);
  // fin codigo para retrasar la aparicion de los titulos

  const [igHovered, setIgHovered] = useState(false);
  const handleMouseEnter = () => {
    setIgHovered(true);
  };
  const handleMouseLeave = () => {
    setIgHovered(false);
  };

  const location = useLocation();

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };
  const playfairFontItalic = {
    fontFamily: "Playfair Italic, serif",
    fontWeight: "normal",
    fontStyle: "italic",
  };

  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  //API REST
  const { t, i18n } = useTranslation();
  const idiomaSeleccionado = i18n.language;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // URL de la API
  const apiUrlEnglish =
    "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques%2C%20bloques.image&filters%5Bslug%5D=araucana-vineyard&locale=en";
  const apiUrlSpanish =
    "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques%2C%20bloques.image&filters%5Bslug%5D=araucana-vineyard-es&locale=es";
  let apiUrl;

  if (idiomaSeleccionado === "en") {
    apiUrl = apiUrlEnglish;
  } else {
    apiUrl = apiUrlSpanish;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error al cargar los datos</div>;
  }

  if (!data) {
    return <div>Cargando...</div>;
  }

  return (
    <Transition
      items={location}
      keys={(location) => location.pathname}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{ duration: 1000 }}
    >
      {(style, item) => (
        <animated.div style={{ ...style, width: "100%" }}>
          <div>
            <body class="bg-[#F3EEE3] ">
              <header className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-5 xl:py-10 px-5 2xl:px-0 fixed top-0 left-0 right-0 z-50">
                <div class="flex justify-between items-center">
                  <div class="">
                    <Link to="/">
                      <img src={logo} alt="" className="w-24 md:w-28" />
                    </Link>
                  </div>
                  <div class="mt-4">
                    <Link to="/menu">
                      <img
                        src={hambur}
                        alt=""
                        className="w-7 hover:scale-90 transition ease-in-out duration-500"
                      />
                    </Link>
                  </div>
                </div>
              </header>

              <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0">
                <div class="pt-24 md:pb-0 lg:pt-24 2xl:pt-36 flex flex-col gap-y-5 2xl:gap-y-10">
                  <div class="flex flex-col justify-center items-center md:mt-0 md:gap-y-0">
                    <h1
                      style={playfairFontItalic}
                      className={`text-[#5f5f5e] text-xs md:text-lg tracking-widest ${
                        isVisible
                          ? "opacity-100 transition-opacity duration-500"
                          : "opacity-0 transition-opacity duration-500"
                      }`}
                    >
                      <i style={playfairFontItalic}>{t("patagonian.title")}</i>
                    </h1>
                    <h2
                      style={playfairFontBlack}
                      className={`text-base md:text-2xl text-[#C4B27D] tracking-wider uppercase ${
                        isVisible2 ? "appear-from-bottom" : "invisible"
                      }`}
                    >
                      {t("patagonian.araucanaVineyard.title")}
                    </h2>
                  </div>
                  {/* major img start*/}
                  <div class="relative flex justify-center items-center  md:pt-0 px-4 md:px-0">
                    <img
                      src={
                        data.data[0]?.attributes?.bloques[0]?.image?.data
                          ?.attributes?.url
                      }
                      alt=""
                      class="w-full object-cover md:w-2/3 mx-auto shadow-2xl"
                    />
                  </div>
                  {/* major img end*/}
                </div>
              </div>
              {/* paragraph 1 start*/}
              <div class="container mx-auto py-5 md:py-12 xl:py-12  max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 ">
                <p
                  class="text-[#000000] tracking-wider text-justify px-10 md:px-32 md:w-3/4 mx-auto text-xs  lg:text-base lg:leading-7 md:pt-5"
                  style={playfairFontRegular}
                  dangerouslySetInnerHTML={{
                    __html: data.data[0]?.attributes?.bloques[0]?.text,
                  }}
                ></p>
              </div>
              {/* paragraph 1 end*/}

              {/* major img 2 start*/}
              <div className="container mx-auto px-4  max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0">
                <img
                  src={
                    data.data[0]?.attributes?.bloques[1]?.image?.data
                      ?.attributes?.url
                  }
                  alt=""
                  className="w-full md:w-2/3 mx-auto shadow-2xl"
                />
              </div>
              {/* major img 2 end*/}

              <div class="container mx-auto pt-5 md:pt-12 max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0">
                {/* paragraph 2 start*/}
                <p
                  class="text-[#000000] tracking-wider text-justify px-10 md:px-32 md:w-3/4 mx-auto text-xs  lg:text-base lg:leading-7"
                  style={playfairFontRegular}
                  dangerouslySetInnerHTML={{
                    __html: data.data[0]?.attributes?.bloques[1]?.text,
                  }}
                ></p>
                {/* paragraph 2 end*/}

                <div class="py-20">
                  <div class="flex justify-center">
                    <a
                      className={`border border-[#C3B17D] rounded-full p-7 md:p-8 ${
                        igHovered
                          ? "bg-[#C3B17D] transition-bg ease-in-out duration-200"
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
            </body>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default ConstructionPage;
