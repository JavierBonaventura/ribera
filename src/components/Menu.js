import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo-home-mob.png";
import { useSpring, animated } from "@react-spring/web";
import hambur from "../images/hambur-claro.png";
import iconIg from "../images/icon-ig-form.png";
import { useLocation } from "react-router-dom";
import { Transition } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Home = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("en");
  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setActiveButton(newLanguage);
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

  const bondiniFontRegular = {
    fontFamily: "Bondini, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

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
        ]);
        setMenuArgData(filteredMenuArgData);

        // Filtrar solo los vinos cuya categoría sea "In the world" o "En el mundo"
        const filteredMenuWorldData = filterWinesByCategory(wineData, [
          "In the world",
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
          <div className="containerHome  background  pt-8">
            <div className="w-full grid justify-items-end pr-6 ">
              <div className="w-6">
                <Link to="/menu">
                  <img src={hambur} alt="" className="w-full" />
                </Link>
              </div>
            </div>
            <div className="w-44 py-4">
              <Link to="/">
                <img src={logo} alt="" className="" />
              </Link>
            </div>

            <div className="body py-12">
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
                        <span className="subMenu tracking-widest uppercase">
                          {t("menu.optionA2")}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </animated.div>

                <p
                  style={playfairFontRegular}
                  className="menu sombra-menu"
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
                        t
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
                      <p
                        className="!mb-0 subMenu tracking-widest uppercase"
                        style={robotoFontRegular}
                        onClick={opcion5}
                      >
                        {t("menu.optionC2")}
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
            <div className="flex flex-col text-center gap-y-20 text-sm">
              <div className="flex flex-col gap-y-4 ">
                <Link
                  to="/contact"
                  className="footerItems tracking-widest"
                  style={robotoFontRegular}
                >
                  {t("menu.footerOptionA")}
                </Link>

                <Link
                  to="/press"
                  style={robotoFontRegular}
                  className="footerItems tracking-widest"
                >
                  {t("menu.footerOptionC")}
                </Link>
                <div className="text-sm flex gap-x-5 pt-10">
                  {/* Span para "English" */}
                  <span
                    className={` hover:text-[#c4b27d] cursor-pointer transition ease-in-out duration-300 tracking-widest ${
                      idiomaSeleccionado === "en"
                        ? "english text-[#c4b27d]"
                        : "text-[#f3eee3]"
                    }`}
                    onClick={() => changeLanguage("en")}
                  >
                    english
                  </span>
                  {/* Span para "Spanish" */}
                  <span
                    className={` hover:text-[#c4b27d] cursor-pointer transition ease-in-out duration-300 tracking-widest ${
                      idiomaSeleccionado === "es"
                        ? "spanish text-[#c4b27d]"
                        : "text-[#f3eee3]"
                    }`}
                    onClick={() => changeLanguage("es")}
                  >
                    spanish
                  </span>
                </div>
              </div>

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
