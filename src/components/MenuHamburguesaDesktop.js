import React, { useState } from "react";
import fondoHamburguesaDesktop from "../images/fondoHamburguesaDesktop.png";
import logoDesktop from "../images/logo-home-mob.png";
import logo from "../images/logo.svg";
import x from "../images/x.png";
import iconIg from "../images/icon-ig-form.svg";
import { Link } from "react-router-dom";
import { Transition } from "@react-spring/web";
import { useSpring, animated } from "@react-spring/web";
import { useLocation } from "react-router-dom";

const MenuHamburguesaDesktop = () => {
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
            <div className="w-full h-full">
              <div className="border border-[#F3EEE3] w-full h-full p-2 relative flex flex-col justify-center items-center">
                <div className="w-full h-full border border-[#F3EEE3] flex flex-col justify-start relative gap-y-8 2xl:gap-y-24 pt-24 2xl:pt-36">
                  <div className="flex justify-end items-center absolute top-3 right-3">
                    <Link to="/">
                      <div className=" bg-transparent border border-[#c4b27d] rounded-full p-3 transition ease-in-out duration-500 hover:scale-90">
                        <img src={x} alt="" className="w-2" />
                      </div>
                    </Link>
                  </div>
                  <div className="flex justify-center">
                    <Link to="/">
                      <img
                        src={logoDesktop}
                        alt="Logo"
                        className="w-32 lg:w-44"
                      />
                    </Link>
                  </div>

                  <div className="flex justify-center w-full xl:w-3/4 2xl:px-28 mx-auto">
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
                          isMenu1Hovered ? "text-[#f3eee3]" : "text-[#c4b27d]"
                        }`}
                      >
                        History
                      </p>
                      <ul className="text-center space-y-0 lg:space-y-1.5">
                        <li>
                          <Link to="/family" style={robotoFontRegular}>
                            <span className="subMenu tracking-widest">
                              FAMILY
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/valleazul" style={robotoFontRegular}>
                            <span className="subMenu tracking-widest">
                              VALLE AZUL, PATAGONIA
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
                        }`}
                      >
                        Patagonian Spirit
                      </p>
                      <ul className="text-center space-y-0 lg:space-y-1.5">
                        <li>
                          <Link
                            to="/araucanavineyard"
                            style={robotoFontRegular}
                          >
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
                        }`}
                      >
                        Wines
                      </p>
                      <animated.div style={dropdownAnimation3}>
                        <ul className="text-center space-y-0 lg:space-y-1">
                          <li>
                            <p style={robotoFontRegular} onClick={opcion4}>
                              <span className="!mb-0 subMenu tracking-widest">
                                IN ARGENTINA
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
                                IN THE WORLD
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

                  <div
                    className="hidden flex flex-col gap-y-4 justify-center w-2/3 2xl:w-1/3 mx-auto pt-5 2xl:pt-10"
                    style={robotoFontRegular}
                  >
                    <div className="w-full flex justify-center items-center gap-x-16 text-sm lg:text-xl tracking-widest">
                      <div>
                        <Link to="/contacto" style={robotoFontRegular}>
                          <span className="text-[#F3EEE3] hover:text-[#c4b27d] transition ease-in-out duration-300">
                            Contact
                          </span>
                        </Link>
                      </div>
                      <div>
                        <span className="text-[#F3EEE3] hover:text-[#c4b27d] transition ease-in-out duration-300">
                          <a href="">News</a>
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-center text-base">
                      <a href="https://casapirque.com.ar" target="_blank">
                        <h1 className="text-center  text-[#c4b27d] ">
                          <i>Our distribution office</i>
                        </h1>
                        <p className="text-center uppercase font-semibold text-[#F3EEE3] hover:text-[#c4b27d]  tracking-widest transition ease-in-out duration-300">
                          Casa Pirque
                        </p>
                      </a>
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
                            to="/contacto"
                            className="hover:text-[#c4b27d]  duration-300 transition ease-in-out uppercase tracking-widest"
                            style={robotoFontRegular}
                          >
                            Contact
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
                                <i>Our distribution office</i>
                              </span>
                              <span className="uppercase tracking-widest text-center">
                                Casa Pirque
                              </span>
                            </a>
                          </a>
                        </div>

                        <div className="uppercase">
                          <a
                            href=""
                            className="hover:text-[#c4b27d]  duration-300 transition ease-in-out tracking-widest"
                          >
                            News
                          </a>
                        </div>
                      </div>
                      <div
                        className="flex justify-start items-center w-1/3 cursor-default gap-x-5 text-sm lg:text-base"
                        style={robotoFontRegular}
                      >
                        <span className="font-bold text-[#c4b27d] cursor-pointer tracking-widest">
                          english
                        </span>
                        <span className="text-[#F3EEE3] hover:text-[#c4b27d] cursor-pointer transition ease-in-out duration-300 tracking-widest">
                          spanish
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
