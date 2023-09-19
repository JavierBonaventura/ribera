import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.svg";
import { useSpring, animated } from "@react-spring/web";
import iconIg from "../images/icon-ig-form.png";
import close from "../images/icon-close.svg";
import x from "../images/x.png";
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
                  History
                </p>
                <animated.div style={dropdownAnimation1}>
                  <ul className="text-center space-y-1.5">
                    <li>
                      <Link to="/family" style={robotoFontRegular}>
                        <span className="subMenu tracking-widest">FAMILY</span>
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link to="/valleazul" style={robotoFontRegular}>
                        {" "}
                        <span className="subMenu tracking-widest">
                          VALLE AZUL, PATAGONIA
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
                  Patagonian Spirit
                </p>
                <animated.div style={dropdownAnimation2}>
                  <ul className="text-center space-y-1.5">
                    <li>
                      <Link to="/araucanavineyard" style={robotoFontRegular}>
                        <span className="subMenu tracking-widest">
                          ARAUCANA VINEYARD
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/workvineyard" style={robotoFontRegular}>
                        <span className="subMenu tracking-widest">
                          WORK IN THE VINEYARD
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/workwinery" style={robotoFontRegular}>
                        <span className="subMenu tracking-widest">
                          WORK IN THE WINERY
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/lifeonestate" style={robotoFontRegular}>
                        <span className="subMenu tracking-widest">
                          LIFE ON THE ESTATE
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/lifewater" style={robotoFontRegular}>
                        <span className="subMenu tracking-widest">
                          WATER OF LIFE
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
                  Wines
                </p>
                <animated.div style={dropdownAnimation3}>
                  <ul className="text-center space-y-1.5">
                    <li>
                      <p style={robotoFontRegular} onClick={opcion4}>
                        <span className="!mb-0 subMenu tracking-widest">
                          WINES IN ARGENTINA
                        </span>
                      </p>
                    </li>
                    <animated.div style={dropdownAnimation4}>
                      <ul className="text-center">
                        <li>
                          <Link to="/winesargentina">
                            <p style={robotoFontRegular}>
                              <span className="subMenu tracking-widest">
                                View all
                              </span>
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesargentina#posicion1">
                            <p style={robotoFontRegular}>
                              <span className="subMenu tracking-widest">
                                Araucana Río de los Ciervos Malbec
                              </span>
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesargentina#posicion2">
                            <p style={robotoFontRegular}>
                              <span className="subMenu tracking-widest">
                                Araucana Río de los Ciervos Pinot Noir
                              </span>
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesargentina#posicion3">
                            <p style={robotoFontRegular}>
                              <span className="subMenu tracking-widest">
                                Araucana Malbec
                              </span>
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesargentina#posicion4">
                            <p style={robotoFontRegular}>
                              <span className="subMenu tracking-widest">
                                Araucana Azul
                              </span>
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </animated.div>
                    <li>
                      <p style={robotoFontRegular} onClick={opcion5}>
                        <span className="!mb-0 subMenu tracking-widest">
                          WINES IN THE WORLD
                        </span>
                      </p>
                    </li>
                    <animated.div style={dropdownAnimation5}>
                      <ul className="text-center">
                        <li>
                          <Link to="/winesworld">
                            <p style={robotoFontRegular}>
                              <span className="subMenu tracking-widest">
                                View all
                              </span>
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesworld#posicion1">
                            <p style={robotoFontRegular}>
                              <span className="subMenu tracking-widest">
                                Ribera del Cuarzo Clásico
                              </span>
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesworld#posicion2">
                            <p style={robotoFontRegular}>
                              <span className="subMenu tracking-widest">
                                Ribera del Cuarzo Especial
                              </span>
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/winesworld#posicion3">
                            <p style={robotoFontRegular}>
                              <span className="subMenu tracking-widest">
                                Ribera del Cuarzo Reserva Estibada
                              </span>
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </animated.div>
                  </ul>
                </animated.div>
              </div>
            </div>
            <div className=" w-full px-20 text-center flex flex-col gap-y-5 pt-14 ">
              <div className=" flex justify-center gap-x-10 text-base">
                <Link
                  to="/contacto"
                  className="uppercase footerItems tracking-widest hover:underline"
                  style={roboto}
                >
                  Contact
                </Link>
                <p
                  style={roboto}
                  className="uppercase footerItems tracking-widest  hover:underline"
                >
                  Press
                </p>
              </div>
              <div className=" w-full  text-center flex flex-col gap-y-5 text-sm ">
                <div
                  style={roboto}
                  className="footerItems tracking-widest hover:underline"
                >
                  <a href="https://casapirque.com.ar" target="_blank">
                    <h1 className="text-center pb-2 text-[#8B8A8B]">
                      <i>Our distribution office</i>
                    </h1>
                    <p className="text-center uppercase">Casa Pirque</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-[#f3eee3] text-sm flex gap-x-5 pt-10">
              <span className="font-bold text-[#c4b27d] cursor-pointer tracking-widest">
                english
              </span>
              <span className="text-[#f3eee3] hover:text-[#c4b27d] cursor-pointer transition ease-in-out duration-300 tracking-widest">
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
