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
          <body className="bg-[#F2ECE1]">
            <header className="container mx-auto max-w-screen-xl py-10 fixed top-0 left-0 right-0 z-50 px-5 md:px-0 md:py-2 ">
              <div class="flex justify-between items-center ">
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

            <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl relative">
              <div class="absolute left-1/2 top-10 transform -translate-x-1/2">
                <Link to="/lifewater">
                  <img src={close} alt="" className="w-16" />
                </Link>
              </div>
              <div className="pt-16 md:pt-32 pb-5 flex flex-col gap-y-10 ">
                <div className="flex flex-col justify-center items-center mt-10 md:mt-0 md:gap-y-0 ">
                  <h1
                    className="text-[#5f5f5e] text-xs md:text-base tracking-widest"
                    style={playfairFontItalic}
                  >
                    <i style={playfairFontItalic}>Patagonian Spirit</i>
                  </h1>
                  <h2
                    style={playfairFontBlack}
                    className="text-base md:text-xl text-[#C4AC77] text-center tracking-wider uppercase"
                  >
                    Life Water
                  </h2>
                </div>

                <div className="flex flex-col justify-center items-center mt-10 md:mt-0 md:gap-y-0 w-2/5 mx-auto ">
                  <p
                    style={playfairFontRegular}
                    className="text-black text-lg tracking-wider text-justify "
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
          </body>
        </animated.div>
      )}
    </Transition>
  );
};

export default LifeWater;
