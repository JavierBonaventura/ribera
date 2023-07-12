import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import ilustracionSpirit from "../images/ilustracion-sprit.png";
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
    fontFamily: "Playfair Italic , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const playfairFontBold = {
    fontFamily: "Playfair Bold , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const robotoFontRegular = {
    fontFamily: "Roboto Regular , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "16px",
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
              <header className="py-10 fixed top-0 left-0 right-0 z-50 ">
                <div class="container mx-auto ">
                  <div class="flex justify-between items-center px-5">
                    <div class="w-20 md:w-36">
                      <Link to="/">
                        <img src={logo} alt="" className="w-full" />
                      </Link>{" "}
                    </div>

                    <div class="w-8">
                      <Link to="/MenuHamburguesa">
                        <img src={hambur} alt="" className="w-full" />
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </header>

              <div class="container mx-auto">
                <div class="pt-16">
                  <div class="flex flex-col justify-center items-center mt-10 gap-y-2">
                    <h1
                      class="text-black text-xs tracking-widest"
                      style={playfairFontItalic}
                    >
                      Patagonian Spirit
                    </h1>
                    <h2
                      class="uppercase text-[#C4AC77] text-sm tracking-wider"
                      style={playfairFontBold}
                    >
                      Araucana Vineyard
                    </h2>
                  </div>
                </div>

                <div class="md:py-20">
                  <img
                    src={ilustracionSpirit}
                    alt=""
                    class="w-full md:w-2/3 mx-auto"
                  />
                </div>

                <div class="flex flex-col gap-y-2 px-10 md:text-center pt-8">
                  <div>
                    <h1
                      class="uppercase text-[#C4AC77] text-sm tracking-wide"
                      style={robotoFontRegular}
                    >
                      Winery Ribera del Cuarzo
                    </h1>
                  </div>
                  <div>
                    <p
                      class="text-black text-xs md:text-xl tracking-wider"
                      style={playfairFontRegular}
                    >
                      Araucana Vineyard is far more than just unique—it is an
                      extraordinary gem that surpasses mere words. Nestled in
                      Ribera del Cuarzo, no other vineyard in Patagonia can
                      boast such proximity to the barda or such seclusion.{" "}
                      <br />
                      <br />
                      The soils of Araucana are predominantly aeolic,
                      painstakingly shaped over countless ages by the erosive
                      forces of wind. Enriched with volcanic ash and high
                      potassium content, they possess a chemical composition
                      that is both crucial and remarkably uncommon, not only for
                      Patagonia but for the World in general. <br />
                      <br />
                      Adding to its distinctiveness is the barda river terrace.
                      The surface texture owes its character to a fusion of
                      quartz and calcium carbonate, locally known as Indian
                      cement. As it erodes and integrates into the soil, it
                      imparts its exceptional qualities to our grapes. <br />
                      <br />
                      Araucana adopts the traditional high cordon-method for
                      planting, with two-meter gaps between rows and a meter
                      between each vine, resulting in a density of 5000 plants
                      per hectare. While the majority of our vineyard is
                      dedicated to Malbec, we also cultivate Petit Verdot and
                      Merlot vines. <br />
                      <br />
                      Our philosophy revolves around nurturing the plants to
                      self-regulate throughout their growth cycle, intervening
                      as minimally as possible, and offering support to allow
                      them to make decisions autonomously. Our role is to guide
                      them towards their utmost expression and quality. <br />
                      <br />
                      That's why we embrace time-honored vine management
                      techniques like Guyot pruning with canes and renewal
                      spurs.
                    </p>
                  </div>
                </div>
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
