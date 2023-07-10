import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/Escudo Bodega Ribera del Cuarzo-FINALcurvas-02.png";
import { useSpring, animated } from "@react-spring/web";
import hambur from "../images/menu-hambur.png";
import { useLocation } from "react-router-dom";
import { Transition } from "@react-spring/web";

const Home = () => {
  const location = useLocation();

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
  const playfairFontItalic = {
    fontFamily: "Playfair Italic , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const playfairFontBold = {
    fontFamily: "Playfair Bold , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const playfairFontExtraBold = {
    fontFamily: "Playfair ExtraBold , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const robotoFontThin = {
    fontFamily: "Roboto Thin , sans-serif",
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

  const dropdownAnimation1 = useSpring({
    height: mostrarMenu1 ? "50px" : "0px",
    opacity: mostrarMenu1 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const dropdownAnimation2 = useSpring({
    height: mostrarMenu2 ? "140px" : "0px",
    opacity: mostrarMenu2 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const dropdownAnimation3 = useSpring({
    height: mostrarMenu3 ? "160px" : "0px",

    opacity: mostrarMenu3 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 300 },
  });

  const opcion1 = () => {
    setMostrarMenu1(true);
    setMostrarMenu2(false);
    setMostrarMenu3(false);
    if (mostrarMenu1 === true) {
      setMostrarMenu1(false);
    }
  };

  const opcion2 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(true);
    setMostrarMenu3(false);
    if (mostrarMenu2 === true) {
      setMostrarMenu2(false);
    }
  };

  const opcion3 = () => {
    setMostrarMenu1(false);
    setMostrarMenu2(false);
    setMostrarMenu3(true);
    if (mostrarMenu3 === true) {
      setMostrarMenu3(false);
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
          <div className="containerHome pt-8 background">
            <div className="w-full grid justify-items-end pr-6">
              <div className="w-8 ">
                <Link to="/MenuHamburguesa">
                  <img src={hambur} alt="" className="w-full" />
                </Link>
              </div>
            </div>
            <Link to="/">
              <img src={logo} alt="" className="logo" />
            </Link>{" "}
            <div className="body">
              <div className="containerHome pt-12 ">
                <p
                  style={playfairFontRegular}
                  className="menu sombra-menu tracking-wider"
                  onClick={opcion1}
                >
                  Our History
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
                        Family
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link
                        to="/bluevalley"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        Valle Azul, Patagonia
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
                        to="/winespreservation"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        WORK IN THE WINERY
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/wineyard"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        LIFE ON THE ESTATE
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/wineyard"
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
                  Our Wines
                </p>
                <animated.div style={dropdownAnimation3}>
                  <ul className="text-center -mt-2 space-y-1">
                    <li>
                      {" "}
                      <Link
                        to="/riociervos?scroll=0"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        RÍO DE LOS CIERVOS
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        to="/riociervos?scroll=980"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        ARAUCANA
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        to="/riociervos?scroll=1520"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        ARAUCANA AZUL
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        to="/araucana?scroll=0"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        CLÁSICO
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/araucana?scroll=980"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        ESPECIAL
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        to="/araucana?scroll=1450"
                        className="subMenu tracking-widest"
                        style={robotoFontRegular}
                      >
                        RESERVA ESTIBADA
                      </Link>
                    </li>
                  </ul>
                </animated.div>
                <div className="flex flex-col text-center pt-10">
                  <Link
                    to="/contacto"
                    className="footerItems tracking-widest"
                    style={robotoFontRegular}
                  >
                    Contact
                  </Link>
                  <br></br>
                  <p
                    style={robotoFontRegular}
                    className="footerItems tracking-widest"
                  >
                    News
                  </p>
                  <br></br>
                  <p
                    style={robotoFontRegular}
                    className="footerItems tracking-widest"
                  >
                    Casa Pirque
                  </p>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default Home;
