import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import paisajeValle from "../images/paisaje-valle.png";
import arrowDown from "../images/arrow-down.png";
import paisajeHistory from "../images/paisaje-history-1.jpg";
import iconIg from "../images/icon-ig.png";
import "../App.css";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";

const ValleAzul = () => {
  const [igHovered, setIgHovered] = useState(false);
  const handleMouseEnter = () => {
    setIgHovered(true);
  };
  const handleMouseLeave = () => {
    setIgHovered(false);
  };
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
            <body class="bg-[#F2ECE1]">
              <header className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl  py-5 xl:py-10 fixed top-0 left-0 right-0 z-50 px-5 xl:px-0">
                <div class="flex justify-between items-center  ">
                  <div class="">
                    <Link to="/">
                      <img src={logo} alt="" className="w-24 md:w-28" />
                    </Link>
                  </div>
                  <div class="mt-4">
                    <Link to="/MenuHamburguesa">
                      <img src={hambur} alt="" className="w-7" />
                    </Link>
                  </div>
                </div>
              </header>

              <div class="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl">
                <div class="pt-24 md:pb-10 lg:pt-24 2xl:pt-36 lg:h-screen flex flex-col gap-y-5 2xl:gap-y-10">
                  <div class="flex flex-col justify-center items-center md:mt-0 md:gap-y-0">
                    <h1
                      style={playfairFontItalic}
                      class="text-[#5f5f5e] text-xs md:text-base tracking-widest"
                    >
                      <i style={playfairFontItalic}>History</i>
                    </h1>
                    <h2
                      style={playfairFontBlack}
                      className="text-base md:text-xl text-[#C4AC77] text-center tracking-wider uppercase"
                    >
                      Valle azul
                    </h2>
                  </div>
                  <div class="relative flex justify-center items-center  md:pt-0 px-4 md:px-0">
                    <img
                      src={paisajeValle}
                      alt=""
                      class="w-full object-cover md:w-2/3 mx-auto"
                    />
                  </div>
                </div>
              </div>

              <div class="container mx-auto  max-w-screen-xl  2xl:max-w-screen-2xl">
                <div class="pt-5 pb-10 flex flex-col gap-y-5">
                  <p
                    class="text-black text-xs tracking-wider text-justify px-10 md:px-32 md:w-3/4 mx-auto md:text-base lg:text-lg"
                    style={playfairFontRegular}
                  >
                    The story of this winery started in 2001, when italian
                    countess Noemi Marone Cinzano discovered this far away land,
                    planted a 5 hectares vineyard at the foot of the{" "}
                    <i>barda</i> (a specific patagonian landscape, a steep cliff
                    or hill made of a dark grain of volcanic rock, with plenty
                    of quartz, carbonate calcium and calcareous) and began
                    producing wine in a Burgundy style - the winery built right
                    by the vineyard with small concrete open top pools for craft
                    production, employing pigeage.
                  </p>
                </div>
              </div>

              <div class=" bg-[#212121]">
                <div class="container mx-auto  max-w-screen-xl 2xl:max-w-screen-2xl py-5 px-4 md:px-0">
                  <img
                    src={paisajeHistory}
                    alt=""
                    class="-mb-10 md:-mb-24 w-full md:w-2/3 mx-auto"
                  />
                </div>
              </div>

              <div class="container mx-auto  max-w-screen-xl 2xl:max-w-screen-2xl bg-[#F2ECE1]">
                <div class="pt-10 md:pt-24 flex flex-col gap-y-5">
                  <div class="">
                    <p
                      class="text-black text-xs tracking-wider text-justify px-10 md:px-32 md:w-3/4 mx-auto md:text-lg"
                      style={playfairFontRegular}
                    >
                      When we first tasted the 2008 vintage, we knew Noemi had
                      found a real terroir. During ten years we explored all
                      other nearby places in Patagonia where to produce an equal
                      taste. We finally concluded the conditions in Valle Azul
                      were perfect. <br /> <br />
                      An extraordinary coincidence brought Menendez together
                      with the Countess 10 years after having tasted that first
                      memorable glass. Touched by Felipe´s passion and
                      commitment, the Countess granted us the privilege to start
                      producing our wines at that very land she had discovered.
                      In 2018, Bodega Ribera del Cuarzo was born.
                    </p>
                  </div>
                </div>
              </div>

              <div class="container mx-auto  max-w-screen-xl 2xl:max-w-screen-2xl bg-[#F2ECE1]">
                <div class="py-20">
                  <div class="flex justify-center">
                    <a
                      className={`border border-[#C3B17D] rounded-full p-7 ${
                        igHovered
                          ? "bg-[#C3B17D] transition-bg ease-in-out duration-200"
                          : "bg-transparent transition-bg ease-in-out duration-200"
                      }`}
                      href="https://www.instagram.com/riberadelcuarzo/"
                      target="_blank"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={iconIg}
                        alt=""
                        className={`w-5 ${
                          igHovered ? "filter brightness-200" : ""
                        }`}
                      />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </body>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default ValleAzul;
