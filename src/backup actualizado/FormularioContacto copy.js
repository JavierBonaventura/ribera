import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import logo from "../../images/logo.svg";
import hambur from "../../images/menu-hambur.png";
import iconIg from "../../images/icon-ig-form.png";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";
import portada from "../../images/background-contact-1.png";
import { useTranslation } from "react-i18next";
import axios from "axios";

const FormularioContacto = () => {
  const { t, i18n } = useTranslation();
  // Incio variables paraa manejar el estado del envio del mail
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // Fin variables paraa manejar el estado del envio del mail

  const location = useLocation();

  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const playfairFontBold = {
    fontFamily: "Playfair Bold , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const robotoFontRegular = {
    fontFamily: "Roboto Regular , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "16px",
  };

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [pais, setPais] = useState("");
  const [consulta, setConsulta] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl =
      "https://back-ribera-gl7lw5cfra-uc.a.run.app/api/contact-forms";

    try {
      const response = await axios.post(apiUrl, {
        data: {
          name: nombre,
          lastName: apellido, // Asumo que 'apellido' es tu variable correspondiente
          email,
          country: pais, // Asumo que 'pais' es tu variable correspondiente
          message: consulta,
        },
      });

      console.log(response.data);
      console.log("Solicitud enviada exitosamente");
      setIsEmailSent(true);
      setShowPopup(true);
      // Limpia los campos del formulario
      setNombre("");
      setApellido("");
      setEmail("");
      setPais("");
      setConsulta("");

      // Maneja el estado según la respuesta del backend
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      // Maneja el error si la solicitud no se puede completar
    }
  };

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
          <div className="py-20  md:py-0 backgroundContacto">
            {/*HEADER START*/}
            <header className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-5 xl:py-10 px-5 2xl:px-0 fixed top-0 left-0 right-0 z-50">
              <div class="flex justify-between items-center">
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
            {/*HEADER END*/}

            {/*PORTADA DESK START*/}
            <div className="contenido-dinamico-contact container mx-auto max-w-screen-xl xl:max-w-screen-2xl  absolute top-0 left-1/2 transform -translate-x-1/2 h-2/5">
              <img
                src={portada}
                alt=""
                className="mx-auto object-cover w-3/4"
              />
            </div>
            {/*PORTADA DESK END*/}

            {/*CONTENIDO GENERAL START*/}
            <div className="pt-12 px-10 container mx-auto max-w-screen-xl md:px-0 md:pt-[25rem]">
              {/*TITULAR DESK START*/}
              <div className="contenido-dinamico-contact justify-center">
                <h1
                  class="uppercase text-[#c4b27d] text-3xl tracking-wider text-center"
                  style={playfairFontBold}
                >
                  {t("contact.title")}
                </h1>
              </div>
              {/*TITULAR DESK START*/}

              {/*FORMULARIO START*/}
              <div className="grid grid-cols-1 md:grid-cols-2 text-[#ffffff] md:py-5  md:w-3/4 md:mx-auto ">
                {/*TITULAR MOB START*/}
                <div className="block md:hidden">
                  <h1
                    class="uppercase text-[#c4b27d] text-xl tracking-wider text-center"
                    style={playfairFontBold}
                  >
                    {t("contact.title")}
                  </h1>
                </div>
                {/*TITULAR MOB END*/}

                {/*INPUTS START*/}
                <div className="md:w-full md:mx-auto md:order-2">
                  <form
                    onSubmit={handleSubmit}
                    className="pt-6 pb-8 mb-4 md:w-full md:py-0 md:mt-5"
                    style={playfairFontRegular}
                  >
                    <div className="mb-4 flex gap-x-10">
                      <div className=" w-full ">
                        <label
                          className="block text-[#F4EDE2] text-sm md:text-xl "
                          htmlFor="nombre"
                        >
                          {t("contact.inputFormA")}
                        </label>
                        <input
                          className="text-sm md:text-base bg-transparent md:py-1 border-b border-b-white rounded-none border-t-0 border-l-0 border-r-0 w-full text-[#F4EDE2] leading-tight"
                          id="nombre"
                          type="text"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          required
                        />
                      </div>
                      <div className=" w-full">
                        <label
                          className="block text-[#F4EDE2] text-sm md:text-xl"
                          htmlFor="apellido"
                        >
                          {t("contact.inputFormB")}
                        </label>
                        <input
                          className="text-sm md:text-base bg-transparent  md:py-1 border-b border-b-white rounded-none border-t-0 border-l-0 border-r-0  w-full text-[#F4EDE2] leading-tight"
                          id="apellido"
                          type="text"
                          value={apellido}
                          onChange={(e) => setApellido(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-[#F4EDE2] text-sm md:text-xl"
                        htmlFor="email"
                      >
                        {t("contact.inputFormC")}
                      </label>
                      <input
                        className="text-sm md:text-base bg-transparent md:py-1 border-b border-b-white rounded-none border-t-0 border-l-0 border-r-0 w-full text-[#F4EDE2] leading-tight"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-[#F4EDE2] text-sm md:text-xl"
                        htmlFor="pais"
                      >
                        {t("contact.inputFormD")}
                      </label>
                      <input
                        className="text-sm md:text-base bg-transparent md:py-1 border-b border-b-white rounded-none border-t-0 border-l-0 border-r-0  w-full text-[#F4EDE2] leading-tight"
                        id="pais"
                        type="text"
                        value={pais}
                        onChange={(e) => setPais(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-[#F4EDE2] text-sm md:text-xl mb-2"
                        htmlFor="consulta"
                      >
                        {t("contact.inputFormE")}
                      </label>
                      <textarea
                        className="text-sm md:text-base border-b border-b-white rounded-none border-t-0 border-l-0 border-r-0 bg-transparent  w-full pb-14  text-[#F4EDE2] leading-tight"
                        id="consulta"
                        value={consulta}
                        onChange={(e) => setConsulta(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-start">
                      <button
                        className="hover:bg-[#C4B27D] hover:text-[#F3EEE3] border border-[#C4B27D] text-sm md:text-xl text-[#C4B27D] transition ease-in-out duration-300 rounded-md  py-2 px-8 "
                        type="submit"
                        onClick={handleSubmit}
                      >
                        {t("contact.btnForm")}
                      </button>
                    </div>
                    {/* Inicio Muestra pop up y borra el contenido del formulario */}
                    {showPopup && (
                      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div
                          className="bg-[#F3EEE3] p-4 rounded-md text-center w-64"
                          style={robotoFontRegular}
                        >
                          {isEmailSent ? (
                            <p className="text-[#000000]">
                              Email sent successfully
                            </p>
                          ) : (
                            <p className="text-red-600">
                              There was an error sending the email
                            </p>
                          )}
                          <div className="mt-4"></div>
                          <button
                            className="mx-auto p-1 bg-[#C4B27D] text-[#F3EEE3] text-sm md:text-base hover:bg-[#F3EEE3] hover:text-[#C4B27D] transition ease-in-out duration-300 rounded-md border border-[#C4B27D] "
                            onClick={() => setShowPopup(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                    {/* fin Muestra pop up y borra el contenido del formulario */}
                  </form>
                </div>
                {/*INPUTS END*/}

                {/*INFORMACION START*/}
                <div
                  className="text-[#F4EDE2] flex flex-col gap-y-4 md:justify-around md:items-start md:py-0 md:order-1  md:w-full"
                  style={playfairFontRegular}
                >
                  <div className="flex flex-col gap-y-2  ">
                    <h2 className="text-lg text-[#c4b27d] md:text-3xl text-center md:text-left">
                      {t("contact.titleA")}
                    </h2>
                    <a
                      href="https://www.google.com/maps/place/Ortiz+de+Ocampo+3302,+C1425+CABA/@-34.5750298,-58.4035604,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb5d7344eecc7:0x17bb52293d552009!8m2!3d-34.5750342!4d-58.4009855!16s%2Fg%2F11qpp9y2jx?hl=es&entry=ttu"
                      target="_blank"
                      className="hover:underline"
                    >
                      <h3 className="text-sm md:text-base text-center md:text-left">
                        Ortiz de Ocampo 3302 <br />
                        Buenos Aires, Argentina
                      </h3>
                    </a>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h2 className="text-lg text-[#c4b27d] md:text-3xl text-center md:text-left">
                      {t("contact.titleB")}
                    </h2>
                    <a
                      href="https://www.google.com.ar/maps/place/39%C2%B011'17.0%22S+66%C2%B052'26.0%22W/@-39.1880556,-66.8760829,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x7cfe3f53aaf18eb2!8m2!3d-39.1880556!4d-66.8738889"
                      className="hover:underline"
                      target="_blank"
                    >
                      <h3 className="text-sm md:text-base text-center md:text-left">
                        Ruta Prov.Nro 7 KM 12
                        <br />
                        Valle Azul, El Cuy, Río Negro.
                        <br className="hidden md:block" /> CP: 8336
                      </h3>
                    </a>
                  </div>
                  <div className="">
                    <h2 className="text-lg text-[#c4b27d] uppercase md:text-3xl text-center md:text-left">
                      {t("contact.titleC")}
                    </h2>
                    <a
                      href="https://www.instagram.com/riberadelcuarzo/"
                      target="_blank"
                      className="flex items-center mx-auto justify-center gap-x-1 text-sm hover:underline md:justify-start"
                    >
                      <img src={iconIg} alt="" className="w-4" />
                      <h2 className="text-sm  md:text-base ">
                        riberadelcuarzo
                      </h2>
                    </a>
                  </div>
                </div>
                {/*INFORMACION END*/}
              </div>
              {/*FORMULARIO END*/}
            </div>
            {/*CONTENIDO GENERAL END*/}
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default FormularioContacto;
