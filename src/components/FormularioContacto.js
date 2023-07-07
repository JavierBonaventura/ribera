import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/Escudo Bodega Ribera del Cuarzo-FINALcurvas-02.png";
import hambur from "../images/menu-hambur.png";
import iconIg from "../images/icon-ig-form.png";
import arrowDownload from "../images/arrow-download.png";

const FormularioContacto = () => {
  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const playfairFontItalic = {
    fontFamily: "Playfair Italic , sans-serif",
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
    <div className="containerHome pt-8 background">
      <div className="w-full grid justify-items-end pr-6">
        <div className="w-8 ">
          <Link to="/MenuHamburguesa">
            <img src={hambur} alt="" className="w-full" />
          </Link>
        </div>
      </div>
      <img src={logo} alt="Imagen 1" className="logo" />

      <div className="body">
        <div className="containerHome pt-12 px-5 ">
          <div className="grid grid-cols-1 text-white">
            <div>
              <h1
                className="text-center text-2xl uppercase text-[#F4EDE2] "
                style={playfairFontRegular}
              >
                Contacto
              </h1>
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="pt-6 pb-8 mb-4"
                style={playfairFontRegular}
              >
                <div className="mb-4 flex">
                  <div className="mr-2">
                    <label
                      className="block text-[#F4EDE2] text-sm font-bold mb-2"
                      htmlFor="nombre"
                    >
                      Nombre
                    </label>
                    <input
                      className=" bg-transparent appearance-none border-b  w-full py-2 px-3 text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
                      id="nombre"
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[#F4EDE2] text-sm font-bold mb-2"
                      htmlFor="apellido"
                    >
                      Apellido
                    </label>
                    <input
                      className=" appearance-none bg-transparent border-b rouded w-full py-2 px-3 text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
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
                    className="block text-[#F4EDE2] text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                  <input
                    className=" appearance-none bg-transparent border-b  w-full py-2 px-3 text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-[#F4EDE2] text-sm font-bold mb-2"
                    htmlFor="pais"
                  >
                    País
                  </label>
                  <input
                    className=" appearance-none bg-transparent border-b  w-full py-2 px-3 text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
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
                    Consulta
                  </label>
                  <textarea
                    className=" appearance-none border-b bg-transparent  w-full py-2 px-3 text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
                    id="consulta"
                    value={consulta}
                    onChange={(e) => setConsulta(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-start">
                  <button
                    className="bg-[#F4EDE2] text-black hover:bg-[#C4AD77] rounded-xl  py-1 px-12  focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>

            <div
              className="text-[#F4EDE2] text-center flex flex-col gap-y-4  py-4"
              style={playfairFontRegular}
            >
              <div className="flex flex-col gap-y-2">
                <h2 className="text-sm">Nuestra oficinas</h2>
                <h3 className="text-base">
                  Ortiz de Ocampo 330 <br /> Módulo, Oficina 5 <br /> Buenos
                  Aires, Argentina
                </h3>
              </div>
              <div className="text-base">
                <h2 className="uppercase">¡Seguinos en instagram!</h2>
                <div className="flex items-center mx-auto justify-center gap-x-1">
                  <img src={iconIg} alt="" className="w-4" />
                  <h2>@riberadelcuarzo</h2>
                </div>
              </div>
              <a
                href=""
                className="uppercase rounded-lg bg-[#C4AD77] hover:bg-[#86703d] text-sm  mx-auto px-1.5 py-1"
              >
                <div className="flex gap-x-1 items-center">
                  <img src={arrowDownload} alt="" className="w-3" />
                  <span> Download Brochure</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioContacto;
