import React, { useState, useEffect } from 'react';
import SubPressList from '../pages/Press/SubPressList'; // Ajusta la ruta según tu estructura de archivos

const PressList = () => {
  const [presses, setPresses] = useState([]);
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://back-ribera-gl7lw5cfra-uc.a.run.app/api/presses');
        const data = await response.json();
        setPresses(data.data);

        const highestYear = Math.max(
          ...data.data.map((press) => new Date(press.attributes.date).getFullYear())
        );
        setCurrentYear(highestYear);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const navigateYear = (step) => {
    const years = Array.from(new Set(presses.map((press) => new Date(press.attributes.date).getFullYear())));
    const currentIndex = years.indexOf(currentYear);
    const newIndex = (currentIndex + step + years.length) % years.length;

    setCurrentYear(years[newIndex]);
  };

  return (
    <div>
      <button onClick={() => navigateYear(-1)}>Prev</button>
      <button onClick={() => navigateYear(1)}>Next</button>
      {currentYear && (
        <SubPressList year={currentYear} presses={presses.filter((press) => new Date(press.attributes.date).getFullYear() === currentYear)} />
      )}
    </div>
  );
};

export default PressList;
