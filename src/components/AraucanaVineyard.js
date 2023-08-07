import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import ilustracionSpirit from "../images/ilustracion-sprit.png";
import paisajeAraucana from "../images/paisaje-araucana-1.jpg";
import iconIg from "../images/icon-ig.png";
import "../App.css";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";

const ConstructionPage = () => {
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
              <header className="container mx-auto py-10 fixed top-0 left-0 right-0 z-50 px-5 md:px-0 md:py-2  max-w-screen-xl">
                <div class="flex justify-between items-center">
                  <div class="w-24 md:w-28">
                    <Link to="/">
                      <img src={logo} alt="" className="w-full" />
                    </Link>
                  </div>
                  <div class="mt-4">
                    <Link to="/MenuHamburguesa">
                      <img src={hambur} alt="" className="w-7 " />
                    </Link>
                  </div>
                </div>
              </header>

              <div class="container mx-auto pb-5 md:pb-12 max-w-screen-xl">
                <div class="pt-16 md:pt-24">
                  <div class="flex flex-col justify-center items-center mt-10 md:mt-0 md:gap-y-0">
                    <h1
                      class="text-[#5f5f5e] text-xs md:text-base tracking-widest"
                      style={playfairFontItalic}
                    >
                      <i style={playfairFontItalic}>Patagonian Spirit</i>
                    </h1>
                    <h2
                      style={playfairFontBlack}
                      className="text-base md:text-xl text-[#C4AC77] text-center tracking-wider uppercase"
                    >
                      Araucana Vineyard
                    </h2>
                  </div>
                </div>

                <div class="py-5 md:py-6">
                  <img
                    src={paisajeAraucana}
                    alt=""
                    class="w-full md:w-5/6 mx-auto"
                  />
                </div>

                <p
                  class="text-black text-xs tracking-wider text-justify px-10 md:px-32 md:w-3/4 mx-auto md:text-lg md:pt-5"
                  style={playfairFontRegular}
                >
                  Araucana Vineyard is far more than just unique—it is an
                  extraordinary gem that surpasses mere words. Nestled in Ribera
                  del Cuarzo, no other vineyard in Patagonia can boast such
                  proximity to the <i>barda</i> or such seclusion. <br />
                  <br />
                  The soils of Araucana are predominantly aeolic, painstakingly
                  shaped over countless ages by the erosive forces of wind.
                  Enriched with volcanic ash and high potassium content, they
                  possess a chemical composition that is both crucial and
                  remarkably uncommon, not only for Patagonia but for the World
                  in general.
                </p>
              </div>
              <div className="container mx-auto px-4 md:px-0 max-w-screen-xl">
                <img
                  src={ilustracionSpirit}
                  alt=""
                  className="w-full md:w-3/4 mx-auto"
                />
              </div>
              <div class="container mx-auto pt-5 md:pt-12 max-w-screen-xl">
                <p
                  class="text-black text-xs tracking-wider text-justify px-10 md:px-32 md:w-3/4 mx-auto md:text-lg"
                  style={playfairFontRegular}
                >
                  Adding to its distinctiveness is the <i>barda</i> river
                  terrace. The surface texture owes its character to a fusion of
                  quartz and calcium carbonate, locally known as Indian cement.
                  As it erodes and integrates into the soil, it imparts its
                  exceptional qualities to our grapes.
                </p>

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

export default ConstructionPage;
