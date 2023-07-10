import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import wineYardSlide1 from "../images/wineYardSlide1.jpg";
import wineYardSlide2 from "../images/wineYardSlide2.jpg";
import wineYardSlide3 from "../images/wineYardSlide3.jpg";
import wineYardSlide4 from "../images/wineYardSlide4.jpg";
import blackRiver from "../images/blackRiver.jpg";

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
      <header className="py-10 fixed top-0 left-0 right-0 z-50 ">
        <div class="container mx-auto">
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

      <div className="bg-[#F2ECE1] py-3">
        <div className="container mx-auto flex flex-col justify-center items-center mt-10">
          <div className="flex flex-col gap-y-5">
            <div className="pt-16">
              <h1
                style={playfairFontItalic}
                className="italic text-xs text-[#010101] text-center tracking-widest"
              >
                Patagonian Spirit
              </h1>
              <h4
                style={playfairFontBlack}
                className="font-bold text-base text-[#C4AC77] text-center tracking-wider"
              >
                THE VINEYARD
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const WineYard = () => {
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
    <div>
      <Header />
      <div>
        {/* Contenido del slider */}
        {currentScreen === 0 && <Screen1 />}
        {currentScreen === 1 && <Screen2 />}
        {currentScreen === 2 && <Screen3 />}
        {currentScreen === 3 && <Screen4 />}
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
    </div>
  );
};

const Screen1 = () => {
  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };
  return (
    <div className="mt-[-20px]">
      <div className="bg-[#F2ECE1] ">
        <p className="ml-1 text-left relative">
          <span style={playfairFontBlack} className="text-[#C4AC77] text-lg">
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
    </div>
  );
};
const Screen1Text = () => {
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
                  UNIQUE TERRIOR
                </p>
                <p
                  style={playfairFontRegular}
                  className="decoration-black	 text-xs tracking-wider"
                >
                  Simply to say that Araucana is a unique vineyard doesn't do it
                  justice. Located in Ribera del Cuarzo, no other vineyard in
                  Patagonia is located so close to the Barda or in such
                  isolation. The soils of Araucana are mainly aeolic, formed
                  over cons by wind crosion. The volcanic ash and high potassium
                  content make for a crucial, and very unusual chemical make-up.
                  The Barda river terrace is another point of difference. The
                  texture of the surface is created by the presence of quartz
                  mixed with calcium carbonate, a combination known locally as
                  Indian cement, which crodes into the soil and breaks up to
                  share its exceptional character with our grapes.
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
  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };
  return (
    <div className="mt-[-20px]">
      <div className="bg-[#F2ECE1]">
        <p className="ml-1 text-left relative">
          <span style={playfairFontBlack} className="text-[#C4AC77] text-lg">
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
            src={wineYardSlide2}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
const Screen2Text = () => {
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
                  WATER{" "}
                </p>
                <p
                  style={playfairFontRegular}
                  className="decoration-black	 text-xs tracking-wider"
                >
                  The Rio Negro is the largest in Patagonia. The Limay and
                  Neuquén Rivers swell with water and minerals from mountain
                  snowmelt before flowing into the center and cast of the
                  country and eventually coming together to form the Rio Negro.
                  The Rio Negro flows into the sea in the south of the Province
                  of Buenos Aires, in a small town called El Cóndor. It flows
                  between two large Barda ridges, one to the north and the other
                  to the sPith, which developed over millions of ycars. In 1860,
                  Estanis-lao Ceballos described them as river terraces, and
                  they make their own invaluable contribution of calcium
                  carbonate, stone, quartz, and ash. Today, the river runs
                  through the middle of the vallcy, between the two terraces.
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
  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };
  return (
    <div className="mt-[-20px]">
      <div className="bg-[#F2ECE1]">
        <p className="ml-1 text-left relative">
          <span style={playfairFontBlack} className="text-[#C4AC77] text-lg">
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
            src={wineYardSlide3}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
const Screen3Text = () => {
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
                  HOUSE{" "}
                </p>
                <p
                  style={playfairFontRegular}
                  className="decoration-black	 text-xs tracking-wider"
                >
                  Last but not least, the house next to the winery has become a
                  home to our family. Patagonian in style with inviting
                  architecture and a small garden with a view of the valley that
                  leads down to the river, the house is where we rest after work
                  and where we gather as a family to enjoy holidays. It's also
                  where we plan, analyze and make crucial decisions.
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
const Screen4 = () => {
  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };
  return (
    <div className="mt-[-20px]">
      <div className="bg-[#F2ECE1]">
        <p className="ml-1 text-left relative">
          <span style={playfairFontBlack} className="text-[#C4AC77] text-lg">
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
    </div>
  );
};
const Screen4Text = () => {
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
                  HOUSE{" "}
                </p>
                <p
                  style={playfairFontRegular}
                  className="decoration-black	 text-xs tracking-wider"
                >
                  "I was drawn to Ribera del Cuarzo as a winegrower, attracted
                  by the region's distinctive climate, biodiversity and geology,
                  but also by my strong family tics to Patagonia. And it was the
                  right decision. Ribera del Cuarzo has become the setting for
                  my life-long quest to make the best wines, a journcy that
                  never ends. Today, it has expanded to include a group of small
                  local wineries that focus on quality rather than quantity: our
                  dream is to create a place where families can establish and
                  prosper making wine thanks to all of our hard work and the
                  unique natural characteristics of the Rio Negro Valley."
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
export default WineYard;
