import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import hambur from "../../images/menu-hambur.png";
import iconIg from "../../images/icon-ig.png";
import SubPressList from "../pages/Press/SubPressList";
import { Transition, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import Loaded from "../components/Loaded";
import Error from "../components/Error";
import "../../App.css";

function Press() {
  // Idioma
  const { t, i18n } = useTranslation();

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

  // inicio codigo para retrasar la aparicion del sub menu
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible3(true);
    }, 1300);

    return () => clearTimeout(timeout);
  }, []);
  // fin codigo para retrasar la aparicion de los titulos

  // inicio codigo para dibujar circulo en botones
  const [percentage, setPercentage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [percentageRight, setPercentageRight] = useState(0);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  const [isPrevButtonHovered, setIsPrevButtonHovered] = useState(false);
  const [isNextButtonHovered, setIsNextButtonHovered] = useState(false);

  const [nextYear, setNextYear] = useState(null);
  const [isTransitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (true) {
      setTransitioning(true);
      setTimeout(() => {
        setNextYear(null);
        setTransitioning(false);
      }, 500);
    }
  }, [nextYear]);

  // funcion parar recargar la funcion de cambio de ano

  const incrementYear = () => {
    setNextYear(1);
  };

  const decrementYear = () => {
    setNextYear(1);
  };

  const renderYearDigits = () => {
    if (currentYear !== null) {
      const digits = currentYear.toString();

      return digits.split("").map((digit, index) => (
        <span
          key={index}
          className={`digit ${
            isTransitioning ? "transition-out" : "transition-in"
          }`}
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          {digit}
        </span>
      ));
    } else {
      return null;
    }
  };

  useEffect(() => {
    // Codigo para verificar si es un dispositivo móvil
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobile) {
      // Efecto solo si no es un dispositivo móvil
      if (isHovered) {
        const interval = setInterval(() => {
          if (percentage < 100) {
            setPercentage((prevPercentage) => prevPercentage + 2);
          } else {
            clearInterval(interval);
          }
        }, 4);

        return () => clearInterval(interval);
      } else {
        const interval = setInterval(() => {
          if (percentage !== 0) {
            setPercentage((prevPercentage) => prevPercentage - 2);
          } else {
            clearInterval(interval);
          }
        }, 4);

        return () => clearInterval(interval);
      }
    }
    return undefined;
  }, [percentage, isHovered]);

  useEffect(() => {
    // Codigo para verificar si es un dispositivo móvil
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobile) {
      // Efecto solo si no es un dispositivo móvil
      if (isHoveredRight) {
        const intervalRight = setInterval(() => {
          if (percentageRight < 100) {
            setPercentageRight(
              (prevPercentageRight) => prevPercentageRight + 2
            );
          } else {
            clearInterval(intervalRight);
          }
        }, 4);

        return () => clearInterval(intervalRight);
      } else {
        const intervalRight = setInterval(() => {
          if (percentageRight !== 0) {
            setPercentageRight(
              (prevPercentageRight) => prevPercentageRight - 2
            );
          } else {
            clearInterval(intervalRight);
          }
        }, 4);

        return () => clearInterval(intervalRight);
      }
    }
    return undefined;
  }, [percentageRight, isHoveredRight]);

  const imageWidth = 90;
  const imageHeight = 90;

  // fin codigo para dibujar circulo en botones

  // inicio codigo para consultar por los anos de los titulares por API
  const [presses, setPresses] = useState([]);
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/presses?populate=mainImage"
        );
        const data = await response.json();
        setPresses(data.data);

        const highestYear = Math.max(
          ...data.data.map((press) => {
            const partes = press.attributes.date.split("-");
            const year = parseInt(partes[0], 10);
            return isNaN(year) ? -Infinity : year;
          })
        );

        setCurrentYear(highestYear);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [selectedYear, setSelectedYear] = useState(null);
  const navigateYear = (step) => {
    const yearsSet = new Set();

    presses.forEach((press) => {
      const partes = press.attributes.date.split("-");
      const ano = parseInt(partes[0], 10);
      yearsSet.add(ano);
    });

    // Convertir el conjunto a un arreglo y ordenarlo si es necesario
    const uniqueYearsArray = Array.from(yearsSet).sort();

    setUniqueYears(uniqueYearsArray);

    // console.log(uniqueYearsArray);
    const currentIndex = uniqueYearsArray.indexOf(currentYear);
    const newIndex =
      (currentIndex + step + uniqueYearsArray.length) % uniqueYearsArray.length;

    setSelectedYear(uniqueYearsArray[newIndex]);

    // Demora de un segundo antes de actualizar el año seleccionado
    setTimeout(() => {
      setCurrentYear(uniqueYearsArray[newIndex]);
    }, 1000);
  };

  const [igHovered, setIgHovered] = useState(false);
  const handleMouseEnter = () => {
    setIgHovered(true);
  };
  const handleMouseLeave = () => {
    setIgHovered(false);
  };

  const locationAnimacion = useLocation();

  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  //  funcion paraw contruir un arreglo con los anos disponibles

  const [uniqueYears, setUniqueYears] = useState([]);

  useEffect(() => {
    const yearsSet = new Set();

    presses.forEach((press) => {
      const partes = press.attributes.date.split("-");
      const ano = parseInt(partes[0], 10);
      yearsSet.add(ano);
    });

    // Convertir el conjunto a un arreglo y ordenarlo si es necesario
    const uniqueYearsArray = Array.from(yearsSet).sort();

    setUniqueYears(uniqueYearsArray);
  }, [presses]);

  // filtro para pasar al componente hijo el arreglo ya filtrado por ano

  const filteredPresses = presses.filter((press) => {
    var partes = press.attributes.date.split("-");
    var ano = parseInt(partes[0], 10);
    return ano === currentYear;
  });

  return (
    <Transition
      items={locationAnimacion}
      keys={(location) => location.pathname}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{ duration: 1000 }}
    >
      {(style, item) => (
        <animated.div style={{ ...style, width: "100%" }}>
          <div>
            <div id="posicion0"></div>
            <header className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-5 xl:py-10 px-5 2xl:px-0  fixed top-0 left-0 right-0 ">
              <div className="flex justify-between items-center">
                <div className="w-24 md:w-28">
                  <Link to="/">
                    <img src={logo} alt="" className="w-full" />
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

            <div className="bg-[#000]">
              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 flex flex-col justify-center items-center pt-24 2xl:pt-36 pb-16 gap-y-5 2xl:gap-y-10">
                <div className="flex flex-col justify-center items-center">
                  <h2
                    style={playfairFontBlack}
                    className={`text-base md:text-2xl text-[#C4B27D] text-center tracking-wider uppercase ${
                      isVisible
                        ? "opacity-100 transition-opacity duration-500"
                        : "opacity-0 transition-opacity duration-500"
                    }`}
                  >
                    {t("press.title")}
                  </h2>
                  <h1
                    className={` text-xs md:text-lg tracking-widest text-[#F3EEE3]  ${
                      isVisible2
                        ? "opacity-100 transition-opacity duration-500"
                        : "opacity-0 transition-opacity duration-500"
                    }`}
                    style={playfairFontRegular}
                  >
                    {t("press.subtitle")}
                  </h1>
                </div>

                <div className=" flex justify-around items-center w-full z-50 b">
                  <div className="w-12 lg:w-20">
                    <button
                      aria-label="previous"
                      className={`w-20 absolute left-10 lg:left-32  scale-75  lg:scale-100 lg:hover:scale-95 transition ease-in-out duration-300 ${
                        isPrevButtonHovered ? "opacity-100" : "opacity-100"
                      }`}
                      onClick={() => {
                        navigateYear(-1);
                        decrementYear();
                      }}
                      onMouseEnter={() => setIsPrevButtonHovered(true)}
                      onMouseLeave={() => setIsPrevButtonHovered(false)}
                    >
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
                  </div>
                  <div>
                    <h1
                      className={`year-container text-5xl lg:text-9xl text-[#C4B27D] ${
                        isVisible3
                          ? "opacity-100 transition-opacity duration-500"
                          : "opacity-0 transition-opacity duration-500"
                      }`}
                      style={playfairFontBlack}
                    >
                      {renderYearDigits()}
                    </h1>
                  </div>
                  <div className="w-12 lg:w-20">
                    <button
                      aria-label="next"
                      className={`w-20 absolute lg:right-32 right-12  scale-75  lg:scale-100 lg:hover:scale-95 transition ease-in-out duration-300 ${
                        isNextButtonHovered ? "opacity-100" : "opacity-100"
                      }`}
                      onClick={() => {
                        navigateYear(1);
                        incrementYear();
                      }}
                      onMouseEnter={() => setIsNextButtonHovered(true)}
                      onMouseLeave={() => setIsNextButtonHovered(false)}
                    >
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
                            strokeDashoffset={
                              502 - (502 * percentageRight) / 100
                            }
                          />
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

                <SubPressList
                  year={selectedYear !== null ? selectedYear : currentYear}
                  presses={filteredPresses}
                />
              </div>
            </div>

            <div className=" bg-[#000]">
              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 py-20">
                <div className="flex justify-center">
                  <a
                    className={`border border-[#C4B27D] rounded-full p-7 md:p-8 ${
                      igHovered
                        ? "bg-[#C4B27D] transition-bg ease-in-out duration-200"
                        : "bg-transparent transition-bg ease-in-out duration-200"
                    }`}
                    href="https://www.instagram.com/riberadelcuarzo/"
                    target="_blank"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={iconIg}
                      alt=""
                      className={`w-5 md:w-7 ${
                        igHovered ? "filter brightness-200" : ""
                      }`}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
}

export default Press;
