import React, { useState } from "react";
import { Link } from "react-router-dom";
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

        <Link to="/" className="text-2xl text-[#c4b27d] absolute">
          <div style={playfairFontItalic}>Home</div>
        </Link>

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
