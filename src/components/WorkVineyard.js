import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import workVineyardSlide1 from "../images/workVineyardSlide1.jpg";
import workVineyardSlide2 from "../images/workVineyardSlide2.jpg";
import workVineyardSlide3 from "../images/workVineyardSlide3.jpg";
import workVineyardSlide4 from "../images/workVineyardSlide4.jpg";
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
      <header className="py-3 fixed top-0 left-0 right-0 z-50 ">
        <div class="container mx-auto">
          <div class="flex justify-between items-center px-5">
            <div class="w-20 md:w-36">
              <img src={logo} alt="" class="w-full" />
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
                className="italic text-xs text-[#010101] text-center"
              >
                Patagonian Spirit
              </h1>
              <h4
                style={playfairFontBlack}
                className="font-bold text-base text-[#C4AC77] text-center"
              >
                WORK IN THE VINEYARD
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const WorkVineyard = () => {
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
          <img src={workVineyardSlide1} alt="" className="w-full" />
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
                  className="decoration-black	text-[#C4AC77]  text-xs leading-6 pb-3"
                >
                  WORKING METHODS
                </p>
                <p class="text-black text-xs " style={playfairFontRegular}>
                  Maintaining traditional working methods helps us to keep in
                  touch with the land, a connection that defines us as farmers.
                  At the estate, we also raise Criollo horses, the famous
                  Argentine breed. In addition to using tractors and other
                  machinery that improve the efficiency of certain tasks,
                  working with animals is a way of respecting and caring for
                  nature in all our interven-tions, always working towards
                  producing the best possible flavor.
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
            src={workVineyardSlide2}
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
                  className="decoration-black	text-[#C4AC77]  text-xs leading-6 pb-3"
                >
                  HORSES{" "}
                </p>
                <p class="text-black text-xs" style={playfairFontRegular}>
                  Horses also provide manure, which goes into the compost we use
                  at the vineyard: it is added to organic waste from the wine
                  barrels and vats and everything consumed at the house. This is
                  the fertilizer for the fruits and vegetables we grow for
                  ourselves, our gardens and, of course, our vineyand But horses
                  are also a way of life: living with horses slows thin down,
                  allowing us perspective and to connect with nature, to g
                  through life in a more relaxed and profound way.
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
            src={workVineyardSlide3}
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
                  className="decoration-black	text-[#C4AC77]  text-xs leading-6 pb-3"
                >
                  WATER{" "}
                </p>
                <p class="text-black text-xs" style={playfairFontRegular}>
                  The Countess had planted the vineyard in the highest part of
                  the Barda river terrace, an unexplored area where no one had
                  ever considered such an enterprise: it meant having to pump
                  water up from the river at enormous expense. Until then,
                  vineyards in the Rio Negro vallcy had been located on the
                  shores of the river, from which water was channeled through a
                  system of canals and sluices; flood irrigation, the economic
                  method. However, the Countess decided to plant up high in the
                  I that the effort would pay off. Before even considering the
                  she set about building a pump system to bring the wat couple
                  of miles up the slope. Once it was built, she could fir start
                  work on the vineyard in the hope that soon renew. energy would
                  be available to afford the costs. It was very m worth the
                  risk. Some time later, a local man talked to us about water.
                  This kind man, Facundo Catriel, said plenty of water could be
                  found at the foot of the barda. Although it seemed unfeasible,
                  we set out to drill a few wells. Water came rumbling and
                  bubbling up to the surface. These wells today produce around
                  200,000 liters per hour, thus reducing our costs
                  significantly. We listen to nature and to special people.
                  Today, Ribera del Cuarzo works through a virtuous cycle of
                  respect for the environment, the reward being a wine that
                  never ceases to amaze us.
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
          <img src={workVineyardSlide4} alt="" className="w-full" />
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
                  className="decoration-black	text-[#C4AC77]  text-xs leading-6 pb-3"
                >
                  PLANTATION{" "}
                </p>
                <p class="text-black text-xs" style={playfairFontRegular}>
                  Araucana is planted using the traditional high cordon-method
                  with two meter gaps between the rows and a meter between each
                  plant resulting in a density of 5000 plants per hectare.
                  Currently, the majority are Malbec but there are also some
                  Petit Verdot, Merlot and recently added, Pinot Noir vines. Our
                  philosophy consists in trying to encourage the plants to
                  regulate themsclves throughout the process, to intervene as
                  little as possible and to provide support so that they can
                  make decisions themselves, as it were. We simply guide them
                  toward their best possible expression and quality. That is why
                  we have opted for traditional vine management methods such as
                  Guyot pruning with canes and renewal spurs. The harvest is
                  also carried out manually, in several we because some
                  subsectors within the five hectares need to harvested at
                  different times depending on the variety and the ripening
                  cycle of the grapes.
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
export default WorkVineyard;
