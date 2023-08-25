import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import imgWater from "../images/water.png";
import iconIg from "../images/icon-ig.png";
import backgroundLife from "../images/life-water-1.png";
import "../App.css";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";

const LifeWater = () => {
  const location = useLocation();

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

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const robotoFontRegular = {
    fontFamily: "Roboto Regular , sans-serif",
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
          <body>
            <div className="md:h-screen bg-[#F3EEE3] background-life">
              <header className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-5 xl:py-10 px-5 2xl:px-0 fixed top-0 left-0 right-0 z-50 ">
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

              <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl contenido-dinamico md:px-5 2xl:px-0">
                <div class="pt-24 md:pb-10 lg:pt-24 2xl:pt-36 flex flex-col gap-y-5 2xl:gap-y-10">
                  <div class="flex flex-col justify-center items-center md:mt-0 md:gap-y-0">
                    <h1
                      style={playfairFontItalic}
                      class="text-[#5f5f5e] md:text-[#F3EEE3] text-xs md:text-lg tracking-widest"
                    >
                      <i style={playfairFontItalic}>Patagonian Spirit</i>
                    </h1>
                    <h2
                      style={playfairFontBlack}
                      className="text-base md:text-2xl text-[#C4B27D] text-center tracking-wider uppercase"
                    >
                      Water of Life
                    </h2>
                  </div>
                </div>

                <div className="w-2/4 mx-auto flex flex-col gap-y-14 py-16 2xl:py-40">
                  <p style={robotoFontRegular} className="text-center">
                    <span className=" uppercase text-[#C4B27D] text-2xl">
                      Water
                    </span>
                  </p>
                  <p
                    style={playfairFontRegular}
                    className="text-[#F3EEE3]  text-xs  lg:text-base lg:leading-7 tracking-wider text-center "
                  >
                    The countess planted the vineyard at the highest point of
                    the <i>barda</i>, an unexplored location where no one had
                    even considered such an endeavor before. It required
                    transporting water for irrigation using pumps, incurring
                    significant costs. Until then, productions in the Rio Negro
                    valley were carried out alongside the river, with water
                    drawn through channels and gates - an economical flood
                    irrigation system.
                  </p>
                  <div className="flex justify-center items-center ">
                    <Link to="/lifewaterread">
                      <a
                        href=""
                        className="text-[#F3EEE3] uppercase bg-[#C4B27D] border border-[#C4B27D] text-lg py-2 px-10 rounded-lg hover:text-[#C4B27D] hover:bg-[#F3EEE3] hover:border-[#F3EEE3] transition ease-in-out  duration-300"
                      >
                        Read more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:hidden">
                <div class="pt-16 md:pt-32 pb-5 ">
                  <div class="flex flex-col justify-center items-center mt-10  md:mt-0 md:gap-y-0 ">
                    <h1
                      class="text-[#5f5f5e] text-xs md:text-base tracking-widest"
                      style={playfairFontItalic}
                    >
                      <i style={playfairFontItalic}>Patagonian Spirit</i>
                    </h1>
                    <h2
                      style={playfairFontBlack}
                      className="text-base md:text-xl text-[#C4B27D] text-center tracking-wider uppercase"
                    >
                      Water of Life
                    </h2>
                  </div>
                </div>

                <div class="px-4 md:px-0 bg-[#F3EEE3]">
                  <img
                    src={imgWater}
                    alt=""
                    class="w-full md:w-2/3 mx-auto shadow-2xl "
                  />
                </div>

                <div class="flex flex-col gap-y-2  pt-8 bg-[#F3EEE3]">
                  <div>
                    <p
                      class="text-[#000000] tracking-wider text-justify px-10 md:px-32 md:w-3/4 mx-auto  text-xs md:text-base lg:text-lg"
                      style={playfairFontRegular}
                    >
                      The countess planted the vineyard at the highest point of
                      the <i>barda</i>, an unexplored location where no one had
                      even considered such an endeavor before. It required
                      transporting water for irrigation using pumps, incurring
                      significant costs. Until then, productions in the Rio
                      Negro valley were carried out alongside the river, with
                      water drawn through channels and gates - an economical
                      flood irrigation system.
                      <br />
                      <br />
                      Yet, the countess decided to plant at this elevated site
                      because she believed that what would be produced there
                      would be worth the effort. Without calculating costs, she
                      embarked on building a system of pumps that transported
                      water three kilometers uphill. When we finally took over
                      the vineyard, we trusted that renewable energy, perhaps
                      wind or solar, would eventually transform this cost into
                      something reasonable in the short term. Regardless, the
                      risk was worth taking.
                      <br />
                      <br />
                      Some time later, a local man spoke to us about water. This
                      kind gentleman, Facundo Catriel, told us that abundant
                      water could be found at the base of the ridge. Although it
                      seemed unlikely, we decided to drill some wells. Water
                      surged forth with force. These wells now produce around
                      200,000 liters per hour, significantly reducing our costs.
                      We listened to nature and special individuals. Today,
                      Ribera del Cuarzo follows a virtuous cycle of respecting
                      the environment, and the reward is a wine that never
                      ceases to astonish us.
                    </p>
                  </div>
                </div>
                <div class="container mx-auto  max-w-screen-xl 2xl:max-w-screen-2xl bg-[#F3EEE3]">
                  <div class="py-20">
                    <div class="flex justify-center">
                      <a
                        class="border border-[#C4B27D] rounded-full p-7"
                        href="https://www.instagram.com/riberadelcuarzo/"
                        target="_blank"
                      >
                        <img src={iconIg} alt="" class="w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </animated.div>
      )}
    </Transition>
  );
};

export default LifeWater;
