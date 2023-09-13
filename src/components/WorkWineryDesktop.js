import React, { useState } from "react";
import workVineyardSlide1 from "../images/fermentation-2.jpg";
import workVineyardSlide2 from "../images/aging-1.jpg";
import workVineyardSlide3 from "../images/blending-1.jpg";
import workVineyardSlide4 from "../images/bottling2.jpg";
import workVineyardSlide5 from "../images/cellaring.jpg";
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
    workVineyardSlide5,
  ];
  const paragraphs = [
    "Fermentation takes place in open-top concrete pools, each with a capacity of about 2000 kilograms, where we work very small and select batches from the vineyard. During the process, the tasks performed are respectful and careful, with minimal intervention, aimed at achieving spontaneous fermentation with vineyard-specific or certified organic yeasts. We do not use additives or clarifiers. We follow traditional methods such as manual pressing and délestage, especially with our Malbec grapes, and gentle remontage during the final stages. Maceration times are short, between 12 and 13 days, because we believe that longer times are counterproductive for expressing the freshness of our terroir.",

    "Each batch or small grape vinification will dictate whether aging will be entirely done in barrels or if a portion will be done in concrete tanks or stainless steel vessels. There are wines we want to preserve the fruit in more, and others where we believe adding complexity with wood is necessary. Generally, 70 percent is in used barrels, 100 percent French oak, as we seek a delicate balance and to avoid overwhelming the wines with wood.",

    "We believe in the magic of crafting exceptional wines through the alchemy of blending. Our passion for the art of winemaking leads us to explore two unique approaches: co-fermentations and the traditional blending technique. We prefer to work with co-fermentations, a technique we find more enriching as it captures the very essence of our terroir. From the moment different grape varieties and parcels enter our cellar, a shared journey begins that spans the entire process. Ultimately, our goal is to merge the past and the future in every bottle we present.",

    "We are highly respectful of the bottling and labeling process to adhere to the highest standards. During bottling, we carry out filtration to protect the wine without affecting it significantly, and we maintain strict control during bottling, ensuring safety and quality standards so that the wine, once bottled, evolves and expresses itself at its best.",

    "We believe it's crucial for the wines to undergo a period of bottle aging before reaching the market. Our wines have shown us that they improve significantly with the passing of the years, and this aging period serves as a library and study area. We continuously taste and compare the stored vintages with new ones, learning how our wines evolve based on our practices in each harvest. The evolution is excellent: our wines greatly improve over time in the bottle, which is why aging is so important for us.",
  ];
  const title = [
    "FERMENTATION",
    "AGING",
    "BLENDING",
    "BOTTLING AND LABELING",
    "CELLARING",
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
          className="container   max-w-screen-xl  xl:max-w-screen-2xl mx-auto py-10 fixed top-28 left-0 right-0 z-50 md:px-5 2xl:px-0 "
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
              WORK IN THE WINERY
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
        <div className=" w-32 container  py-1/2 fixed top-[-8rem] left-72 right-0  px-5 absolute inset-0 flex items-center justify-center ">
          <p
            style={playfairFontBlack}
            className=" uppercase text-[#C4B27D] text-2xl mb-8"
          >
            {" "}
            {"0" + (currentImageIndex + 1)}{" "}
            <sup className="text-base underline align-middle	">5</sup>
          </p>
        </div>
        <div className="w-96  container mx-auto   max-w-screen-xl  2xl:max-w-screen-2xl py-1/2 fixed -top-32 left-0 right-0  px-5 absolute inset-0 flex items-center justify-center ">
          <p
            style={robotoFontRegular}
            className=" uppercase text-[#C4B27D] text-2xl mb-8"
          >
            {title[currentImageIndex]}
          </p>
        </div>
        <div className="w-2/4 container  max-w-screen-xl mx-auto  xl:max-w-screen-2xl py-1/2 fixed top-40 left-0 right-0 md:px-5 2xl:px-0 absolute inset-0 flex items-center justify-center ">
          <p
            style={playfairFontRegular}
            className=" text-[#ffffff] text-base leading-7 tracking-wider text-center mb-8"
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
