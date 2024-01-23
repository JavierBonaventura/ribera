import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useParams } from "react-router-dom";
import SliderFamily from "../../components/SliderFamily";
import logo from "../../images/logo.svg";
import hambur from "../../images/menu-hambur.png";
import arrowDown from "../../images/arrow-down.png";
import iconIg from "../../images/icon-ig.png";
import "../../App.css";

const Family = () => {
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

  const playfairFontExtraBold = {
    fontFamily: "Playfair ExtraBold , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const posicionRef = useRef(null);

  const handleClick = () => {
    if (posicionRef.current) {
      posicionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  //API REST
  const { t, i18n } = useTranslation();
  const idiomaSeleccionado = i18n.language;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // URL de la API
  const apiUrlEnglish =
    "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques%2C%20bloques.image%2C%20bloques.gallery&filters%5Bslug%5D=family&locale=en";
  const apiUrlSpanish =
    "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques%2C%20bloques.image%2C%20bloques.gallery&filters%5Bslug%5D=family-es&locale=es";
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
      config={{ duration: 500 }}
    >
      {(style, item) => (
        <animated.div style={{ ...style, position: "absolute", width: "100%" }}>
          <div>
            <body className="bg-[#F3EEE3]">
              <header className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-5 xl:py-10 px-5 2xl:px-0  fixed top-0 left-0 right-0 z-50">
                <div className="flex justify-between items-center  ">
                  <div className="">
                    <Link to="/">
                      <img src={logo} alt="" className="w-24 md:w-28" />
                    </Link>
                  </div>
                  <div className="mt-4">
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

              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 ">
                <div className="pt-24 pb-24 md:pb-10 lg:pt-24 2xl:pt-36  flex flex-col gap-y-2 xl:gap-y-5 ">
                  {/* title section start*/}
                  <div className="flex flex-col justify-center items-center mt-10 md:mt-0 md:gap-y-0 ">
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
                      {t("history.family.title")}
                    </h2>
                  </div>
                  {/* title section end*/}

                  {/* img year start*/}
                  <div
                    className={`relative  flex justify-center items-center ${
                      isVisible3
                        ? "opacity-100 transition-opacity duration-500"
                        : "opacity-0 transition-opacity duration-500"
                    }`}
                  >
                    <img
                      src={
                        data.data[0]?.attributes?.bloques[0]?.image.data
                          .attributes.url
                      }
                      alt=""
                      className="w-7/12 md:w-3/12"
                    />
                    <h1
                      style={playfairFontExtraBold}
                      className="text-[#C4B27D] text-2xl pt-10 absolute font-bold sm:text-4xl 2xl:text-5xl sm:pt-20 lg:pt-24 "
                    >
                      {data.data[0]?.attributes?.bloques[0]?.title}
                    </h1>
                  </div>
                  {/* img year end*/}

                  {/* major img start*/}
                  <div className="flex justify-center items-center  md:pt-0 px-4 md:px-0 bg ">
                    <img
                      src={
                        data.data[0]?.attributes?.bloques[1]?.image.data
                          .attributes.url
                      }
                      alt=""
                      className="w-full md:w-10/12 xl:w-8/12 shadow-2xl"
                    />
                  </div>
                  {/* major img end*/}

                  {/* btn down start (esta hidden por pedido del cliente)*/}
                  <div className="py-28 md:py-0 hidden ">
                    <div className="flex justify-center">
                      <div
                        className="border border-[#C3B17D] rounded-full p-6 md:p-6 relative flex justify-center items-center hover:scale-90 transition ease-in-out duration-500 cursor-pointer"
                        onClick={handleClick}
                      >
                        <img
                          src={arrowDown}
                          alt=""
                          className="w-1.5 md:w-1.5 absolute "
                        />
                      </div>
                    </div>
                  </div>
                  {/* btn down end*/}
                </div>
              </div>

              {/* col text img 1 start*/}
              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 ">
                <div ref={posicionRef} id="posicion"></div>
                <div className="flex flex-col md:flex-row md:py-20">
                  <div className="w-full xl:w-1/2 mx-auto px-4 md:px-0 ">
                    <img
                      src={
                        data.data[0]?.attributes?.bloques[2]?.image?.data[0]
                          ?.attributes?.url
                      }
                      alt=""
                      className="w-full object-cover shadow-2xl"
                    />
                  </div>
                  <div className="flex flex-col gap-y-2 md:gap-y-5 w-full xl:w-1/2 mx-auto px-10 xl:px-24 pt-10 pb-32 md:pt-8  md:pb-0  ">
                    <div
                      className="col-image-text-1"
                      dangerouslySetInnerHTML={{
                        __html: data.data[0]?.attributes?.bloques[2]?.text,
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* col text img 1 end*/}

              {/* col text img 2 start*/}
              <div className="relative ">
                <div className="w-6/12 2xl:w-[40%] contenido-dinamico absolute right-4 2xl:right-44 -bottom-5 lg:-bottom-16 shadow-custom">
                  <img
                    src={
                      data.data[0]?.attributes?.bloques[3]?.image?.data[0]
                        ?.attributes?.url
                    }
                    alt=""
                    className="w-full mx-auto"
                  />
                </div>

                <span
                  className="contenido-dinamico absolute  text-white bottom-56 md:-bottom-5 lg:bottom-[-4rem] right-14 2xl:right-52 text-sm lg:text-lg "
                  style={playfairFontItalic}
                  dangerouslySetInnerHTML={{
                    __html:
                      data.data[0]?.attributes?.bloques[3]?.image?.data[0]
                        ?.attributes?.caption,
                  }}
                ></span>

                <div className="bg-[#212121] w-full md:w-2/3">
                  <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0">
                    <div className="flex flex-col md:flex-row-reverse">
                      <div className="-mt-20 w-full px-4 md:px-0 md:hidden">
                        <img
                          src={
                            data.data[0]?.attributes?.bloques[3]?.image?.data[0]
                              ?.attributes?.url
                          }
                          alt=""
                          className="w-full md:w-9/12 mx-auto shadow-2xl "
                        />
                      </div>

                      <div className="flex flex-col mx-auto w-full 2xl:w-3/5 gap-y-2 md:gap-y-5 pt-5 pb-12 md:py-24 xl:py-16 2xl:py-32 md:pr-52 lg:pr-60 xl:pl-24 xl:pr-72  px-10 md:px-0 2xl:pl-0 2xl:pr-28">
                        <p
                          className="text-right-justify tracking-wider text-[#ffffff] text-xs lg:text-base lg:leading-7 "
                          style={playfairFontRegular}
                          dangerouslySetInnerHTML={{
                            __html: data.data[0]?.attributes?.bloques[3]?.text,
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col text img 2 end*/}

              {/* vertical text img 1 start*/}
              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 pt-10 md:pt-20 lg:pt-32 xl:pt-40 2xl:pt-60 ">
                <div className="w-full md:w-2/5 mx-auto flex flex-col gap-y-5 xl:gap-y-16">
                  <div className="px-10 md:px-0">
                    <p
                      className="text-justify tracking-wider text-[#000000] text-xs lg:text-base lg:leading-7"
                      style={playfairFontRegular}
                      dangerouslySetInnerHTML={{
                        __html: data.data[0]?.attributes?.bloques[4]?.text,
                      }}
                    ></p>
                  </div>
                  <img
                    src={
                      data.data[0]?.attributes?.bloques[4]?.image?.data
                        ?.attributes?.url
                    }
                    alt=""
                    className="px-4 md:px-0 lg:shadow-2xl"
                  />
                </div>
                <p
                  className="text-[#000000] text-xs lg:text-lg pt-2 px-10 tracking-wider text-center "
                  style={playfairFontRegular}
                >
                  <i>
                    {
                      data.data[0]?.attributes?.bloques[4]?.image?.data
                        ?.attributes?.caption
                    }
                  </i>
                </p>
              </div>
              {/* vertical text img 1 end*/}

              {/* gallery start*/}
              <SliderFamily />
              {/* gallery end*/}

              {/* social media start*/}
              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 py-20 ">
                <div className="flex justify-center">
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
              {/* social media end*/}
            </body>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default Family;
