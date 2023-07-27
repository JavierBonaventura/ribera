import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import imgWater from "../images/water1.png";
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
          <div>
            <body class="bg-[#F2ECE1] ">
              <header className="container mx-auto max-w-screen-xl py-10 fixed top-0 left-0 right-0 z-50 px-5 md:px-0 md:py-2 ">
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

              <div class="container mx-auto max-w-screen-xl">
                <div class="pt-16 md:pt-32 pb-5">
                  <div class="flex flex-col justify-center items-center mt-10  md:mt-0 md:gap-y-0 ">
                    <h1
                      class="text-[#5f5f5e] text-xs md:text-base tracking-widest"
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
                </div>

                <div class="px-4 md:px-0 ">
                  <img src={imgWater} alt="" class="w-full md:w-2/3 mx-auto " />
                </div>

                <div class="flex flex-col gap-y-2  pt-8">
                  <div>
                    <p
                      class="text-black text-xs tracking-wider text-justify px-10 md:px-32 md:w-3/4 mx-auto md:text-lg"
                      style={playfairFontRegular}
                    >
                      The Countess planted the vineyard in the highest part of
                      the <i>barda</i>, an unexplored area where no one had ever
                      considered such an endeavor: it required bringing water
                      for irrigation using pumps, at enormous cost. Until then,
                      vineyard productions in the Rio Negro Valley had been
                      carried out alongside the river, where water was obtained
                      through canals and gates, an economic irrigation system
                      known as flood irrigation.
                      <br />
                      <br />
                      Nevertheless, the Countess decided to plant up there
                      because she believed that what she would produce would be
                      worth the effort. Without calculating the costs, she
                      embarked on building a pump system that brought water 3
                      kilometers uphill. When we finally took over the vineyard,
                      we had faith that in the short term, renewable energy,
                      perhaps wind or solar, would allow us to transform that
                      cost into something reasonable. In any case, the risk was
                      worth it. <br />
                      <br />
                      Some time later, a local man spoke to us about water. This
                      kind man, Facundo Catriel, told us that abundant water
                      could be found at the foot of the <i>barda</i>. Although
                      it seemed unlikely, we decided to drill some wells. Water
                      gushed and flowed to the surface with force. These wells
                      now produce around 200,000 liters per hour, significantly
                      reducing our costs. We listen to nature and special
                      people.{" "}
                      <strong>
                        Today, Ribera del Cuarzo follows a virtuous cycle of
                        respect for the environment, and the reward is a wine
                        that never ceases to amaze us
                      </strong>
                      .
                    </p>
                  </div>
                </div>
                <div class="container mx-auto  max-w-screen-xl bg-[#F2ECE1]">
                  <div class="py-20">
                    <div class="flex justify-center">
                      <a
                        class="border border-[#C3B17D] rounded-full p-7"
                        href="https://www.instagram.com/riberadelcuarzo/"
                        target="_blank"
                      >
                        <img src={iconIg} alt="" class="w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </body>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default LifeWater;
