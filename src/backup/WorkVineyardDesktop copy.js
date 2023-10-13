import React, { useState, useEffect } from "react";
import workVineyardSlide0 from "../images/generica-vineyard.png";
import workVineyardSlide1 from "../images/pruning.jpg";
import workVineyardSlide2 from "../images/trellising.jpg";
import workVineyardSlide3 from "../images/topping.png";
import workVineyardSlide4 from "../images/harvest.jpg";
import workVineyardSlide5 from "../images/weeds.png";
import workVineyardSlide6 from "../images/ancient.jpg";
import leftArrowImage from "../images/flechaIzquierda.png";
import rightArrowImage from "../images/flechaDerecha.png";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";

const CarouselSlider = () => {
  // inicio codigo para retrasar la aparicion del titulo
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);
  // fin codigo para retrasar la aparicion del titulo

  // inicio codigo para retrasar la aparicion del parrafo
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible2(true);
    }, 700);

    return () => clearTimeout(timeout);
  }, []);
  // fin codigo para retrasar la aparicion del parrafo

  // inicio codigo para demorar la aparcion de la imagen al inciio
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(100);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // fin codigo para demorar la aparcion de la imagen al inciio

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
    "TITLE 1",
    "PRUNING",
    "TYING",
    "TOPPING",
    "HARVEST",
    "WEEDS",
    "ANCIENT TECHNIQUES",
  ];

  // codigo para cambiar de slide cuando se presionan los indicadores
  const handlePrevClickIndicators = (index) => {
    setcondition1Prev(true);
    setTimeout(() => {
      setcondition1Prev(false);
      setcondition2Prev(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setcondition2Prev(false);
        setcondition3Prev(true); // Activar condition3Prev en la nueva imagen
        setTimeout(() => {
          setcondition3Prev(false);
          setcondition4Prev(true); // Activar condition4Prev en la nueva imagen
          setTimeout(() => {
            setcondition4Prev(false);
          }, 800);
        }, 100);
      }, 800);
    }, 800);
    setActiveIndex(index);
    setCurrentImageIndex(index);
  };

  const handleNextClickIndicators = (index) => {
    setcondition1Next(true);
    setTimeout(() => {
      setcondition1Next(false);
      setcondition2Next(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setcondition2Next(false);
        setcondition3Next(true); // Activar condition3Next en la nueva imagen
        setTimeout(() => {
          setcondition3Next(false);
          setcondition4Next(true); // Activar condition4Next en la nueva imagen
          setTimeout(() => {
            setcondition4Next(false);
          }, 800);
        }, 100);
      }, 800);
    }, 800);
    setActiveIndex(index);
    setCurrentImageIndex(index);
  };

  // fin codigo para indicadores

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setcondition1Prev(true);
    setTimeout(() => {
      setcondition1Prev(false);
      setcondition2Prev(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
        setcondition2Prev(false);
        setcondition3Prev(true); // Activar condition3Prev en la nueva imagen
        setTimeout(() => {
          setcondition3Prev(false);
          setcondition4Prev(true); // Activar condition4Prev en la nueva imagen
          setTimeout(() => {
            setcondition4Prev(false);
          }, 800);
        }, 100);
      }, 800);
    }, 800);
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
    setcondition1Next(true);
    setTimeout(() => {
      setcondition1Next(false);
      setcondition2Next(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
        setcondition2Next(false);
        setcondition3Next(true); // Activar condition3Next en la nueva imagen
        setTimeout(() => {
          setcondition3Next(false);
          setcondition4Next(true); // Activar condition4Next en la nueva imagen
          setTimeout(() => {
            setcondition4Next(false);
          }, 800);
        }, 100);
      }, 800);
    }, 800);
  };

  // inicio animacion para demorar aparicion parrafo

  const [animatedWords, setAnimatedWords] = useState([]);

  useEffect(() => {
    // Dividir el párrafo en palabras de la diapositiva actual
    const words = paragraphs[currentImageIndex].split(" ");

    // Iniciar la animación palabra por palabra
    let animationDelay = 0;
    const animatedWordsArray = words.map((word, index) => {
      animationDelay += 0.02; // Puedes ajustar el retraso de animación según tus preferencias.
      return (
        <span
          key={index}
          style={{
            animation: `fadeInRight 1s ease ${animationDelay}s both`,
            display: "inline-block",
            whiteSpace: "pre", // Esto conservará los espacios en blanco
          }}
        >
          {word} {/* Agrega un espacio después de cada palabra */}
        </span>
      );
    });

    setAnimatedWords(animatedWordsArray);
  }, [paragraphs, currentImageIndex]);

  // Restablecer la animación cuando cambies de diapositiva
  useEffect(() => {
    setAnimatedWords([]); // Limpiar palabras animadas al cambiar de diapositiva
  }, [currentImageIndex]);

  // fin animacion para demorar aparicion parrafo

  const [currentSlide, setCurrentSlide] = useState(0);
  const [condition1Next, setcondition1Next] = useState(false);
  const [condition2Next, setcondition2Next] = useState(false);
  const [condition3Next, setcondition3Next] = useState(false);
  const [condition4Next, setcondition4Next] = useState(false);

  const [condition1Prev, setcondition1Prev] = useState(false);
  const [condition2Prev, setcondition2Prev] = useState(false);
  const [condition3Prev, setcondition3Prev] = useState(false);
  const [condition4Prev, setcondition4Prev] = useState(false);

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
          className="container max-w-screen-xl xl:max-w-screen-2xl mx-auto md:px-5 2xl:px-0 py-10 fixed top-28 left-0 right-0 z-50"
        >
          <div
            className={`flex flex-col justify-center items-center mt-10 md:mt-0 md:gap-y-0 ${
              isVisible
                ? "opacity-100 transition-opacity duration-500"
                : "opacity-0 transition-opacity duration-500"
            }`}
          >
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

        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-50">
          {RenderIndicators()}
        </div>

        <img
          src={images[currentSlide]}
          className={`w-full h-screen object-cover brightness-50 fade-transition opacity-${opacity} ${
            condition1Next
              ? "class-when-condition-1-next-is-true"
              : condition2Next
              ? "class-when-condition-2-next-is-true"
              : condition3Next
              ? "class-when-condition-3-next-is-true"
              : condition4Next
              ? "class-when-condition-4-next-is-true"
              : condition1Prev
              ? "class-when-condition-1-prev-is-true"
              : condition2Prev
              ? "class-when-condition-2-prev-is-true"
              : condition3Prev
              ? "class-when-condition-3-prev-is-true"
              : condition4Prev
              ? "class-when-condition-4-prev-is-true"
              : "class-when-neither-condition-is-true"
          } slide-transition`}
        />
      </div>
    );
  };

  const RenderIndicators = () => {
    const handleIndicatorClick = (index) => {
      if (index < activeIndex) {
        handlePrevClickIndicators(index); 
      } else if (index > activeIndex) {
        handleNextClickIndicators(index); 
      }
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleIndicatorHover = (index) => {
      setHoveredIndex(index);
    };

    const handleIndicatorLeave = () => {
      setHoveredIndex(null);
    };

    return (
      <div className="flex mt-1 ">
        {images.map((_, index) => (
          <div
            key={index}
            className="relative mx-5"
            onMouseEnter={() => handleIndicatorHover(index)}
            onMouseLeave={handleIndicatorLeave}
            onClick={() => handleIndicatorClick(index)} // Agregar evento de clic
          >
            <div
              className={`w-2 h-2 rounded-full ${
                activeIndex === index ? "bg-[#C4B27D]" : "bg-black"
              }`}
            >
              {activeIndex === index && (
                <div
                  className="absolute w-7 h-7 rounded-full border-2 border-[#C4B27D]"
                  style={{ top: "-10px", left: "-10px" }}
                ></div>
              )}
              <div
                className={`absolute w-7 h-7 rounded-full border-2 border-[#C4B27D] transition-opacity ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  top: "-10px",
                  left: "-10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transitionDuration: "0.5s", 
                  cursor: "pointer"
                }}
              >
                <div
                  className="absolute top-[-30px] text-[#C4B27D]"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {title[index]}
                </div>
              </div>
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
        <div className="w-32 container max-w-screen-xl xl:max-w-screen-2xl py-1/2 fixed top-[-10.2rem] left-72 right-0  md:px-5 2xl:px-0 absolute inset-0 flex items-center justify-center  ">
          <p
            style={playfairFontBlack}
            className=" uppercase text-[#C4B27D] text-2xl "
          >
            {" "}
            {"0" + (currentImageIndex + 1)}{" "}
            <sup className="text-base underline align-middles">7</sup>
          </p>
        </div>
        <div className="w-96 container  mx-auto max-w-screen-xl xl:max-w-screen-2xl  py-1/2 fixed -top-32 left-0 right-0  md:px-5 2xl:px-0 absolute inset-0 flex items-center justify-center ">
          <p
            style={robotoFontRegular}
            className={`uppercase text-[#C4B27D] text-2xl mb-8 ${
              condition1Next
                ? "class-when-conditionTitle-1-next-is-true"
                : condition2Next
                ? "class-when-conditionTitle-2-next-is-true"
                : condition3Next
                ? "class-when-conditionTitle-3-next-is-true"
                : condition4Next
                ? "class-when-conditionTitle-4-next-is-true"
                : condition1Prev
                ? "class-when-conditionTitle-1-prev-is-true"
                : condition2Prev
                ? "class-when-conditionTitle-2-prev-is-true"
                : condition3Prev
                ? "class-when-conditionTitle-3-prev-is-true"
                : condition4Prev
                ? "class-when-conditionTitle-4-prev-is-true"
                : "class-when-neither-condition-is-true"
            } slide-transition`}
          >
            {title[currentSlide]}
          </p>
        </div>
        <div
          className={`w-2/4 container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-1/2 fixed top-40 left-0 right-0 md:px-5 2xl:px-0 absolute inset-0 flex items-center justify-center ${
            isVisible2
              ? "opacity-100 transition-opacity duration-500"
              : "opacity-0 transition-opacity duration-500"
          }`}
        >
          <p
            style={playfairFontRegular}
            className="text-[#ffffff] text-base leading-7 tracking-wider text-center mb-8"
          >
            {animatedWords}
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
