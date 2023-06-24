import React from 'react';
import imagen2 from '../images/familia.png';
import '../App.css';
import logo from '../images/logo_negro.png';
import terroirImg from '../images/patagonian.png'

function terroir() {
    
  return (
    <div className="container backgroundTerroir">
   <img src={logo} alt="Imagen 1" className="logoTerroir" />;
    <p className='textoTerrir'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ad praesentium omnis? Doloribus molestias id repudiandae rem, numquam hic eos! Dolor quos fuga tempore iusto expedita ullam aut dignissimos velit.</p>
    <img src={terroirImg} alt="Imagen 1" className="logoTerroir" />;
    <p className='textoTerrir'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ad praesentium omnis? Doloribus molestias id repudiandae rem, numquam hic eos! Dolor quos fuga tempore iusto expedita ullam aut dignissimos velit.</p>
    <img src={terroirImg} alt="Imagen 1" className="logoTerroir" />;

   </div>
   
  )
}

export default terroir;
