import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const TuComponente = () => {
  const { slug } = useParams();
  console.log(slug);
  const [wineData, setWineData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://back-ribera-gl7lw5cfra-uc.a.run.app/api/wines?populate=mainBottleImage%2C%20technicalSheet%2C%20secondaryImage%2C%20relatedImage%20&filters%5Bslug%5D=${slug}`
        );

        // Incorpora la información de la API aquí
        const fetchedWineData = response.data.data[0]; // Selecciona el primer elemento del array data
        setWineData(fetchedWineData);
      } catch (error) {
        console.error("Error al llamar a la API", error);
      }
    };

    fetchData();
  }, []);

  // Retorna elementos h1 y una etiqueta img para mainBottleImage
  return (
    <div>
      {wineData && (
        <div>
          <h1>Name: {wineData.attributes.name}</h1>
          <h1>Family Name: {wineData.attributes.familyName}</h1>
          <h1>
            Description: {wineData.attributes.description[0].children[0].text}
          </h1>

          {/* Agrega una etiqueta img para visualizar la mainBottleImage */}
          <img
            src={
              wineData.attributes.mainBottleImage.data.attributes.formats.small
                .url
            }
            alt={wineData.attributes.mainBottleImage.data.attributes.name}
          />
          {wineData.attributes.technicalSheet &&
            wineData.attributes.technicalSheet.map((sheet, index) => (
              <div className="flex flex-col">
                <a key={index} href={sheet.href} target={sheet.target}>
                  Technical Sheet {index + 1}
                </a>
              </div>
            ))}
          <img
            src={
              wineData.attributes.secondaryImage.data.attributes.formats.large
                .url
            }
            alt={wineData.attributes.secondaryImage.data.attributes.name}
          />
          <img
            src={
              wineData.attributes.relatedImage.data.attributes.formats.thumbnail
                .url
            }
            alt={wineData.attributes.relatedImage.data.attributes.name}
          />
        </div>
      )}
    </div>
  );
};

export default TuComponente;
