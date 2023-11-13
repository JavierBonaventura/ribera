import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        menu: {
          titleA: "History",
          optionA1: "Family",
          optionA2: "Valle Azul, Patagonia",
          titleB: "Patagonian Spirit",
          optionB1: "Araucana Vineyard",
          optionB2: "Work in the Vineyard",
          optionB3: "Work in the Winery",
          optionB4: "Life on the Estate",
          optionB5: "Water for Life",
          titleC: "Wines",
          optionC1: "In Argentina",
          optionC2: "In the world",
          footerOptionA: "Contact",
          footerOptionB: "Our distribution office",
          footerOptionC: "Press",
        },
        contact: {
          title: "Contact",
          titleA: "Our offices",
          titleB: "Our winery",
          titleC: "Follow us!",
          inputFormA: "Name",
          inputFormB: "Last name",
          inputFormC: "E-mail",
          inputFormD: "Country",
          inputFormE: "Message",
          btnForm: "Send",
        },
        history: {
          family: {
            title: "History",
            subtitle: "Family",
            titleFirstParagraph: "Roots in patagonia",
            firstParagraphA:
              "We have our <strong> roots in Patagonia and in winemaking stretching back over 150 years</strong>. Stemming from two very different origins, Bodega Ribera del Cuarzo seems to be the synthesis of those two powerful forces.",
            firstParagraphB:
              "“On my grandmother's side,<strong> Melchor Concha y Toro started his winery in 1883</strong>, only a few years after Jose Menéndez had started his wool producing and shipping company in far away Patagonia.",
            firstParagraphC:
              "Stories of how these two individuals worked hard to create their ventures intertwine in dinner conversations over generations.",
            firstParagraphD:
              "I have come to believe that the coincidence of these two pioneers, having thousands of miles apart but almost at the same time successfully developed their companies, was the mysterious merging force that led to the creation of Bodega Ribera del Cuarzo.",
            secondParagraph:
              "Patagonia was the place where we spent the summers of my childhood and where I had traveled many times in my youth. It was always a place where I truly found myself at home. Amidst the wind flat topped hills, the enormous open spaces and the gigantic mountains where distances are dwarfed only by an infinite sky the idea of setting up a winery little by little started to materialize. <br /> <br /> My career in wines started when, as a very young person, I joined the winery of Dr. Nicolas Catena and at his side discovered the fascinating world of wine which has become my life. I Iearned from him every detail of how to cultivate the best grapes, how to produce the best wines and above all how to never ever relinquish in the pursuit of excellence.",
            altImg: "Sunset at Valle Azul",
            thirdParagraph:
              "Finally, the day arrived—the moment when I could merge my love for my Patagonian homeland with the unwavering passion for wine instilled within me since childhood. This unique opportunity, which we tirelessly pursue each day, is embodied in the name of Bodega Ribera del Cuarzo. Here, we strive to craft the finest wines, honoring our heritage and expressing the essence of our beloved land.”",
            titleGallery: "Gallery",
          },
          valleAzul: {
            title: "History",
            subtitle: "Valle Azul",
            firstParagraph:
              "The story of this winery started in 2001, when italian countess Noemi Marone Cinzano discovered this far away land, planted a 5 hectares vineyard at the foot of the <i>barda</i> (a specific patagonian landscape, a steep cliff or hill made of a dark grain of volcanic rock, with plenty of quartz, carbonate calcium and calcareous) and began producing wine in a Burgundy style - the winery built right by the vineyard with small concrete open top pools for craft production, employing pigeage.",
            secondParagraph:
              "When we first tasted the 2008 vintage, we knew Noemi had found a real terroir. During ten years we explored all other nearby places in Patagonia where to produce an equal taste. We finally concluded the conditions in Valle Azul were perfect. <br /> <br /> An extraordinary coincidence brought Menéndez together with the Countess 10 years after having tasted that first memorable glass. Touched by Felipe´s passion and commitment, the Countess granted us the privilege to start producing our wines at that very land she had discovered. In 2018, Bodega Ribera del Cuarzo was born.",
          },
        },
      },
    },
    es: {
      translation: {
        menu: {
          titleA: "Historia",
          optionA1: "Familia",
          optionA2: "Valle Azul, Patagonia",
          titleB: "Espíritu patagónico",
          optionB1: "El Viñedo araucana",
          optionB2: "Trabajo en la viña",
          optionB3: "Trabajo en bodega",
          optionB4: "La vida en la finca",
          optionB5: "Agua de vida",
          titleC: "Vinos",
          optionC1: "En el mundo",
          optionC2: "En Argentina",
          footerOptionA: "Contacto",
          footerOptionB: "Oficina de distribución",
          footerOptionC: "Prensa",
        },
        contact: {
          title: "Contacto",
          titleA: "Nuestras oficinas",
          titleB: "Nuestra bodega",
          titleC: "¡Seguinos!",
          inputFormA: "Nombre",
          inputFormB: "Apellido",
          inputFormC: "E-mail",
          inputFormD: "País",
          inputFormE: "Mensaje",
          btnForm: "Enviar",
        },
        history: {
          family: {
            title: "Historia",
            subtitle: "Familia",
            titleFirstParagraph: "-",
            firstParagraphA: "-",
            firstParagraphB: "-",
            firstParagraphC: "-",
            firstParagraphD: "-",
            secondParagraph: "-",
            altImg: "-",
            thirdParagraph: "-",
            titleGallery: "Galeria",
          },
          valleAzul: {
            title: "Historia",
            subtitle: "Valle Azul",
            firstParagraph: "-",
            secondParagraph: "-",
          },
        },
      },
    },
  },
  lng: "en", // Idioma predeterminado
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
