import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TuComponente = () => {
  const { t, i18n } = useTranslation();
  const idiomaSeleccionado = i18n.language;
  console.log(idiomaSeleccionado);

  const { slug } = useParams();
  console.log(slug);

  const [wineData, setWineData] = useState(null);
  const [allRelatedImages, setAllRelatedImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://back-ribera-gl7lw5cfra-uc.a.run.app/api/wines?populate=wines_categories%2CrelatedImage&filters%5Bslug%5D=${slug}&locale=${idiomaSeleccionado}`
        );

        const fetchedWineData = response.data.data[0];
        setWineData(fetchedWineData);
      } catch (error) {
        console.error("Error al llamar a la API", error);
      }
    };

    const fetchAllRelatedImages = async () => {
      try {
        const response = await axios.get(
          `https://back-ribera-gl7lw5cfra-uc.a.run.app/api/wines?populate=wines_categories%2CrelatedImage&locale=${idiomaSeleccionado}`
        );

        const currentWineCategory =
          wineData?.attributes?.wines_categories?.data[0]?.attributes?.name;

        const fetchedImages = response.data.data
          .filter(
            (wine) =>
              wine.attributes.slug !== slug &&
              wine.attributes.wines_categories.data.some(
                (category) => category.attributes.name === currentWineCategory
              )
          )
          .map((wine) => ({
            id: wine.id,
            imageUrl:
              wine.attributes.relatedImage.data.attributes.formats.thumbnail
                .url,
            imageName: wine.attributes.relatedImage.data.attributes.name,
            imageFamilyName: wine.attributes.familyName,
            imageName: wine.attributes.name,
          }));

        setAllRelatedImages(fetchedImages);
      } catch (error) {
        console.error(
          "Error al llamar a la API para imágenes relacionadas",
          error
        );
      }
    };

    fetchData();
    fetchAllRelatedImages();
  }, [slug, wineData, idiomaSeleccionado]);

  return (
    <div>
      {wineData && (
        <div>
          <h1>Name: {wineData.attributes.name}</h1>
          <img
            src={
              wineData.attributes.relatedImage.data.attributes.formats.thumbnail
                .url
            }
            alt={wineData.attributes.relatedImage.data.attributes.name}
          />
        </div>
      )}

      <div>
        <h2>Related Images of the Same Category (Except Current Wine)</h2>
        {allRelatedImages.map((image) => (
          <div key={image.id}>
            <img src={image.imageUrl} alt={image.imageName} />
            <p>Name: {image.imageName}</p>
            <p>Family Name: {image.imageFamilyName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TuComponente;
