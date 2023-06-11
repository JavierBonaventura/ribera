import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import Family from './components/family';
import Patagonian from './components/patagonian';
import Wines from './components/wines';


import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/family">family</Link>
            </li>
            <li>
              <Link to="/patagonian">patagonian</Link>
            </li>
            <li>
              <Link to="/wines">wines</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/family" element={<Family />} />
          <Route path="/patagonian" element={<Patagonian />} />
          <Route path="/wines" element={<Wines />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
