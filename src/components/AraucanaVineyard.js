import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import ilustracionSpirit from "../images/ilustracion-sprit.png";
import iconIg from "../images/icon-ig.png";
import "../App.css";

const ConstructionPage = () => {
  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };
  const playfairFontItalic = {
    fontFamily: "Playfair Italic , sans-serif",
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

  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  return (
    <div>
      <body class="bg-[#F2ECE1] ">
      <header className="py-3 fixed top-0 left-0 right-0 z-50 ">
          <div class="container mx-auto">
            <div class="flex justify-between items-center px-5">
              <div class="w-20 md:w-36">
                <img src={logo} alt="" class="w-full" />
              </div>

              <div class="w-8">
                <Link to="/MenuHamburguesa">
                  <img src={hambur} alt="" className="w-full" />
                </Link>{" "}
              </div>
            </div>
          </div>
        </header>

        <div class="container mx-auto">
          <div class="py-5">
            <div class="flex flex-col justify-center items-center mt-10">
              <h1 class="text-black text-xs" style={playfairFontItalic}>
                Patagonian Spirit
              </h1>
              <h2
                class="uppercase text-[#C4AC77] text-sm"
                style={playfairFontBold}
              >
                Araucana Vineyard
              </h2>
            </div>
          </div>

          <div class="md:py-20">
            <img
              src={ilustracionSpirit}
              alt=""
              class="w-full md:w-2/3 mx-auto"
            />
          </div>

          <div class="flex flex-col gap-y-5 px-10 md:text-center">
            <div>
              <h1
                class="uppercase text-[#C4AC77] text-sm"
                style={robotoFontRegular}
              >
                Bodega Ribera del Cuarzo
              </h1>
            </div>
            <div>
              <p
                class="text-black text-xs md:text-xl"
                style={playfairFontRegular}
              >
                We are currently undergoing our 6th harvest. We have already
                planted twenty-two additional hectares at the foot of the bard
                and foresee reaching up to forty. <br />
                <br />
                <strong>
                  Forty hectares of a land that continues and enhances the
                  legacy of that self-same bottle from 2008
                </strong>
                , which reaffirmed our conviction that a life long project would
                again begin in Patagonia.
              </p>
            </div>
          </div>
          <div class="py-20">
            <div class="flex justify-center">
              <div class="border border-[#C3B17D] rounded-full p-7">
                <img src={iconIg} alt="" class="w-5" />
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default ConstructionPage;
