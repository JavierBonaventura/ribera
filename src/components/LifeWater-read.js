import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import close from "../images/close-life.png";
import iconIg from "../images/icon-ig.png";
import "../App.css";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";

const LifeWater = () => {
  const location = useLocation();

  const playfairFontItalic = {
    fontFamily: "Playfair Italic, serif",
    fontWeight: "normal",
    fontStyle: "italic",
  };

  const playfairFontRegular = {
    fontFamily: "Playfair Regular, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const playfairFontBlack = {
    fontFamily: "Playfair Black, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  const robotoFontRegular = {
    fontFamily: "Roboto Regular , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
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
          <div className="bg-[#F3EEE3]">
            <header className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl py-5 xl:py-10 px-5 2xl:px-0 fixed top-0 left-0 right-0 z-40 ">
              <div class="flex justify-between items-center  ">
                <div class="">
                  <Link to="/">
                    <img src={logo} alt="" className="w-24 md:w-28" />
                  </Link>
                </div>
                <div class="mt-4">
                  <Link to="/MenuHamburguesa">
                    <img src={hambur} alt="" className="w-7" />
                  </Link>
                </div>
              </div>
            </header>

            <div class="container mx-auto max-w-screen-xl xl:max-w-screen-2xl pt-24 md:px-5 2xl:px-0  ">
              <div class="absolute left-1/2 top-32  hover:scale-90 -translate-x-1/2 z-50 border border-transparent rounded-full hover:border-[#C4B27D] hover:transf transition ease-in-out duration-500">
                <Link to="/lifewater">
                  <img src={close} alt="" className="w-12 2xl:w-16 " />
                </Link>
              </div>
              <div class="pt-24 md:pb-10 lg:pt-24 2xl:pt-36 flex flex-col gap-y-5 2xl:gap-y-10">
                <div class="flex flex-col justify-center items-center md:mt-0 md:gap-y-0">
                  <h1
                    style={playfairFontItalic}
                    class="text-[#5f5f5e] text-xs md:text-lg tracking-widest"
                  >
                    <i style={playfairFontItalic}>Patagonian Spirit</i>
                  </h1>
                  <h2
                    style={playfairFontBlack}
                    className="text-base md:text-2xl text-[#C4B27D] text-center tracking-wider uppercase"
                  >
                    Life Water
                  </h2>
                </div>
              </div>
            </div>

            <div className="container mx-auto max-w-screen-xl xl:max-w-screen-2xl md:px-5 2xl:px-0 relative pb-10 ">
              <div className="flex flex-col gap-y-10 ">
                <div className="flex flex-col justify-center items-center mt-10 md:mt-0 md:gap-y-0 w-2/5 mx-auto">
                  <p
                    style={playfairFontRegular}
                    className="text-[#000000] text-xs lg:text-base lg:leading-7 tracking-wider text-justify"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore pariatur ratione facere quis? Ea asperiores facilis
                    optio, adipisci voluptates iste expedita earum beatae quam
                    consequuntur iure consequatur laborum cupiditate totam!
                    Doloremque asperiores, aliquam qui, perferendis numquam
                    expedita quaerat vero iure quidem deserunt quam! Harum
                    quaerat ipsam accusamus maxime rem impedit, dolorum soluta,
                    dolor, quia odit reiciendis. Cumque dolorum voluptatum
                    suscipit. Atque, enim officiis tenetur voluptas commodi nemo
                    voluptates illo aliquam ducimus voluptatem quo qui minima
                    veniam, consequatur ullam voluptatum ex omnis eum ipsum!
                    Minima, mollitia porro. A non repellendus dolorum? Delectus,
                    iure! Possimus sed odio aspernatur aliquid officia quis at
                    quisquam magnam neque, voluptates provident nesciunt error
                    hic adipisci excepturi. Aut veniam minus nemo possimus
                    recusandae animi nisi nam dolore! Doloribus qui quisquam
                    culpa mollitia quia officia. Laboriosam voluptatibus fuga
                    necessitatibus quibusdam beatae ad, aperiam nemo pariatur
                    dolorum deleniti aspernatur exercitationem illum iusto
                    dolores, id impedit hic quae eos officia! Explicabo,
                    architecto eos, reiciendis facilis, tempora in dolor
                    assumenda quisquam repellat qui iusto. Maiores deleniti
                    reiciendis ad, molestias dolorum similique ex placeat,
                    consequuntur exercitationem hic corporis accusamus aperiam
                    modi expedita? Id nulla quidem cupiditate saepe magni,
                    eveniet molestiae vel, suscipit ex eum quibusdam ducimus.
                    Dolores aliquid nam enim sed laboriosam ex similique
                    excepturi ipsum, neque perferendis placeat deserunt vel?
                    Fuga?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default LifeWater;
