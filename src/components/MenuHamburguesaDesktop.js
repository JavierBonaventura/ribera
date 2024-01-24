import React, { useState, useRef, useEffect } from "react";
import fondoHamburguesaDesktop from "../images/fondoHamburguesaDesktop.png";
import logoDesktop from "../images/logo-home-mob.png";
import x from "../images/x.png";
import iconIg from "../images/icon-ig-form.svg";
import { Link } from "react-router-dom";
import { Transition } from "@react-spring/web";
import { useSpring, animated } from "@react-spring/web";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "../App.css";

const MenuHamburguesaDesktop = () => {
  // codigo para traducciones
  const { t, i18n } = useTranslation();
  const [activeButton, setActiveButton] = useState("en");
  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setActiveButton(newLanguage);
  };

  // inicio codigo para retrasar la aparicion del logo
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);
  // fin codigo para retrasar la aparicion del logo

  // inicio codigo para retrasar la aparicion de los titulos
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible2(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  // fin codigo para retrasar la aparicion de los titulos

  // inicio codigo para retrasar la aparicion del sub menu
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible3(true);
    }, 1300);

    return () => clearTimeout(timeout);
  }, []);
  // fin codigo para retrasar la aparicion de los titulos

  const [igHovered, setIgHovered] = useState(false);
  const handleMouseEnter = () => {
    setIgHovered(true);
  };

  const handleMouseLeave = () => {
    setIgHovered(false);
  };

  const [isMenu1Hovered, setMenu1Hovered] = useState(false);
  const [isMenu2Hovered, setMenu2Hovered] = useState(false);
  const [isMenu3Hovered, setMenu3Hovered] = useState(false);

  const [isMenu1Visible, setMenu1Visible] = useState(true);
  const [isMenu2Visible, setMenu2Visible] = useState(true);
  const [isMenu3Visible, setMenu3Visible] = useState(true);

  const location = useLocation();

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

  const handleMenu1Hover = () => {
    setMenu1Hovered(true);
    setMenu2Visible(false);
    setMenu3Visible(false);
  };

  const handleMenu1Leave = () => {
    setMenu1Hovered(false);
    setMenu2Visible(true);
    setMenu3Visible(true);
  };

  const handleMenu2Hover = () => {
    setMenu2Hovered(true);
    setMenu1Visible(false);
    setMenu3Visible(false);
  };

  const handleMenu2Leave = () => {
    setMenu2Hovered(false);
    setMenu1Visible(true);
    setMenu3Visible(true);
  };

  const handleMenu3Hover = () => {
    setMenu3Hovered(true);
    setMenu1Visible(false);
    setMenu2Visible(false);
  };

  const handleMenu3Leave = () => {
    setMenu3Hovered(false);
    setMenu1Visible(true);
    setMenu2Visible(true);
  };
  const [mostrarMenu1, setMostrarMenu1] = useState(false);
  const [mostrarMenu2, setMostrarMenu2] = useState(false);
  const [mostrarMenu3, setMostrarMenu3] = useState(true);
  const [mostrarMenu4, setMostrarMenu4] = useState(false);
  const [mostrarMenu5, setMostrarMenu5] = useState(false);

  const dropdownAnimation3 = useSpring({
    height: mostrarMenu3 ? "195px" : "0px",
    opacity: mostrarMenu3 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const dropdownAnimation4 = useSpring({
    height: mostrarMenu4 ? "140px" : "0px",
    opacity: mostrarMenu4 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const dropdownAnimation5 = useSpring({
    height: mostrarMenu5 ? "120px" : "0px",
    opacity: mostrarMenu5 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const opcion3 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(false);
    setMostrarMenu3(true);
    setMostrarMenu4(false);
    setMostrarMenu5(false);

    if (mostrarMenu3 === true) {
      setMostrarMenu3(false);
    }
  };

  const opcion4 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(false);
    setMostrarMenu3(true);
    setMostrarMenu4(true);
    setMostrarMenu5(false);
    if (mostrarMenu4 === true) {
      setMostrarMenu4(false);
    }
  };

  const opcion5 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(false);
    setMostrarMenu3(true);
    setMostrarMenu4(false);
    setMostrarMenu5(true);

    if (mostrarMenu5 === true) {
      setMostrarMenu5(false);
    }
  };

  // CONEXION APIREST

  //Variable para el idioma//
  const idiomaSeleccionado = i18n.language;
  const [menuArgData, setMenuArgData] = useState(null);
  const [menuWorldData, setMenuWorldData] = useState(null);

  //Api wines menu//
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://back-ribera-gl7lw5cfra-uc.a.run.app/api/wines?populate=wines_categories&locale=${idiomaSeleccionado}`
        );

        const wineData = response.data.data;

        // Filtrar solo los vinos cuya categoría sea "In Argentina" o "En Argentina"
        const filteredMenuArgData = filterWinesByCategory(wineData, [
          "In Argentina",
          "En Argentina",
        ]);
        setMenuArgData(filteredMenuArgData);

        // Filtrar solo los vinos cuya categoría sea "In the world" o "En el mundo"
        const filteredMenuWorldData = filterWinesByCategory(wineData, [
          "In the world",
          "En el mundo",
        ]);
        setMenuWorldData(filteredMenuWorldData);
      } catch (error) {
        console.error("Error al llamar a la API", error);
      }
    };

    const filterWinesByCategory = (wines, categories) =>
      wines.filter((wine) =>
        wine.attributes.wines_categories.data.some((category) =>
          categories.includes(category.attributes.name)
        )
      );

    fetchData();
  }, [idiomaSeleccionado]);

  return (
    <Transition
      items={location}
      keys={(location) => location.pathname}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{ duration: 1000 }}
    >
      {(style, item) => (
        <animated.div style={{ ...style, width: "100%" }}>
          <div
            className={`h-screen bg-[imagen] bg-no-repeat bg-cover bg-center relative p-5`}
            style={{ backgroundImage: `url(${fondoHamburguesaDesktop})` }}
          >
            {/* <div className="w-full h-full">
              <div className="border border-[#F3EEE3] w-full h-full p-2 relative flex flex-col justify-center items-center">
                <div className="w-full h-full border border-[#F3EEE3] flex flex-col justify-start relative gap-y-8 2xl:gap-y-24 pt-24 2xl:pt-36"> */}
            <div className="w-full h-full">
              <div class="w-full h-full p-2.5 relative flex flex-col justify-center items-center">
                {/* lineas horizontales exteriores */}
                <div class="w-0 h-0.5 bg-[#F3EEE3] bg-opacity-50  absolute top-0 left-0 animate-line-left"></div>
                <div class="w-0 h-0.5 bg-[#F3EEE3] bg-opacity-50  absolute bottom-0 left-0 animate-line-left"></div>

                <div class="w-0 h-0.5 bg-[#F3EEE3] bg-opacity-50   absolute top-0 right-0 animate-line-right"></div>
                <div class="w-0 h-0.5 bg-[#F3EEE3] bg-opacity-50  absolute bottom-0 right-0 animate-line-right"></div>
                {/* lineas verticales exteriores  */}
                <div class="w-0.5 bg-[#F3EEE3] bg-opacity-50  absolute vertical-line-top-left"></div>
                <div class="w-0.5 bg-[#F3EEE3] bg-opacity-50  absolute vertical-line-top-right"></div>
                <div class="w-0.5 bg-[#F3EEE3] bg-opacity-50   absolute vertical-line-bottom-left"></div>
                <div class="w-0.5 bg-[#F3EEE3] bg-opacity-50  absolute vertical-line-bottom-right"></div>
                <div className="w-full h-full border-2 border-[#F3EEE3]  border-opacity-80  relative inset-0 animate-border-delay ">
                  <div className="flex justify-end items-center absolute top-3 right-3">
                    <Link to="/">
                      <div className=" bg-transparent border border-[#c4b27d] rounded-full p-3 transition ease-in-out duration-500 hover:scale-90">
                        <img src={x} alt="" className="w-2" />
                      </div>
                    </Link>
                  </div>
                  <div
                    className={`transition-opacity duration-1000 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="flex justify-center py-10 md:pt-24 2xl:pb-24 2xl:pt-36 ">
                      <Link to="/">
                        <img
                          src={logoDesktop}
                          alt="Logo"
                          className="w-32 lg:w-44"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center w-full xl:w-3/4 2xl:px-28 mx-auto ">
                    <div
                      id="menu1"
                      onMouseEnter={handleMenu1Hover}
                      onMouseLeave={handleMenu1Leave}
                      className={`flex flex-col items-center w-full transition-opacity duration-500 gap-y-8  ${
                        isMenu2Hovered || isMenu3Hovered
                          ? "opacity-30"
                          : "opacity-100"
                      }`}
                    >
                      <p
                        style={playfairFontRegular}
                        className={`menu-desk sombra-menu tracking-wider ${
                          isMenu1Hovered ? "text-[#F3EEE3]" : "text-[#c4b27d]"
                        } ${
                          isVisible2
                            ? "opacity-100 transition-opacity duration-500"
                            : "opacity-0 transition-opacity duration-500"
                        }`}
                      >
                        {t("menu.titleA")}
                      </p>
                      <ul
                        className={`text-center space-y-0 lg:space-y-1.5 transition-opacity duration-500 ${
                          isVisible3 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <li>
                          <Link to="/history/family" style={robotoFontRegular}>
                            <span className="subMenu tracking-widest uppercase">
                              {t("menu.optionA1")}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/history/valle-azul"
                            style={robotoFontRegular}
                          >
                            <span className="subMenu tracking-widest uppercase">
                              {t("menu.optionA2")}
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div
                      id="menu2"
                      onMouseEnter={handleMenu2Hover}
                      onMouseLeave={handleMenu2Leave}
                      className={`flex flex-col items-center w-full transition-opacity duration-500 gap-y-8  ${
                        isMenu1Hovered || isMenu3Hovered
                          ? "opacity-30"
                          : "opacity-100"
                      }`}
                    >
                      <p
                        style={playfairFontRegular}
                        className={`text-center menu-desk sombra-menu tracking-wider ${
                          isMenu2Hovered ? "text-[#f3eee3]" : "text-[#c4b27d]"
                        } transition-opacity duration-500 ${
                          isVisible2 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {t("menu.titleB")}
                      </p>
                      <ul
                        className={`text-center space-y-0 lg:space-y-1.5 transition-opacity duration-500 ${
                          isVisible3 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {" "}
                        <li>
                          <Link
                            to="/patagonian-spirit/araucana-vineyard"
                            style={robotoFontRegular}
                          >
                            <span className="subMenu tracking-widest uppercase">
                              {t("menu.optionB1")}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/patagonian-spirit/work-vineyard"
                            style={robotoFontRegular}
                          >
                            <span className="subMenu tracking-widest uppercase">
                              {t("menu.optionB2")}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/patagonian-spirit/work-winery"
                            style={robotoFontRegular}
                          >
                            <span
                              className="subMenu tracking-widest uppercase
                            "
                            >
                              {t("menu.optionB3")}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/patagonian-spirit/life-estate"
                            style={robotoFontRegular}
                          >
                            <span className="subMenu tracking-widest uppercase">
                              {t("menu.optionB4")}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/patagonian-spirit/water-life"
                            style={robotoFontRegular}
                          >
                            <span className="subMenu tracking-widest uppercase">
                              {t("menu.optionB5")}
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div
                      id="menu3"
                      onMouseEnter={handleMenu3Hover}
                      onMouseLeave={handleMenu3Leave}
                      className={`flex flex-col items-center w-full transition-opacity duration-500 gap-y-8 ${
                        isMenu1Hovered || isMenu2Hovered
                          ? "opacity-30"
                          : "opacity-100"
                      }`}
                    >
                      <p
                        style={playfairFontRegular}
                        className={`text-center menu-desk sombra-menu tracking-wider ${
                          isMenu3Hovered ? "text-[#f3eee3]" : "text-[#c4b27d]"
                        } transition-opacity duration-500 ${
                          isVisible2 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {t("menu.titleC")}
                      </p>
                      <animated.div style={dropdownAnimation3}>
                        <ul
                          className={`text-center space-y-0 lg:space-y-1 transition-opacity duration-500 ${
                            isVisible3 ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <li>
                            <p style={robotoFontRegular} onClick={opcion4}>
                              <span className="!mb-0 subMenu tracking-widest uppercase">
                                {t("menu.optionC1")}
                              </span>
                            </p>
                          </li>
                          <animated.div style={dropdownAnimation4}>
                            <ul className="text-center">
                              {menuArgData &&
                                menuArgData.map((wine) => (
                                  <li key={wine.id}>
                                    <Link
                                      to={`/wines-in-argentina/${wine.attributes.slug}`}
                                    >
                                      <div style={robotoFontRegular}>
                                        <span className="subMenu tracking-widest familyName">
                                          {wine.attributes.familyName}{" "}
                                          {wine.attributes.name}
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          </animated.div>
                          <li>
                            <p style={robotoFontRegular} onClick={opcion5}>
                              <span className="!mb-0 subMenu tracking-widest uppercase">
                                {t("menu.optionC2")}
                              </span>
                            </p>
                          </li>
                          <animated.div style={dropdownAnimation5}>
                            <ul className="text-center">
                              {menuWorldData &&
                                menuWorldData.map((wine) => (
                                  <li key={wine.id}>
                                    <Link
                                      to={`/wines-in-world/${wine.attributes.slug}`}
                                    >
                                      <div style={robotoFontRegular}>
                                        <span className="subMenu tracking-widest familyName">
                                          {wine.attributes.familyName}{" "}
                                          {wine.attributes.name}
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          </animated.div>
                        </ul>
                      </animated.div>
                    </div>
                  </div>

                  <div className="absolute md:px-5 bottom-5 w-full container mx-auto max-w-screen-xl xl:max-w-screen-2xl 2xl:max-w-none left-1/2 transform -translate-x-1/2">
                    <div className="flex flex-row-reverse justify-around items-center w-full text-[#F3EEE3]">
                      <div className="w-1/3 flex justify-end items-center">
                        <a
                          href="https://www.instagram.com/riberadelcuarzo/"
                          target="_blank"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="p-4 border border-white rounded-full hover:border-[#d6c69b] transition duration-300 ease-in-out">
                            <img
                              src={iconIg}
                              alt="LogoIg"
                              className={`w-5 ${
                                igHovered ? "filter-invert" : ""
                              }`}
                            />
                          </div>
                        </a>
                      </div>
                      <div
                        className="flex justify-center items-end md:w-2/4 lg:w-1/3 gap-x-5 xl:gap-x-10 text-sm"
                        style={robotoFontRegular}
                      >
                        <div className=" ">
                          <Link
                            to="/contact"
                            className="hover:text-[#c4b27d]  duration-300 transition ease-in-out uppercase tracking-widest"
                            style={robotoFontRegular}
                          >
                            {t("menu.footerOptionA")}
                          </Link>
                        </div>

                        <div className="" style={robotoFontRegular}>
                          <a
                            href=""
                            className="hover:text-[#c4b27d]  duration-300 transition ease-in-out"
                          >
                            <a
                              target="_blank"
                              href="https://casapirque.com.ar/"
                              className="flex flex-col items-center "
                            >
                              <span className="text-center">
                                <i> {t("menu.footerOptionB")}</i>
                              </span>
                              <span className="uppercase tracking-widest text-center">
                                Casa Pirque
                              </span>
                            </a>
                          </a>
                        </div>

                        <div className="uppercase">
                          <Link
                            to="/press"
                            href=""
                            className="hover:text-[#c4b27d]  duration-300 transition ease-in-out tracking-widest"
                          >
                            {t("menu.footerOptionC")}
                          </Link>
                        </div>
                      </div>
                      <div
                        className="flex justify-start items-center w-1/3 cursor-default gap-x-5 text-sm lg:text-base"
                        style={robotoFontRegular}
                      >
                        {/* Span para "English" */}
                        <span
                          id="en"
                          className={`hover:text-[#c4b27d] cursor-pointer transition ease-in-out duration-300 tracking-widest ${
                            activeButton === "en"
                              ? "text-[#c4b27d] font-bold "
                              : "text-[#F3EEE3]"
                          }`}
                          onClick={() => changeLanguage("en")}
                        >
                          English
                        </span>

                        {/* Span para "Spanish" */}
                        <span
                          id="es"
                          className={`hover:text-[#c4b27d] cursor-pointer transition ease-in-out duration-300 tracking-widest ${
                            activeButton === "es"
                              ? "text-[#c4b27d] font-bold"
                              : "text-[#F3EEE3]"
                          }`}
                          onClick={() => changeLanguage("es")}
                        >
                          Spanish
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default MenuHamburguesaDesktop;
