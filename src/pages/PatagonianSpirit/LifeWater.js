import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import hambur from "../../images/menu-hambur.png";
import imgWater from "../../images/water.png";
import iconIg from "../../images/icon-ig.png";
import "../../App.css";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Loaded from "../../components/Loaded";
import Error from "../../components/Error";

const LifeWater = () => {
  const location = useLocation();

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

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const robotoFontRegular = {
    fontFamily: "Roboto Regular , sans-serif",
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
    "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques.slide%2C%20bloques.slide.image%2C%20bloques.callToAction%2C%20bloques.slide.imageMobile&filters%5Bslug%5D=water-life&locale=en";
  const apiUrlSpanish =
    "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques.slide%2C%20bloques.slide.image%2C%20bloques.callToAction%2C%20bloques.slide.imageMobile&filters%5Bslug%5D=water-life-es&locale=es";
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

  let imageDeskUrl;

  if (
    data &&
    data.data &&
    data.data[0].attributes &&
    data.data[0].attributes.bloques &&
    data.data[0].attributes.bloques[0].slide
  ) {
    const slide = data.data[0].attributes.bloques[0].slide[0];

    if (
      slide &&
      slide.imageMobile &&
      slide.imageMobile.data &&
      slide.imageMobile.data.attributes
    ) {
      imageDeskUrl = slide.image.data.attributes.url;
    }
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
          <body>
            <div className="md:h-screen bg-[#F3EEE3] background-life">
              <header className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-5 xl:py-10 px-5 2xl:px-0 fixed top-0 left-0 right-0 z-50 ">
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

              <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl contenido-dinamico md:px-5 2xl:px-0">
                <div class="pt-24 md:pb-10 lg:pt-24 2xl:pt-36 flex flex-col gap-y-5 2xl:gap-y-10">
                  <div class="flex flex-col justify-center items-center md:mt-0 md:gap-y-0">
                    <h1
                      style={playfairFontItalic}
                      class="text-[#5f5f5e] md:text-[#F3EEE3] text-xs md:text-lg tracking-widest"
                    >
                      <i style={playfairFontItalic}> {t("patagonian.title")}</i>
                    </h1>
                    <h2
                      style={playfairFontBlack}
                      className="text-base md:text-2xl text-[#C4B27D] text-center tracking-wider uppercase"
                      dangerouslySetInnerHTML={{
                        __html: data.data[0].attributes.title,
                      }}
                    ></h2>
                  </div>
                </div>

                <div className="w-2/4 mx-auto flex flex-col gap-y-14 py-16 2xl:py-40">
                  <p style={robotoFontRegular} className="text-center">
                    <span
                      className=" uppercase text-[#C4B27D] text-2xl"
                      dangerouslySetInnerHTML={{
                        __html:
                          data.data[0].attributes.bloques[0].slide[0].title,
                      }}
                    ></span>
                  </p>
                  <p
                    style={playfairFontRegular}
                    className="text-[#F3EEE3]  text-xs  lg:text-base lg:leading-7 tracking-wider text-center "
                    dangerouslySetInnerHTML={{
                      __html: data.data[0].attributes.bloques[0].slide[0].text,
                    }}
                  ></p>
                  <div className="flex justify-center items-center ">
                    <Link to="/patagonian-spirit/water-life/water-life-read">
                      <a
                        href=""
                        className="text-[#C4B27D] hover:text-[#F3EEE3]  uppercase hover:bg-[#C4B27D] border border-[#C4B27D] text-lg py-2 px-10 rounded-lg   transition ease-in-out  duration-300"
                        dangerouslySetInnerHTML={{
                          __html:
                            data.data[0].attributes.bloques[0].callToAction[0]
                              .text,
                        }}
                      ></a>
                    </Link>
                  </div>
                </div>
              </div>

              <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:hidden">
                <div class="pt-16 md:pt-32 pb-5 ">
                  <div class="flex flex-col justify-center items-center mt-10  md:mt-0 md:gap-y-0 ">
                    <h1
                      class="text-[#5f5f5e] text-xs md:text-base tracking-widest"
                      style={playfairFontItalic}
                    >
                      <i style={playfairFontItalic}>{t("patagonian.title")}</i>
                    </h1>
                    <h2
                      style={playfairFontBlack}
                      className="text-base md:text-xl text-[#C4B27D] text-center tracking-wider uppercase"
                      dangerouslySetInnerHTML={{
                        __html: data.data[0].attributes.title,
                      }}
                    ></h2>
                  </div>
                </div>

                <div class="px-4 md:px-0 bg-[#F3EEE3]">
                  <img
                    src={
                      data.data[0].attributes.bloques[0].slide[0].imageMobile
                        .data.attributes.url
                    }
                    alt=""
                    class="w-full md:w-2/3 mx-auto shadow-2xl "
                  />
                </div>

                <div class="flex flex-col gap-y-2  pt-8 bg-[#F3EEE3]">
                  <div>
                    <p
                      class="text-[#000000] tracking-wider text-justify px-10 md:px-32 md:w-3/4 mx-auto  text-xs md:text-base lg:text-lg"
                      style={playfairFontRegular}
                      dangerouslySetInnerHTML={{
                        __html:
                          data.data[0].attributes.bloques[0].slide[0]
                            .textMobile,
                      }}
                    ></p>
                  </div>
                </div>
                <div class="container mx-auto  max-w-screen-xl 2xl:max-w-screen-2xl bg-[#F3EEE3]">
                  <div class="py-20">
                    <div class="flex justify-center">
                      <a
                        class="border border-[#C4B27D] rounded-full p-7"
                        href="https://www.instagram.com/riberadelcuarzo/"
                        target="_blank"
                      >
                        <img src={iconIg} alt="" class="w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <style>
                {`
            @media screen and (min-width: 768px) {
              .background-life {
                background-image: url(${imageDeskUrl});
                background-size: cover;
                background-position: center;
                height: 100vh;
              }
            }

            @media screen and (min-width: 1540px) {
              .background-life {
                height: 100vh;
              }
            }
          `}
              </style>
            </div>
          </body>
        </animated.div>
      )}
    </Transition>
  );
};

export default LifeWater;
