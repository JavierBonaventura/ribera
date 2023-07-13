import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import winesPreservationSlide1 from "../images/fermentation.jpg";
import winesPreservationSlide2 from "../images/aging.jpg";
import winesPreservationSlide3 from "../images/blending.jpg";
import winesPreservationSlide4 from "../images/bottling.jpeg";
import winesPreservationSlide5 from "../images/cellaring.jpg";
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
    fontFamily: "Playfair Italic , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  return (
    <div>
      <header className="py-10 fixed top-0 left-0 right-0 z-50 ">
        <div class="container mx-auto">
          <div class="flex justify-between items-center px-5">
            <div class="w-20 md:w-36">
              <Link to="/">
                <img src={logo} alt="" className="w-full" />
              </Link>{" "}
            </div>

            <div class="w-7">
              <Link to="/MenuHamburguesa">
                <img src={hambur} alt="" className="w-full" />
              </Link>{" "}
            </div>
          </div>
        </div>
      </header>

      <div className="bg-[#F2ECE1] py-3">
        <div className="container mx-auto flex flex-col justify-center items-center mt-10">
          <div className="pt-16">
            <h1 className="italic text-xs text-[#5f5f5e] text-center tracking-widest">
              <i style={playfairFontItalic}>Patagonian Spirit</i>
            </h1>
            <h2
              style={playfairFontBlack}
              className="font-bold text-base text-[#C4AC77] text-center tracking-wider"
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
          <div>
            <Header />
            <div>
              {/* Contenido del slider */}
              {currentScreen === 0 && <Screen1 />}
              {currentScreen === 1 && <Screen2 />}
              {currentScreen === 2 && <Screen3 />}
              {currentScreen === 3 && <Screen4 />}
              {currentScreen === 4 && <Screen5 />}
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
            {currentScreen === 0 && <Screen1Text />}
            {currentScreen === 1 && <Screen2Text />}
            {currentScreen === 2 && <Screen3Text />}
            {currentScreen === 3 && <Screen4Text />}
            {currentScreen === 4 && <Screen5Text />}
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

const Screen1 = () => {
  const location = useLocation();

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
                  05
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                <img src={winesPreservationSlide1} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};
const Screen1Text = () => {
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
            <div className="bg-[#F2ECE1] py-5">
              <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-5">
                    <div className="w-4/5 mx-auto">
                      <p
                        style={robotoFontRegular}
                        className="decoration-black	text-[#C4AC77]  text-xs leading-6 pb-3 tracking-wide"
                      >
                        FERMENTATION
                      </p>
                      <p
                        class="text-black text-xs tracking-wider"
                        style={playfairFontRegular}
                      >
                        Winemaking takes place in small open-top vats, and every
                        step is executed with meticulous care by hand.
                        Throughout this stage, we maintain minimal intervention,
                        striving to foster spontaneous fermentation while
                        upholding utmost respect for the terroir. Our approach
                        to sulfites is traditional and conservative, adding only
                        a small amount to safeguard the wines against oxidation
                        and preserve their microbiology. We entrust the vineyard
                        itself to guide us in determining the ideal moment for
                        harvest, ensuring maximum expression. <br />
                        <br />
                        Each fermentation vat is filled with two thousand kilos
                        of grapes, and we adhere to traditional methods
                        throughout the process: manual pressing, deslestage,
                        particularly with our Malbec grapes, and gentle
                        pumping-over during the final stages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F2ECE1] py-16">
              <div className="container mx-auto flex justify-center">
                <a
                  className="border border-[#C3B17D] rounded-full p-6"
                  href="https://www.instagram.com/riberadelcuarzo/"
                  target="_blank"
                >
                  <img src={iconIg} alt="" className="w-4" />
                </a>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

const Screen2 = () => {
  const location = useLocation();

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
          </div>
        </animated.div>
      )}
    </Transition>
  );
};
const Screen2Text = () => {
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
            <div className="bg-[#F2ECE1] py-5">
              <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-5">
                    <div className="w-4/5 mx-auto">
                      <p
                        style={robotoFontRegular}
                        className="decoration-black	text-[#C4AC77]  text-xs leading-6 pb-3 tracking-wide"
                      >
                        AGING{" "}
                      </p>

                      <p
                        class="text-black text-xs tracking-wider"
                        style={playfairFontRegular}
                      >
                        Once the wines complete their fermentation, they embark
                        on a journey of aging in barrels. Only a fraction,
                        around twenty to thirty percent, of the barrels used are
                        new, as we strive to strike a delicate balance and avoid
                        overwhelming the wines with oak.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F2ECE1] py-16">
              <div className="container mx-auto flex justify-center">
                <a
                  className="border border-[#C3B17D] rounded-full p-6"
                  href="https://www.instagram.com/riberadelcuarzo/"
                  target="_blank"
                >
                  <img src={iconIg} alt="" className="w-4" />
                </a>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

const Screen3 = () => {
  const location = useLocation();

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
          </div>
        </animated.div>
      )}
    </Transition>
  );
};
const Screen3Text = () => {
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
            <div className="bg-[#F2ECE1] py-5">
              <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-5">
                    <div className="w-4/5 mx-auto">
                      <p
                        style={robotoFontRegular}
                        className="decoration-black	text-[#C4AC77] text-xs leading-6 pb-3 tracking-wide"
                      >
                        BLENDING{" "}
                      </p>

                      <p
                        class="text-black text-xs tracking-wider"
                        style={playfairFontRegular}
                      >
                        After a patient aging period of twelve to fourteen
                        months, the time comes to craft the blends. In this
                        phase, our decisions are driven by the unique
                        characteristics of each barrel. Each barrel possesses
                        its own distinct identity, and through careful tasting,
                        we determine which expression will harmonize best with
                        its contents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F2ECE1] py-16">
              <div className="container mx-auto flex justify-center">
                <a
                  className="border border-[#C3B17D] rounded-full p-6"
                  href="https://www.instagram.com/riberadelcuarzo/"
                  target="_blank"
                >
                  <img src={iconIg} alt="" className="w-4" />
                </a>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

const Screen4 = () => {
  const location = useLocation();

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
          </div>
        </animated.div>
      )}
    </Transition>
  );
};
const Screen4Text = () => {
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
            <div className="bg-[#F2ECE1] py-5">
              <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-5">
                    <div className="w-4/5 mx-auto">
                      <p
                        style={robotoFontRegular}
                        className="decoration-black	text-[#C4AC77] text-xs leading-6 pb-3 tracking-wide"
                      >
                        BOTTLING AND LABELING
                      </p>

                      <p
                        class="text-black text-xs tracking-wider"
                        style={playfairFontRegular}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum quisquam veniam commodi illum eaque
                        laboriosam consequuntur, neque molestiae reiciendis
                        voluptate, quibusdam et. Dolore beatae officia quasi
                        sint quisquam vero inventore!. Lorem, ipsum dolor sit
                        amet consectetur adipisicing elit. Mollitia ratione eum
                        vel voluptatibus odio modi adipisci inventore, sunt
                        neque facere delectus consequuntur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F2ECE1] py-16">
              <div className="container mx-auto flex justify-center">
                <a
                  className="border border-[#C3B17D] rounded-full p-6"
                  href="https://www.instagram.com/riberadelcuarzo/"
                  target="_blank"
                >
                  <img src={iconIg} alt="" className="w-4" />
                </a>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

const Screen5 = () => {
  const location = useLocation();

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
        <animated.div style={{ ...style, width: "100%" }}>
          <div className="mt-[-20px]">
            <div className="bg-[#F2ECE1]">
              <p className="ml-1 text-left relative">
                <span
                  style={playfairFontBlack}
                  className="text-[#C4AC77] text-lg"
                >
                  05
                </span>
                <span
                  style={playfairFontBlack}
                  className="text-[#C4AC77] absolute top-1 left-6 text-xs underline"
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
          </div>
        </animated.div>
      )}
    </Transition>
  );
};
const Screen5Text = () => {
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
            <div className="bg-[#F2ECE1] py-5">
              <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-5">
                    <div className="w-4/5 mx-auto">
                      <p
                        style={robotoFontRegular}
                        className="decoration-black	text-[#C4AC77] text-xs leading-6 pb-3 tracking-wide"
                      >
                        CELLARING{" "}
                      </p>

                      <p
                        class="text-black text-xs tracking-wider"
                        style={playfairFontRegular}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum quisquam veniam commodi illum eaque
                        laboriosam consequuntur, neque molestiae reiciendis
                        voluptate, quibusdam et. Dolore beatae officia quasi
                        sint quisquam vero inventore!. Lorem, ipsum dolor sit
                        amet consectetur adipisicing elit. Mollitia ratione eum
                        vel voluptatibus odio modi adipisci inventore, sunt
                        neque facere delectus consequuntur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F2ECE1] py-16">
              <div className="container mx-auto flex justify-center">
                <a
                  className="border border-[#C3B17D] rounded-full p-6"
                  href="https://www.instagram.com/riberadelcuarzo/"
                  target="_blank"
                >
                  <img src={iconIg} alt="" className="w-4" />
                </a>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default WinesPreservation;
