import React, { useState, useEffect } from "react";
import workVineyardSlide0 from "../images/generica-vineyard.png";
import workVineyardSlide1 from "../images/pruning.jpg";
import workVineyardSlide2 from "../images/trellising.jpg";
import workVineyardSlide3 from "../images/topping.png";
import workVineyardSlide4 from "../images/harvest.jpg";
import workVineyardSlide5 from "../images/weeds.png";
import workVineyardSlide6 from "../images/ancient.jpg";

const CarouselSlider = () => {
  const images = [
    workVineyardSlide0,
    workVineyardSlide1,
    workVineyardSlide2,
    workVineyardSlide3,
    workVineyardSlide4,
    workVineyardSlide5,
    workVineyardSlide6,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [condition1Next, setcondition1Next] = useState(false);
  const [condition2Next, setcondition2Next] = useState(false);
  const [condition3Next, setcondition3Next] = useState(false);
  const [condition4Next, setcondition4Next] = useState(false);

  const [condition1Prev, setcondition1Prev] = useState(false);
  const [condition2Prev, setcondition2Prev] = useState(false);
  const [condition3Prev, setcondition3Prev] = useState(false);
  const [condition4Prev, setcondition4Prev] = useState(false);


  const nextSlide = () => {
    setcondition1Next(true);
    setTimeout(() => {
      setcondition1Next(false);
      setcondition2Next(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
        setcondition2Next(false);
        setcondition3Next(true); // Activar condition3Next en la nueva imagen
        setTimeout(() => {
          setcondition3Next(false);
          setcondition4Next(true); // Activar condition4Next en la nueva imagen
          setTimeout(() => {
            setcondition4Next(false);
      
          }, 500);
        }, 100);
      }, 500);
    }, 500);
  };

  const prevSlide = () => {
    setcondition1Prev(true);
    setTimeout(() => {
      setcondition1Prev(false);
      setcondition2Prev(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? images.length - 1 : prevSlide - 1
      );
        setcondition2Prev(false);
        setcondition3Prev(true); // Activar condition3Prev en la nueva imagen
        setTimeout(() => {
          setcondition3Prev(false);
          setcondition4Prev(true); // Activar condition4Prev en la nueva imagen
          setTimeout(() => {
            setcondition4Prev(false);
      
          }, 500);
        }, 100);
      }, 500);
    }, 500);
  };

  return (
    <div className="carousel-slider">
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>

      
      <img
        src={images[currentSlide]}       
        className={`w-full ${
          condition1Next
            ? "class-when-condition-1-next-is-true"
            : condition2Next
            ? "class-when-condition-2-next-is-true"
            : condition3Next
            ? "class-when-condition-3-next-is-true"
            : condition4Next
            ? "class-when-condition-4-next-is-true"
            : condition1Prev
            ? "class-when-condition-1-prev-is-true"
            : condition2Prev
            ? "class-when-condition-2-prev-is-true"
            : condition3Prev
            ? "class-when-condition-3-prev-is-true"
            : condition4Prev
            ? "class-when-condition-4-prev-is-true"
            : "class-when-neither-condition-is-true"
        } slide-transition`}
      />
  
    </div>
  );
};

export default CarouselSlider;