import React from "react";
import BgAraucanaRioCiervos from "../images/bg-araucana-rio-ciervos.jpg";
import "../App.css";

const bg = {
  background: 'url("' + BgAraucanaRioCiervos + '") no-repeat center center fixed',
  backgroundSize: 'cover',
};

function Araucana() {
  return (
    <div className="flex justify-center items-center h-5">
      {/* <div className="contenedor">
        <img src={BgAraucanaRioCiervos} className="imagen" alt="Araucana" />
      </div> */}
      <div className="container contenedor mx-auto max-w-screen-xl xl:max-w-screen-2xl">
      <img src={BgAraucanaRioCiervos} className="imagen" alt="Araucana" />
                <div className="p-6 absolute top-0 w-full h-full ">
                  <div className="border w-full h-full "></div>
                </div>
                <div className="p-8 absolute top-0 w-full h-full ">
                  <div className="border w-full h-full "></div>
                </div>
              
            </div>
    </div>
  );
}

export default Araucana;
