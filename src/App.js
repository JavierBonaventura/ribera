import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Transition, animated, config } from "@react-spring/web";

//COMPONENTS//
import Menu from "./components/Menu";
import MenuDesktop from "./components/MenuDesktop";
import MenuHamburguesa from "./components/MenuHamburguesa";
import MenuHamburguesaDesktop from "./components/MenuHamburguesaDesktop";
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
import RiberaParcelaUnica from "./pages/WinesWorld/RiberaParcelaUnica";
import RiberaClasico from "./pages/WinesWorld/RiberaClasico";
import RiberaEspecial from "./pages/WinesWorld/RiberaEspecial";
import Press from "./pages/Press/Press";
import FormularioContacto from "./pages/Contact/FormularioContacto";
import AgeConfirmationPopup from "./AgeConfirmationPopup";



// function App() {
//   return (
//     <Router>
//       <div>
//         <AppContent />
//       </div>
//     </Router>
//   );
// }

function App() {
  const [showAgeConfirmation, setShowAgeConfirmation] = useState(true);
  const [isAdult, setIsAdult] = useState(false);
  const [showAccessDeniedMessage, setShowAccessDeniedMessage] = useState(false);

  const handleAgeConfirmed = (isAdult) => {
    setIsAdult(isAdult);
    setShowAgeConfirmation(false);
    if (!isAdult) {
      setShowAccessDeniedMessage(true);
    }
  };

  return (
    <Router>
      <div>
        {showAgeConfirmation && <AgeConfirmationPopup onAgeConfirmed={handleAgeConfirmed} />}
        {isAdult && !showAccessDeniedMessage && <AppContent />}
        {showAccessDeniedMessage && (
          <div>
            <p>No puedes visitar el sitio por ser menor de 18 años.</p>
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
              <Route path="/AraucanaAzul" element={<AraucanaAzul />} />
              <Route
                path="/RiberaParcelaUnica"
                element={<RiberaParcelaUnica />}
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
            </Routes>
          </animated.div>
        )}
      </Transition>
    </div>
  );
};

export default App;
