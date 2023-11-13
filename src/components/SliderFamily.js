import React, { useState } from "react";
import leftArrowImage from "../images/flechaIzquierda.png";
import rightArrowImage from "../images/flechaDerecha.png";
import slider1 from "../images/slider-history/WEB_HISTORY_SLIDERS-01.jpg";
import slider2 from "../images/slider-history/WEB_HISTORY_SLIDERS-02.jpg";
import slider3 from "../images/slider-history/WEB_HISTORY_SLIDERS-03.jpg";
import slider4 from "../images/slider-history/WEB_HISTORY_SLIDERS-04.jpg";
import slider5 from "../images/slider-history/WEB_HISTORY_SLIDERS-05.jpg";
import slider6 from "../images/slider-history/WEB_HISTORY_SLIDERS-06.jpg";
import slider7 from "../images/slider-history/WEB_HISTORY_SLIDERS-07.jpg";
import slider8 from "../images/slider-history/WEB_HISTORY_SLIDERS-08.jpg";
import slider9 from "../images/slider-history/WEB_HISTORY_SLIDERS-09.jpg";
import slider10 from "../images/slider-history/WEB_HISTORY_SLIDERS-10.jpg";
import slider11 from "../images/slider-history/WEB_HISTORY_SLIDERS-11.jpg";
import slider12 from "../images/slider-history/WEB_HISTORY_SLIDERS-12.jpg";
import slider13 from "../images/slider-history/WEB_HISTORY_SLIDERS-13.jpg";
import slider14 from "../images/slider-history/WEB_HISTORY_SLIDERS-14.jpg";
import slider15 from "../images/slider-history/WEB_HISTORY_SLIDERS-15.jpg";
import slider16 from "../images/slider-history/WEB_HISTORY_SLIDERS-16.jpg";
import slider17 from "../images/slider-history/WEB_HISTORY_SLIDERS-17.jpg";
import slider18 from "../images/slider-history/WEB_HISTORY_SLIDERS-18.jpg";
import slider19 from "../images/slider-history/WEB_HISTORY_SLIDERS-19.jpg";
import slider20 from "../images/slider-history/WEB_HISTORY_SLIDERS-20.jpg";
import slider21 from "../images/slider-history/WEB_HISTORY_SLIDERS-21.jpg";
import slider22 from "../images/slider-history/WEB_HISTORY_SLIDERS-22.jpg";
import slider23 from "../images/slider-history/WEB_HISTORY_SLIDERS-23.jpg";
import slider24 from "../images/slider-history/WEB_HISTORY_SLIDERS-24.jpg";
import slider25 from "../images/slider-history/WEB_HISTORY_SLIDERS-25.jpg";
import { useTranslation } from "react-i18next";
import "../App.css";

function SliderFamily() {
  const { t, i18n } = useTranslation();
  const [imagenVisible, setimagenVisible] = useState(0);

  const imagenes = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
    slider9,
    slider10,
    slider11,
    slider12,
    slider13,
    slider14,
    slider15,
    slider16,
    slider17,
    slider18,
    slider19,
    slider20,
    slider21,
    slider22,
    slider23,
    slider24,
    slider25,
  ];

  const handlePrevClick = () => {
    if (imagenVisible > 0) {
      setimagenVisible(imagenVisible - 1);
    } else {
      setimagenVisible(imagenes.length - 1);
    }
  };

  const handleNextClick = () => {
    if (imagenVisible < imagenes.length - 1) {
      setimagenVisible(imagenVisible + 1);
    } else {
      setimagenVisible(0);
    }
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
    fontSize: "16px",
  };

  return (
    <div className=" overflow-hidden pb-20 md:pb-0">
      <div className="">
        <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 flex flex-col justify-center items-center pt-24 2xl:pt-36 pb-16 gap-y-5 2xl:gap-y-10 ">
          <div class="flex flex-col justify-center items-center bg-[#F3EEE3] ">
            <h2
              className="uppercase text-[#C4B27D] tracking-wide"
              style={robotoFontRegular}
            >
              <span
                className="text-sm md:text-xl uppercase"
                dangerouslySetInnerHTML={{
                  __html: t("history.family.titleGallery"),
                }}
              ></span>
            </h2>
          </div>

          <div className="flex items-center  relative md:px-28">
            <div className="w-10 sm:w-16  absolute left-32 md:left-10 xl:left-0 top-64 sm:top-[27rem] md:top-auto">
              <img
                src={leftArrowImage}
                className="w-full hover:scale-90 transition ease-in-out duration-300 cursor-pointer"
                alt="izquierda"
                onClick={handlePrevClick}
              />
            </div>
            <div className="">
              <img
                className="px-4 md:px-0 lg:shadow-2xl  md:max-w-md lg:max-w-lg xl:max-w-2xl aspect-video object-cover " // Clases para limitar el ancho y alto
                style={playfairFontBlack}
                src={imagenes[imagenVisible]}
              />
            </div>
            <div className="w-10 sm:w-16 absolute right-32 md:right-10 xl:right-0 top-64 sm:top-[27rem] md:top-auto">
              <img
                src={rightArrowImage}
                alt="derecha"
                className="w-full hover:scale-90 transition ease-in-out duration-300 cursor-pointer"
                onClick={handleNextClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderFamily;
