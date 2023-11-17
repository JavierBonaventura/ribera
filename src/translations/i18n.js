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
        popup: {
          title: "Welcome",
          text: "Are you of legal drinking age <br /> in your country?",
          btnOk: "Yes",
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
        press: {
          title: "Press",
          subtitle: "RIBERA MOMENTS - In the news",
          date: {
            2023: {
              5: "October 6, 2023",
              4: "September 15, 2023",
              3: "September 06, 2023",
              2: "May 31, 2023",
              1: "May 22, 2023",
            },
            2022: {
              3: "December 30, 2022",
              2: "April 13, 2022",
              1: "February 8, 2022",
            },
          },
          btn: "Read more",
        },
        history: {
          title: "History",
          family: {
            title: "Family",
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
            title: "Valle Azul",
            firstParagraph:
              "The story of this winery started in 2001, when italian countess Noemi Marone Cinzano discovered this far away land, planted a 5 hectares vineyard at the foot of the <i>barda</i> (a specific patagonian landscape, a steep cliff or hill made of a dark grain of volcanic rock, with plenty of quartz, carbonate calcium and calcareous) and began producing wine in a Burgundy style - the winery built right by the vineyard with small concrete open top pools for craft production, employing pigeage.",
            secondParagraph:
              "When we first tasted the 2008 vintage, we knew Noemi had found a real terroir. During ten years we explored all other nearby places in Patagonia where to produce an equal taste. We finally concluded the conditions in Valle Azul were perfect. <br /> <br /> An extraordinary coincidence brought Menéndez together with the Countess 10 years after having tasted that first memorable glass. Touched by Felipe´s passion and commitment, the Countess granted us the privilege to start producing our wines at that very land she had discovered. In 2018, Bodega Ribera del Cuarzo was born.",
          },
        },
        patagonian: {
          title: "Patagonian Spirit",
          araucanaVineyard: {
            title: "Araucana Vineyard",
            firstParagraph:
              "The Araucana Vineyard is much more than just unique. Located in Ribera del Cuarzo, no other vineyard in Patagonia or the world can boast of being so close to the <i>barda</i> or enjoying such privacy. <br /> <br /> The soils of Araucana are predominantly aeolian, meticulously shaped over countless eras by wind erosion. Enriched with volcanic ash and potassium, and with a high content of calcium carbonate, they have a crucial and remarkably uncommon chemical composition, not only for Patagonia but for the world.",
            secondParagraph:
              "Adding to its singularity is the <i>barda</i> (river terrace). The texture of the surface is due to a combination of quartz and calcium carbonate, locally known as “Indian cement”. As it erodes and integrates into the soil, it transfers its exceptional qualities to our grapes.",
          },
          workVineyard: {
            title: "Work in the Vineyard",
            titleSlider1: "-",
            paragraphSlider1:
              "In our work, all the naturally organic components that the vineyard allows us to take and preserve come into play. The Patagonian wind is a key factor, and the constant breeze along with low ambient humidity conditions combine as a natural mechanism for disease control. The entire vineyard surface features biological corridors that generate a free and natural circulation of permanent flora and fauna, benefiting further from the isolated estate situation without other surrounding crops.",
            paragraphSlider1Mobile:
              "In our work, all the naturally organic components that the vineyard allows us to take and preserve come into play. The Patagonian wind is a key factor, and the constant breeze along with low ambient humidity conditions combine as a natural mechanism for disease control. The entire vineyard surface features biological corridors that generate a free and natural circulation of permanent flora and fauna, benefiting further from the isolated estate situation without other surrounding crops. Our philosophy revolves around nurturing plants to self-regulate throughout their growth cycle, intervening as little as possible and providing support so they can make decisions autonomously. Our role is to guide them towards their maximum expression and quality.",
            titleSlider2: "Pruning",
            paragraphSlider2:
              "We embrace traditional vineyard management techniques, such as Guyot pruning, using bilateral cane. This pruning method enables the plants to regulate their resources to achieve a better balance between root growth and fruit development.",
            titleSlider3: "Tying",
            paragraphSlider3:
              "In this process, we use plant-based and biodegradable materials in an effort to respect the environment as much as possible.",
            titleSlider4: "Topping",
            paragraphSlider4:
              "Controlled growth management favors minimal intervention, leading to better plant balance and reduced use of human and mechanical resources.",
            titleSlider5: "Harvest",
            paragraphSlider5:
              "Harvesting in our vineyard is a meticulous process carried out manually and in several stages. The unique characteristics of each subsection within our five-hectare estate, with different grape varieties and maturation cycles, require harvesting at distinct times.",
            titleSlider6: "Weeds",
            paragraphSlider6:
              "We implement traditional control methods, avoiding the use of herbicides. Between rows, we prioritize the development of our pastures and the natural flora of the environment.",
            titleSlider7: "Ancient Techniques",
            paragraphSlider7:
              "Maintaining traditional work methods helps us never lose sight of our connection with the land, which defines us as farmers. In addition to using tractors and other machinery to be efficient in specific tasks, working with animals like our Criollo horses, an Argentine breed, is a form of respect and care for nature, seeking to be rewarded with the finest flavor.",
          },
          workWinery: {
            title: "Work in the Winery",
            titleSlider1: "Fermentation",
            paragraphSlider1:
              "Fermentation takes place in open-top concrete pools, each with a capacity of about 2000 kilograms, where we work very small and select batches from the vineyard. During the process, the tasks performed are respectful and careful, with minimal intervention, aimed at achieving spontaneous fermentation with vineyard-specific or certified organic yeasts. We do not use additives or clarifiers. We follow traditional methods such as manual pressing and délestage, especially with our Malbec grapes, and gentle remontage during the final stages. Maceration times are short, between 12 and 13 days, because we believe that longer times are counterproductive for expressing the freshness of our terroir.",
            paragraphSlider1Mobile:
              "Fermentation takes place in open-top concrete pools, each with a capacity of about 2000 kilograms, where we work very small and select batches from the vineyard. <br /><br /> During the process, the tasks performed are respectful and careful, with minimal intervention, aimed at achieving spontaneous fermentation with vineyard-specific or certified organic yeasts. We do not use additives or clarifiers. <br /> <br /> We follow traditional methods such as manual pressing and délestage, especially with our Malbec grapes, and gentle remontage during the final stages. <br /> <br /> Maceration times are short, between 12 and 13 days, because we believe that longer times are counterproductive for expressing the freshness of our terroir.",
            titleSlider2: "Aging",
            paragraphSlider2:
              "Each batch or small grape vinification will dictate whether aging will be entirely done in barrels or if a portion will be done in concrete tanks or stainless steel vessels. There are wines we want to preserve the fruit in more, and others where we believe adding complexity with wood is necessary. Generally, 70 percent is in used barrels, 100 percent French oak, as we seek a delicate balance and to avoid overwhelming the wines with wood.",
            titleSlider3: "Blending",
            paragraphSlider3:
              "We believe in the magic of crafting exceptional wines through the alchemy of blending. Our passion for the art of winemaking leads us to explore two unique approaches: co-fermentations and the traditional blending technique. We prefer to work with co-fermentations, a technique we find more enriching as it captures the very essence of our terroir. From the moment different grape varieties and parcels enter our cellar, a shared journey begins that spans the entire process. Ultimately, our goal is to merge the past and the future in every bottle we present.",
            paragraphSlider3Mobile:
              "We believe in the magic of crafting exceptional wines through the alchemy of blending. Our passion for the art of winemaking leads us to explore two unique approaches: co-fermentations and the traditional blending technique. <br /><br /> We prefer to work with co-fermentations, a technique we find more enriching as it captures the very essence of our terroir. From the moment different grape varieties and parcels enter our cellar, a shared journey begins that spans the entire process. Ultimately, our goal is to merge the past and the future in every bottle we present.",
            titleSlider4: "Bottling and Labeling",
            paragraphSlider4:
              "We are highly respectful of the bottling and labeling process to adhere to the highest standards. During bottling, we carry out filtration to protect the wine without affecting it significantly, and we maintain strict control during bottling, ensuring safety and quality standards so that the wine, once bottled, evolves and expresses itself at its best.",

            titleSlider5: "Cellaring",
            paragraphSlider5:
              "We believe it's crucial for the wines to undergo a period of bottle aging before reaching the market. Our wines have shown us that they improve significantly with the passing of the years, and this aging period serves as a library and study area. We continuously taste and compare the stored vintages with new ones, learning how our wines evolve based on our practices in each harvest. The evolution is excellent: our wines greatly improve over time in the bottle, which is why aging is so important for us.",
          },
          lifeEstate: {
            title: "Life on the Estate",
            titleSlider1: "The house at the Winery",
            paragraphSlider1:
              "Countess Noemi Marone Cinzano discovered this unparalleled place and laid the foundation for what is now Bodega Ribera del Cuarzo. As in all Italian estates, she built a house by the winery. With Patagonian style and appealing architecture, a small garden overlooks the valley that flows into the river. The house is where we rest after a day's work and where we gather with family to enjoy and celebrate. It's also where we think, plan, and decide alongside those who help us carry out production. We share meals, as it has become our home.",
            titleSlider2: "The River",
            paragraphSlider2:
              "The Río Negro is the largest river in Patagonia. The Limay and Neuquén rivers collect water and minerals from mountain melt before flowing towards the center and east of the country, ultimately merging to form the Río Negro. This river flows into the sea south of Buenos Aires Province, in a small town called El Cóndor. It meanders between two imposing barda walls, one to the north and another to the south, formed over millions of years. In 1860, Estanislao Ceballos described them as river terraces, and they provide invaluable contributions of calcium carbonate, stone, quartz, and ashes. Today, the river runs through this valley, a valley nestled between bardas.",
            paragraphSlider2Mobile:
              "The Río Negro is the largest river in Patagonia. The Limay and Neuquén rivers collect water and minerals from mountain melt before flowing towards the center and east of the country, ultimately merging to form the Río Negro. <br /> <br /> This river flows into the sea south of Buenos Aires Province, in a small town called El Cóndor. It meanders between two imposing barda walls, one to the north and another to the south, formed over millions of years. In 1860, Estanislao Ceballos described them as river terraces, and they provide invaluable contributions of calcium carbonate, stone, quartz, and ashes. Today, the river runs through this valley, a valley nestled between <i>bardas</i>.",
            titleSlider3: "The Horses",
            paragraphSlider3:
              "Maintaining traditional working methods helps us never lose sight of the connection with the land, a connection that defines us as farmers. On the estate, we have Criollo horses, an Argentine breed. In addition to using tractors and machinery for efficiency in specific tasks, working with animals is a form of respect and care for nature. It seeks to be rewarded with the best flavor. Furthermore, the horses play a role in fertilization, contributing to the compost we produce on the estate. But horses also embody a way of life: Living with horses slows things down, allowing us to decelerate and connect with nature, to explore the land at a more measured and profound pace.",
            paragraphSlider3Mobile:
              "Maintaining traditional working methods helps us never lose sight of the connection with the land, a connection that defines us as farmers. On the estate, we have Criollo horses, an Argentine breed. In addition to using tractors and machinery for efficiency in specific tasks, working with animals is a form of respect and care for nature. It seeks to be rewarded with the best flavor.<br /> <br /> Furthermore, the horses play a role in fertilization, contributing to the compost we produce on the estate. But horses also embody a way of life: Living with horses slows things down, allowing us to decelerate and connect with nature, to explore the land at a more measured and profound pace.",
          },
          waterLife: {
            title: "Water of Life",
            subtitle: "Water",
            firstParagraph:
              "The countess planted the vineyard at the highest point of the <i>barda</i>, an unexplored location where no one had even considered such an endeavor before. It required transporting water for irrigation using pumps, incurring significant costs. Until then, productions in the Río Negro valley were carried out alongside the river, with water drawn through channels and gates - an economical flood irrigation system.",
            btn: "Read more",
            readParagraph:
              "The countess planted the vineyard at the highest point of the <i>barda</i>, an unexplored location where no one had even considered such an endeavor before. It required transporting water for irrigation using pumps, incurring significant costs. Until then, productions in the Río Negro valley were carried out alongside the river, with water drawn through channels and gates - an economical flood irrigation system. <br /> <br /> Yet, the countess decided to plant at this elevated site because she believed that what would be produced there would be worth the effort. Without calculating costs, she embarked on building a system of pumps that transported water three kilometers uphill. When we finally took over the vineyard, we trusted that renewable energy, perhaps wind or solar, would eventually transform this cost into something reasonable in the short term. Regardless, the risk was worth taking. <br /> <br /> Some time later, a local man spoke to us about water. This kind gentleman, Facundo Catriel, told us that abundant water could be found at the base of the ridge. Although it seemed unlikely, we decided to drill some wells. Water surged forth with force. These wells now produce around 200,000 liters per hour, significantly reducing our costs. We listened to nature and special individuals. Today, Ribera del Cuarzo follows a virtuous cycle of respecting the environment, and the reward is a wine that never ceases to astonish us.",
            mobileParagraph:
              "The countess planted the vineyard at the highest point of the <i>barda</i>, an unexplored location where no one had even considered such an endeavor before. It required transporting water for irrigation using pumps, incurring significant costs. Until then, productions in the Río Negro valley were carried out alongside the river, with water drawn through channels and gates - an economical flood irrigation system. <br /> <br />Yet, the countess decided to plant at this elevated site because she believed that what would be produced there would be worth the effort. Without calculating costs, she embarked on building a system of pumps that transported water three kilometers uphill. When we finally took over the vineyard, we trusted that renewable energy, perhaps wind or solar, would eventually transform this cost into something reasonable in the short term. Regardless, the risk was worth taking. <br /> <br />Some time later, a local man spoke to us about water. This kind gentleman, Facundo Catriel, told us that abundant water could be found at the base of the ridge. Although it seemed unlikely, we decided to drill some wells. Water surged forth with force. These wells now produce around 200,000 liters per hour, significantly reducing our costs. We listened to nature and special individuals. Today, Ribera del Cuarzo follows a virtuous cycle of respecting the environment, and the reward is a wine that never ceases to astonish us.",
          },
        },
        wines: {
          title: "Wines",
          btnSheet: "Download Technical Sheet",
          btnFooter: "Read more",
          argentina: {
            title: "In Argentina",
            araucanaRioMalbec: {
              paragraph:
                "Río de los Ciervos Malbec´s grapes come from 8 vineyards located along both sides of the river. Through this wine, we aim to showcase the diversity of the classic area of the Rio Negro valley.",
            },
            araucanaRioPinot: {
              paragraph:
                "The grapes for Río de los Ciervos Pinot Noir come from vineyards planted over 50 years ago in the Mainqué area. This wine was born from the desire to preserve old vineyards in the region. With very little production and low yields, this is Bodega Ribera del Cuarzo´s latest release.",
            },
            araucanaMalbec: {
              paragraph:
                "Araucana Malbec comes from our 5ha Araucana Vineyard that has unique and distinctive characteristics. Calcareous soils, cool nights, and strong winds, are constant challenges for our vines, which leads to wines with excellent concentration and marked natural acidity.",
            },
            araucanaAzul: {
              paragraph:
                "Araucana Azul is a blend of barrels. We carefully select the barrels that showcase the utmost elegance from our wines in the Southern sector of the vineyard, where the vineyard's highest limestone content yields greater power and expression.",
            },
          },
          world: {
            title: "In the world",
            brand: "Ribera del Cuarzo",
            riberaClasico: {
              paragraph:
                "Clásico Malbec's grapes come from 8 vineyards located along both sides of the river. Through this wine, we aim to showcase the diversity of the classic area of the Rio Negro valley.",
            },
            riberaEspecial: {
              paragraph:
                "Especial Malbec comes from our 5ha Araucana Vineyard that has unique and distinctive characteristics. Calcareous soils, cool nights, and strong winds, are constant challenges for our vines, which leads to wines with excellent concentration and marked natural acidity.",
            },
            riberaParcela: {
              paragraph:
                "Parcela Única represents the culmination of our finest grapes, carefully selected from the prime plot nestled within the Araucana Vineyard, situated in the Southwest quadrant. Here, the elevated limestone composition imparts a heightened potency and an unparalleled depth of expression. It is in this very section of the vineyard that our grapes endure the most challenging conditions, braving relentless winds. It is precisely these adversities that give rise to the exquisite intensity and finesse that distinguish our wine.",
            },
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
          titleB: "Espíritu Patagónico",
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
        popup: {
          title: "Bienvenido",
          text: "¿Es usted mayor de edad para beber en su país?",
          btnOk: "Si",
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
        press: {
          title: "Prensa",
          subtitle: "-",
          date: {
            2023: {
              5: "6 de Octubre de 2023",
              4: "15 de Septiembre de 2023",
              3: "6 de Septiembre de 2023",
              2: "31 de Mayo de 2023",
              1: "22 de Mayo de 2023",
            },
            2022: {
              3: "30 de Diciembre de 2022",
              2: "13 de Abril de 2022",
              1: "8 de Febrero de 2022",
            },
          },
          btn: "Leer más",
        },
        history: {
          title: "Historia",
          family: {
            title: "Familia",
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
            title: "Valle Azul",
            firstParagraph: "-",
            secondParagraph: "-",
          },
        },
        patagonian: {
          title: "Espíritu Patagónico",
          araucanaVineyard: {
            title: "-",
            firstParagraph: "-",
            secondParagraph: "-",
          },
          workVineyard: {
            title: "-",
            titleSlider1: "-",
            paragraphSlider1: "-",
            paragraphSlider1Mobile: "-",
            titleSlider2: "-",
            paragraphSlider2: "-",
            titleSlider3: "-",
            paragraphSlider3: "-",
            titleSlider4: "-",
            paragraphSlider4: "-",
            titleSlider5: "-",
            paragraphSlider5: "-",
            titleSlider6: "-",
            paragraphSlider61: "-",
            titleSlider7: "-",
            paragraphSlider7: "-",
          },
          workWinery: {
            title: "-",
            titleSlider1: "-",
            paragraphSlider1: "-",
            paragraphSlider1Mobile: "-",
            titleSlider2: "-",
            paragraphSlider2: "-",
            titleSlider3: "-",
            paragraphSlider3: "-",
            paragraphSlider3Mobile: "-",
            titleSlider4: "-",
            paragraphSlider4: "-",
            titleSlider5: "-",
            paragraphSlider5: "-",
          },
          lifeEstate: {
            title: "-",
            titleSlider1: "-",
            paragraphSlider1: "-",
            titleSlider2: "-",
            paragraphSlider2: "-",
            titleSlider3: "-",
            paragraphSlider3: "-",
          },
          waterLife: {
            title: "-",
            subtitle: "-",
            firstParagraph: "-",
            btn: "Leer más",
            readParagraph: "-",
            mobileParagraph: "-",
          },
        },
        wines: {
          title: "Vinos",
          btnSheet: "-",
          btnFooter: "Leer más",
          argentina: {
            title: "-",
            araucanaRioMalbec: {
              paragraph: "-",
            },
            araucanaRioPinot: {
              paragraph: "-",
            },
            araucanaMalbec: {
              paragraph: "-",
            },
            araucanaAzul: {
              paragraph: "-",
            },
            riberaParcela: {
              paragraph: "-",
            },
          },
          world: {
            title: "-",
            riberaClasico: {
              paragraph: "-",
            },
            riberaEspecial: {
              paragraph: "-",
            },
            riberaParcela: {
              paragraph: "-",
            },
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
