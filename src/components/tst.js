import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import Acerca from './Acerca'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";



function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLinkClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const transitions = useTransition(isTransitioning, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/acerca" onClick={handleLinkClick}>
              Acerca
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={handleLinkClick}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      {transitions((style, item) => (
        <animated.div style={style}>
          <Route path="/acerca" element={<Acerca />} />

        </animated.div>
      ))}
    </div>
  );
}

export default App;
