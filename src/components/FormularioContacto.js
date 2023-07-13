import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/Escudo Bodega Ribera del Cuarzo-FINALcurvas-02.png";
import hambur from "../images/menu-hambur.png";
import iconIg from "../images/icon-ig-form.png";
import iconDownload from "../images/icon-download.png";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";

const FormularioContacto = () => {
  const location = useLocation();

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
          <div className="containerHome py-20 background">
            <header className="py-10 fixed top-0 left-0 right-0 z-50  ">
              <div class="container mx-auto">
                <div class="flex justify-between items-center px-5">
                  <div class="w-20 md:w-36">
                    <Link to="/">
                      <img src={logo} alt="" className="w-full" />
                    </Link>{" "}
                  </div>

                  <div class="w-8">
                    <Link to="/MenuHamburguesa">
                      <img src={hambur} alt="" className="w-full" />
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </header>

            <div className="body">
              <div className="containerHome pt-12 px-5 ">
                <div className="grid grid-cols-1 text-white">
                  <div>
                    <h1
                      class="uppercase text-[#C4AC77] text-xl tracking-wider text-center"
                      style={playfairFontBold}
                    >
                      Contact
                    </h1>
                  </div>
                  <div>
                    <form
                      onSubmit={handleSubmit}
                      className="pt-6 pb-8 mb-4"
                      style={playfairFontRegular}
                    >
                      <div className="mb-4 flex">
                        <div className="mr-2 ">
                          <label
                            className="block text-[#F4EDE2] text-sm font-bold "
                            htmlFor="nombre"
                          >
                            Name
                          </label>
                          <input
                            className=" bg-transparent   appearance-none border-b  w-full   text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
                            id="nombre"
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label
                            className="block text-[#F4EDE2] text-sm font-bold "
                            htmlFor="apellido"
                          >
                            Last name
                          </label>
                          <input
                            className=" appearance-none bg-transparent border-b rouded w-full   text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
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
                          className="block text-[#F4EDE2] text-sm font-bold "
                          htmlFor="email"
                        >
                          E-mail
                        </label>
                        <input
                          className=" appearance-none bg-transparent border-b  w-full   text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-[#F4EDE2] text-sm font-bold "
                          htmlFor="pais"
                        >
                          Country
                        </label>
                        <input
                          className=" appearance-none bg-transparent border-b  w-full   text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
                          id="pais"
                          type="text"
                          value={pais}
                          onChange={(e) => setPais(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-[#F4EDE2] text-sm font-bold mb-2"
                          htmlFor="consulta"
                        >
                          Message
                        </label>
                        <textarea
                          className=" appearance-none border-b bg-transparent  w-full pb-14  text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
                          id="consulta"
                          value={consulta}
                          onChange={(e) => setConsulta(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <div className="flex items-center justify-start">
                        <button
                          className="bg-[#C3B17D] text-[#F2ECE1] text-sm hover:bg-[#C4AD77] rounded-md  py-2 px-8  focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>

                  <div
                    className="text-[#F4EDE2] text-center flex flex-col gap-y-4 "
                    style={playfairFontRegular}
                  >
                    <div className="flex flex-col gap-y-2">
                      <h2 className="text-sm">Our offices</h2>
                      <a href="" className="hover:underline">
                        <h3 className="text-base">
                          Ortiz de Ocampo 3302 <br />
                          Buenos Aires, Argentina
                        </h3>
                      </a>
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <h2 className="text-sm">Our winery</h2>
                      <a
                        href="https://www.google.com.ar/maps/place/39%C2%B011'17.0%22S+66%C2%B052'26.0%22W/@-39.1880556,-66.8760829,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x7cfe3f53aaf18eb2!8m2!3d-39.1880556!4d-66.8738889"
                        className="hover:underline"
                        target="_blank"
                      >
                        <h3 className="text-base">
                          Route Prov.Nro 7 KM 12, Lot-8 <br />
                          Valle Azul, El Cuy, Río Negro. CP: 8336
                        </h3>
                      </a>
                    </div>
                    <div className="text-base">
                      <h2 className="uppercase">¡follow us on instagram!</h2>
                      <a
                        href="https://www.instagram.com/riberadelcuarzo/"
                        target="_blank"
                        className="flex items-center mx-auto justify-center gap-x-1"
                      >
                        <img src={iconIg} alt="" className="w-4" />
                        <h2>@riberadelcuarzo</h2>
                      </a>
                    </div>
                    <div className="w-2/3 mx-auto flex justify-center hidden">
                      <a href="" className="border-b border-[#C3B17D]">
                        <div className="w-2 inline-block">
                          <img src={iconDownload} alt="" className="w-full" />
                        </div>
                        <span
                          className="ml-2 text-xs text-[#C3B17D]"
                          style={robotoFontRegular}
                        >
                          Download Brochure
                        </span>
                      </a>
                    </div>
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
