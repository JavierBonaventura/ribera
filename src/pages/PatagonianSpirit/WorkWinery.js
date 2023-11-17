import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import hambur from "../../images/menu-hambur.png";
import winesPreservationSlide1 from "../../images/fermentation-2.jpg";
import winesPreservationSlide2 from "../../images/aging-1.jpg";
import winesPreservationSlide3 from "../../images/blending-1.jpg";
import winesPreservationSlide4 from "../../images/bottling2.jpg";
import winesPreservationSlide5 from "../../images/cellaring.jpg";
import flechaIzquierda from "../../images/flechaIzquierda.jpg";
import flechaDerecha from "../../images/flechaDerecha.jpg";
import iconIg from "../../images/icon-ig.png";
import "../../App.css";
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

      <div className="bg-[#F3EEE3] pt-4 pb-12">
        <div className="container mx-auto flex flex-col justify-center items-center mt-10">
          <div className="pt-9">
            <h1 className="italic text-xs text-[#5f5f5e] text-center tracking-widest">
              <i style={playfairFontItalic}>Patagonian Spirit</i>
            </h1>
            <h2
              style={playfairFontBlack}
              className="font-bold text-base text-[#C4B27D] text-center tracking-wider"
            >
              WORK IN THE WINERY
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const WinesPreservation = () => {
  const location = useLocation();
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    if (currentScreen === 4) {
      setCurrentScreen(0);
    } else {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const handlePrev = () => {
    if (currentScreen === 0) {
      setCurrentScreen(4);
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
                  05
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img src={winesPreservationSlide1} alt="" className="w-full" />
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
                        FERMENTATION
                      </p>
                      <p
                        class="text-[#000000] text-xs tracking-wider text-justify"
                        style={playfairFontRegular}
                      >
                        Fermentation takes place in open-top concrete pools,
                        each with a capacity of about 2000 kilograms, where we
                        work very small and select batches from the vineyard.{" "}
                        <br />
                        <br />
                        During the process, the tasks performed are respectful
                        and careful, with minimal intervention, aimed at
                        achieving spontaneous fermentation with
                        vineyard-specific or certified organic yeasts. We do not
                        use additives or clarifiers. <br /> <br />
                        We follow traditional methods such as manual pressing
                        and délestage, especially with our Malbec grapes, and
                        gentle remontage during the final stages. <br /> <br />
                        Maceration times are short, between 12 and 13 days,
                        because we believe that longer times are
                        counterproductive for expressing the freshness of our
                        terroir.
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
            backgroundColor: "#F2ECE1",
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
                  05
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img
                  src={winesPreservationSlide2}
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
                        AGING
                      </p>

                      <p
                        class="text-[#000000] text-xs tracking-wider text-justify"
                        style={playfairFontRegular}
                      >
                        Each batch or small grape vinification will dictate
                        whether aging will be entirely done in barrels or if a
                        portion will be done in concrete tanks or stainless
                        steel vessels. There are wines we want to preserve the
                        fruit in more, and others where we believe adding
                        complexity with wood is necessary. Generally, 70 percent
                        is in used barrels, 100 percent French oak, as we seek a
                        delicate balance and to avoid overwhelming the wines
                        with wood.
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
            backgroundColor: "#F2ECE1",
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
                  05
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img
                  src={winesPreservationSlide3}
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
                        BLENDING{" "}
                      </p>

                      <p
                        class="text-[#000000] text-xs tracking-wider text-justify"
                        style={playfairFontRegular}
                      >
                        We believe in the magic of crafting exceptional wines
                        through the alchemy of blending. Our passion for the art
                        of winemaking leads us to explore two unique approaches:
                        co-fermentations and the traditional blending technique.
                        <br />
                        <br />
                        We prefer to work with co-fermentations, a technique we
                        find more enriching as it captures the very essence of
                        our terroir. From the moment different grape varieties
                        and parcels enter our cellar, a shared journey begins
                        that spans the entire process. Ultimately, our goal is
                        to merge the past and the future in every bottle we
                        present.
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
            backgroundColor: "#F2ECE1",
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
                  05
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img
                  src={winesPreservationSlide4}
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
                        BOTTLING AND LABELING
                      </p>

                      <p
                        class="text-[#000000] text-xs tracking-wider text-justify"
                        style={playfairFontRegular}
                      >
                        We are highly respectful of the bottling and labeling
                        process to adhere to the highest standards. During
                        bottling, we carry out filtration to protect the wine
                        without affecting it significantly, and we maintain
                        strict control during bottling, ensuring safety and
                        quality standards so that the wine, once bottled,
                        evolves and expresses itself at its best.
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
            backgroundColor: "#F2ECE1",
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
                  05
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img
                  src={winesPreservationSlide5}
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
                        CELLARING{" "}
                      </p>

                      <p
                        class="text-[#000000] text-xs tracking-wider text-justify"
                        style={playfairFontRegular}
                      >
                        We believe it's crucial for the wines to undergo a
                        period of bottle aging before reaching the market. Our
                        wines have shown us that they improve significantly with
                        the passing of the years, and this aging period serves
                        as a library and study area. We continuously taste and
                        compare the stored vintages with new ones, learning how
                        our wines evolve based on our practices in each harvest.
                        The evolution is excellent: our wines greatly improve
                        over time in the bottle, which is why aging is so
                        important for us.
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

export default WinesPreservation;
