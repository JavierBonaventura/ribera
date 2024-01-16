import React, { useEffect, useState } from "react";
import axios from "axios";

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques%2C%20bloques.Link&filters%5Bslug%5D=contact&locale=en"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  if (!data) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <p>Label Bloque 1: {data?.data[0]?.attributes?.bloques[0]?.label}</p>
      <p>Label Bloque 2: {data?.data[0]?.attributes?.bloques[1]?.label}</p>
      <p>Label Bloque 3: {data?.data[0]?.attributes?.bloques[2]?.label}</p>
    </div>
  );
};

export default YourComponent;
