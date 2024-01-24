import React, { useState } from "react";
import logoDesktop from "../../src/images/logo-home-mob.png";
import { useTranslation } from "react-i18next";
import marcaAgua from "../images/agua-sombra.png";

function Loaded({}) {
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

  const playfairFontExtraBold = {
    fontFamily: "Playfair ExtraBold , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  return (
    <div className="h-screen bg-[#161616] flex justify-center items-center">
      {/* Contenedor principal */}
      <div className="flex items-center justify-center relative">
        {/* Círculo giratorio */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#c4b27d] border-solid  absolute"></div>

        {/* Imagen de fondo */}
        <img
          src={marcaAgua}
          alt="Imagen de fondo"
          className="w-72 h-72 object-cover"
        />
      </div>
    </div>
  );
}

export default Loaded;
