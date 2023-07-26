import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.svg";
import { useSpring, animated } from "@react-spring/web";
import iconIg from "../images/icon-ig.png";
import { useLocation } from "react-router-dom";
import { Transition } from "@react-spring/web";

const Home = () => {
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
    height: mostrarMenu4 ? "120px" : "0px",
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
          <div className="containerHome pt-8 backgroundHambuerguesa">
            <header className="container mx-auto py-10 fixed top-0 left-0 right-0 z-50 px-5 md:px-0 md:py-2 ">
              <div class="flex justify-between items-center">
                <div class="w-24 md:w-36 ">
                  <Link to="/">
                    <img src={logo} alt="" className="w-full xl:w-28" />
                  </Link>
                </div>

                <div class=" absolute top-4 -right-3">
                  <Link to="/">
                    <svg
                      className=""
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
            </header>

            <div className="flex bg-blue-500 hidden">
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

            <div className="body ">
              <div className="containerHome pt-36 pb-10">
                <p
                  style={playfairFontRegular}
                  className="menu sombra-menu tracking-wider "
                  onClick={opcion1}
                >
                  History
                </p>
                <animated.div style={dropdownAnimation1}>
                  <ul className="text-center -mt-2 space-y-1">
                    <li>
                      {" "}
                      <Link
                        to="/family"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        FAMILY
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link
                        to="/valleazul"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        VALLE AZUL, PATAGONIA
                      </Link>
                    </li>
                  </ul>
                </animated.div>

                <p
                  style={playfairFontRegular}
                  className="menu sombra-menu px-2 tracking-wider"
                  onClick={opcion2}
                >
                  Patagonian Spirit
                </p>
                <animated.div style={dropdownAnimation2}>
                  <ul className="text-center -mt-2 space-y-1">
                    <li>
                      {" "}
                      <Link
                        to="/araucanavineyard"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        ARAUCANA VINEYARD
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/workvineyard"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        WORK IN THE VINEYARD
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/workwinery"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        WORK IN THE WINERY
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lifeonestate"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        LIFE ON THE ESTATE
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lifewater"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        LIFE WATER
                      </Link>
                    </li>
                  </ul>
                </animated.div>

                <p
                  style={playfairFontRegular}
                  className="menu sombra-menu tracking-wider"
                  onClick={opcion3}
                >
                  Wines
                </p>
                <animated.div style={dropdownAnimation3}>
                  <ul className="text-center  space-y-1">
                    <li>
                      {" "}
                      <p
                        className="!mb-0 subMenu tracking-widest"
                        style={robotoFontRegular}
                        onClick={opcion4}
                      >
                        WINES IN THE WORLD
                      </p>
                    </li>
                    <animated.div style={dropdownAnimation4}>
                      <ul className="text-center  -space-y-2">
                        <li>
                          {" "}
                          <Link to="/winesworld">
                            <p
                              className="subMenu tracking-widest  "
                              style={robotoFontRegular}
                            >
                              View all
                            </p>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/winesworld#posicion1">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              Ribera del Cuarzo Clásico
                            </p>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/winesworld#posicion2">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              Ribera del Cuarzo Especial
                            </p>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/winesworld#posicion3">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              Ribera del Cuarzo Reserva Estibada
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </animated.div>
                    <li>
                      {" "}
                      <p
                        className="!mb-0 subMenu tracking-widest"
                        style={robotoFontRegular}
                        onClick={opcion5}
                      >
                        WINES IN ARGENTINA
                      </p>
                    </li>
                    <animated.div style={dropdownAnimation5}>
                      <ul className="text-center  -space-y-3 ">
                        <li>
                          {" "}
                          <Link to="/winesworld">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              View all
                            </p>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/winesworld#posicion1">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              Araucana Río de los Ciervos
                            </p>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/winesworld#posicion2">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              Araucana Malbec
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesworld#posicion3">
                            <p
                              className="subMenu tracking-widest"
                              style={robotoFontRegular}
                            >
                              Araucana Azul
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </animated.div>
                  </ul>
                </animated.div>
              </div>
            </div>
            <div className=" w-full px-20 text-center flex flex-col gap-y-5 pt-10">
              <div className=" flex justify-between">
                <Link
                  to="/contacto"
                  className="text-xl footerItems tracking-widest hover:underline"
                  style={roboto}
                >
                  Contact
                </Link>
                <p
                  style={roboto}
                  className="text-xl footerItems tracking-widest  hover:underline"
                >
                  News
                </p>
              </div>

              <div className=" flex justify-between">
                <a
                  href=""
                  style={roboto}
                  className="text-base footerItems tracking-widest hover:underline"
                >
                  <strong>english</strong>
                </a>
                <a
                  href=""
                  style={roboto}
                  className=" text-base footerItems tracking-widest hover:underline"
                >
                  spanish
                </a>
              </div>
            </div>

            <div className=" w-full  text-center flex flex-col gap-y-5 pt-10">
              <div
                style={roboto}
                className="text-base footerItems tracking-widest hover:underline"
              >
                <a href="https://casapirque.com.ar" target="_blank">
                  <h1 className="text-center pb-2 text-[#c4b27d]">
                    <i>Our distribution office</i>
                  </h1>
                  <p className="text-center uppercase font-semibold">
                    Casa Pirque
                  </p>
                </a>
              </div>
            </div>

            <div className="py-20">
              <div className="container mx-auto flex justify-center">
                <a
                  href="https://www.instagram.com/riberadelcuarzo/"
                  target="_blank"
                >
                  <img src={iconIg} alt="" className="w-5" />
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
