import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Transition, animated, config } from "@react-spring/web";
import logoDesktop from "../src/images/logo-home-mob.png";

//COMPONENTS//
import Menu from "./components/Menu";
import MenuDesktop from "./components/MenuDesktop";
import MenuHamburguesa from "./components/MenuHamburguesa";
import MenuHamburguesaDesktop from "./components/MenuHamburguesaDesktop";
import AgeConfirmationPopup from "./components/AgeConfirmationPopup";
import "./App.css";

//PAGES//
import Family from "./pages/History/Family";
import ValleAzul from "./pages/History/ValleAzul";
import AraucanaVineyard from "./pages/PatagonianSpirit/AraucanaVineyard";
import WorkVineyardDesktop from "./pages/PatagonianSpirit/WorkVineyardDesktop";
import WorkVineyard from "./pages/PatagonianSpirit/WorkVineyard";
import WorkWineryDesktop from "./pages/PatagonianSpirit/WorkWineryDesktop";
import WorkWinery from "./pages/PatagonianSpirit/WorkWinery";
import LifeOnEstateDesktop from "./pages/PatagonianSpirit/LifeOnEstateDesktop";
import LifeOnEstate from "./pages/PatagonianSpirit/LifeOnEstate";
import LifeWater from "./pages/PatagonianSpirit/LifeWater";
import LifeWaterRead from "./pages/PatagonianSpirit/LifeWater-read";
import AraucanaRioCiervos from "./pages/WinesArgentina/AraucanaRioCiervos";
import AraucanaPinotNoir from "./pages/WinesArgentina/AraucanaPinotNoir";
import AraucanaMalbec from "./pages/WinesArgentina/AraucanaMalbec";
import AraucanaAzul from "./pages/WinesArgentina/AraucanaAzul";
import RiberaParcelaUnicaWorld from "./pages/WinesWorld/RiberaParcelaUnica";
import RiberaParcelaUnicaArg from "./pages/WinesArgentina/RiberaParcelaUnica";
import RiberaClasico from "./pages/WinesWorld/RiberaClasico";
import RiberaEspecial from "./pages/WinesWorld/RiberaEspecial";
import Press from "./pages/Press/Press";
import FormularioContacto from "./pages/Contact/FormularioContacto";
import TestWine from "./pages/WinesArgentina/testWine";
import VinoTest from "./testing/vinoTest";
import MenuTest from "./testing/menuTest";
import WinesInArgentina from "./pages/WinesArgentina/wines-in-argentina";
import WinesInWorld from "./pages/WinesWorld/wines-in-world";

function App() {
  const [showAgeConfirmation, setShowAgeConfirmation] = useState(true);
  const [isAdult, setIsAdult] = useState(false);
  const [showAccessDeniedMessage, setShowAccessDeniedMessage] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [
    showAgeConfirmationAfterCountdown,
    setShowAgeConfirmationAfterCountdown,
  ] = useState(false);

  const handleAgeConfirmed = (isAdult) => {
    setIsAdult(isAdult);
    setShowAgeConfirmation(false);
    setShowAgeConfirmationAfterCountdown(false);
    if (!isAdult) {
      setShowAccessDeniedMessage(true);
      setCountdown(10);
    }
  };

  useEffect(() => {
    let timer;
    if (showAccessDeniedMessage) {
      // Iniciar el contador solo si showAccessDeniedMessage es true
      timer = setInterval(() => {
        if (countdown > 0) {
          setCountdown(countdown - 1);
        }
      }, 1000);
      if (countdown === 0) {
        setShowAgeConfirmationAfterCountdown(true);
        setShowAccessDeniedMessage(false);
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [showAccessDeniedMessage, countdown]);

  const playfairFontExtraBold = {
    fontFamily: "Playfair ExtraBold, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  return (
    <Router>
      <div>
        {showAgeConfirmation && (
          <AgeConfirmationPopup onAgeConfirmed={handleAgeConfirmed} />
        )}
        {showAgeConfirmationAfterCountdown && (
          <AgeConfirmationPopup onAgeConfirmed={handleAgeConfirmed} />
        )}
        {isAdult &&
          !showAccessDeniedMessage &&
          !showAgeConfirmationAfterCountdown && <AppContent />}
        {showAccessDeniedMessage && !showAgeConfirmationAfterCountdown && (
          <div className="bg-gray-950 w-full h-full fixed flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-y-5">
              <div>
                <img src={logoDesktop} alt="" className="w-32 md:w-44" />
              </div>
              <div className="flex flex-col gap-y-7">
                <p
                  className="text-[#F3EEE3] text-center text-lg md:text-2xl tracking-widest leading-7"
                  style={playfairFontExtraBold}
                >
                  You cannot visit the site because <br /> you are under 18
                  years of age.
                </p>
                <p
                  className="text-[#F3EEE3] text-center text-lg md:text-2xl tracking-widest leading-7"
                  style={playfairFontExtraBold}
                >
                  Redirecting in {countdown} seconds...
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

const AppContent = () => {
  const location = useLocation();
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Mostrar la pantalla negra durante 500ms al cambiar de página
    setShowBlackScreen(true);
    const timeout = setTimeout(() => {
      setShowBlackScreen(false);
    }, 500);

    // Limpia el timeout al desmontar el componente
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <Transition
        items={location}
        keys={(location) => location.pathname}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
        config={{ duration: 300 }}
      >
        {(style, item) => (
          <animated.div
            style={{ ...style, position: "absolute", width: "100%" }}
          >
            {showBlackScreen && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "black",
                  zIndex: 9999,
                }}
              />
            )}
            <Routes location={item}>
              {windowWidth < 768 ? (
                <Route path="/" element={<Menu />} />
              ) : (
                <Route path="/" element={<MenuDesktop />} />
              )}
              <Route path="/family" element={<Family />} />
              <Route path="/valleazul" element={<ValleAzul />} />

              <Route path="/araucanavineyard" element={<AraucanaVineyard />} />

              {windowWidth < 768 ? (
                <Route path="/workvineyard" element={<WorkVineyard />} />
              ) : (
                <Route path="/workvineyard" element={<WorkVineyardDesktop />} />
              )}

              {windowWidth < 768 ? (
                <Route path="/workwinery" element={<WorkWinery />} />
              ) : (
                <Route path="/workwinery" element={<WorkWineryDesktop />} />
              )}

              {windowWidth < 768 ? (
                <Route path="/lifeonestate" element={<LifeOnEstate />} />
              ) : (
                <Route path="/lifeonestate" element={<LifeOnEstateDesktop />} />
              )}

              <Route path="/lifewater" element={<LifeWater />} />
              <Route path="/press" element={<Press />} />
              <Route path="/lifewaterread" element={<LifeWaterRead />} />

              <Route
                path="/AraucanaRioCiervos"
                element={<AraucanaRioCiervos />}
              />
              <Route
                path="/AraucanaPinotNoir"
                element={<AraucanaPinotNoir />}
              />
              <Route path="/AraucanaMalbec" element={<AraucanaMalbec />} />
              <Route path="/vinos/:slug" element={<TestWine />} />
              <Route path="/AraucanaAzul" element={<AraucanaAzul />} />
              <Route
                path="/RiberaParcelaUnicaWorld"
                element={<RiberaParcelaUnicaWorld />}
              />
              <Route
                path="/RiberaParcelaUnicaArg"
                element={<RiberaParcelaUnicaArg />}
              />
              <Route path="/RiberaClasico" element={<RiberaClasico />} />
              <Route path="/RiberaEspecial" element={<RiberaEspecial />} />
              {windowWidth < 768 ? (
                <Route path="/menuhamburguesa" element={<MenuHamburguesa />} />
              ) : (
                <Route
                  path="/menuhamburguesa"
                  element={<MenuHamburguesaDesktop />}
                />
              )}
              <Route path="/contacto" element={<FormularioContacto />} />

              <Route path="/vinotest/:slug" element={<VinoTest />} />
              <Route path="/menutest" element={<MenuTest />} />
              <Route
                path="/wines-in-argentina/:slug"
                element={<WinesInArgentina />}
              />
              <Route path="/wines-in-world/:slug" element={<WinesInWorld />} />
            </Routes>
          </animated.div>
        )}
      </Transition>
    </div>
  );
};

export default App;
