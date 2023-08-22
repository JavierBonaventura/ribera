import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import ilustrationHistory from "../images/ilustracion-history-1.png";
import arrowDown from "../images/arrow-down.png";
import carruajeHistory from "../images/carruaje-history.jpg";
import paisaje from "../images/paisaje-family-2.png";
import iconIg from "../images/icon-ig.png";
import felipe from "../images/felipe.jpg";
import "../App.css";
import { Transition, animated } from "@react-spring/web";

const Family = () => {
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
              <header className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-5 xl:py-10 px-5 2xl:px-0  fixed top-0 left-0 right-0 z-50">
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

              <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0">
                <div class="pt-24 md:pb-10 lg:pt-24 2xl:pt-36 md:h-screen flex flex-col gap-y-5 2xl:gap-y-10">
                  <div class="flex flex-col justify-center items-center mt-10 md:mt-0 md:gap-y-0">
                    <h1
                      style={playfairFontItalic}
                      class="text-[#5f5f5e] text-xs md:text-lg tracking-widest"
                    >
                      <i style={playfairFontItalic}>History</i>
                    </h1>
                    <h2
                      style={playfairFontBlack}
                      className="text-base md:text-2xl text-[#C4AC77] text-center tracking-wider uppercase"
                    >
                      Family
                    </h2>
                  </div>
                  <div class="relative flex justify-center items-center pt-5 md:pt-0">
                    <img
                      src={ilustrationHistory}
                      alt=""
                      class="w-full md:w-[45rem] xl:w-[46rem] 2xl:w-7/12 "
                    />
                    <h1
                      style={playfairFontExtraBold}
                      class="text-[#C4AC77] text-5xl absolute font-bold md:text-7xl xl:text-8xl md:pt-40"
                    >
                      1883 - 2023
                    </h1>
                  </div>
                  <div className="py-28 md:py-0">
                    <div className="flex justify-center">
                      <div
                        className="border border-[#C3B17D] rounded-full p-6 md:p-6 relative flex justify-center items-center"
                        onClick={handleClick}
                      >
                        <img
                          src={arrowDown}
                          alt=""
                          className="w-1.5 md:w-1.5 absolute"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0">
                <div ref={posicionRef} id="posicion"></div>
                <div className="flex flex-col md:flex-row md:py-20">
                  <div class="w-full xl:w-9/12 mx-auto px-4 md:px-0">
                    <img src={paisaje} alt="" />
                  </div>
                  <div class="flex flex-col gap-y-2 md:gap-y-5 w-full xl:w-3/4 mx-auto px-10 xl:px-24 pt-10 pb-32 md:pt-20 md:pb-0 ">
                    <div className="flex flex-col md:gap-y-2">
                      <h1
                        style={playfairFontBlack}
                        class="text-[#C4AC77] font-bold text-lg md:text-4xl tracking-wide"
                      >
                        1883
                      </h1>
                      <h2
                        class="uppercase text-[#C4AC77] tracking-wide"
                        style={robotoFontRegular}
                      >
                        <span className="text-sm md:text-xl">
                          Roots in patagonia
                        </span>
                      </h2>
                    </div>
                    <div>
                      <p
                        class="text-justify tracking-wider text-black text-xs lg:text-base lg:leading-7"
                        style={playfairFontRegular}
                      >
                        We have our{" "}
                        <strong>
                          roots in Patagonia and in winemaking stretching back
                          over 150 years
                        </strong>
                        . Stemming from two very different origins, Bodega
                        Ribera del Cuarzo seems to be the synthesis of those two
                        powerful forces. <br />
                        <br />
                        “On my grandmother's side,{" "}
                        <strong>
                          Melchor Concha y Toro started his winery in 1883
                        </strong>
                        , only a few years after Jose Menendez had started his
                        wool producing and shipping company in far away
                        Patagonia. <br />
                        <br /> Stories of how these two individuals worked hard
                        to create their ventures intertwine in dinner
                        conversations over generations. <br /> <br />I have come
                        to believe that the coincidence of these two pioneers,
                        having thousands of miles apart but almost at the same
                        time successfully developed their companies, was the
                        mysterious merging force that led to the creation of
                        Bodega Ribera del Cuarzo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={carruajeHistory}
                  alt=""
                  className="w-6/12 2xl:w-4/12 mx-auto contenido-dinamico absolute  right-4 2xl:right-44 -bottom-5 lg:-bottom-20"
                />

                <div class="bg-[#212121] w-full md:w-2/3">
                  <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0">
                    <div className="flex flex-col md:flex-row-reverse">
                      <div class="-mt-20 w-full px-4 md:px-0 md:hidden">
                        <img
                          src={carruajeHistory}
                          alt=""
                          className="w-full md:w-9/12 mx-auto "
                        />
                      </div>

                      <div class="flex flex-col gap-y-2 md:gap-y-5 pt-5 pb-12 md:py-10 md:pr-52 lg:pr-60 xl:pl-24 xl:pr-72 w-full 2xl:px-0 2xl:w-2/4 mx-auto px-10 md:px-0 ">
                        <p
                          class="text-justify  tracking-wider text-white text-xs lg:text-base lg:leading-7"
                          style={playfairFontRegular}
                        >
                          Patagonia was the place where we spent the summers of
                          my childhood and where I had traveled many times in my
                          youth. It was always a place where I truly found
                          myself at home. Amidst the wind flat topped hills, the
                          enormous open spaces and the gigantic mountains where
                          distances are dwarfed only by an infinite sky the idea
                          of setting up a winery little by little started to
                          materialize.
                          <br />
                          <br />
                          My career in wines started when, as a very young
                          person, I joined the winery of Dr. Nicolas Catena and
                          at his side discovered the fascinating world of wine
                          which has become my life. I Iearned from him every
                          detail of how to cultivate the best grapes, how to
                          produce the best wines and above all how to never ever
                          relinquish in the pursuit of excellence. <br />
                          <br />
                          Finally, the day arrived—the moment when I could merge
                          my love for my Patagonian homeland with the unwavering
                          passion for wine instilled within me since childhood.
                          This unique opportunity, which we tirelessly pursue
                          each day, is embodied in the name of Bodega Ribera del
                          Cuarzo. Here, we strive to craft the finest wines,
                          honoring our heritage and expressing the essence of
                          our beloved land.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-[#212121] hidden">
                <div class="pt-32 pb-5 md:pb-10">
                  <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl">
                    <div className="flex flex-col md:flex-row-reverse">
                      <div class="-mt-52 px-4 md:px-0 md:mt-0">
                        <img
                          src={carruajeHistory}
                          alt=""
                          class="w-full object-cover md:w-9/12 mx-auto"
                        />
                      </div>
                      <p
                        class="text-justify tracking-wider text-white text-xs pt-10 px-10 md:px-32 md:w-3/4 mx-auto lg:text-base 2xl:text-lg"
                        style={playfairFontRegular}
                      >
                        Patagonia was the place where we spent the summers of my
                        childhood and where I had traveled many times in my
                        youth. It was always a place where I truly found myself
                        at home. Amidst the wind flat topped hills, the enormous
                        open spaces and the gigantic mountains where distances
                        are dwarfed only by an infinite sky the idea of setting
                        up a winery little by little started to materialize.
                        <br />
                        <br />
                        My career in wines started when, as a very young person,
                        I joined the winery of Dr. Nicolas Catena and at his
                        side discovered the fascinating world of wine which has
                        become my life. I Iearned from him every detail of how
                        to cultivate the best grapes, how to produce the best
                        wines and above all how to never ever relinquish in the
                        pursuit of excellence. <br />
                        <br />
                        Finally, the day arrived—the moment when I could merge
                        my love for my Patagonian homeland with the unwavering
                        passion for wine instilled within me since childhood.
                        This unique opportunity, which we tirelessly pursue each
                        day, is embodied in the name of Bodega Ribera del
                        Cuarzo. Here, we strive to craft the finest wines,
                        honoring our heritage and expressing the essence of our
                        beloved land.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 pt-10 md:pt-20 lg:pt-32 xl:pt-40 2xl:pt-60">
                <div className="w-full md:w-2/5 mx-auto flex flex-col gap-y-5 xl:gap-y-16">
                  <div className="px-10 md:px-0">
                    <p
                      class="text-justify tracking-wider text-black text-xs lg:text-base lg:leading-7"
                      style={playfairFontRegular}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus, eligendi! Consectetur, ipsa! Nemo,
                      consequuntur temporibus maiores minus dolore nulla,
                      tempore fugit repellat incidunt necessitatibus tempora
                      totam quo velit? Et, mollitia! Quaerat nostrum quis porro
                      suscipit provident delectus numquam. Soluta, nobis rerum,
                      saepe nihil laboriosam non eius, minima laborum tempore
                      doloribus vero neque quidem vitae sequi! Odit perspiciatis
                      facere ipsam quae.
                    </p>
                  </div>
                  <img src={felipe} alt="" className="px-4 md:px-0" />
                </div>
                <p
                  class="text-black text-xs lg:text-lg pt-2 px-10 tracking-wider text-center "
                  style={playfairFontRegular}
                >
                  <i>Felipe José Menendez Arguelles</i>
                </p>
              </div>

              <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 py-20 ">
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
            </body>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default Family;
