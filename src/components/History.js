import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import ilustrationHistory from "../images/ilustracion-history.png"
import arrowDown from "../images/arrow-down.png"
import personasHistory from "../images/personas-history.jpeg"
import paisajeHistory from "../images/paisaje-history.jpg"
import botellasRibera from "../images/botellas-ribera.jpg"
import ninosHistory from "../images/ninos-history.jpeg"
import iconIg from "../images/icon-ig.png";
import carruajeHistory from "../images/carruaje-history.jpg"
import "../App.css";

const History = () => {
  return (
    <div>
      <body class="bg-[#F2ECE1]">
        <header class="py-3">
          <div class="container mx-auto">
            <div class="flex justify-between items-center px-5">
              <div class="w-1/3">
                <img src={logo} alt="" class="w-full" />
              </div>

              <div class="w-8">
              <Link to="/MenuHamburguesa">
                <img src={hambur} alt="" className="w-full" />
              </Link>              </div>
            </div>
          </div>
        </header>

        <div class="container mx-auto">
          <div class="py-5">
            <div class="flex flex-col justify-center items-center">
              <h1 class="text-black text-xs">Family</h1>
              <h2 class="uppercase text-[#C4AC77] text-sm font-bold">
                Our History
              </h2>
            </div>
          </div>

          <div class="relative flex justify-center items-center">
            <img src={ilustrationHistory} alt="" class="w-full" />
            <h1 class="text-[#C4AC77] text-5xl absolute font-bold">
              1883 - 2023
            </h1>
          </div>

          <div class="py-28">
            <div class="flex justify-center">
              <div class="border border-[#C3B17D] rounded-full p-6 relative flex justify-center items-center">
                <img src={arrowDown} alt="" class="w-1.5 absolute" />
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex">
          <div class="w-1/3"></div>
          <div class="w-2/3">
            <img src={ninosHistory} alt="" />
          </div>
        </div>

        <div class="container mx-auto px-10">
          <div class="flex flex-col gap-y-2 pt-5 pb-32">
            <div>
              <h1 class="text-[#C4AC77] font-bold text-sm">1883</h1>
              <h2 class="uppercase text-[#C4AC77] text-sm">
                Roots in patagonia
              </h2>
            </div>
            <div>
              <p class="text-black text-xs">
                We have our
                <strong>
                  roots in Patagonia and in winemaking stretching back over 150
                  years
                </strong>
                . Stemming from two very different origins, Bodega del Cuarzo
                seems to be the synthesis of those two powerful forces. <br />
                <br />
                On my grandmothers side
                <strong>
                  Melchor Concha y Toro started his winery in 1883
                </strong>
                , only a few years after, in 1875, Jose Menendez had started his
                wool producing and shipping company in far away Patagonia.
              </p>
            </div>
          </div>
        </div>

        <div class="container mx-auto bg-[#212121]">
          <div class="pt-32 pb-10">
            <div class="-mt-52 px-4">
              <img
                src={personasHistory}
                alt=""
                class="w-full object-cover"
              />
            </div>
            <p class="text-white text-xs pt-10 px-10">
              Stories of how these two individuals worked hard to create their
              ventures intertwine in dinner conversations over generations.
              <br />
              <br />
              I have come to believe that the coincidence of these two pioneers,
              having thousands of miles apart but almost at the same time
              successfully developed their companies, was the mysterious merging
              force that lead to the creation of Bodega del Cuarzo. <br />
              <br />
              Patagonia was the place where we spent the summers of my childhood
              and where I had travelled many times in my youth. It was always a
              place where I truly found myself at home. Amidst the wind flat
              topped hills, the enormous open spaces and the gigantic mountains
              where distances are dwarfed only by an infinite sky the idea of
              setting up a winery little by little started to materialize.
            </p>
          </div>
        </div>
        <div><img src={carruajeHistory} alt="" /></div>

        <div class="container mx-auto bg-[#F2ECE1] px-10">
          <div class="flex justify-center py-2">
            <span class="uppercase text-[0.5rem]">Sunset at valle azul</span>
          </div>
          <div class="py-10 flex flex-col gap-y-5">
            <div>
              <h1 class="text-[#C4AC77] font-bold text-sm uppercase">
                The 2000´s
              </h1>
              <h2 class="uppercase text-[#C4AC77] text-sm">
                Working with Nicolas Catena
              </h2>
            </div>
            <div class="">
              <p class="text-black text-xs">
                <strong>
                  My career in wines started as a very young person
                </strong>
                , I joined the winery of Doctor <strong>Nicolas Catena</strong>{" "}
                and at his side discovered the fascinating world of wine which
                has become my life. learned from him every detail of how to
                cultivate the best grapes, how to produce the best wines and
                above all how to never ever relinquish in the pursuit of
                excellence. <br />
                <br />
                From the distribution of wines the next logical step for our
                company was to fine a unique place to create a new winery.
                <strong>
                  A place wheere we could produce something truly exceptional.
                  Almost by magical coincidence the piecesof the puzzle fell
                  into place
                </strong>
                .
              </p>
            </div>
          </div>
        </div>

        <div class="container mx-auto bg-[#212121]">
          <div class="py-5">
            <img src={paisajeHistory} alt="" class="-mb-10" />
          </div>
        </div>

        

        <div class="container mx-auto bg-[#F2ECE1] px-10">
          <div class="py-10 flex flex-col gap-y-5">
            <div>
              <h1 class="text-[#C4AC77] font-bold text-sm uppercase">
                The 2000´s
              </h1>
              <h2 class="uppercase text-[#C4AC77] text-sm">
                Working with Nicolas Catena
              </h2>
            </div>
            <div class="">
              <p class="text-black text-xs">
                The story of this winery started in 2004, when italian countess
                Noemi Marone Cinzano discovered this far away land, planted a
                five hectares vineyard at the foot of the barda (a specific
                patagonian landscape, a kind of cliff or hill made of a dark
                grain of volcanic rock, with plenty of quartz, carbonate calcium
                and calcareus) and began producing wine in a Burgundy style -
                the winery built right by the vineyard with small concrete open
                top pools for craft production, employing pisage.
                <br />
                <br />
                When I first tasted the 2008 vintage, I knew Noemi had found a
                real terroir. During ten years I explored all other nearby
                places in Patagonia where to produce an equal taste. I finally
                concluded the conditions in Valle Azul were perfect. <br />
                <br />
                An extraordinary coincidence brought me together with the
                Countess and we finally came to an agreement through which we
                could manage the land and the winery for a very long period of
                time and thus invest in a larger and better operation to produce
                an exceptional wine.
              </p>
            </div>
          </div>
        </div>

        <div class="container mx-auto bg-[#212121]">
          <div class="pt-10 pb-5">
            <h1 class="uppercase text-[#C4AC77] font-bold text-sm text-center">
              Bodega Ribera del Cuarzo
            </h1>
          </div>
        </div>

        <div class="w-full">
          <img src={botellasRibera} alt="" class="w-full" />
        </div>

        <div class="container mx-auto bg-[#212121]">
          <div class="py-10">
            <h1 class="text-center text-sm text-[#F2ECE1]">
              Creating unique wines in Patagonia <br />
              veer in winegrowing at the foot of the "barda". <br />
              Small family run winery
            </h1>
          </div>
          <div class="pb-20">
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

export default History;
