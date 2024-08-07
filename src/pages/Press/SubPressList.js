import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const SubPressList = ({ year, presses }) => {
  console.log(year);
  console.log(presses);

  // Filtrar los artículos por el año seleccionado y luego ordenarlos por fecha
  const filteredPresses = presses
    .filter((press) => {
      var partes = press.attributes.date.split("-");
      var ano = parseInt(partes[0], 10);
      return ano === year;
    })
    .sort((a, b) => {
      const dateA = new Date(a.attributes.date);
      const dateB = new Date(b.attributes.date);
      return dateB - dateA; // Ordenar de más nuevo a más viejo
    });

  const { t, i18n } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ocultar el contenido por 1 segundo al cambiar el año
    setIsVisible(false);
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [year]);

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

  return (
    <div
      className={`flex flex-col gap-y-20 lg:gap-y-40 py-14 lg:py-32 items-center justify-center px-4 w-full ${
        isVisible
          ? "opacity-100 transition-opacity duration-500"
          : "opacity-0 transition-opacity duration-500"
      }`}
    >
      {filteredPresses.map((press) => (
        <div key={press.id} className="w-full">
          <div className="flex flex-col lg:flex-row lg:gap-x-10 w-full xl:w-2/3 mx-auto">
            <div
              style={{
                backgroundImage: `url(${press.attributes.mainImage.data[0].attributes.url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="py-28 aspect-auto lg:aspect-video"
              alt={`Image ${press.id}`}
            />

            <div className="text-[#F3EEE3] w-full flex flex-col justify-start gap-y-2 lg:gap-y-7 py-2 lg:py-0 lg:mt-5">
              <div className="space-y-2">
                <div>
                  <span
                    className="text-sm lg:text-base"
                    style={playfairFontItalic}
                  >
                    {press.attributes.date || ""}
                  </span>
                </div>
                <div>
                  <span
                    className="text-base lg:text-lg text-[#F3EEE3]"
                    style={playfairFontRegular}
                  >
                    {press.attributes.title || ""}
                  </span>
                </div>
                <div>
                  <span
                    className="text-xs lg:text-sm text-[#F3EEE3]"
                    style={playfairFontItalic}
                  >
                    {press.attributes.author || ""}
                  </span>
                </div>
              </div>
              <div>
                <a
                  href={press.attributes.button[0].href || ""}
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

export default SubPressList;
