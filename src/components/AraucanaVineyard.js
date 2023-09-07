import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import ilustracionSpirit from "../images/dibujoaraucana.png";
import paisajeAraucana from "../images/paisaje-araucana-1.jpg";
import paisajeAraucana2 from "../images/paisaje-araucana-2.jpg";
import paisajeAraucana3 from "../images/paisaje-araucana-3.jpg";
import iconIg from "../images/icon-ig.png";
import "../App.css";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";

const ConstructionPage = () => {
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
            <body class="bg-[#F3EEE3] ">
              <header className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-5 xl:py-10 px-5 2xl:px-0 fixed top-0 left-0 right-0 z-50">
                <div class="flex justify-between items-center">
                  <div class="">
                    <Link to="/">
                      <img src={logo} alt="" className="w-24 md:w-28" />
                    </Link>
                  </div>
                  <div class="mt-4">
                    <Link to="/MenuHamburguesa">
                      <img
                        src={hambur}
                        alt=""
                        className="w-7 hover:scale-90 transition ease-in-out duration-500"
                      />
                    </Link>
                  </div>
                </div>
              </header>

              <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0">
                <div class="pt-24 md:pb-0 lg:pt-24 2xl:pt-36 flex flex-col gap-y-5 2xl:gap-y-10">
                  <div class="flex flex-col justify-center items-center md:mt-0 md:gap-y-0">
                    <h1
                      style={playfairFontItalic}
                      class="text-[#5f5f5e] text-xs md:text-lg tracking-widest"
                    >
                      <i style={playfairFontItalic}>Patagonian Spirit</i>
                    </h1>
                    <h2
                      style={playfairFontBlack}
                      className="text-base md:text-2xl text-[#C4B27D] text-center tracking-wider uppercase"
                    >
                      Araucana Vineyard
                    </h2>
                  </div>
                  <div class="relative flex justify-center items-center  md:pt-0 px-4 md:px-0">
                    <img
                      src={paisajeAraucana3}
                      alt=""
                      class="w-full object-cover md:w-2/3 mx-auto shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              <div class="container mx-auto py-5 md:py-12 xl:py-12  max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 ">
                <p
                  class="text-[#000000] tracking-wider text-justify px-10 md:px-32 md:w-3/4 mx-auto text-xs  lg:text-base lg:leading-7 md:pt-5"
                  style={playfairFontRegular}
                >
                  The Araucana Vineyard is much more than just unique. Located
                  in Ribera del Cuarzo, no other vineyard in Patagonia or the
                  world can boast of being so close to the <i>barda</i> or
                  enjoying such privacy. <br /> <br />
                  The soils of Araucana are predominantly aeolian, meticulously
                  shaped over countless eras by wind erosion. Enriched with
                  volcanic ash and potassium, and with a high content of calcium
                  carbonate, they have a crucial and remarkably uncommon
                  chemical composition, not only for Patagonia but for the
                  world.
                </p>
              </div>

              <div className="container mx-auto px-4  max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0">
                <img
                  src={paisajeAraucana2}
                  alt=""
                  className="w-full md:w-2/3 mx-auto shadow-2xl"
                />
              </div>

              <div class="container mx-auto pt-5 md:pt-12 max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0">
                <p
                  class="text-[#000000] tracking-wider text-justify px-10 md:px-32 md:w-3/4 mx-auto text-xs  lg:text-base lg:leading-7"
                  style={playfairFontRegular}
                >
                  Adding to its singularity is the <i>barda</i> (river terrace).
                  The texture of the surface is due to a combination of quartz
                  and calcium carbonate, locally known as "Indian cement." As it
                  erodes and integrates into the soil, it transfers its
                  exceptional qualities to our grapes.
                </p>

                <div class="py-20">
                  <div class="flex justify-center">
                    <a
                      className={`border border-[#C3B17D] rounded-full p-7 md:p-8 ${
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
                        className={`w-5 md:w-7 ${
                          igHovered ? "filter brightness-200" : ""
                        }`}
                      />
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
