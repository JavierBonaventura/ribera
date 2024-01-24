import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.svg";
import { useSpring, animated } from "@react-spring/web";
import iconIg from "../images/icon-ig-form.png";
import close from "../images/icon-close.svg";
import x from "../images/x.png";
import { useLocation } from "react-router-dom";
import { Transition } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Home = () => {
  // codigo para traducciones
  const { t, i18n } = useTranslation();
  const [activeButton, setActiveButton] = useState("en");
  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setActiveButton(newLanguage);
  };

  const location = useLocation();

  const roboto = {
    fontFamily: "Roboto, sans-serif",
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
  const [mostrarMenu1, setMostrarMenu1] = useState(false);
  const [mostrarMenu2, setMostrarMenu2] = useState(false);
  const [mostrarMenu3, setMostrarMenu3] = useState(false);
  const [mostrarMenu4, setMostrarMenu4] = useState(false);
  const [mostrarMenu5, setMostrarMenu5] = useState(false);

  const dropdownAnimation1 = useSpring({
    height: mostrarMenu1 ? "80px" : "0px",
    opacity: mostrarMenu1 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const dropdownAnimation2 = useSpring({
    height: mostrarMenu2 ? "170px" : "0px",
    opacity: mostrarMenu2 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

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

  const opcion1 = () => {
    setMostrarMenu1(true);
    setMostrarMenu2(false);
    setMostrarMenu3(false);
    setMostrarMenu4(false);
    setMostrarMenu5(false);
    if (mostrarMenu1 === true) {
      setMostrarMenu1(false);
    }
  };

  const opcion2 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(true);
    setMostrarMenu3(false);
    setMostrarMenu4(false);
    setMostrarMenu5(false);

    if (mostrarMenu2 === true) {
      setMostrarMenu2(false);
    }
  };

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
          <div className="containerHome pt-8 backgroundHambuerguesa ">
            <header className="container mx-auto py-5 fixed top-0 left-0 right-0 z-50 px-5 md:px-0 md:py-2 bg-red-500 hidden">
              <div class="flex justify-between items-center">
                <div class="w-24 md:w-36 ">
                  <Link to="/">
                    <img src={logo} alt="" className="w-full" />
                  </Link>
                </div>
                <div class="w-12 pt-3">
                  <Link to="/">
                    <img src={close} alt="" className="w-full" />
                  </Link>
                </div>
              </div>
            </header>
            <div className="flex hidden">
              <div className="">
                <Link to="/">
                  <img src={logo} alt="Imagen 1" className="w-32" />
                </Link>
              </div>
              <div className="">
                <Link to="/" className="absolute right-0">
                  <svg
                    className="ml-10 pt-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="16"
                      stroke="#C3B17D"
                      fill="transparent"
                      strokeWidth="2"
                    />
                    <line
                      x1="44"
                      y1="44"
                      x2="56"
                      y2="56"
                      stroke="#C3B17D"
                      strokeWidth="2"
                    />
                    <line
                      x1="44"
                      y1="56"
                      x2="56"
                      y2="44"
                      stroke="#C3B17D"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex justify-end items-center absolute top-7 right-7">
              <Link to="/">
                <div className=" bg-transparent border border-[#c4b27d] rounded-full p-2">
                  <img src={x} alt="" className="w-2" />
                </div>
              </Link>
            </div>

            <div className="body pt-36">
              <div className="containerHome gap-y-3">
                <p
                  style={playfairFontRegular}
                  className="menu sombra-menu"
                  onClick={opcion1}
                >
                  {t("menu.titleA")}
                </p>
                <animated.div style={dropdownAnimation1}>
                  <ul className="text-center space-y-1.5">
                    <li>
                      <Link to="/history/family" style={robotoFontRegular}>
                        <span className="subMenu tracking-widest uppercase">
                          {" "}
                          {t("menu.optionA1")}
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/history/valle-azul" style={robotoFontRegular}>
                        {" "}
                        <span className="subMenu tracking-widest uppercase">
                          {t("menu.optionA2")}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </animated.div>

                <p
                  style={playfairFontRegular}
                  className="menu sombra-menu px-2 "
                  onClick={opcion2}
                >
                  {t("menu.titleB")}
                </p>
                <animated.div style={dropdownAnimation2}>
                  <ul className="text-center space-y-1.5">
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
                        <span className="subMenu tracking-widest uppercase">
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
                </animated.div>

                <p
                  style={playfairFontRegular}
                  className="menu sombra-menu"
                  onClick={opcion3}
                >
                  {t("menu.titleC")}
                </p>
                <animated.div style={dropdownAnimation3}>
                  <ul className="text-center space-y-1.5">
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
            <div className=" w-full px-20 text-center flex flex-col gap-y-5 pt-14 ">
              <div className=" flex justify-center gap-x-10 text-base">
                <Link
                  to="/contact"
                  className="uppercase footerItems tracking-widest hover:underline"
                  style={roboto}
                >
                  {t("menu.footerOptionA")}
                </Link>
                <Link
                  to="/press"
                  style={roboto}
                  className="uppercase footerItems tracking-widest  hover:underline"
                >
                  {t("menu.footerOptionC")}
                </Link>
              </div>
              <div className=" w-full  text-center flex flex-col gap-y-5 text-sm ">
                <div
                  style={roboto}
                  className="footerItems tracking-widest hover:underline"
                >
                  <a href="https://casapirque.com.ar" target="_blank">
                    <h1 className="text-center pb-2 text-[#8B8A8B]">
                      <i> {t("menu.footerOptionB")}</i>
                    </h1>
                    <p className="text-center uppercase">Casa Pirque</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-[#f3eee3] text-sm flex gap-x-5 pt-10">
              <span
                className={`hover:text-[#c4b27d] cursor-pointer transition ease-in-out duration-300 tracking-widest ${
                  activeButton === "en"
                    ? "text-[#c4b27d] font-bold "
                    : "text-[#F3EEE3]"
                }`}
                onClick={() => changeLanguage("en")}
              >
                english
              </span>
              <span
                className={`hover:text-[#c4b27d] cursor-pointer transition ease-in-out duration-300 tracking-widest ${
                  activeButton === "es"
                    ? "text-[#c4b27d] font-bold"
                    : "text-[#F3EEE3]"
                }`}
                onClick={() => changeLanguage("es")}
              >
                spanish
              </span>
            </div>

            <div className="py-14">
              <div className="container mx-auto flex justify-center">
                <a
                  href="https://www.instagram.com/riberadelcuarzo/"
                  target="_blank"
                >
                  <img src={iconIg} alt="" className="w-4" />
                </a>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default Home;
