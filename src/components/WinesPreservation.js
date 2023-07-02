import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import winesPreservationSlide1 from "../images/winesPreservationSlide1.jpg";
import winesPreservationSlide2 from "../images/winesPreservationSlide2.jpg";
import winesPreservationSlide3 from "../images/winesPreservationSlide3.jpg";
import flechaIzquierda from "../images/flechaIzquierda.jpg";
import flechaDerecha from "../images/flechaDerecha.jpg";
import iconIg from "../images/icon-ig.png";
import "../App.css";

function Header() {
  const playfairFontItalic = {
    fontFamily: "Playfair, sans-serif",
  };
  return (
    <div>
      <header class="bg-[#F2ECE1] py-3 px-3">
        <div class="container mx-auto">
          <div class="flex bg-[#F2ECE1] justify-between items-center">
            <div class="w-1/4">
              <img src={logo} alt="" class="w-full" />
            </div>

            <div className="w-8">
              <Link to="/MenuHamburguesa">
                <img src={hambur} alt="" className="w-full" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div class="bg-[#F2ECE1] py-3">
        <div class="container mx-auto flex flex-col justify-center items-center">
          <div class="flex flex-col gap-y-5">
            <div className="pt-16">
              <h1
                style={playfairFontItalic}
                class="italic text-xs text-[#010101] text-center"
              >
                Patagonian Spirit
              </h1>
              <h4
                style={playfairFontItalic}
                class="font-bold text-base text-[#C4AC77] text-center"
              >
                WINES PRESERVATION
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const WinesPreservation = () => {
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
    <div>
      <Header />
      <div>
        {/* Contenido del slider */}
        {currentScreen === 0 && <Screen1 />}
        {currentScreen === 1 && <Screen2 />}
        {currentScreen === 2 && <Screen3 />}
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
    </div>
  );
};

const Screen1 = () => {
  const playfairFont = {
    fontFamily: "Playfair, sans-serif",
  };
  return (
    <div className="mt-[-20px]">
      <div className="bg-[#F2ECE1] ">
        <p className="ml-1 text-left relative">
          <span style={playfairFont} className="text-[#C4AC77] text-lg">
            01
          </span>
          <span
            style={playfairFont}
            className="text-[#C4AC77] absolute top-1 left-5 text-xs underline"
          >
            03
          </span>
        </p>
      </div>

      <div className="container mx-auto flex flex-col justify-center  items-center">
        <div>
          <img src={winesPreservationSlide1} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};
const Screen1Text = () => {
  const playfairFont = {
    fontFamily: "Playfair, sans-serif",
  };
  return (
    <div>
      <div className="bg-[#F2ECE1] py-5">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-5">
              <div className="w-4/5 mx-auto">
                <p
                  style={playfairFont}
                  className="decoration-black	text-[#C4AC77]  text-xs leading-6 pb-3"
                >
                  WINEMAKING
                </p>
                <p
                  style={playfairFont}
                  className="decoration-black	 text-xs leading-6"
                >
                  Winemaking is done in small open-top vats, all carried out painstakingly by hand. During this stage we continue to keep intervention to a minimum, trying to encourage spontaneous fermentation and always respecting the terroir. We barcly add any sulfites in the traditional way to preserve the wines from oxidation and protect their microbiology. We take our lead from the vineyard; it tells us when the best time to harvest is for maximum expression.

Each of the vats in which we carry out the fermentation is filled with two thousand kilos of grapes and they are handled traditionally: manual pressing, deslestage, mainly with the Malbec, and very gentle pumping-over at the end.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F2ECE1] py-16">
        <div className="container mx-auto flex justify-center">
          <div className="border border-[#C3B17D] rounded-full p-6">
            <img src={iconIg} alt="" className="w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Screen2 = () => {
  const playfairFont = {
    fontFamily: "Playfair, sans-serif",
  };
  return (
    <div className="mt-[-20px]">
      <div className="bg-[#F2ECE1]">
        <p className="ml-1 text-left relative">
          <span style={playfairFont} className="text-[#C4AC77] text-lg">
            02
          </span>
          <span
            style={playfairFont}
            className="text-[#C4AC77] absolute top-1 left-5 text-xs underline"
          >
            03
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
  );
};
const Screen2Text = () => {
  const playfairFont = {
    fontFamily: "Playfair, sans-serif",
  };
  return (
    <div>
      <div className="bg-[#F2ECE1] py-5">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-5">
              <div className="w-4/5 mx-auto">
                <p
                  style={playfairFont}
                  className="decoration-black	text-[#C4AC77]  text-xs leading-6 pb-3"
                >
                  CELLAR{" "}
                </p>
                <p
                  style={playfairFont}
                  className="decoration-black	 text-xs leading-6"
                >
                 Once the wines are finished, they are aged in barrcls.
Only twenty or thirty percent of the barrels we use are new, the rest are reused so as not to overload the wine with oak. Once the twelve to fourteen months aging period is over, it's time to make the blends and here our decisions are made by the barrel: every barrel is a world unto itself and we taste the expression of cach, deciding which line its contents will suit best.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F2ECE1] py-16">
        <div className="container mx-auto flex justify-center">
          <div className="border border-[#C3B17D] rounded-full p-6">
            <img src={iconIg} alt="" className="w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Screen3 = () => {
  const playfairFont = {
    fontFamily: "Playfair, sans-serif",
  };
  return (
    <div className="mt-[-20px]">
      <div className="bg-[#F2ECE1]">
        <p className="ml-1 text-left relative">
          <span style={playfairFont} className="text-[#C4AC77] text-lg">
            03
          </span>
          <span
            style={playfairFont}
            className="text-[#C4AC77] absolute top-1 left-5 text-xs underline"
          >
            03
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
  );
};
const Screen3Text = () => {
  const playfairFont = {
    fontFamily: "Playfair, sans-serif",
  };
  return (
    <div>
      <div className="bg-[#F2ECE1] py-5">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-5">
              <div className="w-4/5 mx-auto">
                <p
                  style={playfairFont}
                  className="decoration-black	text-[#C4AC77]  text-xs leading-6 pb-3"
                >
                  VITICULTURIST AND WINEMAKER ERNESTO BAJDA{" "}
                </p>
                <p
                  style={playfairFont}
                  className="decoration-black	 text-xs leading-6"
                >
                
- 15 years working closely with Felipe and commited to studying Argentine, and more specifically, Patagonian terroir.

- Recognized by The Drink Business as one of the top 100 winekamers in the world, and best for Malbec.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F2ECE1] py-16">
        <div className="container mx-auto flex justify-center">
          <div className="border border-[#C3B17D] rounded-full p-6">
            <img src={iconIg} alt="" className="w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinesPreservation;
