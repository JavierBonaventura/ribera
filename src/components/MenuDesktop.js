import React, { useState } from "react";
import fondoDesktop from "../images/fondoDesktop.png";
import logoDesktop from "../images/logoDesktop.png";
import hambur from "../images/menu-hambur.png";
import iconIg from "../images/icon-ig-form.png";
import { Link } from "react-router-dom";

const MenuDesktop = () => {
  const [isMenu1Hovered, setMenu1Hovered] = useState(false);
  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const robotoFontRegular = {
    fontFamily: "Roboto Regular , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const handleMenu1Hover = () => {
    console.log("test");
    setMenu1Hovered(true);
  };

  const handleMenu1Leave = () => {
    setMenu1Hovered(false);
  };

  return (
    <div
      className={`h-screen bg-[imagen] bg-no-repeat bg-cover bg-center relative p-5`}
      style={{ backgroundImage: `url(${fondoDesktop})` }}
    >
      <div className="w-full h-full">
        <div className="border border-[#F2ECE1] w-full h-full p-2 relative flex flex-col justify-center items-center">
          <div className="w-full h-full border border-[#F2ECE1]">
            <div className="flex justify-end items-center pr-10 py-5">
              <Link to="/MenuHamburguesa">
                <img
                  src={hambur}
                  alt="Hamburger"
                  className="w-8 cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex justify-center py-10 2xl:py-16">
              <Link to="/">
                <img src={logoDesktop} alt="Logo" className="w-32 2xl:w-44" />
              </Link>
            </div>

            <div className="flex justify-center w-2/3 2xl:w-2/3 mx-auto">
              <div
                id="menu1"
                onMouseEnter={handleMenu1Hover}
                onMouseLeave={handleMenu1Leave}
                className="flex flex-col items-center  w-full"
              >
                <p
                  style={playfairFontRegular}
                  className="text-center menu-desk sombra-menu tracking-wider pb-5"
                >
                  History
                </p>
                <Link
                  to="/family"
                  className="subMenu tracking-widest text-center"
                  style={robotoFontRegular}
                >
                  FAMILY
                </Link>
                <Link
                  to="/valleazul"
                  className="subMenu tracking-widest text-center"
                  style={robotoFontRegular}
                >
                  VALLE AZUL, PATAGONIA
                </Link>
              </div>

              <div id="menu2" className="flex flex-col items-center w-full ">
                <p
                  style={playfairFontRegular}
                  className="text-center menu-desk sombra-menu tracking-wider  pb-5"
                >
                  Patagonian Spirit
                </p>
                <Link
                  to="/araucanavineyard"
                  className="subMenu tracking-widest text-center"
                  style={robotoFontRegular}
                >
                  ARAUCANA VINEYARD
                </Link>
                <Link
                  to="/workvineyard"
                  className="subMenu tracking-widest text-center"
                  style={robotoFontRegular}
                >
                  WORK IN THE VINEYARD
                </Link>
                <Link
                  to="/workwinery"
                  className="subMenu tracking-widest text-center"
                  style={robotoFontRegular}
                >
                  WORK IN THE WINERY
                </Link>
                <Link
                  to="/lifeonestate"
                  className="subMenu tracking-widest text-center"
                  style={robotoFontRegular}
                >
                  LIFE ON THE ESTATE
                </Link>
                <Link
                  to="/lifewater"
                  className="subMenu tracking-widest text-center"
                  style={robotoFontRegular}
                >
                  LIFE WATER
                </Link>
              </div>

              <div id="menu3" className="flex flex-col items-center w-full ">
                <p
                  style={playfairFontRegular}
                  className="text-center menu-desk sombra-menu tracking-wider  pb-5"
                >
                  Wines
                </p>
                <p
                  style={robotoFontRegular}
                  className="text-center subMenu tracking-widest"
                >
                  IN THE WORLD
                </p>
                <p
                  style={robotoFontRegular}
                  className="text-center subMenu tracking-widest"
                >
                  IN ARGENTINA
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 2xl:bottom-5 w-full">
            <div className="flex justify-around items-center w-full text-[#F2ECE1] ">
              <div className="w-1/3  flex justify-center items-center">
                <a
                  href="https://www.instagram.com/riberadelcuarzo/"
                  target="_blank"
                >
                  <img src={iconIg} alt="LogoIg" className="w-5" />
                </a>
              </div>
              <div
                className="flex justify-center items-center w-1/3 gap-x-20 "
                style={robotoFontRegular}
              >
                <div>
                  <Link
                    to="/contacto"
                    className="hover:text-[#cab57e]"
                    style={robotoFontRegular}
                  >
                    Contact
                  </Link>
                </div>
                <div>
                  <a href="" className="hover:text-[#cab57e]">
                    News
                  </a>
                </div>
              </div>
              <div
                className="flex flex-col justify-center items-center w-1/3 cursor-default"
                style={robotoFontRegular}
              >
                <span className="uppercase">Río Negro</span>
                <span>Patagonia Argentina</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDesktop;
