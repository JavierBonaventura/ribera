import React, { useState } from "react";
import leftArrowImage from "../images/flechaIzquierda.png";
import rightArrowImage from "../images/flechaDerecha.png";
import felipe from "../images/felipe.jpg";
import imagen1 from "../images/pruning.jpg";
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
    <div>
      <div className="bg-[#F3EEE3]">
        <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 flex flex-col justify-center items-center pt-24 2xl:pt-36 pb-16 gap-y-5 2xl:gap-y-10">
          <div class="flex flex-col justify-center items-center bg-[#F3EEE3] ">
            <h1
              class="text-xs md:text-lg tracking-widest text-[#231F20]"
              style={playfairFontRegular}
            >
              {titulos[imagenVisible]}
            </h1>
          </div>

          <div className=" flex justify-around items-center w-full">
            <div className="w-12 lg:w-20 ml-4">
              <img
                src={leftArrowImage}
                className="w-full hover:scale-90 transition ease-in-out duration-300 cursor-pointer"
                alt="izquierda"
                onClick={handlePrevClick}
              />
            </div>
            <div>
              <img
                className="px-4 md:px-0 md:shadow-custom max-w-sm max-h-full" // Clases para limitar el ancho y alto
                style={playfairFontBlack}
                src={imagenes[imagenVisible]}
              />
            </div>
            <div className="w-12 lg:w-20  mr-4">
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
