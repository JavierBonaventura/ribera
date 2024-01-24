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
import Loaded from "../../components/Loaded";
import Error from "../../components/Error";
import "../../App.css";

const ValleAzul = () => {
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

  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // URL de la API
  const apiUrlEnglish =
    "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques%2C%20bloques.image&filters%5Bslug%5D=valle-azul&locale=en";
  const apiUrlSpanish =
    "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques%2C%20bloques.image&filters%5Bslug%5D=valle-azul-es&locale=es";
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
    return (
      <div>
        <Error />
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <Loaded />
      </div>
    );
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
            <body class="bg-[#F3EEE3]">
              <header className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-5 xl:py-10 px-5 2xl:px-0 fixed top-0 left-0 right-0 z-50">
                <div class="flex justify-between items-center  ">
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

              <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 ">
                <div class="pt-24 2xl:pt-36 flex flex-col gap-y-5 2xl:gap-y-10 ">
                  <div class="flex flex-col justify-center items-center md:mt-0 md:gap-y-0">
                    <h1
                      style={playfairFontItalic}
                      className={`text-[#5f5f5e] text-xs md:text-lg tracking-widest ${
                        isVisible
                          ? "opacity-100 transition-opacity duration-500"
                          : "opacity-0 transition-opacity duration-500"
                      }`}
                    >
                      <i style={playfairFontItalic}>{t("history.title")}</i>
                    </h1>
                    <h2
                      style={playfairFontBlack}
                      className={`text-base md:text-2xl text-[#C4B27D] tracking-wider uppercase ${
                        isVisible2 ? "appear-from-bottom" : "invisible"
                      }`}
                    >
                      {t("history.valleAzul.title")}
                    </h2>
                  </div>

                  {/* major img start*/}
                  <div class="relative flex justify-center items-center md:pt-0 px-4 md:px-0">
                    <img
                      src={
                        data.data[0]?.attributes?.bloques[0]?.image?.data
                          ?.attributes?.url
                      }
                      alt=""
                      class="w-full aspect-video object-cover md:w-2/3 mx-auto shadow-2xl"
                    />
                  </div>

                  {/* major img end*/}
                </div>
              </div>

              {/* paragraph 1 start*/}
              <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0">
                <div class="pt-5 pb-10 flex flex-col gap-y-5">
                  <p
                    class="text-[#000000]  tracking-wider text-justify px-10 md:px-14 lg:px-20 xl:px-32 md:w-3/4 mx-auto text-xs lg:text-base lg:leading-7"
                    style={playfairFontRegular}
                    dangerouslySetInnerHTML={{
                      __html: data.data[0]?.attributes?.bloques[0]?.text,
                    }}
                  ></p>
                </div>
              </div>
              {/* paragraph 1 end*/}

              <div class=" bg-[#212121] ">
                <div class="container mx-auto  max-w-screen-xl xl:max-w-screen-2xl py-5 px-4 md:px-5 2xl:px-0 ">
                  {/* major img 2 start*/}
                  <div className=" w-full md:w-2/3 mx-auto">
                    <img
                      src={
                        data.data[0]?.attributes?.bloques[1]?.image?.data
                          ?.attributes?.url
                      }
                      alt=""
                      className="-mb-10 md:-mb-24 w-full shadow-custom aspect-video object-cover"
                    />
                  </div>
                  {/* major img 2 end*/}
                </div>
              </div>
              {/* paragraph 2 start*/}
              <div class="container mx-auto  max-w-screen-xl xl:max-w-screen-2xl bg-[#F3EEE3] md:px-5 2xl:px-0">
                <div class="pt-10 md:pt-24 flex flex-col gap-y-5">
                  <div class="">
                    <p
                      class="text-[#000000] tracking-wider text-justify px-10 md:px-14 lg:px-20 xl:px-32 md:w-3/4 mx-auto text-xs lg:text-base lg:leading-7"
                      style={playfairFontRegular}
                      dangerouslySetInnerHTML={{
                        __html: data.data[0]?.attributes?.bloques[1]?.text,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
              {/* paragraph 2 start*/}

              <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl bg-[#F3EEE3] md:px-5 2xl:px-0 ">
                <div class="py-20">
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
                        className={`w-5 md:w-7  ${
                          igHovered ? "filter brightness-200" : ""
                        }`}
                      />{" "}
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

export default ValleAzul;
