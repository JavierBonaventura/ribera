import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import paisajeValle from "../images/paisaje-valle.png";
import arrowDown from "../images/arrow-down.png";
import paisajeHistory from "../images/paisaje-history.jpg";
import iconIg from "../images/icon-ig.png";
import "../App.css";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";

const ValleAzul = () => {
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
              <header className="py-10 fixed top-0 left-0 right-0 z-50">
                <div class="container mx-auto">
                  <div class="flex justify-between items-center px-5 ">
                    <div class="w-24 md:w-36 ">
                      <Link to="/">
                        <img src={logo} alt="" className="w-full" />
                      </Link>{" "}
                    </div>

                    <div class="  mt-4">
                      <Link to="/MenuHamburguesa">
                        <img src={hambur} alt="" className="w-7" />
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </header>

              <div class="container mx-auto">
                <div class="pt-16">
                  <div class="flex flex-col justify-center items-center mt-10">
                    <h1
                      style={playfairFontItalic}
                      class="text-[#5f5f5e] text-xs tracking-widest"
                    >
                      <i style={playfairFontItalic}>History</i>
                    </h1>
                    <h2
                      style={playfairFontBlack}
                      className="text-base text-[#C4AC77] text-center tracking-wider uppercase"
                    >
                      Valle azul
                    </h2>
                  </div>
                </div>

                <div class="relative flex justify-center items-center pt-5 px-4">
                  <img src={paisajeValle} alt="" class="w-full" />
                </div>

                <div class="py-28 hidden">
                  <div class="flex justify-center">
                    <div class="border border-[#C3B17D] rounded-full p-6 relative flex justify-center items-center">
                      <img src={arrowDown} alt="" class="w-1.5 absolute" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="container mx-auto bg-[#F2ECE1] px-10">
                <div class="pt-5 pb-10 flex flex-col gap-y-5">
                  <p
                    class="text-black text-xs tracking-wider"
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

              <div class="container mx-auto bg-[#212121]">
                <div class="py-5 px-5">
                  <img src={paisajeHistory} alt="" class="-mb-10" />
                </div>
              </div>

              <div class="container mx-auto bg-[#F2ECE1] px-10">
                <div class="pt-10 flex flex-col gap-y-5">
                  <div class="">
                    <p
                      class="text-black text-xs tracking-wider"
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

              <div class="container mx-auto bg-[#F2ECE1]">
                <div class="py-20">
                  <div class="flex justify-center">
                    <a
                      class="border border-[#C3B17D] rounded-full p-7"
                      href="https://www.instagram.com/riberadelcuarzo/"
                      target="_blank"
                    >
                      <img src={iconIg} alt="" class="w-5" />
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
