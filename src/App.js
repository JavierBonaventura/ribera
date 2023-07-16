import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Transition, animated, config } from '@react-spring/web';

import Menu from "./components/Menu";
import MenuDesktop from "./components/MenuDesktop";
import Family from "./components/Family";
import AraucanaVineyard from "./components/AraucanaVineyard";
import WorkVineyard from "./components/WorkVineyard";
import WinesPreservation from "./components/WinesPreservation";
import LifeOnEstate from "./components/LifeOnEstate";
import LifeWater from "./components/LifeWater";
import RioCiervos from "./components/RioCiervos";
import Araucana from "./components/Araucana";
import AraucanaAzul from "./components/AraucanaAzul";
import Clasico from "./components/Clasico";
import Especial from "./components/Especial";
import ReservaEstibada from "./components/ReservaEstibada";
import MenuHamburguesa from "./components/MenuHamburguesa";
import MenuHamburguesaDesktop from './components/MenuHamburguesaDesktop';
import "./App.css";

import BlueValley from "./components/BlueValley";
import FormularioContacto from "./components/FormularioContacto";

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

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
    <div style={{ position: 'relative', height: '100%' }}>
      <Transition
        items={location}
        keys={(location) => location.pathname}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
        config={{ duration: 100 }}
      >
        {(style, item) => (
          <animated.div style={{ ...style, position: 'absolute', width: '100%' }}>
            {showBlackScreen && (
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'black',
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
          <Route path="/bluevalley" element={<BlueValley />} />
          <Route path="/araucanavineyard" element={<AraucanaVineyard />} />
          <Route path="/workvineyard" element={<WorkVineyard />} />
          <Route path="/winespreservation" element={<WinesPreservation />} />
          <Route path="/lifeonestate" element={<LifeOnEstate />} />
          <Route path="/lifewater" element={<LifeWater />} />
          <Route path="/riociervos" element={<RioCiervos />} />
          <Route path="/araucana" element={<Araucana />} />
          <Route path="/araucanaazul" element={<AraucanaAzul />} />
          <Route path="/clasico" element={<Clasico />} />
          <Route path="/especial" element={<Especial />} />
          <Route path="/reservaestibada" element={<ReservaEstibada />} />
          {windowWidth < 768 ? (
                <Route path="/menuhamburguesa" element={<MenuHamburguesa />} />
              ) : (
                <Route path="/menuhamburguesa" element={<MenuHamburguesaDesktop />} />
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
