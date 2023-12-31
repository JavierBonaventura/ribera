import React, { useState } from "react";
import workVineyardSlide1 from "../../images/wineYardSlide3.jpg";
import workVineyardSlide2 from "../../images/wineYardSlide2.jpg";
import workVineyardSlide3 from "../../images/hourses.jpg";
import leftArrowImage from "../../images/flechaIzquierda.png";
import rightArrowImage from "../../images/flechaDerecha.png";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import hambur from "../../images/menu-hambur.png";

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
  const images = [workVineyardSlide1, workVineyardSlide2, workVineyardSlide3];
  const paragraphs = [
    "Countess Noemi Marone Cinzano discovered this unparalleled place and laid the foundation for what is now Bodega Ribera del Cuarzo. As in all Italian estates, she built a house by the winery. With Patagonian style and appealing architecture, a small garden overlooks the valley that flows into the river. The house is where we rest after a day's work and where we gather with family to enjoy and celebrate. It's also where we think, plan, and decide alongside those who help us carry out production. We share meals, as it has become our home.",
    "The Río Negro is the largest river in Patagonia. The Limay and Neuquén rivers collect water and minerals from mountain melt before flowing towards the center and east of the country, ultimately merging to form the Río Negro. This river flows into the sea south of Buenos Aires Province, in a small town called El Cóndor. It meanders between two imposing barda walls, one to the north and another to the south, formed over millions of years. In 1860, Estanislao Ceballos described them as river terraces, and they provide invaluable contributions of calcium carbonate, stone, quartz, and ashes. Today, the river runs through this valley, a valley nestled between bardas.",
    "Maintaining traditional working methods helps us never lose sight of the connection with the land, a connection that defines us as farmers. On the estate, we have Criollo horses, an Argentine breed. In addition to using tractors and machinery for efficiency in specific tasks, working with animals is a form of respect and care for nature. It seeks to be rewarded with the best flavor. Furthermore, the horses play a role in fertilization, contributing to the compost we produce on the estate. But horses also embody a way of life: Living with horses slows things down, allowing us to decelerate and connect with nature, to explore the land at a more measured and profound pace.",
  ];
  const title = ["THE HOUSE OF THE WINERY", "THE RIVER", "THE HORSES"];
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
      <div className="transition-all ease-in-out duration-500 relative bg-[#000000]">
        <header className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-5 xl:py-10 md:px-5 2xl:px-0 fixed top-0 left-0 right-0 z-50">
          <div class="flex justify-between items-center  ">
            <div class="">
              <Link to="/">
                <img src={logo} alt="" className="w-24 md:w-28" />
              </Link>
            </div>
            <div class="mt-4">
              <Link to="/MenuHamburguesa">
                <img
                  src={hambur}
                  alt=""
                  className="w-7 hover:scale-90 transition ease-in-out duration-500"
                />
              </Link>
            </div>
          </div>
        </header>
        <div
          id="pataginan"
          className="container mx-auto  max-w-screen-xl xl:max-w-screen-2xl py-10 fixed top-28 left-0 right-0 z-50 md:px-5 2xl:px-0 "
        >
          <div class="flex flex-col justify-center items-center mt-10 md:mt-0 md:gap-y-0">
            <h1
              class="text-[#ffffff] text-lg tracking-widest"
              style={playfairFontItalic}
            >
              <i style={playfairFontItalic}>Patagonian Spirit</i>
            </h1>
            <h2
              style={playfairFontBlack}
              className="text-2xl text-[#C4B27D] text-center tracking-wider uppercase"
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
                activeIndex === index ? "bg-[#C4B27D]" : "bg-[#C4B27D]"
              }`}
            >
              {activeIndex === index && (
                <div
                  className="absolute w-7 h-7 rounded-full border-2 border-[#C4B27D]"
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
          className={`w-20 absolute top-1/2 left-40 ${
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
        <div className=" w-32 container max-w-screen-xl xl:max-w-screen-2xl   py-1/2 fixed top-[-8.65rem] left-72 right-0 md:px-5 2xl:px-0 absolute inset-0 flex items-center justify-center ">
          <p
            style={playfairFontBlack}
            className=" uppercase text-[#C4B27D] text-2xl mb-8"
          >
            {" "}
            {"0" + (currentImageIndex + 1)}{" "}
            <sup className="text-base underline align-middle	">3</sup>
          </p>
        </div>
        <div className="w-96 container max-w-screen-xl xl:max-w-screen-2xl mx-auto py-1/2 fixed -top-32 left-0 right-0  md:px-5 2xl:px-0 absolute inset-0 flex items-center justify-center ">
          <p
            style={robotoFontRegular}
            className=" uppercase text-[#C4B27D] text-2xl mb-8"
          >
            {title[currentImageIndex]}
          </p>
        </div>
        <div className=" w-2/4 container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-1/2 fixed top-40 left-0 right-0 md:px-5 2xl:px-0 absolute inset-0 flex items-center justify-center ">
          <p
            style={playfairFontRegular}
            className=" text-[#ffffff] text-base leading-7 tracking-wider text-center mb-8 "
          >
            {paragraphs[currentImageIndex]}
          </p>
        </div>
        <button
          aria-label="next"
          className={`w-20 absolute top-1/2 right-40 ${
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
