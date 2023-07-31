import React from "react";
import workVineyardSlide1 from "../images/pruning.jpg";
import workVineyardSlide2 from "../images/trellising.jpg";
import workVineyardSlide3 from "../images/disbudding.jpg";
import workVineyardSlide4 from "../images/workVineyardSlide4.jpg";
import workVineyardSlide5 from "../images/ancient.jpg";

import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";

import "../App.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import leftArrowImage from "../images/flechaIzquierda.png";
import rightArrowImage from "../images/flechaDerecha.png";

const slides = [
  {
    src: workVineyardSlide1,
    title: "PRUNING",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: workVineyardSlide2,
    title: "TRELLISING",

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: workVineyardSlide3,
    title: "DISBUDDING",

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: workVineyardSlide4,
    title: "HARVERST",

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: workVineyardSlide5,
    title: "ANCIENT TECHNIQUES",

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const WorkVineyardDesktop = () => {
  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const robotoFontRegular = {
    fontFamily: "Roboto Regular , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };
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
    <div className="w-full h-screen ">
      <header className="py-10 md:py-2 fixed top-0 left-0 right-0 z-50  ">
        <div class="container mx-auto max-w-screen-xl">
          <div class="flex justify-between items-center">
            <div class="w-24 md:w-28">
              <Link to="/">
                <img src={logo} alt="" className="w-full" />
              </Link>{" "}
            </div>

            <div class=" w-24 md:w-28 mt-4">
              <Link to="/MenuHamburguesa">
                <img src={hambur} alt="" className="w-7" />
              </Link>{" "}
            </div>
          </div>
        </div>
      </header>

      <AwesomeSlider animation="cubeAnimation" transitionDelay={500}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full ">
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover brightness-50"
            />
            <div class="awssld__controls">
              <button aria-label="next" class="awssld__next">
                <img src={rightArrowImage} alt="derecha" className="flecha" />
              </button>
              <button aria-label="previous" class="awssld__prev">
                <img src={leftArrowImage} alt="izquierda" />
              </button>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="text-base text-[#C4AC77] text-center text-xl"
                style={playfairFontBlack}
              >
                <div
                  className="italic text-white text-base -mt-72 tracking-wider"
                  style={playfairFontItalic}
                >
                  {" "}
                  Patagonian Spirit
                </div>
                WORK IN THE VINEYARD
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-2/4 text-white text-lg tracking-wider text-center mb-6"
                style={playfairFontRegular}
              >
                <div
                  className="uppercase text-[#C4AC77] text-3xl mb-8"
                  style={robotoFontRegular}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      alignItems: "center",
                    }}
                  >
                    <div
                      id="numerador"
                      style={{
                        marginRight: "-2.5rem",
                        marginTop: "-150px",
                        fontFamily: "playfairFontBlack",
                      }}
                    >
                      {"0" + (index + 1)}
                      <sup className="text-base underline align-middle	">5</sup>
                    </div>
                    <div>{slide.title}</div>
                  </div>
                </div>

                {slide.text}
              </div>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default WorkVineyardDesktop;
