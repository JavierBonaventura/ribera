import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import ilustrationHistory from "../images/ilustracion-history.png";
import arrowDown from "../images/arrow-down.png";
import personasHistory from "../images/personas-history.jpeg";
import botellasRibera from "../images/botellas-ribera.jpg";
import ninosHistory from "../images/ninos-history.jpeg";
import iconIg from "../images/icon-ig.png";
import carruajeHistory from "../images/carruaje-history.jpg";
import "../App.css";

const Family = () => {

  const bondiniFontRegular = {
    fontFamily: "Bondini, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

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

  const playfairFontExtraBold = {
    fontFamily: "Playfair ExtraBold , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const robotoFontThin = {
    fontFamily: "Roboto Thin , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

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

  return (
    <div>
      <body class="bg-[#F2ECE1]">
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
              <h1 style={playfairFontItalic} class="text-black text-xs">
                Family
              </h1>
              <h2
                style={playfairFontBold}
                class="uppercase text-[#C4AC77] text-sm font-bold"
              >
                Our History
              </h2>
            </div>
          </div>

          <div class="relative flex justify-center items-center">
            <img src={ilustrationHistory} alt="" class="w-full" />
            <h1
              style={playfairFontExtraBold}
              class="text-[#C4AC77] text-5xl absolute font-bold"
            >
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
              <h1
                style={playfairFontBlack}
                class="text-[#C4AC77] font-bold text-sm"
              >
                1883
              </h1>
              <h2
                style={robotoFontRegular}
                class="uppercase text-[#C4AC77] text-sm"
              >
                Roots in patagonia
              </h2>
            </div>
            <div>
              <p class="text-black text-xs" style={playfairFontRegular}>
                We have our{" "}
                <strong>
                  roots in Patagonia and in winemaking stretching back over 150
                  years
                </strong>
                . Stemming from two very different origins, Bodega del Cuarzo
                seems to be the synthesis of those two powerful forces. <br />
                <br />
                On my grandmothers side{" "}
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
              <img src={personasHistory} alt="" class="w-full object-cover" />
            </div>
            <p
              class="text-white text-xs pt-10 px-10"
              style={playfairFontRegular}
            >
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
        <div>
          <img src={carruajeHistory} alt="" />
        </div>

        <div class="container mx-auto bg-[#212121]">
          <div class="pt-10 pb-5">
            <h1
              style={playfairFontBlack}
              class="uppercase text-[#C4AC77] text-sm text-center"
            >
              Bodega Ribera del Cuarzo
            </h1>
          </div>
        </div>

        <div class="w-full">
          <img src={botellasRibera} alt="" class="w-full" />
        </div>

        <div class="container mx-auto bg-[#212121]">
          <div class="py-10">
            <h1 style={bondiniFontRegular} class="text-center text-sm text-[#F2ECE1]">
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

export default Family;
