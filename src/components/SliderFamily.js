import React, { useState, useEffect } from "react";
import leftArrowImage from "../images/flechaIzquierda.png";
import rightArrowImage from "../images/flechaDerecha.png";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "../App.css";

function SliderFamily() {
  const { t, i18n } = useTranslation();
  const [imagenVisible, setImagenVisible] = useState(0);
  const [galeria, setGaleria] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques.gallery&filters%5Bslug%5D=family"
        );

        const galeriaAPI = response.data.data[0]?.attributes?.bloques.find(
          (bloque) => bloque.__component === "global.gallery"
        );

        if (galeriaAPI) {
          setGaleria(galeriaAPI.gallery.data);
        }
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchData();
  }, []);

  const handlePrevClick = () => {
    if (imagenVisible > 0) {
      setImagenVisible(imagenVisible - 1);
    } else {
      setImagenVisible(galeria.length - 1);
    }
  };

  const handleNextClick = () => {
    if (imagenVisible < galeria.length - 1) {
      setImagenVisible(imagenVisible + 1);
    } else {
      setImagenVisible(0);
    }
  };

  return (
    <div className=" overflow-hidden pb-20 md:pb-0">
      <div className="">
        <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 flex flex-col justify-center items-center pt-24 2xl:pt-36 pb-16 gap-y-5 2xl:gap-y-10 ">
          <div className="flex flex-col justify-center items-center bg-[#F3EEE3] ">
            <h2
              className="uppercase text-[#C4B27D] tracking-wide"
              style={{
                fontFamily: "Roboto Regular , sans-serif",
                fontWeight: "normal",
                fontStyle: "normal",
                fontSize: "16px",
              }}
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
                className="px-4 md:px-0 lg:shadow-2xl  md:max-w-md lg:max-w-lg xl:max-w-2xl aspect-video object-cover "
                src={galeria[imagenVisible]?.attributes.url}
                alt={`imagen-${imagenVisible}`}
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
