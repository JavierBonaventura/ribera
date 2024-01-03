import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const TitularComponent = ({ pressData, currentYear }) => {
  const { t, i18n } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ocultar el contenido por 1 segundo al cambiar currentYear
    setIsVisible(false);
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [currentYear]);

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

  // const fechasToDisplay =
  //   currentYear === 0 ? fechas2022 : currentYear === 1 ? fechas2023 : [];
  // const titularesToDisplay =
  //   currentYear === 0 ? titulares2022 : currentYear === 1 ? titulares2023 : [];
  // const imagenesToDisplay =
  //   currentYear === 0 ? imagenes2022 : currentYear === 1 ? imagenes2023 : [];
  // const autoresToDisplay =
  //   currentYear === 0 ? autores2022 : currentYear === 1 ? autores2023 : [];
  // const linksToDisplay =
  //   currentYear === 0 ? links2022 : currentYear === 1 ? links2023 : [];

  return (
    <div
      className={`flex flex-col gap-y-20 lg:gap-y-40 py-14 lg:py-32 items-center justify-center px-4 w-full ${
        isVisible
          ? "opacity-100 transition-opacity duration-500"
          : "opacity-0 transition-opacity duration-500"
      }`}
    >
      {pressData.map((press, index) => (
        <div key={index} className="w-full">
          <div className="flex flex-col lg:flex-row lg:gap-x-10 w-full xl:w-2/3 mx-auto">
            <div
              style={{
                backgroundImage: `url(${press[index]})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="py-28 aspect-auto lg:aspect-video"
              alt={`Image ${index}`}
            />

            <div className="text-[#F3EEE3] w-full  flex flex-col justify-start gap-y-2 lg:gap-y-7 py-2 lg:py-0 lg:mt-5">
              <div className="space-y-2">
                <div>
                  <span
                    className="text-sm lg:text-base"
                    style={playfairFontItalic}
                  >
                    {press[index] || ""}
                  </span>
                </div>
                <div>
                  <span
                    className="text-base lg:text-lg text-[#F3EEE3]"
                    style={playfairFontRegular}
                  >
                    {press.attributes.title}
                  </span>
                </div>
                <div>
                  <span
                    className="text-xs lg:text-sm text-[#F3EEE3]"
                    style={playfairFontItalic}
                  >
                    {press[index] || ""}
                  </span>
                </div>
              </div>
              <div>
                <a
                  href={press[index] || ""}
                  target="_blank"
                  className="bg-transparent border border-[#C4B27D] text-xs text-[#C4B27D] hover:text-white hover:bg-[#C4B27D] rounded-lg px-3 py-2 flex justify-center items-center w-24 hover:opacity-90 transition ease-in-out duration-300"
                >
                  {t("press.btn")}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TitularComponent;
