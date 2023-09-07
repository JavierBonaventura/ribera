import React, { useState } from "react";
import workVineyardSlide0 from "../images/generica-vineyard.jpg";
import workVineyardSlide1 from "../images/pruning.jpg";
import workVineyardSlide2 from "../images/trellising.jpg";
import workVineyardSlide3 from "../images/disbudding.jpg";
import workVineyardSlide4 from "../images/harvest.jpg";
import workVineyardSlide5 from "../images/weeds.jpg";
import workVineyardSlide6 from "../images/ancient.jpg";
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
    workVineyardSlide0,
    workVineyardSlide1,
    workVineyardSlide2,
    workVineyardSlide3,
    workVineyardSlide4,
    workVineyardSlide5,
    workVineyardSlide6,
  ];
  const paragraphs = [
    "In our work, all the naturally organic components that the vineyard allows us to take and preserve come into play. The Patagonian wind is a key factor, and the constant breeze along with low ambient humidity conditions combine as a natural mechanism for disease control. The entire vineyard surface features biological corridors that generate a free and natural circulation of permanent flora and fauna, benefiting further from the isolated estate situation without other surrounding crops.",
    "We embrace traditional vineyard management techniques, such as Guyot pruning, using bilateral cane. This pruning method enables the plants to regulate their resources to achieve a better balance between root growth and fruit development.",
    "In this process, we use plant-based and biodegradable materials in an effort to respect the environment as much as possible.",
    "Controlled growth management favors minimal intervention, leading to better plant balance and reduced use of human and mechanical resources.",
    "Harvesting in our vineyard is a meticulous process carried out manually and in several stages. The unique characteristics of each subsection within our five-hectare estate, with different grape varieties and maturation cycles, require harvesting at distinct times.",
    "We implement traditional control methods, avoiding the use of herbicides. Between rows, we prioritize the development of our pastures and the natural flora of the environment.",
    "Maintaining traditional work methods helps us never lose sight of our connection with the land, which defines us as farmers. In addition to using tractors and other machinery to be efficient in specific tasks, working with animals like our Criollo horses, an Argentine breed, is a form of respect and care for nature, seeking to be rewarded with the finest flavor.",
  ];
  const title = [
    "",
    "PRUNING",
    "TYING",
    "TOPPING",
    "HARVEST",
    "WEEDS",
    "ANCIENT TECHNIQUES",
  ];
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
        <header className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-5 xl:py-10 px-5 2xl:px-0 fixed top-0 left-0 right-0 z-50">
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

        <div
          id="pataginan"
          className="container max-w-screen-xl xl:max-w-screen-2xl mx-auto md:px-5 2xl:px-0 py-10 fixed top-28 left-0 right-0 z-50"
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
              WORK IN THE VINEYARD
            </h2>
          </div>
        </div>

        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full  ${
              activeIndex === index ? "visible" : "invisible"
            }`}
            style={{
              position: activeIndex === index ? "relative" : "absolute",
            }}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className={`w-full h-screen object-cover  ${
                activeIndex === index
                  ? "fade-transition brightness-50 opacity-100"
                  : "fade-transition opacity-0"
              }`}
            />

            {activeIndex === index && (
              <div className="absolute bottom-10 left-0 right-0 flex justify-center">
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
      <div className="flex mt-1 ">
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
      <div className="overflow-hidden">
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
        <div className=" w-32 container max-w-screen-xl xl:max-w-screen-2xl py-1/2 fixed -top-60 left-72 right-0  md:px-5 2xl:px-0 absolute inset-0 flex items-center justify-center ">
          <p
            style={playfairFontBlack}
            className=" uppercase text-[#C4B27D] text-2xl mb-8"
          >
            {" "}
            {"0" + (currentImageIndex + 1)}{" "}
            <sup className="text-base underline align-middle	">7</sup>
          </p>
        </div>
        <div className="w-96 container  mx-auto max-w-screen-xl xl:max-w-screen-2xl  py-1/2 fixed -top-32 left-0 right-0  md:px-5 2xl:px-0 absolute inset-0 flex items-center justify-center ">
          <p
            style={robotoFontRegular}
            className=" uppercase text-[#C4B27D] text-2xl mb-8"
          >
            {title[currentImageIndex]}
          </p>
        </div>
        <div className=" w-2/4  container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-1/2 fixed top-40 left-0 right-0  md:px-5 2xl:px-0 absolute inset-0 flex items-center justify-center ">
          <p
            style={playfairFontRegular}
            className=" text-[#ffffff] text-base leading-7 tracking-wider text-center mb-14"
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
