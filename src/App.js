import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Menu from "./components/Menu";
import History from "./components/History";
import AraucanaVineyard from "./components/AraucanaVineyard";
import WorkVineyard from "./components/WorkVineyard";
import WinesPreservation from "./components/WinesPreservation";
import WineYard from "./components/WineYard";
import RioCiervos from "./components/RioCiervos";
import Araucana from "./components/Araucana";
import AraucanaAzul from "./components/AraucanaAzul";
import Clasico from "./components/Clasico";
import Especial from "./components/Especial";
import ReservaEstibada from "./components/ReservaEstibada";
import MenuHamburguesa from "./components/MenuHamburguesa";
import "./App.css";
import Tst from './components/tst'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/history" element={<History />} />
          <Route path="/araucanavineyard" element={<AraucanaVineyard />} />
          <Route path="/workvineyard" element={<WorkVineyard />} />
          <Route path="/winespreservation" element={<WinesPreservation />} />
          <Route path="/wineyard" element={<WineYard />} />
          <Route path="/riociervos" element={<RioCiervos />} />
          <Route path="/araucana" element={<Araucana />} />
          <Route path="/araucanaazul" element={<AraucanaAzul />} />
          <Route path="/clasico" element={<Clasico />} />
          <Route path="/especial" element={<Especial />} />
          <Route path="/reservaestibada" element={<ReservaEstibada />} />
          <Route path="/menuhamburguesa" element={<MenuHamburguesa />} />
          <Route path="/tst" element={<Tst />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
