import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import ilustrationHistory from "../images/ilustracion-history.png";
import arrowDown from "../images/arrow-down.png";
import carruajeHistory from "../images/carruaje-history.jpg";
import paisaje from "../images/paisaje-family-2.png";
import iconIg from "../images/icon-ig.png";
import felipe from "../images/felipe.jpg";
import "../App.css";
import { Transition, animated } from "@react-spring/web";

const Family = () => {
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
  

  const playfairFontExtraBold = {
    fontFamily: "Playfair ExtraBold , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

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

  const posicionRef = useRef(null);

  const handleClick = () => {
    if (posicionRef.current) {
      posicionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Transition
      items={location}
      keys={(location) => location.pathname}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{ duration: 500 }}
    >
      {(style, item) => (
        <animated.div style={{ ...style, position: "absolute", width: "100%" }}>
          <div>
            <body class="bg-[#F2ECE1]">
              <header className="py-10 fixed top-0 left-0 right-0 z-50">
                <div class="container mx-auto">
                  <div class="flex justify-between items-center px-5 ">
                    <div class="w-24 md:w-36 ">
                      <Link to="/">
                        <img src={logo} alt="" className="w-full" />
                      </Link>
                    </div>
                    <div class="mt-4">
                      <Link to="/MenuHamburguesa">
                        <img src={hambur} alt="" className="w-7 md:w-10" />
                      </Link>
                    </div>
                  </div>
                </div>
              </header>

              <div class="container mx-auto">
                <div class="pt-16 md:pt-40">
                  <div class="flex flex-col justify-center items-center mt-10 md:mt-0 md:gap-y-2">
                    <h1
                      style={playfairFontItalic}
                      class="text-[#5f5f5e] text-xs md:text-xl tracking-widest"
                    >
                      <i style={playfairFontItalic}>History</i>
                    </h1>
                    <h2
                      style={playfairFontBlack}
                      className="text-base md:text-3xl text-[#C4AC77] text-center tracking-wider uppercase"
                    >
                      Family
                    </h2>
                  </div>
                </div>

                <div class="relative flex justify-center items-center">
                  <img
                    src={ilustrationHistory}
                    alt=""
                    class="w-full md:w-3/4"
                  />
                  <h1
                    style={playfairFontExtraBold}
                    class="text-[#C4AC77] text-5xl absolute font-bold md:text-9xl"
                  >
                    1883 - 2023
                  </h1>
                </div>

                <div className="py-28 md:py-20">
                  <div className="flex justify-center">
                    <div
                      className="border border-[#C3B17D] rounded-full p-6 md:p-8 relative flex justify-center items-center"
                      onClick={handleClick}
                    >
                      <img
                        src={arrowDown}
                        alt=""
                        className="w-1.5 md:w-2 absolute"
                      />
                    </div>
                  </div>
                </div>
                <div ref={posicionRef} id="posicion"></div>
                <div class="w-full px-4 md:px-0">
                  <img
                    src={paisaje}
                    alt=""
                    className="w-full md:w-3/4 mx-auto"
                  />
                </div>
              </div>

              <div class="container mx-auto">
                <div class="flex flex-col gap-y-2 md:gap-y-10 pt-5 pb-32 md:w-3/4 mx-auto px-10 md:px-0 ">
                  <div className="flex flex-col gap-y-4">
                    <h1
                      style={playfairFontBlack}
                      class="text-[#C4AC77] font-bold text-lg md:text-5xl tracking-wide"
                    >
                      1883
                    </h1>
                    <h2
                      class="uppercase text-[#C4AC77] text-sm  tracking-wide md:hidden"
                      style={robotoFontRegular}
                    >
                      Roots in patagonia
                    </h2>
                    <h2 class="uppercase text-[#C4AC77] text-4xl  tracking-wide hidden md:block ">
                      Roots in patagonia
                    </h2>
                  </div>
                  <div>
                    <p
                      class="text-black text-xs md:text-2xl tracking-wider"
                      style={playfairFontRegular}
                    >
                      We have our{" "}
                      <strong>
                        roots in Patagonia and in winemaking stretching back
                        over 150 years
                      </strong>
                      . Stemming from two very different origins, Bodega Ribera
                      del Cuarzo seems to be the synthesis of those two powerful
                      forces. <br />
                      <br />
                      “On my grandmother's side,{" "}
                      <strong>
                        Melchor Concha y Toro started his winery in 1883
                      </strong>
                      , only a few years after Jose Menendez had started his
                      wool producing and shipping company in far away Patagonia.
                      Stories of how these two individuals worked hard to create
                      their ventures intertwine in dinner conversations over
                      generations. <br /> <br />I have come to believe that the
                      coincidence of these two pioneers, having thousands of
                      miles apart but almost at the same time successfully
                      developed their companies, was the mysterious merging
                      force that led to the creation of Bodega Ribera del
                      Cuarzo.
                    </p>
                  </div>
                </div>
              </div>

              <div class=" bg-[#212121]">
                <div class="pt-32 pb-5">
                  <div className="container mx-auto">
                    <div class="-mt-52 px-4 md:px-0">
                      <img
                        src={carruajeHistory}
                        alt=""
                        class="w-full object-cover md:w-3/4 mx-auto"
                      />
                    </div>
                    <p
                      class="text-white text-xs pt-10 px-10 md:px-0 tracking-wider md:w-3/4 mx-auto md:text-2xl"
                      style={playfairFontRegular}
                    >
                      Patagonia was the place where we spent the summers of my
                      childhood and where I had traveled many times in my youth.
                      It was always a place where I truly found myself at home.
                      Amidst the wind flat topped hills, the enormous open
                      spaces and the gigantic mountains where distances are
                      dwarfed only by an infinite sky the idea of setting up a
                      winery little by little started to materialize.
                      <br />
                      <br />
                      My career in wines started when, as a very young person, I
                      joined the winery of Dr. Nicolas Catena and at his side
                      discovered the fascinating world of wine which has become
                      my life. I Iearned from him every detail of how to
                      cultivate the best grapes, how to produce the best wines
                      and above all how to never ever relinquish in the pursuit
                      of excellence. <br />
                      <br />
                      Finally, the day arrived—the moment when I could merge my
                      love for my Patagonian homeland with the unwavering
                      passion for wine instilled within me since childhood. This
                      unique opportunity, which we tirelessly pursue each day,
                      is embodied in the name of Bodega Ribera del Cuarzo. Here,
                      we strive to craft the finest wines, honoring our heritage
                      and expressing the essence of our beloved land.”
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#212121]  ">
                <div className="container mx-auto  px-4 md:px-0">
                  <img
                    src={felipe}
                    alt=""
                    className="w-full md:w-3/4 mx-auto"
                  />
                </div>
              </div>
              <div className=" bg-[#212121]">
                <div className="container mx-auto">
                  <p
                    class="text-white text-xs md:text-base pt-2 px-10 tracking-wider text-center"
                    style={playfairFontRegular}
                  >
                    <i>Felipe José Menendez Arguelles</i>
                  </p>
                </div>
              </div>

              <div class=" bg-[#212121]">
                <div class="container mx-auto py-20">
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

export default Family;
