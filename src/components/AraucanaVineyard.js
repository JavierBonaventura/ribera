import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import ilustracionSpirit from "../images/ilustracion-sprit.png"
import iconIg from "../images/icon-ig.png";
import "../App.css";

const ConstructionPage = () => {
  return (
    <div>
      <body class="bg-[#F2ECE1]">
        <header class="py-3">
          <div class="container mx-auto">
            <div class="flex justify-between items-center">
              <div class="w-1/3">
                <img src={logo} alt="" class="w-full" />
              </div>

              <div class="w-8">
              <Link to="/MenuHamburguesa">
                <img src={hambur} alt="" className="w-full" />
              </Link>                </div>
            </div>
          </div>
        </header>

        <div class="container mx-auto">
          <div class="py-5">
            <div class="flex flex-col justify-center items-center">
              <h1 class="text-black text-xs">Patagonian Spirit</h1>
              <h2 class="uppercase text-[#C4AC77] text-sm">
                Araucana Vineyard
              </h2>
            </div>
          </div>

          <div class="">
            <img src={ilustracionSpirit} alt="" class="w-full" />
          </div>

          <div class="flex flex-col gap-y-5">
            <div>
              <h1 class="uppercase text-[#C4AC77] text-sm">
                Bodega Ribera del Cuarzo
              </h1>
            </div>
            <div>
              <p class="text-black text-xs">
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
