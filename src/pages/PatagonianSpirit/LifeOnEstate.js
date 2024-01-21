import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import hambur from "../../images/menu-hambur.png";
import flechaIzquierda from "../../images/flechaIzquierda.jpg";
import flechaDerecha from "../../images/flechaDerecha.jpg";
import iconIg from "../../images/icon-ig.png";
import "../../App.css";
import { useLocation } from "react-router-dom";
import { Transition, animated, useSpring } from "@react-spring/web";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };
  const playfairFontItalic = {
    fontFamily: "Playfair Italic, serif",
    fontWeight: "normal",
    fontStyle: "italic",
  };

  return (
    <div>
      <header className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl py-5 xl:py-10 px-5 xl:px-0 fixed top-0 left-0 right-0 z-50">
        <div class="flex justify-between items-center  ">
          <div class="">
            <Link to="/">
              <img src={logo} alt="" className="w-24 md:w-28" />
            </Link>
          </div>
          <div class="mt-4">
            <Link to="/menu">
              <img src={hambur} alt="" className="w-7" />
            </Link>
          </div>
        </div>
      </header>

      <div className=" bg-[#F3EEE3] pt-4 pb-12">
        <div className="container mx-auto flex flex-col justify-center items-center mt-10">
          <div className="pt-9">
            <h1
              style={playfairFontItalic}
              className="italic text-xs text-[#5f5f5e] text-center tracking-widest"
            >
              <i style={playfairFontItalic}>{t("patagonian.title")}</i>
            </h1>
            <h2
              style={playfairFontBlack}
              className="text-base text-[#C4B27D] text-center tracking-wider uppercase"
            >
              {t("patagonian.lifeEstate.title")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const LifeOnEstate = () => {
  const location = useLocation();

  return (
    <Transition
      items={location}
      keys={(location) => location.pathname}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{ duration: 1000 }}
    >
      {(style, item) => (
        <animated.div style={{ ...style, width: "100%" }}>
          <div className="bg-[#F3EEE3] ">
            <Header />

            <div>
              <Screen />
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

const Screen = () => {
  const { t, i18n } = useTranslation();
  const idiomaSeleccionado = i18n.language;

  const [currentScreen, setCurrentScreen] = useState(0);
  const handleNext = () => {
    setCurrentScreen((prevScreen) => (prevScreen + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentScreen((prevScreen) =>
      prevScreen === 0 ? images.length - 1 : prevScreen - 1
    );
  };

  const location = useLocation();
  // Estadode variables consultas de API
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState([]);
  const [paragraphs, setParagraphs] = useState([""]);

  // URL de la API
  const apiUrlEnglish =
    "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques%2C%20bloques.slide%2C%20bloques.slide.image&filters%5Bslug%5D=life-estate&locale=en";
  const apiUrlSpanish =
    "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/pages?populate=bloques%2C%20bloques.slide%2C%20bloques.slide.image&filters%5Bslug%5D=life-estate-es&locale=es";
  let apiUrl;

  if (idiomaSeleccionado === "en") {
    apiUrl = apiUrlEnglish;
  } else {
    apiUrl = apiUrlSpanish;
  }

  useEffect(() => {
    // Función para quitar las etiquetas HTML de un texto
    const extractTextWithoutTags = (htmlString) => {
      const tempElement = document.createElement("div");
      tempElement.innerHTML = htmlString;
      return tempElement.textContent || tempElement.innerText;
    };

    // Función para realizar la solicitud HTTP y obtener las imágenes
    const fetchImages = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Obtener el array de slides
        const slides = data.data[0].attributes.bloques[0].slide;

        // Obtener las URL de las imágenes
        const imageUrls = slides.map(
          (slide) => slide.image.data.attributes.formats.small.url
        );
        setImages(imageUrls);

        // Obtener los titulos
        const titlesContent = slides.map((slide) => slide.title);
        setTitle(titlesContent);

        // Obtener los párrafos sin etiquetas HTML
        const textContent = slides.map((slide) =>
          extractTextWithoutTags(slide.text)
        );
        setParagraphs(textContent);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    // Llamar a la función de solicitud cuando el componente se monta
    fetchImages();
  }, []); // El segundo argumento [] significa que se ejecutará solo una vez (cuando se monta el componente)

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
  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    config: { duration: 1500, easing: (t) => t }, // Puedes experimentar con diferentes funciones de easing
  });

  console.log(images);
  return (
    <Transition
      items={location}
      keys={(location) => location.pathname}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{ duration: 1000 }}
    >
      {(style, item) => (
        <animated.div
          style={{
            ...style,
            width: "100%",
            backgroundColor: "#F3EEE3",
            minHeight: "100vh",
          }}
        >
          <div className="mt-[-20px]">
            <div className="bg-[#F3EEE3] pb-2">
              <p className="ml-6 text-left relative">
                <span
                  style={playfairFontBlack}
                  className="text-[#C4B27D] text-lg"
                >
                  0{currentScreen + 1}
                </span>
                <span
                  style={playfairFontBlack}
                  className="text-[#C4B27D] absolute top-1 left-6 text-xs underline"
                >
                  0{images.length}
                </span>
              </p>
            </div>

            <div className="container mx-auto flex flex-col justify-center  items-center">
              <div>
                {images ? (
                  <animated.img
                    className="w-full"
                    src={images[currentScreen]}
                    style={{ width: "100vw", height: "100%", ...props }}
                  />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
            <div className="flex justify-center space-x-10 pt-2  bg-[#F3EEE3]">
              <button
                className="w-14 h-14 rounded-full flex items-center justify-center mr-2"
                onClick={handlePrev}
              >
                <div className="">
                  <img src={flechaIzquierda} alt="" className="w-full" />
                </div>
              </button>

              <button
                className="w-14 h-14 flex items-center justify-center"
                onClick={handleNext}
              >
                <div className="">
                  <img src={flechaDerecha} alt="" className="w-full" />
                </div>
              </button>
            </div>
          </div>
          <div>
            <div className="bg-[#F3EEE3] pt-5">
              <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-5">
                    <div className="w-4/5 mx-auto">
                      <p
                        style={robotoFontRegular}
                        className="decoration-black	text-[#C4B27D]  text-xs leading-6 pb-3 tracking-wide"
                      >
                        {title[currentScreen]}
                      </p>
                      <p
                        class="text-[#000000] text-xs tracking-wider text-justify"
                        style={playfairFontRegular}
                      >
                        {paragraphs[currentScreen]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container mx-auto bg-[#F3EEE3]">
              <div class="py-20">
                <div class="flex justify-center">
                  <a
                    class="border border-[#C4B27D] rounded-full p-7"
                    href="https://www.instagram.com/riberadelcuarzo/"
                    target="_blank"
                  >
                    <img src={iconIg} alt="" class="w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default LifeOnEstate;
