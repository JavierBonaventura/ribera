import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import hambur from "../../images/menu-hambur.png";
import { useTranslation } from "react-i18next";
import Loaded from "../components/Loaded";
import Error from "../components/Error";

const CarouselSlider = () => {
  const { t, i18n } = useTranslation();
  const idiomaSeleccionado = i18n.language;

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

  // Estadode variables consultas de API
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState([]);
  const [paragraphs, setParagraphs] = useState([""]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // URL de la API
  const apiUrlEnglish =
    "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques%2C%20bloques.slide%2C%20bloques.slide.image&filters%5Bslug%5D=work-winery&locale=en";
  const apiUrlSpanish =
    "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques%2C%20bloques.slide%2C%20bloques.slide.image&filters%5Bslug%5D=work-winery-es&locale=es";
  let apiUrl;

  if (idiomaSeleccionado === "en") {
    apiUrl = apiUrlEnglish;
  } else {
    apiUrl = apiUrlSpanish;
  }

  useEffect(() => {
    // Función para quitar las etiquetas HTML de un texto
    const extractTextWithoutTags = (htmlString) => {
      const tempElement = document.createElement("div");
      tempElement.innerHTML = htmlString;
      return tempElement.textContent || tempElement.innerText;
    };

    // Función para realizar la solicitud HTTP y obtener las imágenes
    const fetchImages = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Obtener el array de slides
        const slides = data.data[0].attributes.bloques[0].slide;

        // Obtener las URL de las imágenes
        const imageUrls = slides.map(
          (slide) => slide.image.data.attributes.url
        );
        setImages(imageUrls);

        // Obtener los titulos
        const titlesContent = slides.map((slide) => slide.title);
        setTitle(titlesContent);

        // Obtener los párrafos sin etiquetas HTML
        const textContent = slides.map((slide) =>
          extractTextWithoutTags(slide.text)
        );
        setParagraphs(textContent);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    // Llamar a la función de solicitud cuando el componente se monta
    fetchImages();
  }, [currentImageIndex]); // El segundo argumento [] significa que se ejecutará solo una vez (cuando se monta el componente)

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
          className="text-xs leading-3 lg:leading-normal lg:text-sm xl:text-base"
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
          <div className="flex justify-between items-center  ">
            <div className="">
              <Link to="/">
                <img src={logo} alt="" className="w-24 md:w-28" />
              </Link>
            </div>
            <div className="mt-4">
              <Link to="/menu">
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
          className="container max-w-screen-xl xl:max-w-screen-2xl mx-auto md:px-5 2xl:px-0 xl:py-10 fixed top-28 left-0 right-0 z-50"
        >
          <div
            className={`flex flex-col justify-center items-center mt-10 md:mt-0 md:gap-y-0 ${
              isVisible
                ? "opacity-100 transition-opacity duration-500"
                : "opacity-0 transition-opacity duration-500"
            }`}
          >
            <h1
              className="text-[#ffffff] text-lg tracking-widest"
              style={playfairFontItalic}
            >
              <i style={playfairFontItalic}>{t("patagonian.title")}</i>
            </h1>
            <h2
              style={playfairFontBlack}
              className="text-2xl text-[#C4B27D] text-center tracking-wider uppercase"
            >
              {t("patagonian.workWinery.title")}
            </h2>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-50 uppercase">
          {RenderIndicators()}
        </div>

        <img
          src={images[currentSlide]}
          className={`w-full h-screen object-cover brightness-50 fade-transition  opacity-${opacity} ${
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
      <div className="flex mt-1  ">
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
                activeIndex === index ? "bg-[#C4B27D]" : "bg-[#F5F5DC]"
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
                  cursor: "pointer",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-[#C4B27D]"></div>

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

  // inicio codigo para dibujar circulo en botones
  const [percentage, setPercentage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [percentageRight, setPercentageRight] = useState(0);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        if (percentage < 100) {
          setPercentage(percentage + 5);
        } else {
          clearInterval(interval);
        }
      }, 4);

      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        if (percentage !== 0) {
          setPercentage(percentage - 5);
        } else {
          clearInterval(interval);
        }
      }, 4);

      return () => clearInterval(interval);
    }
  }, [percentage, isHovered]);

  useEffect(() => {
    if (isHoveredRight) {
      const intervalRight = setInterval(() => {
        if (percentageRight < 100) {
          setPercentageRight(percentageRight + 5);
        } else {
          clearInterval(intervalRight);
        }
      }, 4);

      return () => clearInterval(intervalRight);
    } else {
      const intervalRight = setInterval(() => {
        if (percentageRight !== 0) {
          setPercentageRight(percentageRight - 5);
        } else {
          clearInterval(intervalRight);
        }
      }, 4);

      return () => clearInterval(intervalRight);
    }
  }, [percentageRight, isHoveredRight]);

  const imageWidth = 90;
  const imageHeight = 90;

  // fin codigo para dibujar circulo en botones

  return (
    <div className="relative ">
      <div className="overflow-hidden ">
        {renderImages()}

        <button
          aria-label="previous"
          className={`w-20 absolute top-[50%] left-10 lg:left-32  scale-75 hover:scale-50 lg:scale-100 lg:hover:scale-95 transition ease-in-out duration-300 ${
            isPrevButtonHovered ? "opacity-100" : "opacity-100"
          }`}
          onClick={handlePrevClick}
          onMouseEnter={() => setIsPrevButtonHovered(true)}
          onMouseLeave={() => setIsPrevButtonHovered(false)}
        >
          {/* <img src={leftArrowImage} alt="izquierda" /> */}
          <div>
            <svg
              className=""
              width="100"
              height="100"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="#C4B27D"
                strokeWidth="3"
                strokeDasharray="502"
                strokeDashoffset={502 - (502 * percentage) / -100}
              />
              {/* <image
                x={(100 - imageWidth) / 2}
                y={(100 - imageHeight) / 2}
                width={imageWidth}
                height={imageHeight}
                xlinkHref={leftArrowImage}
                opacity="0.7"
              /> */}
              <circle
                cx="50"
                cy="50"
                r="44"
                stroke="#C4B27D"
                strokeWidth="1"
                fill="none"
                opacity="0.7"
              />
              <polygon points="40,50 45,45 45,55" fill="#C4B27D" />
              <circle cx="56" cy="50" r="3" fill="#C4B27D" />
            </svg>
          </div>
        </button>
        <div className="w-32 container max-w-screen-xl xl:max-w-screen-2xl  py-1/2 fixed top-[-10.2rem] left-24 lg:left-44  xl:left-72 right-0  md:px-5 2xl:px-0 absolute inset-0 flex items-center justify-center  ">
          <p
            style={playfairFontBlack}
            className=" uppercase text-[#C4B27D] text-base lg:text-2xl "
          >
            {" "}
            {"0" + (currentImageIndex + 1)}{" "}
            <sup className="text-base underline align-middles">
              {images.length}
            </sup>{" "}
          </p>
        </div>
        <div className="w-96 container mx-auto max-w-screen-xl xl:max-w-screen-2xl  py-1/2 fixed -top-32 left-0 right-0  md:px-5 2xl:px-0 absolute inset-0 flex items-center justify-center  ">
          <p
            style={robotoFontRegular}
            className={`uppercase text-[#C4B27D]  text-2xl mb-8 ${
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
          className={` w-7/12 lg:w-2/4 container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-1/2 fixed top-40 left-0 right-0 lg:px-5 2xl:px-0 absolute inset-0 flex items-center justify-center ${
            isVisible2
              ? "opacity-100 transition-opacity duration-500"
              : "opacity-0 transition-opacity duration-500"
          }`}
        >
          <p
            style={playfairFontRegular}
            className="text-[#ffffff] leading-5 xl:leading-7 tracking-wider text-center mb-8 xl:mb-2"
          >
            {animatedWords}
          </p>
        </div>
        <button
          aria-label="next"
          className={`w-20 absolute top-[50%] right-10 lg:right-32  scale-75 hover:scale-50 lg:scale-100 lg:hover:scale-95 transition ease-in-out duration-300 ${
            isNextButtonHovered ? "opacity-100" : "opacity-100"
          }`}
          onClick={handleNextClick}
          onMouseEnter={() => setIsNextButtonHovered(true)}
          onMouseLeave={() => setIsNextButtonHovered(false)}
        >
          {/* <img src={rightArrowImage} alt="derecha" /> */}
          <div>
            <svg
              width="100"
              height="100"
              onMouseEnter={() => setIsHoveredRight(true)}
              onMouseLeave={() => setIsHoveredRight(false)}
            >
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="#C4B27D"
                strokeWidth="3"
                strokeDasharray="502"
                strokeDashoffset={502 - (502 * percentageRight) / 100}
              />
              {/* <image
                x={(100 - imageWidth) / 2}
                y={(100 - imageHeight) / 2}
                width={imageWidth}
                height={imageHeight}
                xlinkHref={rightArrowImage}
                opacity="0.7"
              /> */}
              <circle
                cx="50"
                cy="50"
                r="44"
                stroke="#C4B27D"
                strokeWidth="1"
                fill="none"
                opacity="0.7"
              />

              <polygon points="60,50 55,45 55,55" fill="#C4B27D" />

              <circle cx="44" cy="50" r="3" fill="#C4B27D" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CarouselSlider;
