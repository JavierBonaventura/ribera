import React, { useState } from "react";
import workVineyardSlide1 from "../images/introHourses.jpg";
import workVineyardSlide2 from "../images/wineYardSlide2.jpg";
import workVineyardSlide3 from "../images/wineYardSlide3.jpg";
import workVineyardSlide4 from "../images/hourses.jpg";
import leftArrowImage from "../images/flechaIzquierda.png";
import rightArrowImage from "../images/flechaDerecha.png";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";

const CarouselSlider = () => {
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

  const [isPrevButtonHovered, setIsPrevButtonHovered] = useState(false);
  const [isNextButtonHovered, setIsNextButtonHovered] = useState(false);
  const images = [
    workVineyardSlide1,
    workVineyardSlide2,
    workVineyardSlide3,
    workVineyardSlide4,
  ];
  const paragraphs = [
    "Horses are a way of life: living with horses slows things down, allowing us perspective and to connect with nature, to go through life in a more relaxed and profound way",
    "Countess Noemi Marone Cinzano identified this unique location and laid the foundations for what is now Bodega Ribera del Cuarzo. Similarly to Italian vineyards, she decided to build a house next to the winery. Patagonian in style with inviting architecture and a small garden with a view of the valley that leads down to the river, the house is where we rest after work and where we gather as a family to enjoy the holidays. It’s also where we think, plan, and make decisions with our colleagues, sharing our table with them in what has become the family home.",
    "The Rio Negro is the largest river in Patagonia. The Limay and Neuquén rivers gather water and minerals from mountain snowmelt before flowing into the central and eastern parts of the country, eventually merging to form the Rio Negro.  The Rio Negro reaches the sea in the south of the Buenos Aires Province, in a small town called El Cóndor. It meanders between two imposing barda walls, one to the north and the other to the south, which have been formed over millions of years. In 1860, Estanislao Ceballos described them as river terraces, and they contribute invaluable calcium carbonate, stone, quartz, and ash to the landscape. ",
    "Maintaining traditional working methods helps us to keep in touch with the land, a connection that defines us as farmers. At the estate, we also raise Criollo horses, the famous Argentine breed. In addition to using tractors and other machinery that improve the efficiency of certain tasks, working with animals is a way of respecting and caring for nature in all our interventions, always working towards producing the best possible flavor.",
  ];
  const title = ["LOREM IPSUM", "THE HOUSE", "THE RIVER", "THE HORSES"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const renderImages = () => {
    return (
      <div className="transition-all ease-in-out duration-500 relative">
        <header className="container mx-auto py-10 fixed top-0 left-0 right-0 z-50 px-5 md:px-0 md:py-2  max-w-screen-xl">
          <div class="flex justify-between items-center">
            <div class="w-24 md:w-28">
              <Link to="/">
                <img src={logo} alt="" className="w-full" />
              </Link>
            </div>
            <div class="mt-4">
              <Link to="/MenuHamburguesa">
                <img src={hambur} alt="" className="w-7 " />
              </Link>
            </div>
          </div>
        </header>
        <div
          id="pataginan"
          className="container mx-auto  max-w-screen-xl py-10 fixed top-10 left-0 right-0 z-50 px-5 "
        >
          <div class="flex flex-col justify-center items-center mt-10 md:mt-0 md:gap-y-0">
            <h1
              class="text-white text-base md:text-base tracking-widest"
              style={playfairFontItalic}
            >
              <i style={playfairFontItalic}>Patagonian Spirit</i>
            </h1>
            <h2
              style={playfairFontBlack}
              className="text-base md:text-xl text-[#C4AC77] text-center tracking-wider uppercase"
            >
              LIFE ON THE ESTATE
            </h2>
          </div>
        </div>
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full   ${
              activeIndex === index ? "visible" : "invisible"
            }`}
            style={{
              position: activeIndex === index ? "relative" : "absolute",
            }}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className={`w-full h-screen object-cover ${
                activeIndex === index
                  ? "fade-transition brightness-50 opacity-100"
                  : "fade-transition opacity-0"
              }`}
            />

            {activeIndex === index && (
              <div className="absolute bottom-10 left-0 right-0 flex justify-center ">
                {renderIndicators()}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderIndicators = () => {
    return (
      <div className="flex mt-1">
        {images.map((_, index) => (
          <div key={index} className="relative mx-5">
            {" "}
            <div
              className={`w-2 h-2 rounded-full ${
                activeIndex === index ? "bg-[#cab57e]" : "bg-[#cab57e]"
              }`}
            >
              {activeIndex === index && (
                <div
                  className="absolute w-7 h-7 rounded-full border-2 border-[#cab57e]"
                  style={{ top: "-10px", left: "-10px" }}
                ></div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden ">
        {renderImages()}

        <button
          aria-label="previous"
          className={`w-24 absolute top-1/2 left-40 ${
            isPrevButtonHovered ? "opacity-50" : "opacity-100"
          }`}
          onClick={handlePrevClick}
          onMouseEnter={() => setIsPrevButtonHovered(true)}
          onMouseLeave={() => setIsPrevButtonHovered(false)}
          style={{
            transition: "transform 0.3s",
            transform: isPrevButtonHovered ? "scale(0.9)" : "scale(1)",
          }}
        >
          <img src={leftArrowImage} alt="izquierda" />
        </button>
        <div className=" w-32 container   max-w-screen-xl   py-1/2 fixed -top-60 left-72 right-0  px-5 absolute inset-0 flex items-center justify-center ">
          <p
            style={playfairFontBlack}
            className=" uppercase text-[#C4AC77] text-3xl mb-8"
          >
            {" "}
            {"0" + (currentImageIndex + 1)}{" "}
            <sup className="text-base underline align-middle	">4</sup>
          </p>
        </div>
        <div className="w-96 container   max-w-screen-xl mx-auto py-1/2 fixed -top-32 left-0 right-0  px-5 absolute inset-0 flex items-center justify-center ">
          <p
            style={robotoFontRegular}
            className=" uppercase text-[#C4AC77] text-2xl mb-8"
          >
            {title[currentImageIndex]}
          </p>
        </div>
        <div className=" w-2/4 container mx-auto   max-w-screen-xl py-1/2 fixed top-40 left-0 right-0  px-5 absolute inset-0 flex items-center justify-center ">
          <p
            style={playfairFontRegular}
            className=" text-white text-lg tracking-wider text-center mb-6"
          >
            {paragraphs[currentImageIndex]}
          </p>
        </div>
        <button
          aria-label="next"
          className={`w-24 absolute top-1/2 right-40 ${
            isNextButtonHovered ? "opacity-50" : "opacity-100"
          }`}
          onClick={handleNextClick}
          onMouseEnter={() => setIsNextButtonHovered(true)}
          onMouseLeave={() => setIsNextButtonHovered(false)}
          style={{
            transition: "transform 0.3s",
            transform: isNextButtonHovered ? "scale(0.9)" : "scale(1)",
          }}
        >
          <img src={rightArrowImage} alt="derecha" />
        </button>
      </div>
    </div>
  );
};

export default CarouselSlider;
