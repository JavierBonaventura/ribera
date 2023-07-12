import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hambur from "../images/menu-hambur.png";
import workVineyardSlide3 from "../images/workVineyardSlide3.jpg";
import iconIg from "../images/icon-ig.png";
import "../App.css";
import { useLocation } from "react-router-dom";
import { Transition, animated } from "@react-spring/web";

const LifeWater = () => {
  const location = useLocation();

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
              <header className="py-10 fixed top-0 left-0 right-0 z-50 ">
                <div class="container mx-auto ">
                  <div class="flex justify-between items-center px-5">
                    <div class="w-20 md:w-36">
                      <Link to="/">
                        <img src={logo} alt="" className="w-full" />
                      </Link>{" "}
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
                <div class="pt-16 pb-5">
                  <div class="flex flex-col justify-center items-center mt-10 gap-y-2">
                    <h1
                      class="text-black text-xs tracking-widest"
                      style={playfairFontItalic}
                    >
                      Patagonian Spirit
                    </h1>
                    <h2
                      class="uppercase text-[#C4AC77] text-sm tracking-wider"
                      style={playfairFontBold}
                    >
                      Life Water
                    </h2>
                  </div>
                </div>

                <div class="md:py-20">
                  <img
                    src={workVineyardSlide3}
                    alt=""
                    class="w-full md:w-2/3 mx-auto"
                  />
                </div>

                <div class="flex flex-col gap-y-2 px-10 md:text-center pt-8">
                  <div>
                    <p
                      class="text-black text-xs md:text-xl tracking-wider"
                      style={playfairFontRegular}
                    >
                      The Countess planted the vineyard in the highest part of
                      the barda, an unexplored area where no one had ever
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
                      could be found at the foot of the barda. Although it
                      seemed unlikely, we decided to drill some wells. Water
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
            </body>
          </div>
        </animated.div>
      )}
    </Transition>
  );
};

export default LifeWater;
