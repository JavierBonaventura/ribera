import React from "react";
import logoDesktop from "../../src/images/logo-home-mob.png";
import bgPopup from "../../src/images/bg-popup.png";
import { useTranslation } from "react-i18next";

function AgeConfirmationPopup({ onAgeConfirmed }) {
  const { t, i18n } = useTranslation();
  const handleAgeConfirmed = (isAdult) => {
    onAgeConfirmed(isAdult);
  };

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

  const playfairFontExtraBold = {
    fontFamily: "Playfair ExtraBold , sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
  };

  return (
    <div
      className=" w-full h-full fixed flex flex-col items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgPopup})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-y-5">
        <div>
          <img src={logoDesktop} alt="" className="w-32 md:w-44" />
        </div>
        <div className="flex flex-col gap-y-7">
          <h1
            className="text-[#c4b27d] text-center text-xl  md:text-3xl tracking-wide"
            style={playfairFontItalic}
          >
            {t("popup.title")}
          </h1>
          <p
            className="text-[#F3EEE3] text-center text-lg md:text-2xl  tracking-widest leading-7"
            style={playfairFontExtraBold}
            dangerouslySetInnerHTML={{
              __html: t("popup.text"),
            }}
          ></p>
          <div
            className="text-[#F3EEE3] flex justify-center gap-x-5 text-base md:text-xl  "
            style={playfairFontRegular}
          >
            <div className="bg-transparent py-0.5 px-4 border border-[#c4b27d] hover:bg-[#c4b27d] transition ease-in-out duration-300">
              <button
                className="tracking-widest  uppercase"
                onClick={() => handleAgeConfirmed(true)}
              >
                {t("popup.btnOk")}
              </button>
            </div>
            <div className="bg-transparent py-0.5 px-5 border border-[#c4b27d] hover:bg-[#c4b27d] transition ease-in-out duration-300">
              <button
                className="tracking-widest"
                onClick={() => handleAgeConfirmed(false)}
              >
                NO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgeConfirmationPopup;
