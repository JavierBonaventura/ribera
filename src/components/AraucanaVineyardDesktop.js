import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import ilustracionSpirit from "../images/ilustracion-sprit.png";
import paisajeAraucana from "../images/paisaje-araucana.jpg";
import iconIg from "../images/icon-ig.png";
import "../App.css";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";

const AraucanaVineyardDesktop = () => {
  const location = useLocation();

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };
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
    <Transition
    items={location}
    keys={(location) => location.pathname}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
    config={{ duration: 1000 }}
  >
    {(style, item) => (
      <animated.div style={{ ...style, width: "100%" }}>
        <div>
          <body class="bg-[#F2ECE1] ">
            <header className="container mx-auto py-10 fixed top-0 left-0 right-0 z-50 px-5 md:px-0 md:py-2 ">
              <div class="flex justify-between items-center  ">
                <div class="w-24 md:w-36 ">
                  <Link to="/">
                    <img src={logo} alt="" className="w-full xl:w-28" />
                  </Link>
                </div>
                <div class="mt-4">
                  <Link to="/MenuHamburguesa">
                    <img src={hambur} alt="" className="w-7 " />
                  </Link>
                </div>
              </div>
            </header>

            <div class="container mx-auto pb-5">
              <div class="pt-16 md:pt-16">
                <div class="flex flex-col justify-center items-center mt-10 md:mt-0 md:gap-y-0">
                  <h1
                    class="text-[#5f5f5e] text-xs md:text-xl tracking-widest"
                    style={playfairFontItalic}
                  >
                    <i style={playfairFontItalic}>Patagonian Spirit</i>
                  </h1>
                  <h2
                    style={playfairFontBlack}
                    className="text-lg md:text-3xl text-[#C4AC77] text-center tracking-wider uppercase"
                  >
                    Araucana Vineyard
                  </h2>
                </div>
              </div>

              <div class="py-5 md:py-16">
                <img
                  src={ilustracionSpirit}
                  alt=""
                  class="w-full md:w-4/5 mx-auto"
                />
              </div>

            </div>


          </body>
        </div>
      </animated.div>
    )}
  </Transition>
  );
};

export default AraucanaVineyardDesktop;
