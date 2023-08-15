import React from "react";
import workVineyardSlide1 from "../images/introHourses.jpg";
import workVineyardSlide2 from "../images/wineYardSlide2.jpg";
import workVineyardSlide3 from "../images/wineYardSlide3.jpg";
import workVineyardSlide4 from "../images/hourses.jpg";

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
    title: "LOREM IPSUM",
    text: "Horses are a way of life: living with horses slows things down, allowing us perspective and to connect with nature, to go through life in a more relaxed and profound way",
  },
  {
    src: workVineyardSlide2,
    title: "THE HOUSE",

    text: " Countess Noemi Marone Cinzano identified this unique location and laid the foundations for what is now Bodega Ribera del Cuarzo. Similarly to Italian vineyards, she decided to build a house next to the winery. Patagonian in style with inviting architecture and a small garden with a view of the valley that leads down to the river, the house is where we rest after work and where we gather as a family to enjoy the holidays. It’s also where we think, plan, and make decisions with our colleagues, sharing our table with them in what has become the family home.",
  },
  {
    src: workVineyardSlide3,
    title: "THE RIVER",

    text: "The Rio Negro is the largest river in Patagonia. The Limay and Neuquén rivers gather water and minerals from mountain snowmelt before flowing into the central and eastern parts of the country, eventually merging to form the Rio Negro.  The Rio Negro reaches the sea in the south of the Buenos Aires Province, in a small town called El Cóndor. It meanders between two imposing <i>barda</i> walls, one to the north and the other to the south, which have been formed over millions of years. In 1860, Estanislao Ceballos described them as river terraces, and they contribute invaluable calcium carbonate, stone, quartz, and ash to the landscape. Today, the river flows through  the center of this valley, a valley nestled between bardas  ",
  },
  {
    src: workVineyardSlide4,
    title: "THE HORSES",

    text: " Maintaining traditional working methods helps us to keep in touch with the land, a connection that defines us as farmers. At the estate, we also raise Criollo horses, the famous Argentine breed. In addition to using tractors and other machinery that improve the efficiency of certain tasks, working with animals is a way of respecting and caring for nature in all our interventions, always working towards producing the best possible flavor.",
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

            <div class="  mt-4">
              <Link to="/MenuHamburguesa">
                <img src={hambur} alt="" className="w-7" />
              </Link>{" "}
            </div>
          </div>
        </div>
      </header>

      <AwesomeSlider animation="cubeAnimation" transitionDelay={500}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full">
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
                LIFE ON THE ESTATE
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
                      <sup className="text-base underline align-middle	">4</sup>
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
