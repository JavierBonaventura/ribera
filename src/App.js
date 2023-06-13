import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Home from './components/home';
import Terroir from './components/terroir';
import Historie from './components/Historie'
import Equipes from './components/Equipes'

import './App.css';

function App() {
  return (
    <Router>
   <div>   
    <Routes>
          <Route path="/" element={<Home />} />   
          <Route path="/terroir" element={<Terroir />} />         
          <Route path="/historie" element={<Historie />} />         ç
          <Route path="/equipes" element={<Equipes />} />         


        </Routes>
   </div>
   </Router>
  );
}

export default App;
