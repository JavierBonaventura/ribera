import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import wineYardSlide1 from "../images/wineYardSlide3.jpg";
import wineYardSlide2 from "../images/wineYardSlide2.jpg";
import wineYardSlide3 from "../images/hourses.jpg";
import wineYardSlide4 from "../images/hourses.jpg";
import blackRiver from "../images/blackRiver.jpg";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";
import flechaIzquierda from "../images/flechaIzquierda.jpg";
import flechaDerecha from "../images/flechaDerecha.jpg";
import iconIg from "../images/icon-ig.png";
import "../App.css";

function Header() {
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

  return (
    <div>
      <header className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl py-5 xl:py-10 px-5 xl:px-0 fixed top-0 left-0 right-0 z-50">
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

      <div className="bg-[#F3EEE3] pt-4 pb-12">
        <div className="container mx-auto flex flex-col justify-center items-center mt-10">
          <div className="pt-9">
            <h1
              style={playfairFontItalic}
              className="text-xs text-[#5f5f5e] text-center tracking-widest"
            >
              <i style={playfairFontItalic}>Patagonian Spirit</i>
            </h1>
            <h2
              style={playfairFontBlack}
              className="font-bold text-base text-[#C4B27D] text-center tracking-wider"
            >
              LIFE ON THE ESTATE
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const LifeOnEstate = () => {
  const location = useLocation();
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    if (currentScreen === 2) {
      setCurrentScreen(0);
    } else {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const handlePrev = () => {
    if (currentScreen === 0) {
      setCurrentScreen(2);
    } else {
      setCurrentScreen(currentScreen - 1);
    }
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
          <div className="bg-[#F3EEE3] ">
            <Header />
            <div>
              {/* Contenido del slider */}
              {currentScreen === 0 && (
                <Screen1
                  currentScreen={currentScreen}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              )}
              {currentScreen === 1 && (
                <Screen2
                  currentScreen={currentScreen}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              )}
              {currentScreen === 2 && (
                <Screen3
                  currentScreen={currentScreen}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              )}
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

const Screen1 = ({ currentScreen, handleNext, handlePrev }) => {
  const location = useLocation();

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
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
        <animated.div
          style={{
            ...style,
            width: "100%",
            backgroundColor: "#F3EEE3",
            minHeight: "100vh",
          }}
        >
          <div className="mt-[-20px]">
            <div className="bg-[#F3EEE3] pb-2">
              <p className="ml-6 text-left relative">
                <span
                  style={playfairFontBlack}
                  className="text-[#C4B27D] text-lg"
                >
                  01
                </span>
                <span
                  style={playfairFontBlack}
                  className="text-[#C4B27D] absolute top-1 left-6 text-xs underline"
                >
                  03
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img src={wineYardSlide1} alt="" className="w-full" />
              </div>
            </div>
            <div className="flex justify-center space-x-10 pt-2  bg-[#F3EEE3]">
              <button
                className="w-14 h-14 rounded-full flex items-center justify-center mr-2"
                onClick={handlePrev}
              >
                <div className="">
                  <img src={flechaIzquierda} alt="" className="w-full" />
                </div>
              </button>

              <button
                className="w-14 h-14 flex items-center justify-center"
                onClick={handleNext}
              >
                <div className="">
                  <img src={flechaDerecha} alt="" className="w-full" />
                </div>
              </button>
            </div>
          </div>
          <div>
            <div className="bg-[#F3EEE3] pt-5">
              <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-5">
                    <div className="w-4/5 mx-auto">
                      <p
                        style={robotoFontRegular}
                        className="decoration-black	text-[#C4B27D]  text-xs leading-6 pb-3 tracking-wide"
                      >
                        THE HOUSE BY THE WINERY
                      </p>
                      <p
                        style={playfairFontRegular}
                        className="decoration-black	 text-xs tracking-wider text-justify"
                      >
                        Countess Noemi Marone Cinzano discovered this
                        unparalleled place and laid the foundation for what is
                        now Bodega Ribera del Cuarzo. As in all Italian estates,
                        she built a house by the winery. With Patagonian style
                        and appealing architecture, a small garden overlooks the
                        valley that flows into the river. The house is where we
                        rest after a day's work and where we gather with family
                        to enjoy and celebrate. It's also where we think, plan,
                        and decide alongside those who help us carry out
                        production. We share meals, as it has become our home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container mx-auto bg-[#F3EEE3]">
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
        </animated.div>
      )}
    </Transition>
  );
};

const Screen2 = ({ currentScreen, handleNext, handlePrev }) => {
  const location = useLocation();

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
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
        <animated.div
          style={{
            ...style,
            width: "100%",
            backgroundColor: "#F3EEE3",
            minHeight: "100vh",
          }}
        >
          <div className="mt-[-20px]">
            <div className="bg-[#F3EEE3] pb-2">
              <p className="ml-6 text-left relative">
                <span
                  style={playfairFontBlack}
                  className="text-[#C4B27D] text-lg"
                >
                  02
                </span>
                <span
                  style={playfairFontBlack}
                  className="text-[#C4B27D] absolute top-1 left-6 text-xs underline"
                >
                  03
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img
                  src={wineYardSlide2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex justify-center space-x-10 pt-2  bg-[#F3EEE3]">
              <button
                className="w-14 h-14 rounded-full flex items-center justify-center mr-2"
                onClick={handlePrev}
              >
                <div className="">
                  <img src={flechaIzquierda} alt="" className="w-full" />
                </div>
              </button>

              <button
                className="w-14 h-14 flex items-center justify-center"
                onClick={handleNext}
              >
                <div className="">
                  <img src={flechaDerecha} alt="" className="w-full" />
                </div>
              </button>
            </div>
          </div>
          <div>
            <div className="bg-[#F3EEE3] pt-5">
              <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-5">
                    <div className="w-4/5 mx-auto">
                      <p
                        style={robotoFontRegular}
                        className="decoration-black	text-[#C4B27D] text-xs leading-6 pb-3 tracking-wide"
                      >
                        THE RIVER
                      </p>
                      <p
                        style={playfairFontRegular}
                        className="decoration-black	 text-xs tracking-wider text-justify"
                      >
                        The Rio Negro is the largest river in Patagonia. The
                        Limay and Neuquén rivers collect water and minerals from
                        mountain melt before flowing towards the center and east
                        of the country, ultimately merging to form the Rio
                        Negro. <br />
                        <br /> This river flows into the sea south of Buenos
                        Aires Province, in a small town called El Cóndor. It
                        meanders between two imposing barda walls, one to the
                        north and another to the south, formed over millions of
                        years. In 1860, Estanislao Ceballos described them as
                        river terraces, and they provide invaluable
                        contributions of calcium carbonate, stone, quartz, and
                        ashes. Today, the river runs through this valley, a
                        valley nestled between <i>bardas</i>.
                      </p>
                    </div>
                  </div>
                  <div className="container mx-auto flex flex-col justify-center  items-center">
                    <div className="w-10/12">
                      <img
                        src={blackRiver}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container mx-auto bg-[#F3EEE3]">
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
        </animated.div>
      )}
    </Transition>
  );
};

const Screen3 = ({ currentScreen, handleNext, handlePrev }) => {
  const location = useLocation();

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
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
        <animated.div
          style={{
            ...style,
            width: "100%",
            backgroundColor: "#F3EEE3",
            minHeight: "100vh",
          }}
        >
          <div className="mt-[-20px]">
            <div className="bg-[#F3EEE3] pb-2">
              <p className="ml-6 text-left relative">
                <span
                  style={playfairFontBlack}
                  className="text-[#C4B27D] text-lg"
                >
                  03
                </span>
                <span
                  style={playfairFontBlack}
                  className="text-[#C4B27D] absolute top-1 left-6 text-xs underline"
                >
                  03
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img
                  src={wineYardSlide3}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex justify-center space-x-10 pt-2  bg-[#F3EEE3]">
              <button
                className="w-14 h-14 rounded-full flex items-center justify-center mr-2"
                onClick={handlePrev}
              >
                <div className="">
                  <img src={flechaIzquierda} alt="" className="w-full" />
                </div>
              </button>

              <button
                className="w-14 h-14 flex items-center justify-center"
                onClick={handleNext}
              >
                <div className="">
                  <img src={flechaDerecha} alt="" className="w-full" />
                </div>
              </button>
            </div>
          </div>
          <div>
            <div className="bg-[#F3EEE3] pt-5">
              <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-5">
                    <div className="w-4/5 mx-auto">
                      <p
                        style={robotoFontRegular}
                        className="decoration-black	text-[#C4B27D]  text-xs leading-6 pb-3 tracking-wide"
                      >
                        THE HORSES
                      </p>
                      <p
                        style={playfairFontRegular}
                        className="decoration-black	 text-xs tracking-wider text-justify"
                      >
                        Maintaining traditional working methods helps us never
                        lose sight of the connection with the land, a connection
                        that defines us as farmers. On the estate, we have
                        Criollo horses, an Argentine breed. In addition to using
                        tractors and machinery for efficiency in specific tasks,
                        working with animals is a form of respect and care for
                        nature. It seeks to be rewarded with the best flavor.
                        <br />
                        <br />
                        Furthermore, the horses play a role in fertilization,
                        contributing to the compost we produce on the estate:
                        their manure combines with organic residues from wine
                        production and household consumption. This serves as
                        fertilizer for the fruits and vegetables we grow for
                        ourselves, as well as for our gardens and, of course,
                        the vineyard. But horses also embody a way of life:
                        <br /> <br />
                        Living with horses slows things down, allowing us to
                        decelerate and connect with nature, exploring the land
                        at a more leisurely and profound pace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container mx-auto bg-[#F3EEE3]">
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
        </animated.div>
      )}
    </Transition>
  );
};

export default LifeOnEstate;
