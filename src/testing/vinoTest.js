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

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques%2C%20bloques.image%2C%20bloques.gallery&filters%5Bslug%5D=${slug}&locale=${idiomaSeleccionado}`
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error al cargar los datos</div>;
  }

  if (!data) {
    return <div>Cargando...</div>;
  }

  // Aquí puedes procesar y mostrar los datos en tu componente
  return (
    <div>
      {/* Mostrando el título directamente en el h1 */}
      <h1>{data.data[0]?.attributes?.title}</h1>

      <h1>{data.data[0]?.attributes?.bloques[0]?.title}</h1>

      <img
        src={data.data[0]?.attributes?.bloques[0]?.image.data.attributes.url}
        alt=""
      />

      <img
        src={data.data[0]?.attributes?.bloques[1]?.image.data.attributes.url}
        alt=""
      />

      <img
        src={
          data.data[0]?.attributes?.bloques[2]?.image?.data[0]?.attributes?.url
        }
        alt=""
      />

      <div
        dangerouslySetInnerHTML={{
          __html: data.data[0]?.attributes?.bloques[2]?.text,
        }}
      />

      <img
        src={
          data.data[0]?.attributes?.bloques[3]?.image?.data[0]?.attributes?.url
        }
        alt=""
      />

      <div
        dangerouslySetInnerHTML={{
          __html: data.data[0]?.attributes?.bloques[3]?.text,
        }}
      />

      <img
        src={data.data[0]?.attributes?.bloques[4]?.image?.data?.attributes?.url}
        alt=""
      />

      <div
        dangerouslySetInnerHTML={{
          __html: data.data[0]?.attributes?.bloques[4]?.text,
        }}
      />
    </div>
  );
};

export default TuComponente;
