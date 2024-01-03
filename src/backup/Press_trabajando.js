import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import hambur from "../../images/menu-hambur.png";
import iconIg from "../../images/icon-ig.png";
import PressTitulares from "../components/PressTitulares";
import { Transition, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import "../../App.css";

const PressComponent = () => {

  // Location

  const locationAnimacion = useLocation();

  // Idioma
  const { t, i18n } = useTranslation();


  // Fonts
    
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

  // Hover State for logos

  const [igHovered, setIgHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIgHovered(true);
  };
  const handleMouseLeave = () => {
    setIgHovered(false);
  };

  // Codigo para botones de Prev / Next
  const [percentage, setPercentage] = useState(0);

  const [percentageRight, setPercentageRight] = useState(0);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  const [isPrevButtonHovered, setIsPrevButtonHovered] = useState(false);
  const [isNextButtonHovered, setIsNextButtonHovered] = useState(false);


// Consulta a la API

  const [pressData, setPressData] = useState([]);
  const [years, setYears] = useState([]);
  const [currentYear, setCurrentYear] = useState(0);
  const apiUrl = 'https://back-ribera-gl7lw5cfra-uc.a.run.app/api/presses';

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const uniqueYears = Array.from(
        new Set(data.data.map((item) => new Date(item.attributes.date).getFullYear()))
      );

      const maxYear = Math.max(...uniqueYears);
      setYears(uniqueYears);
      setCurrentYear(maxYear);

      const pressByYear = data.data.filter(
        (item) => new Date(item.attributes.date).getFullYear() === maxYear
      );

      setPressData(pressByYear);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Funcion para cambio de ano Siguiente

  const handleNextYear = () => {
    const nextYear = years[years.indexOf(currentYear) + 1];
    setCurrentYear(nextYear);
    console.log(currentYear)
  };

  // Funcion para cambio de ano anterior

  const handlePreviousYear = () => {
    const prevYear = years[years.indexOf(currentYear) - 1];
    setCurrentYear(prevYear);
    console.log(currentYear)

  };

  useEffect(() => {
    fetchData();
  }, []);


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
              <div class="flex justify-between items-center">
                <div class="w-24 md:w-28">
                  <Link to="/">
                    <img src={logo} alt="" className="w-full" />
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

            <div className="bg-[#000]">
              <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 flex flex-col justify-center items-center pt-24 2xl:pt-36 pb-16 gap-y-5 2xl:gap-y-10">
                <div class="flex flex-col justify-center items-center">
                  <h2
                    style={playfairFontBlack}
                    className={`text-base md:text-2xl text-[#C4B27D] text-center tracking-wider uppercase ${
                      true
                        ? "opacity-100 transition-opacity duration-500"
                        : "opacity-0 transition-opacity duration-500"
                    }`}
                  >
                    {t("press.title")}
                  </h2>
                  <h1
                    class={` text-xs md:text-lg tracking-widest text-[#F3EEE3]  ${
                      true
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
                        handlePreviousYear();
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
                        true
                          ? "opacity-100 transition-opacity duration-500"
                          : "opacity-0 transition-opacity duration-500"
                      }`}
                      style={playfairFontBlack}
                    >
                      {currentYear}
                    </h1>
                  </div>
                  <div className="w-12 lg:w-20">
                    <button
                      aria-label="next"
                      className={`w-20 absolute lg:right-32 right-12  scale-75  lg:scale-100 lg:hover:scale-95 transition ease-in-out duration-300 ${
                        isNextButtonHovered ? "opacity-100" : "opacity-100"
                      }`}
                      onClick={() => {
                        handleNextYear();
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


              </div>
            </div>


            <PressTitulares pressData={pressData} currentYear={currentYear} />

            <div class=" bg-[#000]">
              <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 py-20">
                <div class="flex justify-center">
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

  // return (
  //   <div>
  //     <h1>Press Releases for {currentYear}</h1>
  //     <ul>
  //       {pressData.map((press) => (
  //         <li key={press.id}>
  //           <p>{press.attributes.title}</p>
  //           <p>{press.attributes.author}</p>
  //           <p>{press.attributes.date}</p>
  //         </li>
  //       ))}
  //     </ul>
  //     <button onClick={handlePreviousYear} disabled={!years.includes(currentYear - 1)}>
  //       Previous Year
  //     </button>
  //     <button onClick={handleNextYear} disabled={!years.includes(currentYear + 1)}>
  //       Next Year
  //     </button>
  //   </div>
  // );
};

export default PressComponent;
