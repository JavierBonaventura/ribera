import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.svg";
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
          <div className="py-20 2xl:py-40 !h-full  background">
            <header className="container mx-auto py-10 fixed top-0 left-0 right-0 z-50 px-5 md:px-0 md:py-2">
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

            <div className="pt-12 px-10 container mx-auto md:px-0 ">
              <div className="grid grid-cols-1 md:grid-cols-2 text-white">
                <div className="block md:hidden">
                  <h1
                    class="uppercase text-[#F4EDE2] text-xl tracking-wider text-left"
                    style={playfairFontBold}
                  >
                    Contact
                  </h1>
                </div>
                <div className="md:w-3/4 md:mx-auto">
                  <h1
                    class="hidden md:block uppercase text-[#F4EDE2] text-xl md:text-3xl tracking-wider text-left md:w-full"
                    style={playfairFontBold}
                  >
                    Contact
                  </h1>
                  <form
                    onSubmit={handleSubmit}
                    className="pt-6 pb-8 mb-4 md:w-full"
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
                          className="text-sm md:text-base bg-transparent md:py-1 appearance-none border-b w-full text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
                          id="nombre"
                          type="text"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label
                          className="block text-[#F4EDE2] text-sm md:text-xl"
                          htmlFor="apellido"
                        >
                          Last name
                        </label>
                        <input
                          className="text-sm md:text-base appearance-none bg-transparent  md:py-1 border-b rouded w-full   text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
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
                        className="text-sm md:text-base appearance-none bg-transparent md:py-1 border-b  w-full   text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-[#F4EDE2] text-sm md:text-xl "
                        htmlFor="pais"
                      >
                        Country
                      </label>
                      <input
                        className="text-sm md:text-base appearance-none bg-transparent md:py-1 border-b  w-full   text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
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
                        className="text-sm md:text-base appearance-none border-b bg-transparent  w-full pb-14  text-[#F4EDE2] leading-tight focus:outline-none focus:shadow-outline"
                        id="consulta"
                        value={consulta}
                        onChange={(e) => setConsulta(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-start">
                      <button
                        className="bg-[#C3B17D] text-[#F2ECE1] text-sm md:text-xl  hover:bg-[#C4AD77] rounded-md  py-2 px-8  focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>

                <div
                  className="text-[#F4EDE2] text-center flex flex-col gap-y-4 md:justify-around md:items-center md:py-20 "
                  style={playfairFontRegular}
                >
                  <div className="flex flex-col gap-y-2">
                    <h2 className="text-lg text-[#c4b27d] md:text-3xl">
                      Our offices
                    </h2>
                    <a
                      href="https://www.google.com/maps/place/Ortiz+de+Ocampo+3302,+C1425+CABA/@-34.5750298,-58.4035604,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb5d7344eecc7:0x17bb52293d552009!8m2!3d-34.5750342!4d-58.4009855!16s%2Fg%2F11qpp9y2jx?hl=es&entry=ttu"
                      target="_blank"
                      className="hover:underline"
                    >
                      <h3 className="text-sm md:text-base">
                        Ortiz de Ocampo 3302 <br />
                        Buenos Aires, Argentina
                      </h3>
                    </a>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h2 className="text-lg text-[#c4b27d] md:text-3xl">
                      Our winery
                    </h2>
                    <a
                      href="https://www.google.com.ar/maps/place/39%C2%B011'17.0%22S+66%C2%B052'26.0%22W/@-39.1880556,-66.8760829,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x7cfe3f53aaf18eb2!8m2!3d-39.1880556!4d-66.8738889"
                      className="hover:underline"
                      target="_blank"
                    >
                      <h3 className="text-sm md:text-base">
                        Route Prov.Nro 7 KM 12, Lot-8 <br />
                        Valle Azul, El Cuy, Río Negro. CP: 8336
                      </h3>
                    </a>
                  </div>
                  <div className="">
                    <h2 className="text-lg text-[#c4b27d] uppercase md:text-3xl">
                      ¡Follow us!
                    </h2>
                    <a
                      href="https://www.instagram.com/riberadelcuarzo/"
                      target="_blank"
                      className="flex items-center mx-auto justify-center gap-x-1 text-sm hover:underline"
                    >
                      <img src={iconIg} alt="" className="w-4" />
                      <h2 className="text-sm  md:text-base">
                        @riberadelcuarzo
                      </h2>
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
        </animated.div>
      )}
    </Transition>
  );
};

export default FormularioContacto;
