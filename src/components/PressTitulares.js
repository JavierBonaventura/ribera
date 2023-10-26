import React from "react";

const TitularComponent = ({
  fechas2022,
  titulares2022,
  imagenes2022,
  fechas2023,
  titulares2023,
  imagenes2023,
  anoVisible,
  autores2022,
  autores2023,
  links2022,
  links2023,
}) => {
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

  const fechasToDisplay =
    anoVisible === 0 ? fechas2022 : anoVisible === 1 ? fechas2023 : [];
  const titularesToDisplay =
    anoVisible === 0 ? titulares2022 : anoVisible === 1 ? titulares2023 : [];
  const imagenesToDisplay =
    anoVisible === 0 ? imagenes2022 : anoVisible === 1 ? imagenes2023 : [];
  const autoresToDisplay =
    anoVisible === 0 ? autores2022 : anoVisible === 1 ? autores2023 : [];
  const linksToDisplay =
    anoVisible === 0 ? links2022 : anoVisible === 1 ? links2023 : [];

  return (
    <div className="flex flex-col gap-y-20 lg:gap-y-40 py-14 lg:py-32 items-center justify-center px-4 w-full">
      {titularesToDisplay.map((titular, index) => (
        <div key={index} className="w-full">
          <div className="flex flex-col lg:flex-row lg:gap-x-10 w-full xl:w-2/3 mx-auto">
            <div
              style={{
                backgroundImage: `url(${imagenesToDisplay[index]})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="py-28 aspect-auto lg:aspect-video"
              alt={`Image ${index}`}
            />

            <div className="text-[#F3EEE3] w-full  flex flex-col justify-start gap-y-2 lg:gap-y-5 py-2 lg:py-0">
              <div>
                <span
                  className="text-sm lg:text-base "
                  style={playfairFontItalic}
                >
                  {fechasToDisplay[index] || ""}
                </span>
              </div>
              <div>
                <span
                  className="text-base lg:text-lg text-[#F3EEE3]"
                  style={playfairFontRegular}
                >
                  {titular || ""}
                </span>
              </div>
              <div>
                <span
                  className="text-sm lg:text-base text-[#F3EEE3]"
                  style={playfairFontItalic}
                >
                  {autoresToDisplay[index] || ""}
                </span>
              </div>
              <a
                href={linksToDisplay[index] || ""}
                target="_blank"
                className="bg-transparent border border-[#C4B27D] text-xs text-[#C4B27D] hover:text-white hover:bg-[#C4B27D] rounded-lg px-3 py-2 flex justify-center items-center w-24 hover:opacity-90 transition ease-in-out duration-300"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TitularComponent;
