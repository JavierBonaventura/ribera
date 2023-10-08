import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Transition, animated, config } from "@react-spring/web";

import Menu from "../components/Menu";
import MenuDesktop from "../components/MenuDesktop";
import Family from "../components/Family";
import AraucanaVineyard from "../components/AraucanaVineyard";
import WorkVineyard from "../components/WorkVineyard";
import WorkVineyardDesktop from "../components/WorkVineyardDesktop";
import WorkWinery from "../components/WorkWinery";
import WorkWineryDesktop from "../components/WorkWineryDesktop";
import LifeOnEstate from "../components/LifeOnEstate";
import LifeOnEstateDesktop from "../components/LifeOnEstateDesktop";
import LifeWater from "../components/LifeWater";
import LifeWaterRead from "../components/LifeWater-read";
import WinesWorld from "../components/WinesWorld";
import WinesArgentina from "../components/WinesArgentina";
import MenuHamburguesa from "../components/MenuHamburguesa";
import MenuHamburguesaDesktop from "../components/MenuHamburguesaDesktop";
import ValleAzul from "../components/ValleAzul";
import FormularioContacto from "../components/FormularioContacto";
import Press from "../components/Press";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <AppContent />
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
              <Route path="/winesworld" element={<WinesWorld />} />
              <Route path="/winesargentina" element={<WinesArgentina />} />
              {windowWidth < 768 ? (
                <Route path="/menuhamburguesa" element={<MenuHamburguesa />} />
              ) : (
                <Route
                  path="/menuhamburguesa"
                  element={<MenuHamburguesaDesktop />}
                />
              )}
              <Route path="/contacto" element={<FormularioContacto />} />
            </Routes>
          </animated.div>
        )}
      </Transition>
    </div>
  );
};

export default App;