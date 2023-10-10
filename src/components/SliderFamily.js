import React, { useState } from "react";
import leftArrowImage from "../images/flechaIzquierda.png";
import rightArrowImage from "../images/flechaDerecha.png";

import imagen1 from "../images/cava.jpg";
import imagen2 from "../images/trellising.jpg";
import imagen3 from "../images/topping.png";
import imagen4 from "../images/harvest.jpg";
import imagen5 from "../images/weeds.png";
import imagen6 from "../images/ancient.jpg";

import "../App.css";

function SliderFamily() {
  const [imagenVisible, setimagenVisible] = useState(0);

  const imagenes = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6];
  const titulos = [
    "Titulo imagen 1",
    "Titulo imagen 2",
    "Titulo imagen 3",
    "Titulo imagen 4",
    "Titulo imagen 5",
    "Titulo imagen 6",
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
    <div className=" overflow-hidden pb-20 md:pb-0">
      <div className="">
        <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 flex flex-col justify-center items-center pt-24 2xl:pt-36 pb-16 gap-y-5 2xl:gap-y-10 ">
          <div class="flex flex-col justify-center items-center bg-[#F3EEE3] ">
            <h1
              class="text-[#000000] text-xs lg:text-lg tracking-wider text-center "
              style={playfairFontRegular}
            >
              <i>{titulos[imagenVisible]}</i>
            </h1>
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
