import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import workVineyardSlide1 from "../images/generica-vineyard.jpg";
import workVineyardSlide2 from "../images/pruning.jpg";
import workVineyardSlide3 from "../images/trellising.jpg";
import workVineyardSlide4 from "../images/disbudding.jpg";
import workVineyardSlide5 from "../images/harvest.jpg";
import workVineyardSlide6 from "../images/weeds.jpg";
import workVineyardSlide7 from "../images/ancient.jpg";
import flechaIzquierda from "../images/flechaIzquierda.jpg";
import flechaDerecha from "../images/flechaDerecha.jpg";
import iconIg from "../images/icon-ig.png";
import "../App.css";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";

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

      <div className=" bg-[#F3EEE3] pt-4 pb-12">
        <div className="container mx-auto flex flex-col justify-center items-center mt-10">
          <div className="pt-9">
            <h1
              style={playfairFontItalic}
              className="italic text-xs text-[#5f5f5e] text-center tracking-widest"
            >
              <i style={playfairFontItalic}>Patagonian Spirit</i>
            </h1>
            <h2
              style={playfairFontBlack}
              className="text-base text-[#C4B27D] text-center tracking-wider uppercase"
            >
              WORK IN THE VINEYARD
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const WorkVineyard = () => {
  const location = useLocation();
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    if (currentScreen === 6) {
      setCurrentScreen(0);
    } else {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const handlePrev = () => {
    if (currentScreen === 0) {
      setCurrentScreen(6);
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
              {currentScreen === 3 && (
                <Screen4
                  currentScreen={currentScreen}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              )}
              {currentScreen === 4 && (
                <Screen5
                  currentScreen={currentScreen}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              )}

              {currentScreen === 5 && (
                <Screen6
                  currentScreen={currentScreen}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              )}

              {currentScreen === 6 && (
                <Screen7
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
  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
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
                  07
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img src={workVineyardSlide1} alt="" className="w-full" />
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
                      ></p>
                      <p
                        class="text-[#000000] text-xs tracking-wider text-justify"
                        style={playfairFontRegular}
                      >
                        In our work, all the naturally organic components that
                        the vineyard allows us to take and preserve come into
                        play. The Patagonian wind is a key factor, and the
                        constant breeze along with low ambient humidity
                        conditions combine as a natural mechanism for disease
                        control. The entire vineyard surface features biological
                        corridors that generate a free and natural circulation
                        of permanent flora and fauna, benefiting further from
                        the isolated estate situation without other surrounding
                        crops. Our philosophy revolves around nurturing plants
                        to self-regulate throughout their growth cycle,
                        intervening as little as possible and providing support
                        so they can make decisions autonomously. Our role is to
                        guide them towards their maximum expression and quality.
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
  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
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
                  07
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img
                  src={workVineyardSlide2}
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
                        PRUNING
                      </p>
                      <p
                        class="text-[#000000] text-xs tracking-wider text-justify"
                        style={playfairFontRegular}
                      >
                        We embrace traditional vineyard management techniques,
                        such as Guyot pruning, using bilateral cane. This
                        pruning method enables the plants to regulate their
                        resources to achieve a better balance between root
                        growth and fruit development.
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

const Screen3 = ({ currentScreen, handleNext, handlePrev }) => {
  const location = useLocation();

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

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
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
                  7
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img
                  src={workVineyardSlide3}
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
                        TYING
                      </p>
                      <p
                        class="text-[#000000] text-xs tracking-wider text-justify"
                        style={playfairFontRegular}
                      >
                        In this process, we use plant-based and biodegradable
                        materials in an effort to respect the environment as
                        much as possible.
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

const Screen4 = ({ currentScreen, handleNext, handlePrev }) => {
  const location = useLocation();
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

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
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
                  04
                </span>
                <span
                  style={playfairFontBlack}
                  className="text-[#C4B27D] absolute top-1 left-6 text-xs underline"
                >
                  07
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img src={workVineyardSlide4} alt="" className="w-full" />
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
                        TOPPING
                      </p>
                      <p
                        class="text-[#000000] text-xs tracking-wider text-justify"
                        style={playfairFontRegular}
                      >
                        Controlled growth management favors minimal
                        intervention, leading to better plant balance and
                        reduced use of human and mechanical resources.
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

const Screen5 = ({ currentScreen, handleNext, handlePrev }) => {
  const location = useLocation();

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

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
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
                  05
                </span>
                <span
                  style={playfairFontBlack}
                  className="text-[#C4B27D] absolute top-1 left-6 text-xs underline"
                >
                  07
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img src={workVineyardSlide5} alt="" className="w-full" />
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
                        HARVEST
                      </p>
                      <p
                        class="text-[#000000] text-xs tracking-wider text-justify"
                        style={playfairFontRegular}
                      >
                        Harvesting in our vineyard is a meticulous process
                        carried out manually and in several stages. The unique
                        characteristics of each subsection within our
                        five-hectare estate, with different grape varieties and
                        maturation cycles, require harvesting at distinct times.
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

const Screen6 = ({ currentScreen, handleNext, handlePrev }) => {
  const location = useLocation();

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

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
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
                  06
                </span>
                <span
                  style={playfairFontBlack}
                  className="text-[#C4B27D] absolute top-1 left-6 text-xs underline"
                >
                  07
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img src={workVineyardSlide6} alt="" className="w-full" />
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
                        WEEDS
                      </p>
                      <p
                        class="text-[#000000] text-xs tracking-wider text-justify"
                        style={playfairFontRegular}
                      >
                        We implement traditional control methods, avoiding the
                        use of herbicides. Between rows, we prioritize the
                        development of our pastures and the natural flora of the
                        environment.
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

const Screen7 = ({ currentScreen, handleNext, handlePrev }) => {
  const location = useLocation();

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

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
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
                  07
                </span>
                <span
                  style={playfairFontBlack}
                  className="text-[#C4B27D] absolute top-1 left-6 text-xs underline"
                >
                  07
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img src={workVineyardSlide7} alt="" className="w-full" />
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
                        ANCIENT TECHNIQUES
                      </p>
                      <p
                        class="text-[#000000] text-xs tracking-wider text-justify"
                        style={playfairFontRegular}
                      >
                        Maintaining traditional work methods helps us never lose
                        sight of our connection with the land, which defines us
                        as farmers. In addition to using tractors and other
                        machinery to be efficient in specific tasks, working
                        with animals like our Criollo horses, an Argentine
                        breed, is a form of respect and care for nature, seeking
                        to be rewarded with the finest flavor.
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

export default WorkVineyard;
