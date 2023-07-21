import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import wineYardSlide1 from "../images/introHourses.jpg";
import wineYardSlide2 from "../images/wineYardSlide2.jpg";
import wineYardSlide3 from "../images/wineYardSlide3.jpg";
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
    fontFamily: "Playfair Italic , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };
  return (
    <div>
      <header className="py-10 fixed top-0 left-0 right-0 z-50  ">
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

      <div className="bg-[#F2ECE1] py-3">
        <div className="container mx-auto flex flex-col justify-center items-center mt-10">
          <div className="pt-16">
            <h1
              style={playfairFontItalic}
              className="text-xs text-[#5f5f5e] text-center tracking-widest"
            >
              <i style={playfairFontItalic}>Patagonian Spirit</i>
            </h1>
            <h2
              style={playfairFontBlack}
              className="font-bold text-base text-[#C4AC77] text-center tracking-wider"
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
    if (currentScreen === 3) {
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
          <div className="bg-[#F2ECE1] ">
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
        <animated.div style={{ ...style, width: "100%" }}>
          <div className="mt-[-20px]">
            <div className="bg-[#F2ECE1] ">
              <p className="ml-1 text-left relative">
                <span
                  style={playfairFontBlack}
                  className="text-[#C4AC77] text-lg"
                >
                  01
                </span>
                <span
                  style={playfairFontBlack}
                  className="text-[#C4AC77] absolute top-1 left-6 text-xs underline"
                >
                  04
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img src={wineYardSlide1} alt="" className="w-full" />
              </div>
            </div>
            <div className="flex justify-center space-x-10 pt-2  bg-[#F2ECE1]">
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
            <div className="bg-[#F2ECE1] pt-5">
              <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-5">
                    <div className="w-4/5 mx-auto">
                      <p
                        style={robotoFontRegular}
                        className="decoration-black	text-[#C4AC77]  text-xs leading-6 pb-3 tracking-wide"
                      >
                        LOREM IPSUM
                      </p>
                      <p
                        style={playfairFontRegular}
                        className="decoration-black	 text-xs tracking-wider"
                      >
                        Horses are a way of life: living with horses slows
                        things down, allowing us perspective and to connect with
                        nature, to go through life in a more relaxed and
                        profound way.
                      </p>
                    </div>
                  </div>
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
        <animated.div style={{ ...style, width: "100%" }}>
          <div className="mt-[-20px]">
            <div className="bg-[#F2ECE1]">
              <p className="ml-1 text-left relative">
                <span
                  style={playfairFontBlack}
                  className="text-[#C4AC77] text-lg"
                >
                  02
                </span>
                <span
                  style={playfairFontBlack}
                  className="text-[#C4AC77] absolute top-1 left-6 text-xs underline"
                >
                  04
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
            <div className="flex justify-center space-x-10 pt-2  bg-[#F2ECE1]">
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
            <div className="bg-[#F2ECE1] pt-5">
              <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-5">
                    <div className="w-4/5 mx-auto">
                      <p
                        style={robotoFontRegular}
                        className="decoration-black	text-[#C4AC77]  text-xs leading-6 pb-3 tracking-wide"
                      >
                        THE HOUSE{" "}
                      </p>
                      <p
                        style={playfairFontRegular}
                        className="decoration-black	 text-xs tracking-wider"
                      >
                        Countess Noemi Marone Cinzano identified this unique
                        location and laid the foundations for what is now Bodega
                        Ribera del Cuarzo. Similarly to Italian vineyards, she
                        decided to build a house next to the winery. Patagonian
                        in style with inviting architecture and a small garden
                        with a view of the valley that leads down to the river,
                        the house is where we rest after work and where we
                        gather as a family to enjoy the holidays. It’s also
                        where we think, plan, and make decisions with our
                        colleagues, sharing our table with them in what has
                        become the family home.
                      </p>
                    </div>
                  </div>
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
        <animated.div style={{ ...style, width: "100%" }}>
          <div className="mt-[-20px]">
            <div className="bg-[#F2ECE1]">
              <p className="ml-1 text-left relative">
                <span
                  style={playfairFontBlack}
                  className="text-[#C4AC77] text-lg"
                >
                  03
                </span>
                <span
                  style={playfairFontBlack}
                  className="text-[#C4AC77] absolute top-1 left-6 text-xs underline"
                >
                  04
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
            <div className="flex justify-center space-x-10 pt-2  bg-[#F2ECE1]">
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
            <div className="bg-[#F2ECE1] pt-5">
              <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-5">
                    <div className="w-4/5 mx-auto">
                      <p
                        style={robotoFontRegular}
                        className="decoration-black	text-[#C4AC77]  text-xs leading-6 pb-3 tracking-wide"
                      >
                        THE RIVER{" "}
                      </p>
                      <p
                        style={playfairFontRegular}
                        className="decoration-black	 text-xs tracking-wider"
                      >
                        The Rio Negro is the largest river in Patagonia. The
                        Limay and Neuquén rivers gather water and minerals from
                        mountain snowmelt before flowing into the central and
                        eastern parts of the country, eventually merging to form
                        the Rio Negro. <br />
                        <br />
                        The Rio Negro reaches the sea in the south of the Buenos
                        Aires Province, in a small town called El Cóndor. It
                        meanders between two imposing <i>barda</i> walls, one to
                        the north and the other to the south, which have been
                        formed over millions of years. In 1860, Estanislao
                        Ceballos described them as river terraces, and they
                        contribute invaluable calcium carbonate, stone, quartz,
                        and ash to the landscape. Today, the river flows through
                        the center of this valley, a valley nestled between{" "}
                        <i>bardas</i>.
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
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

const Screen4 = ({ currentScreen, handleNext, handlePrev }) => {
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
        <animated.div style={{ ...style, width: "100%" }}>
          <div className="mt-[-20px]">
            <div className="bg-[#F2ECE1]">
              <p className="ml-1 text-left relative">
                <span
                  style={playfairFontBlack}
                  className="text-[#C4AC77] text-lg"
                >
                  04
                </span>
                <span
                  style={playfairFontBlack}
                  className="text-[#C4AC77] absolute top-1 left-6 text-xs underline"
                >
                  04
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img src={wineYardSlide4} alt="" className="w-full" />
              </div>
            </div>
            <div className="flex justify-center space-x-10 pt-2  bg-[#F2ECE1]">
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
            <div className="bg-[#F2ECE1] pt-5">
              <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-5">
                    <div className="w-4/5 mx-auto">
                      <p
                        style={robotoFontRegular}
                        className="decoration-black	text-[#C4AC77]  text-xs leading-6 pb-3 tracking-wide"
                      >
                        THE HORSES{" "}
                      </p>
                      <p
                        style={playfairFontRegular}
                        className="decoration-black	 text-xs tracking-wider"
                      >
                        Maintaining traditional working methods helps us to keep
                        in touch with the land, a connection that defines us as
                        farmers. At the estate, we also raise Criollo horses,
                        the famous Argentine breed. In addition to using
                        tractors and other machinery that improve the efficiency
                        of certain tasks, working with animals is a way of
                        respecting and caring for nature in all our
                        interventions, always working towards producing the best
                        possible flavor. <br />
                        <br />
                        Horses also provide manure, which goes into the compost
                        we use at the vineyard: it is added to organic waste
                        from the wine barrels and vats and everything consumed
                        at the house. This is the fertilizer for the fruits and
                        vegetables we grow for ourselves, our gardens and, of
                        course, our vineyard. <br />
                        <br />
                        <strong>
                          But horses are also a way of life: living with horses
                          slows things down, allowing us perspective and to
                          connect with nature, to go through life in a more
                          relaxed and profound way.
                        </strong>
                      </p>
                    </div>
                  </div>
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
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default LifeOnEstate;
