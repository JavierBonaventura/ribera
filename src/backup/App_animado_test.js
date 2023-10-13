import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useTransition, animated, config } from "@react-spring/web";

import "./App.css";
import Prueba1 from "./components/Prueba1"
import Prueba2 from "./components/Prueba2"


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
  const [showBlackScreen, setShowBlackScreen] = useState([]);

  useEffect(() => {
    // Mostrar la pantalla negra durante 500ms al cambiar de página
    setShowBlackScreen([true]);
    const timeout = setTimeout(() => {
      setShowBlackScreen([]);
    }, 800);

    // Limpia el timeout al desmontar el componente
    return () => clearTimeout(timeout);
  }, [location]);

  const transitions = useTransition(showBlackScreen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses, // Configura la suavidad de la animación aquí
  });

  return (
    <div style={{ position: "relative", height: "100%" }}>
      {transitions((style, item) =>
        item && (
          <animated.div
            style={{
              ...style,
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              zIndex: 9999,
            }}
          />
        )
      )}
      <Routes>
        <Route path="/prueba1" element={<Prueba1 />} />
        <Route path="/prueba2" element={<Prueba2 />} />
      </Routes>
    </div>
  );
};




export default App;
