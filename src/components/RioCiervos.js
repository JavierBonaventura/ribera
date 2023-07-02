import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import riberaWine from '../images/ribera-wine.png'
import iconDownload from "../images/icon-download.png";
import riberaEspecial from "../images/ribera-especial-wine.png";
import riberaReserva from "../images/ribera-reserva-wine.png";
import araucanaWineShort from '../images/araucana-wine-short.png'
import araucanaMalbecWineShort from '../images/araucana-malbec-wine-short.png'
import iconIg from '../images/icon-ig.png'


import "../App.css";
function RioCiervos() {
  return (
    <div>
      <header className="bg-[#231F20] py-3 px-3">
        <div className="container mx-auto">
          <div className="flex bg-[#231F20] justify-between items-center">
            <div className="w-1/3">
              <img src={logo} alt="" className="w-full" />
            </div>

            <div className="w-8">
            <Link to="/MenuHamburguesa">
                <img src={hambur} alt="" className="w-full" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-[#231F20] py-5">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <div className="w-1/3">
            <img src={riberaWine} alt="" className="w-full" />
          </div>

          <div className="flex flex-col gap-y-5">
            <div>
              <h1 className="uppercase text-xs text-[#C3B17D] text-center">
                Araucana Rio de los ciervos
              </h1>
              <h4 className="text-xs text-[#F2ECE1] text-center">
                Patagonia Argentina
              </h4>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="w-2/3 mx-auto">
                <p className="text-[#F2ECE1] text-xs leading-6">
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
              <div className="w-2/3 mx-auto flex justify-center">
                <a href="" className="border-b border-[#C3B17D]">
                  <div className="w-2 inline-block">
                    <img src={iconDownload} alt="" className="w-full" />
                  </div>
                  <span className="text-xs text-[#C3B17D]">
                    Descargar ficha técnica
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#231F20] py-5 flex flex-col gap-y-10">
        <div className="container mx-auto flex flex-col justify-center items-center gap-y-5">
          <div>
            <img src={riberaEspecial} alt="" />
          </div>
          <div>
            <h1 className="uppercase text-xs text-[#C3B17D] text-center">
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
            <h1 className="uppercase text-xs text-[#C3B17D] text-center">
              Ribera del Cuarzo Río de los Ciervos
            </h1>
          </div>
          <div className="bg-[#C3B17D] px-5 py-1 rounded-md">
            <a href="" className="uppercase text-xs text-[#F2ECE1]">
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

      <div className="bg-[#231F20] py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-x-4">
            <div className="flex gap-y-4 flex-col">
              <img src={araucanaWineShort} alt="" />
              <div className="bg-[#C3B17D] rounded-md flex justify-center py-2">
                <a href="" className="uppercase text-xs text-[#F2ECE1]">
                  Read more
                </a>
              </div>
            </div>
            <div className="flex gap-y-4 flex-col">
              <img src={araucanaMalbecWineShort} alt="" />
              <div className="bg-[#C3B17D] rounded-md flex justify-center py-2">
                <a href="" className="uppercase text-xs text-[#F2ECE1]">
                  Read more
                </a>
              </div>
            </div>
            <div className="flex gap-y-4 flex-col">
              <img src={araucanaMalbecWineShort} alt="" />
              <div className="bg-[#C3B17D] rounded-md flex justify-center py-2">
                <a href="" className="uppercase text-xs text-[#F2ECE1]">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#231F20] py-5">
        <div className="container mx-auto">
          <div>
            <h1 className="text-[#C3B17D] text-center text-xs uppercase">
              Ribera del cuarzo
            </h1>
          </div>
          <div>
            <h2 className="text-[#F2ECE1] text-center text-xs">
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
