import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import iconIg from "../images/icon-ig-form.png";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";
import portada from "../images/background-contact.jpg";

const FormularioContacto = () => {
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

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [pais, setPais] = useState("");
  const [consulta, setConsulta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier acción con los datos del formulario, como enviarlos a un servidor
    console.log({
      nombre,
      apellido,
      email,
      pais,
      consulta,
    });
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
          <div className="py-20  md:py-0 backgroundContacto  md:!bg-black ">
            <header className="container mx-auto max-w-screen-xl py-10 fixed top-0 left-0 right-0 z-50 px-5 md:px-0 md:py-2 ">
              <div class="flex justify-between items-center  ">
                <div class="w-24 md:w-36 ">
                  <Link to="/">
                    <img src={logo} alt="" className="w-full xl:w-28" />
                  </Link>
                </div>
                <div class="mt-4">
                  <Link to="/MenuHamburguesa">
                    <img src={hambur} alt="" className="w-7 " />
                  </Link>
                </div>
              </div>
            </header>
            <div className="hidden md:flex container mx-auto max-w-screen-xl  absolute top-0 left-1/2 transform -translate-x-1/2 h-2/5  w-2/3">
              <img
                src={portada}
                alt=""
                className=" mx-auto object-cover w-full"
              />
            </div>

            <div className=" pt-12 px-10 container mx-auto max-w-screen-xl md:px-0 md:pt-56  md:w-2/3 ">
              <div className="hidden md:block">
                <h1
                  class="uppercase text-[#c4b27d] text-4xl tracking-wider text-center"
                  style={playfairFontBold}
                >
                  Contact
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 text-white md:py-5 ">
                <div className="block md:hidden">
                  <h1
                    class="uppercase text-[#c4b27d] text-xl tracking-wider text-center"
                    style={playfairFontBold}
                  >
                    Contact
                  </h1>
                </div>
                <div className="md:w-3/4 md:mx-auto md:order-2 ">
                  <form
                    onSubmit={handleSubmit}
                    className="pt-6 pb-8 mb-4 md:w-full md:py-0 md:mt-5"
                    style={playfairFontRegular}
                  >
                    <div className="mb-4 flex">
                      <div className="mr-2 ">
                        <label
                          className="block text-[#F4EDE2] text-sm md:text-xl "
                          htmlFor="nombre"
                        >
                          Name
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
                      <div className="">
                        <label
                          className="block text-[#F4EDE2] text-sm md:text-xl"
                          htmlFor="apellido"
                        >
                          Last name
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
                        E-mail
                      </label>
                      <input
                        className="text-sm md:text-base bg-transparent md:py-1 border-b border-b-white rounded-none border-t-0 border-l-0 border-r-0 w-full   text-[#F4EDE2] leading-tight"
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
                        Country
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
                        Message
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
                        className="bg-[#C3B17D] text-[#F2ECE1] text-sm md:text-xl  hover:bg-[#C4AD77] rounded-md  py-2 px-8 "
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>

                <div
                  className="text-[#F4EDE2] flex flex-col gap-y-4 md:justify-around md:items-center md:py-0 md:order-1"
                  style={playfairFontRegular}
                >
                  <div className="flex flex-col gap-y-2  md:w-1/2  xl:w-1/3">
                    <h2 className="text-lg text-[#c4b27d] md:text-3xl text-center md:text-left">
                      Our offices
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
                  <div className="flex flex-col gap-y-2  md:w-1/2  xl:w-1/3">
                    <h2 className="text-lg text-[#c4b27d] md:text-3xl text-center md:text-left">
                      Our winery
                    </h2>
                    <a
                      href="https://www.google.com.ar/maps/place/39%C2%B011'17.0%22S+66%C2%B052'26.0%22W/@-39.1880556,-66.8760829,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x7cfe3f53aaf18eb2!8m2!3d-39.1880556!4d-66.8738889"
                      className="hover:underline"
                      target="_blank"
                    >
                      <h3 className="text-sm md:text-base text-center md:text-left">
                        Route Prov.Nro 7 KM 12
                        <br />
                        Valle Azul, El Cuy, Río Negro.
                        <br className="hidden md:block" /> CP: 8336
                      </h3>
                    </a>
                  </div>
                  <div className="md:w-1/2 xl:w-1/3">
                    <h2 className="text-lg text-[#c4b27d] uppercase md:text-3xl text-center md:text-left">
                      ¡Follow us!
                    </h2>
                    <a
                      href="https://www.instagram.com/riberadelcuarzo/"
                      target="_blank"
                      className="flex items-center mx-auto justify-center gap-x-1 text-sm hover:underline md:justify-start"
                    >
                      <img src={iconIg} alt="" className="w-4" />
                      <h2 className="text-sm  md:text-base ">
                        @riberadelcuarzo
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default FormularioContacto;
