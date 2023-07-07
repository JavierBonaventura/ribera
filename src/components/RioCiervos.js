import React, { useEffect, useRef, useState } from "react";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import riberaWine from "../images/ribera-wine.png";
import iconDownload from "../images/icon-download.png";
import riberaEspecial from "../images/ribera-especial-wine.png";
import riberaReserva from "../images/ribera-reserva-wine.png";
import araucanaWineShort from "../images/araucana-wine-short.png";
import araucanaMalbecWineShort from "../images/araucana-malbec-wine-short.png";
import araucanaAzulWineShort from "../images/araucana-azul-wine-short.png";
import iconIg from "../images/icon-ig.png";

import "../App.css";
function RioCiervos() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDownloadClick = () => {
    setShowDropdown(!showDropdown);
  };

  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollPosition = parseInt(params.get("scroll") || "0", 10);

    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      window.scrollTo(0, scrollPosition);
    }
  }, [location]);

  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
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
    <div>
      <header className="py-3 fixed top-0 left-0 right-0 z-50 ">
        <div class="container mx-auto">
          <div class="flex justify-between items-center px-5">
            <div class="w-20 md:w-36">
              <img src={logo} alt="" class="w-full" />
            </div>

            <div class="w-8">
              <Link to="/MenuHamburguesa">
                <img src={hambur} alt="" className="w-full" />
              </Link>{" "}
            </div>
          </div>
        </div>
      </header>

      <div ref={scrollRef} className="bg-[#231F20] py-5">
        <div className="container mx-auto flex flex-col justify-center items-center mt-10">
          <div className="w-1/3">
            <img src={riberaWine} alt="" className="w-full" />
          </div>

          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-5">
              <h1
                className="uppercase text-xs text-[#C3B17D] text-center"
                style={robotoFontRegular}
              >
                Araucana Rio de los ciervos
              </h1>
              <h4
                className="text-xs text-[#F2ECE1] text-center"
                style={robotoFontRegular}
              >
                <i>Patagonia Argentina</i>
              </h4>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="w-2/3 mx-auto">
                <p
                  className="text-[#F2ECE1] text-xs"
                  style={playfairFontRegular}
                >
                  "Río de los Ciervos" es un pequeño pueblo ubicado en tierra
                  del fuego. En esta región Patagónica en 300 km se pueden
                  recorrer todos los paisajes, desde el mar, hasta el desierto,
                  la montaña y los ríos típicos del sur. En ese pueblo nació Don
                  Julio Menéndez Prendes Abuelo de Felie. A través de este vino
                  intentamos mostrar la diversidad de la zona clásica del valle
                  del río negro, la uva proviene de 8 viñedos, ubicados a lo
                  largo de los 200k a la vera norte y sur del río."
                </p>
              </div>

              <div className="w-2/3 mx-auto">
                <div className="flex justify-center">
                  <a
                    className="border-b border-[#C3B17D]"
                    onClick={handleDownloadClick}
                  >
                    <div className="w-2 inline-block">
                      <img src={iconDownload} alt="" className="w-full" />
                    </div>
                    <span className="ml-2 text-xs text-[#C3B17D]">
                      Descargar ficha técnica
                    </span>
                  </a>
                </div>

                {showDropdown && (
                  <div className="mt-2 w-48 mx-auto">
                    <ul className="text-xs text-[#C3B17D] text-center">
                      <li className="py-2 px-4 hover:bg-gray-100">Opción 1</li>
                      <li className="py-2 px-4 hover:bg-gray-100">Opción 2</li>
                      <li className="py-2 px-4 hover:bg-gray-100">Opción 3</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#231F20] py-5 flex flex-col gap-y-10 ">
        <div className="container mx-auto flex flex-col justify-center items-center gap-y-5">
          <div>
            <img src={riberaEspecial} alt="" />
          </div>
          <div>
            <h1
              className="uppercase text-xs text-[#C3B17D] text-center"
              style={robotoFontRegular}
            >
              Ribera del Cuarzo especial
            </h1>
          </div>
          <div className="bg-[#C3B17D] px-5 py-1 rounded-md">
            <a href="" className="uppercase text-xs text-[#F2ECE1]">
              Read more
            </a>
          </div>
        </div>
        <div className="container mx-auto flex flex-col justify-center items-center gap-y-5">
          <div>
            <img src={riberaReserva} alt="" />
          </div>
          <div>
            <h1
              className="uppercase text-xs text-[#C3B17D] text-center"
              style={robotoFontRegular}
            >
              Ribera del Cuarzo Río de los Ciervos
            </h1>
          </div>
          <div className="bg-[#C3B17D] px-5 py-1 rounded-md">
            <a
              href=""
              className="uppercase text-xs text-[#F2ECE1]"
              style={robotoFontRegular}
            >
              Read more
            </a>
          </div>
        </div>
        <div className="container mx-auto">
          <div>
            <p className="text-[#F2ECE1] text-xs text-center leading-5">
              Creating unique wines in Patagonia <br />
              Pioneer in winegrowing at the foot of the "barda". <br />
              Small family run winery
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#231F20] py-5 px-3">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-x-4">
            <div className="flex gap-y-4 flex-col">
              <img src={araucanaWineShort} alt="" />
              <div className="bg-[#C3B17D] rounded-md flex justify-center py-2">
                <a
                  href=""
                  className="uppercase text-xs text-[#F2ECE1]"
                  style={robotoFontRegular}
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="flex gap-y-4 flex-col">
              <img src={araucanaMalbecWineShort} alt="" />
              <div className="bg-[#C3B17D] rounded-md flex justify-center py-2">
                <a
                  href=""
                  className="uppercase text-xs text-[#F2ECE1]"
                  style={robotoFontRegular}
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="flex gap-y-4 flex-col">
              <img src={araucanaAzulWineShort} alt="" />
              <div className="bg-[#C3B17D] rounded-md flex justify-center py-2">
                <a
                  href=""
                  className="uppercase text-xs text-[#F2ECE1]"
                  style={robotoFontRegular}
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#231F20] py-5">
        <div className="container mx-auto flex flex-col gap-y-5">
          <div>
            <h1
              className="text-[#C3B17D] text-center text-xs uppercase"
              style={robotoFontRegular}
            >
              Ribera del cuarzo
            </h1>
          </div>
          <div>
            <h2
              className="text-[#F2ECE1] text-center text-xs"
              style={robotoFontRegular}
            >
              <i>Patagonia, Argentina</i>
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-[#231F20] py-20">
        <div className="container mx-auto flex justify-center">
          <div className="border border-[#C3B17D] rounded-full p-7">
            <img src={iconIg} alt="" className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RioCiervos;
