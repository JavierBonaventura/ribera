import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import hambur from "../../images/menu-hambur.png";
import iconDownload from "../../images/icon-download.png";
import { useSpring, Transition, animated } from "@react-spring/web";
import ImgMarcaAgua from "../../images/agua-sombra.png";
import { useTranslation } from "react-i18next";
import Loaded from "../../components/Loaded";
import Error from "../../components/Error";
import axios from "axios";
import "../../App.css";
function WinesInWorld() {
  //ANIMACIONES
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible2(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible3(true);
    }, 1300);

    return () => clearTimeout(timeout);
  }, []);

  const locationAnimacion = useLocation();
  const [showDropdown1, setShowDropdown1] = useState(false);

  const dropdownAnimation1 = useSpring({
    height: showDropdown1 ? "100px" : "0px",
    opacity: showDropdown1 ? 1 : 0,
    overflow: "hidden",
    config: { duration: 500 },
  });

  const handleDownloadClick1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  //FUENTES TIPOGRAFICAS
  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const robotoFontRegular = {
    fontFamily: "Roboto Regular , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "16px",
  };

  const playfairFontItalic = {
    fontFamily: "Playfair Italic, serif",
    fontWeight: "normal",
    fontStyle: "italic",
  };

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const windsorLight = {
    fontFamily: "WindsorLigth, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  //CONEXION A API REST
  const { t, i18n } = useTranslation();
  //Obtener el idioma seleccionado
  const idiomaSeleccionado = i18n.language;

  const { slug } = useParams();
  const [wineData, setWineData] = useState(null);
  const [allRelatedImages, setAllRelatedImages] = useState([]);
  const [loadingWineData, setLoadingWineData] = useState(true);
  const [loadingRelatedImages, setLoadingRelatedImages] = useState(true);
  const [errorWineData, setErrorWineData] = useState(null);
  const [errorRelatedImages, setErrorRelatedImages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://back-ribera-gl7lw5cfra-uc.a.run.app/api/wines?populate=mainBottleImage%2C%20secondaryImage%2C%20technicalSheet%2C%20relatedImage%2C%20wines_categories%20&filters%5Bslug%5D=${slug}&locale=${idiomaSeleccionado}`
        );

        const fetchedWineData = response.data.data[0];
        setWineData(fetchedWineData);
      } catch (error) {
        console.error("Error al llamar a la API para detalles del vino", error);
        setErrorWineData(error);
      } finally {
        setLoadingWineData(false);
      }
    };

    const fetchAllRelatedImages = async () => {
      try {
        const response = await axios.get(
          `https://back-ribera-gl7lw5cfra-uc.a.run.app/api/wines?populate=wines_categories%2CrelatedImage&locale=${idiomaSeleccionado}`
        );

        const currentWineCategory = "Ribera del Cuarzo collection";

        const fetchedImages = response.data.data
          .filter(
            (wine) =>
              wine &&
              wine.attributes &&
              wine.attributes.slug !== slug &&
              wine.attributes.wines_categories?.data?.some(
                (category) =>
                  category?.attributes?.name === currentWineCategory ||
                  category?.attributes?.name === "Coleccion Ribera del Cuarzo"
              ) &&
              wine.attributes.relatedImage?.data?.attributes?.url
          )
          .map((wine) => {
            try {
              return {
                id: wine.id,
                imageUrl: wine.attributes.relatedImage.data.attributes.url,
                imageName:
                  wine.attributes.relatedImage.data.attributes.name || "",
                imageFamilyName: wine.attributes.familyName || "",
                imageName: wine.attributes.name || "",
                slugName: wine.attributes.slug || "",
              };
            } catch (error) {
              console.error("Error al procesar vino relacionado:", error);
              return null;
            }
          })
          .filter(Boolean);

        setAllRelatedImages(fetchedImages);
      } catch (error) {
        console.error(
          "Error al llamar a la API para imágenes relacionadas",
          error
        );
        setErrorRelatedImages(error);
      } finally {
        setLoadingRelatedImages(false);
      }
    };

    fetchData();
    fetchAllRelatedImages();
  }, [slug, idiomaSeleccionado]);

  if (loadingWineData || loadingRelatedImages) {
    return (
      <div>
        <Loaded />
      </div>
    ); // Puedes usar un componente de carga aquí
  }

  if (errorWineData || errorRelatedImages) {
    return (
      <div>
        <Error />
      </div>
    ); // Puedes usar un componente de error aquí
  }

  return (
    <Transition
      items={locationAnimacion}
      keys={(location) => location.pathname}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{ duration: 1000 }}
    >
      {(style, item) => (
        <animated.div style={{ ...style, width: "100%" }}>
          <div className="bg-[#000000e9]">
            <header className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-5 xl:py-10 px-5 2xl:px-0  fixed top-0 left-0 right-0 z-50">
              <div class="flex justify-between items-center">
                <div class="w-24 md:w-28">
                  <Link to="/">
                    <img src={logo} alt="" className="w-full" />
                  </Link>
                </div>
                <div class="mt-4">
                  <Link to="/menu">
                    <img
                      src={hambur}
                      alt=""
                      className="w-7 hover:scale-90 transition ease-in-out duration-500"
                    />
                  </Link>
                </div>
              </div>
            </header>

            <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 flex flex-col justify-center items-center pt-24 2xl:pt-36 pb-24 gap-y-5 2xl:gap-y-10">
              {/* Titular start */}
              <div class="flex flex-col justify-center items-center">
                <h1
                  style={playfairFontItalic}
                  className={`text-xs md:text-lg tracking-widest text-[#F3EEE3] ${
                    isVisible
                      ? "opacity-100 transition-opacity duration-500"
                      : "opacity-0 transition-opacity duration-500"
                  }`}
                >
                  <i style={playfairFontItalic}>{t("wines.title")}</i>
                </h1>
                <h2
                  style={playfairFontBlack}
                  className={`text-base md:text-2xl text-[#C4B27D] text-center tracking-wider uppercase ${
                    isVisible2 ? "appear-from-bottom" : "invisible"
                  }`}
                >
                  {t("wines.world.title")}
                </h2>
              </div>
              {/* Titular end */}

              {/* Wine start */}
              <div>
                {/* img wine start */}
                {wineData &&
                  wineData.attributes &&
                  wineData.attributes.mainBottleImage &&
                  wineData.attributes.mainBottleImage.data && (
                    <div className="w-32 md:w-52 mx-auto relative flex justify-center items-center py-16 md:py-24">
                      <img
                        src={
                          wineData.attributes.mainBottleImage.data.attributes
                            .url
                        }
                        alt={
                          wineData.attributes.mainBottleImage.data.attributes
                            .name
                        }
                        className={`w-full z-50 ${
                          isVisible3
                            ? "opacity-100 transition-opacity duration-500"
                            : "opacity-0 transition-opacity duration-500"
                        }`}
                      />
                      <div className=" absolute w-[20rem] md:w-[25rem] ">
                        <img src={ImgMarcaAgua} alt="" className="w-full " />
                      </div>
                    </div>
                  )}
                {/* img wine end */}
                <div className="flex flex-col gap-y-5  md:gap-y-14   w-2/4 mx-auto ">
                  {/* titular wine start */}
                  {wineData && wineData.attributes && (
                    <div className="space-y-5 md:space-y-14">
                      <h1
                        className="uppercase text-[#C4B27D] text-center tracking-widest"
                        style={windsorLight}
                      >
                        <span className="text-base md:text-[1.35rem] md:leading-[1.75rem]">
                          {wineData.attributes.familyName} <br />{" "}
                          <span className="font-bold">
                            {wineData.attributes.name}
                          </span>
                        </span>
                      </h1>

                      <p
                        className="text-[#F3EEE3] text-xs md:text-base tracking-wider text-justify md:text-justify"
                        style={playfairFontRegular}
                      >
                        {wineData.attributes.description &&
                          wineData.attributes.description[0] &&
                          wineData.attributes.description[0].children &&
                          wineData.attributes.description[0].children[0] &&
                          wineData.attributes.description[0].children[0].text}
                      </p>
                    </div>
                  )}
                  {/* titular wine end */}
                  {/* Fichas tecnicas start */}
                  {wineData &&
                    wineData.attributes &&
                    wineData.attributes.technicalSheet && (
                      <div>
                        <div className="flex justify-center">
                          <a
                            className="border-b border-[#C4B27D] cursor-pointer"
                            onClick={handleDownloadClick1}
                          >
                            <div className="w-2 inline-block">
                              <img
                                src={iconDownload}
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <span className="ml-2 text-xs md:text-lg text-[#C4B27D] tracking-wider">
                              {t("wines.btnSheet")}
                            </span>
                          </a>
                        </div>
                        <animated.div style={dropdownAnimation1}>
                          <div className="w-2/4 mx-auto pt-4">
                            <ul className="text-xs md:text-lg text-[#C4B27D] text-center">
                              {wineData.attributes.technicalSheet.map(
                                (sheet, index) => (
                                  <li key={index} className="py-2 px-4">
                                    <a href={sheet.href} target={sheet.target}>
                                      {sheet.text}
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </animated.div>
                      </div>
                    )}
                  {/* Fichas tecnicas end */}
                </div>
              </div>
              {/* Wine end */}
            </div>

            {/* Img pre footer start */}
            {wineData &&
              wineData.attributes &&
              wineData.attributes.secondaryImage &&
              wineData.attributes.secondaryImage.data && (
                <div className="flex justify-center items-center h-full ">
                  <div className="container contenedor mx-auto max-w-screen-xl xl:max-w-screen-2xl">
                    <div className="w-full aspect-video h-auto xl:h-[40rem]">
                      <div className="recuadro-1"></div>
                      <div className="recuadro-2"></div>
                      <img
                        src={
                          wineData.attributes.secondaryImage.data.attributes.url
                        }
                        className="imagen  absolute xl:top-[-70px] 2xl:top-[-200px]"
                        alt={
                          wineData.attributes.secondaryImage.data.attributes
                            .name
                        }
                      />
                    </div>
                  </div>
                </div>
              )}
            {/* Img pre footer start */}

            {/* Footer bottle start */}
            <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 !pt-20 md:!pt-40 ">
              <div
                className="flex flex-col md:flex-row  text-[#C4B27D] w-full gap-y-10 md:gap-x-20 2xl:gap-x-32 justify-center"
                style={windsorLight}
              >
                {/* Bottle start */}
                {Array.isArray(allRelatedImages) &&
                  allRelatedImages.length > 0 &&
                  allRelatedImages
                    .filter((image) => {
                      try {
                        return (
                          image &&
                          typeof image === "object" &&
                          image.id &&
                          image.imageUrl &&
                          typeof image.imageUrl === "string" &&
                          image.slugName &&
                          typeof image.slugName === "string" &&
                          image.imageFamilyName &&
                          typeof image.imageFamilyName === "string" &&
                          image.imageName &&
                          typeof image.imageName === "string"
                        );
                      } catch (error) {
                        console.error(
                          "Error al validar imagen relacionada:",
                          error
                        );
                        return false;
                      }
                    })
                    .map((image) => {
                      try {
                        return (
                          <div
                            key={image.id}
                            className="border border-[#C4B27D] flex flex-col justify-between px-3 pt-3 md:border-0 md:p-0"
                          >
                            <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4">
                              <Link
                                to={`/ribera-del-cuarzo-collection/${image.slugName}`}
                                className="text-white uppercase text-sm lg:text-lg border-b border-transparent hover:border-[#C4B27D] hover:text-[#C4B27D] transition duration-300 ease-in-out"
                              >
                                {t("wines.btnFooter")}
                              </Link>
                              <div className="flex flex-col justify-center items-center text-base lg:text-xl xl:text-2xl text-center">
                                <span className="uppercase">
                                  {image.imageFamilyName}
                                </span>
                                <span>{image.imageName}</span>
                              </div>
                            </div>
                            <Link
                              to={`/ribera-del-cuarzo-collection/${image.slugName}`}
                            >
                              <img
                                src={image.imageUrl}
                                alt={image.imageName}
                                className="w-1/2 md:w-3/4 mx-auto transform hover:-translate-y-1 transition ease-in-out duration-300"
                                onError={(e) => {
                                  console.error(
                                    "Error al cargar imagen:",
                                    image.imageUrl
                                  );
                                  e.target.style.display = "none";
                                }}
                              />
                            </Link>
                          </div>
                        );
                      } catch (error) {
                        console.error(
                          "Error al renderizar imagen relacionada:",
                          error
                        );
                        return null;
                      }
                    })
                    .filter(Boolean)}
                {/* Bottle end */}
              </div>
            </div>
            {/* Footer bottle end */}
          </div>
        </animated.div>
      )}
    </Transition>
  );
}

export default WinesInWorld;
