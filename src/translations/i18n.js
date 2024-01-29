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
              6: "Dicember 9, 2023",
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
              "Fermentation takes place in open-top concrete pools, each with a capacity of about 2000 kilograms, where we work very small and select batches from the vineyard. <br /><br /> During the process, the tasks performed are respectful and careful, with minimal intervention, aimed at achieving spontaneous fermentation with vineyard-specific or certified organic yeasts. We do not use additives or clarifiers. <br><br> We follow traditional methods such as manual pressing and délestage, especially with our Malbec grapes, and gentle remontage during the final stages. <br /> <br /> Maceration times are short, between 12 and 13 days, because we believe that longer times are counterproductive for expressing the freshness of our terroir.",
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
              "The countess planted the vineyard at the highest point of the <i>barda</i>, an unexplored location where no one had even considered such an endeavor before. It required transporting water for irrigation using pumps, incurring significant costs. Until then, productions in the Río Negro valley were carried out alongside the river, with water drawn through channels and gates - an economical flood irrigation system. <br /> <br /> Yet, the countess decided to plant at this elevated site because she believed that what would be produced there would be worth the effort. Without calculating costs, she embarked on building a system of pumps that transported water three kilometers uphill. When we finally took over the vineyard, we trusted that renewable energy, perhaps wind or solar, would eventually transform this cost into something reasonable in the short term. Regardless, the risk was worth taking. <br /> <br /> Some time later, a local man spoke to us about water. This kind gentleman, told us that abundant water could be found at the base of the ridge. Although it seemed unlikely, we decided to drill some wells. Water surged forth with force. These wells now produce around 200,000 liters per hour, significantly reducing our costs. We listened to nature and special individuals. Today, Ribera del Cuarzo follows a virtuous cycle of respecting the environment, and the reward is a wine that never ceases to astonish us.",
            mobileParagraph:
              "The countess planted the vineyard at the highest point of the <i>barda</i>, an unexplored location where no one had even considered such an endeavor before. It required transporting water for irrigation using pumps, incurring significant costs. Until then, productions in the Río Negro valley were carried out alongside the river, with water drawn through channels and gates - an economical flood irrigation system. <br /> <br />Yet, the countess decided to plant at this elevated site because she believed that what would be produced there would be worth the effort. Without calculating costs, she embarked on building a system of pumps that transported water three kilometers uphill. When we finally took over the vineyard, we trusted that renewable energy, perhaps wind or solar, would eventually transform this cost into something reasonable in the short term. Regardless, the risk was worth taking. <br /> <br />Some time later, a local man spoke to us about water. This kind gentleman, told us that abundant water could be found at the base of the ridge. Although it seemed unlikely, we decided to drill some wells. Water surged forth with force. These wells now produce around 200,000 liters per hour, significantly reducing our costs. We listened to nature and special individuals. Today, Ribera del Cuarzo follows a virtuous cycle of respecting the environment, and the reward is a wine that never ceases to astonish us.",
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
        form: {
          title: "Email sent successfully",
          error: "There was an error sending the email",
          btn: "Close",
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
          optionB1: "Viñedo araucana",
          optionB2: "Trabajo en la viña",
          optionB3: "Trabajo en bodega",
          optionB4: "La vida en la finca",
          optionB5: "Agua de vida",
          titleC: "Vinos",
          optionC1: "En Argentina",
          optionC2: "En el mundo",
          footerOptionA: "Contacto",
          footerOptionB: "Oficina de distribución",
          footerOptionC: "Prensa",
        },
        popup: {
          title: "Bienvenido",
          text: "¿Es usted mayor de edad <br> para beber en su país?",
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
          subtitle: "MOMENTOS RIBERA - En las noticias",
          date: {
            2023: {
              6: "9 de Diciembre de 2023",
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
            titleFirstParagraph: "Raíces en la patagonia",
            firstParagraphA:
              "<strong>Nuestras raíces en la Patagonia y en la tradición vitivinícola se remontan a más de 150 años.</strong> Provenientes de dos orígenes muy diferentes, Bodega Ribera del Cuarzo parece ser la síntesis de esas dos poderosas fuerzas.",
            firstParagraphB:
              "“Por el lado de mi abuela, <strong>Melchor Concha y Toro fundó su bodega en 1883</strong>, solo unos años después de que José Menéndez hubiera comenzado su empresa de producción y transporte de lana en la lejana Patagonia.",
            firstParagraphC:
              "Las historias de cómo estos dos individuos trabajaron arduamente para crear sus emprendimientos se entrelazan en las conversaciones de cena familiar a lo largo de las generaciones.",
            firstParagraphD:
              "He llegado a creer que la coincidencia de estos dos pioneros, que tuvieron éxito en el desarrollo de sus empresas a miles de millas de distancia, pero casi al mismo tiempo, fue la misteriosa fuerza que condujo a la creación de Bodega Ribera del Cuarzo.",
            secondParagraph:
              "La Patagonia fue el lugar donde pasé los veranos de mi infancia y al que viajé muchas veces en mi juventud. Siempre fue un lugar donde me sentí verdaderamente en casa. En medio de las colinas de cima plana azotadas por el viento, los enormes espacios abiertos y las gigantescas montañas donde las distancias se ven empequeñecidas por un cielo infinito, la idea de establecer una bodega poco a poco comenzó a materializarse.<br> <br> Mi carrera en el mundo del vino comenzó cuando, siendo muy joven, me uní a la bodega del Doctor Nicolás Catena y descubrí, a su lado, el fascinante mundo del vino, que se ha convertido en mi vida. Aprendí de él cada detalle sobre cómo cultivar las mejores uvas, cómo producir los mejores vinos y, sobre todo, cómo nunca renunciar en la búsqueda de la excelencia.",
            altImg: "-",
            thirdParagraph:
              "Finalmente, llegó el día, el momento en el que pude fusionar mi amor por mi tierra patagónica con la pasión inquebrantable por el vino inculcada en mí desde la infancia. Esta oportunidad única, que perseguimos incansablemente cada día, se encarna en el nombre de Bodega Ribera del Cuarzo. Aquí nos esforzamos por elaborar los mejores vinos, honrando nuestro legado y expresando la esencia de nuestra amada tierra”",
            titleGallery: "Galería",
          },
          valleAzul: {
            title: "Valle Azul",
            firstParagraph:
              "La historia de esta bodega comenzó en 2001, cuando la condesa italiana Noemí Marone Cinzano descubrió esta tierra lejana, plantó un viñedo de cinco hectáreas al pie de la barda (un paisaje muy patagónico que se refiere a la ladera acantilada compuesta por grano oscuro de roca volcánica, con abundante cuarzo, carbonato de calcio y caliza), y comenzó a producir vino al estilo Borgoña. La bodega se construyó justo al lado del viñedo, con pequeñas piscinas de concreto abiertas para la producción artesanal, empleando el pisoneo (“pigeage”).",
            secondParagraph:
              "Cuando probamos por primera vez la cosecha 2008, supimos que Noemí había descubierto un verdadero terroir. Durante diez años, exploramos todos los lugares cercanos en la Patagonia donde poder producir un sabor similar. Finalmente, llegamos a la conclusión de que las condiciones en Valle Azul eran perfectas.<br><br>Una extraordinaria coincidencia reunió a Menéndez con la condesa 10 años después de haber probado aquella primera copa memorable. Conmovida por la pasión y el compromiso de Felipe, la condesa le otorgó el privilegio de comenzar a producir vinos en esa misma tierra que ella había descubierto. En 2018, nació Bodega Ribera del Cuarzo.",
          },
        },
        patagonian: {
          title: "Espíritu Patagónico",
          araucanaVineyard: {
            title: "Viñedo Araucana",
            firstParagraph:
              "El viñedo Araucana es mucho más que único. Ubicado en Ribera del Cuarzo, ningún otro viñedo en la Patagonia ni en el mundo, puede presumir de estar tan cerca de la barda o de disfrutar de tanta privacidad.<br><br>Los suelos de Araucana son predominantemente eólicos, moldeados meticulosamente a lo largo de incontables eras por la erosión del viento. Enriquecidos con ceniza y potasio volcánico y alto contenido de carbonato de calcio, poseen una composición química crucial y notablemente poco común, no solo para la Patagonia, sino para el mundo.",
            secondParagraph:
              "Añadiendo a su singularidad se encuentra la barda. La textura de la superficie se debe a una combinación de cuarzo y carbonato de calcio, conocida localmente como cemento indio. A medida que se erosiona e integra en el suelo, transfiere sus cualidades excepcionales a nuestras uvas.",
          },
          workVineyard: {
            title: "Trabajo en la viña",
            titleSlider1: "-",
            paragraphSlider1:
              "En nuestro trabajo intervienen todos los componentes naturalmente orgánicos que el viñedo nos permite tomar y conservar. El viento de la Patagonia es un factor clave. La brisa constante junto con las condiciones de baja humedad ambiente se combinan como un mecanismo natural de control de enfermedades. Toda la superficie del viñedo tiene corredores biológicos que generan una circulación libre y natural de flora y fauna permanente, que también se beneficia por la situación de aislamiento de la finca, sin otros cultivos circundantes.",
            paragraphSlider1Mobile:
              "En nuestro trabajo intervienen todos los componentes naturalmente orgánicos que el viñedo nos permite tomar y conservar. El viento de la Patagonia es un factor clave. La brisa constante junto con las condiciones de baja humedad ambiente se combinan como un mecanismo natural de control de enfermedades. Toda la superficie del viñedo tiene corredores biológicos que generan una circulación libre y natural de flora y fauna permanente, que también se beneficia por la situación de aislamiento de la finca, sin otros cultivos circundantes.",
            titleSlider2: "Poda",
            paragraphSlider2:
              "Abrazamos técnicas tradicionales de manejo de viñedos, como la poda Guyot, a pitón y cargador, que facilita la autorregulación de las plantas en su crecimiento. Este sistema les permite regular sus recursos para lograr un mejor equilibrio raíz-crecimiento-fruta.",
            titleSlider3: "Atada",
            paragraphSlider3:
              "En este proceso utilizamos materiales vegetales y biodegradables en un esfuerzo por respetar el medio ambiente tanto como sea posible.",
            titleSlider4: "Despampanada",
            paragraphSlider4:
              "El manejo controlado del crecimiento favorece la intervención mínima, impacta en un mayor equilibrio de las plantas, y en un menor uso de recursos humanos y mecánicos.",
            titleSlider5: "Cosecha",
            paragraphSlider5:
              "La cosecha en nuestro viñedo es un proceso meticuloso que realizamos en forma manual y en varias etapas. Las características únicas de cada subsector dentro de nuestra finca de cinco hectáreas, con diferentes variedades y ciclos de maduración de las uvas, requieren ser cosechados en momentos distintos.",
            titleSlider6: "Malezas",
            paragraphSlider6:
              "Implementamos métodos tradicionales de control evitando el uso de herbicidas y, entre hileras, priorizamos el desarrollo de nuestras pasturas y la flora natural del monte.",
            titleSlider7: "Técnicas antiguas",
            paragraphSlider7:
              "Mantener los métodos de trabajo tradicionales nos ayuda a no perder nunca de vista la conexión con la tierra, que nos define, ya que somos agricultores. Además de utilizar tractores y otras máquinas para ser eficientes en determinadas tareas, trabajar con animales como nuestros caballos criollos, la raza argentina, es una forma de respeto y de cuidado a la naturaleza, buscando que nos premie con el mejor sabor. ",
          },
          workWinery: {
            title: "Trabajo en bodega",
            titleSlider1: "Fermentación",
            paragraphSlider1:
              "La fermentación se realiza en vasijas de hormigón abiertas en la parte superior, de unos 2000 kilos cada una, con lotes muy pequeños y seleccionados en el viñedo. Durante el proceso, los trabajos que se realizan son respetuosos y cuidadosos, con una intervención mínima, y orientados a lograr una fermentación espontánea, con levaduras propias del viñedo. No utilizamos aditivos ni clarificantes. Seguimos métodos tradicionales como el prensado manual y délestage, especialmente, con nuestras uvas Malbec, y suave remontaje durante las etapas finales. Los tiempos de maceración son cortos porque queremos expresar la frescura que tiene el nuestro terroir.",
            paragraphSlider1Mobile:
              "La fermentación se realiza en vasijas de hormigón abiertas en la parte superior, de unos 2000 kilos cada una, con lotes muy pequeños y seleccionados en el viñedo.<br><br> Durante el proceso, los trabajos que se realizan son respetuosos y cuidadosos, con una intervención mínima, y orientados a lograr una fermentación espontánea, con levaduras propias del viñedo. No utilizamos aditivos ni clarificantes.<br><br> Seguimos métodos tradicionales como el prensado manual y délestage, especialmente, con nuestras uvas Malbec, y suave remontaje durante las etapas finales.<br><br> Los tiempos de maceración son cortos porque queremos expresar la frescura que tiene el nuestro terroir.",
            titleSlider2: "Crianza",
            paragraphSlider2:
              "Cada lote o pequeña vinificación de uva nos dictará si la crianza se realizará por completo en barricas, o si alguna parte se hará en las piletas de hormigón o en tanques de acero inoxidable.  Hay vinos a los que queremos protegerles más la fruta, y otros a los que creemos que hay que darles más complejidad con madera. Generalmente, el 70% es en barricas usadas, 100% de roble francés. Buscamos un equilibrio delicado y evitar que los vinos se vean abrumados por la madera.",
            titleSlider3: "Blending",
            paragraphSlider3:
              "Creemos en la magia de crear vinos excepcionales a través de la alquimia del blending. Nuestra pasión por el arte del vino nos lleva a explorar dos enfoques únicos: las co-fermentaciones y la técnica tradicional del blending. Preferimos trabajar con co-fermentaciones, una técnica que consideramos más enriquecedora, ya que capta la esencia misma de nuestro terroir. Desde el momento en que las distintas variedades y parcelas ingresan a nuestra bodega, comienza un viaje compartido que recorre todo el proceso. En última instancia, nuestro objetivo es fusionar el pasado y el futuro en cada botella que presentamos.",
            paragraphSlider3Mobile:
              "Creemos en la magia de crear vinos excepcionales a través de la alquimia del blending. Nuestra pasión por el arte del vino nos lleva a explorar dos enfoques únicos: las co-fermentaciones y la técnica tradicional del blending. Preferimos trabajar con co-fermentaciones, una técnica que consideramos más enriquecedora, ya que capta la esencia misma de nuestro terroir.<br><br> Desde el momento en que las distintas variedades y parcelas ingresan a nuestra bodega, comienza un viaje compartido que recorre todo el proceso. En última instancia, nuestro objetivo es fusionar el pasado y el futuro en cada botella que presentamos.",
            titleSlider4: "Embotellado y etiquetado",
            paragraphSlider4:
              "Somos muy respetuosos y cuidamos al máximo el momento de embotellado y  etiquetado para cumplir con los estándares más estrictos.  En el embotellado hacemos una filtración para proteger el vino sin afectarlo, y tenemos un estricto control durante el fraccionamiento, cuidando los estándares de inocuidad y de calidad, para que ese vino una vez que entre en botella tenga la mejor evolución y expresión posible.",
            titleSlider5: "Estiba",
            paragraphSlider5:
              "Creemos que es muy importante que los vinos tengan un plazo de evolución en botella antes de llegar al mercado. Nuestros vinos ya nos han demostrado que van creciendo mucho con los años. La estiba también nos sirve de biblioteca, de área de estudio. Permanentemente probamos y comparamos las cosechas que tenemos guardadas con las nuevas y, de esa forma, vamos aprendiendo cómo evolucionan nuestros vinos en base a lo que venimos haciendo en cada una de las cosechas.",
          },
          lifeEstate: {
            title: "La vida en la finca",
            titleSlider1: "La casa junto a la bodega",
            paragraphSlider1:
              "La condesa Noemí Marone Cinzano encontró este lugar inigualable y construyó las bases de lo que hoy es Bodega Ribera del Cuarzo. Como en todas las fincas italianas, dispuso edificar una casa junto a la bodega. De estilo patagónico y una arquitectura agradable, con un pequeño jardín cuya vista vuela sobre el valle que desemboca en el río, la casa es el lugar donde descansamos después del día de trabajo, y donde nos reunimos en familia a disfrutar y a pasar las fiestas. Allí también pensamos, planificamos y decidimos junto a quienes nos ayudan a llevar adelante la producción, compartimos con ellos la mesa de lo que ya es nuestro hogar.",
            titleSlider2: "El río",
            paragraphSlider2:
              "El río Negro es el más grande de la Patagonia. Los ríos Limay y Neuquén se cargan con agua y minerales provenientes del deshielo de las montañas antes de fluir hacia el centro y este del país. Finalmente, se unen para formar el Río Negro que desemboca en el mar al sur de la provincia de Buenos Aires, en un pequeño pueblo llamado El Cóndor. Fluye entre dos grandes bardas, una al norte y otra al sur, que se formaron a lo largo de millones de años. En 1860, Estanislao Ceballos las describió como terrazas fluviales (river terraces), y contribuyen de manera invaluable con carbonato de calcio, piedra, cuarzo y cenizas. ",
            paragraphSlider2Mobile:
              "El río Negro es el más grande de la Patagonia. Los ríos Limay y Neuquén se cargan con agua y minerales provenientes del deshielo de las montañas antes de fluir hacia el centro y este del país. Finalmente, se unen para formar el Río Negro que desemboca en el mar al sur de la provincia de Buenos Aires, en un pequeño pueblo llamado El Cóndor.<br><br> Fluye entre dos grandes bardas, una al norte y otra al sur, que se formaron a lo largo de millones de años. En 1860, Estanislao Ceballos las describió como terrazas fluviales (river terraces), y contribuyen de manera invaluable con carbonato de calcio, piedra, cuarzo y cenizas.",
            titleSlider3: "Los caballos",
            paragraphSlider3:
              "Mantener los métodos de trabajo tradicionales nos ayuda a nunca perder de vista la conexión con la tierra, conexión que nos define como agricultores. En la finca tenemos caballos criollos, la raza argentina. Además de utilizar tractores y otras máquinas que nos ayudan a ser eficientes para determinadas tareas, trabajar con animales es una forma de respeto y de cuidado en el proceso de intervenir la naturaleza. Los caballos, además, cumplen la función de abonar, contribuyendo al compost que producimos en la finca. Pero los caballos,además, son una forma de vida: vivir a caballo ralentiza las cosas, permite desacelerar y conectar con la naturaleza, recorrer el lugar de forma más pausada y profunda.",
            paragraphSlider3Mobile:
              "Mantener los métodos de trabajo tradicionales nos ayuda a nunca perder de vista la conexión con la tierra, conexión que nos define como agricultores. En la finca tenemos caballos criollos, la raza argentina. Además de utilizar tractores y otras máquinas que nos ayudan a ser eficientes para determinadas tareas, trabajar con animales es una forma de respeto y de cuidado en el proceso de intervenir la naturaleza.<br><br> Los caballos, además, cumplen la función de abonar, contribuyendo al compost que producimos en la finca. Pero los caballos,además, son una forma de vida: vivir a caballo ralentiza las cosas, permite desacelerar y conectar con la naturaleza, recorrer el lugar de forma más pausada y profunda.",
          },
          waterLife: {
            title: "Agua de vida",
            subtitle: "Agua",
            firstParagraph:
              "La condesa plantó el viñedo en la parte más alta de la barda, un lugar inexplorado en el que nadie antes había siquiera pensado: requería llevar hasta allí agua para riego utilizando bombas con un costo enorme. Hasta entonces, las producciones en el valle de Río Negro se habían hecho  siempre al margen del río del que se toma agua por medio de canales y compuertas, un sistema de riego económico: riego por inundación.",
            btn: "Leer más",
            readParagraph:
              "La condesa plantó el viñedo en la parte más alta de la barda, un lugar inexplorado en el que nadie antes había siquiera pensado: requería llevar hasta allí agua para riego utilizando bombas con un costo enorme. Hasta entonces, las producciones en el valle de Río Negro se habían hecho  siempre al margen del río del que se toma agua por medio de canales y compuertas, un sistema de riego económico: riego por inundación.<br><br>Y, sin embargo, la condesa decidió plantar ahí arriba porque apostó a que lo que produciría valdría el esfuerzo. Sin hacer ningún cálculo de costos se lanzó a construir un sistema de bombas que llevó el agua tres kilómetros hacia arriba. Cuando al fin pudimos hacernos cargo del viñedo, confiamos en que, en el corto plazo, alguna energía renovable, quizás eólica o solar, nos permitiría transformar ese costo en algo razonable. En cualquier caso, el riesgo valía la pena.<br><br>Tiempo después, un hombre local nos habló sobre el agua. Este amable hombre, nos dijo que se podía encontrar abundante agua al pie de la barda. Aunque parecía poco factible, decidimos perforar algunos pozos. El agua brotó y fluyó a la superficie con fuerza. Estos pozos hoy producen alrededor de 200.000 litros por hora, lo que reduce significativamente nuestros costos. Escuchamos a la naturaleza y a personas especiales. Hoy en día, Ribera del Cuarzo sigue un ciclo virtuoso de respeto por el medio ambiente, y la recompensa es un vino que nunca deja de sorprendernos.",
            mobileParagraph:
              "La condesa plantó el viñedo en la parte más alta de la barda, un lugar inexplorado en el que nadie antes había siquiera pensado: requería llevar hasta allí agua para riego utilizando bombas con un costo enorme. Hasta entonces, las producciones en el valle de Río Negro se habían hecho  siempre al margen del río del que se toma agua por medio de canales y compuertas, un sistema de riego económico: riego por inundación.<br><br>Y, sin embargo, la condesa decidió plantar ahí arriba porque apostó a que lo que produciría valdría el esfuerzo. Sin hacer ningún cálculo de costos se lanzó a construir un sistema de bombas que llevó el agua tres kilómetros hacia arriba. Cuando al fin pudimos hacernos cargo del viñedo, confiamos en que, en el corto plazo, alguna energía renovable, quizás eólica o solar, nos permitiría transformar ese costo en algo razonable. En cualquier caso, el riesgo valía la pena.<br><br>Tiempo después, un hombre local nos habló sobre el agua. Este amable hombre, nos dijo que se podía encontrar abundante agua al pie de la barda. Aunque parecía poco factible, decidimos perforar algunos pozos. El agua brotó y fluyó a la superficie con fuerza. Estos pozos hoy producen alrededor de 200.000 litros por hora, lo que reduce significativamente nuestros costos. Escuchamos a la naturaleza y a personas especiales. Hoy en día, Ribera del Cuarzo sigue un ciclo virtuoso de respeto por el medio ambiente, y la recompensa es un vino que nunca deja de sorprendernos.",
          },
        },
        wines: {
          title: "Vinos",
          btnSheet: "Descargar Ficha Técnica",
          btnFooter: "Leer más",
          argentina: {
            title: "En Argentina",
            araucanaRioMalbec: {
              paragraph:
                "Las uvas de Río de los Ciervos provienen de 8 viñedos ubicados a lo largo de los 200 km a ambos lados del río. A través de este vino, nuestro objetivo es mostrar la diversidad de la zona clásica del valle del Río Negro.",
            },
            araucanaRioPinot: {
              paragraph:
                "Las uvas para el Río de los Ciervos Pinot Noir provienen de viñedos plantados hace más de 50 años en la zona de Mainqué. Este vino nació del deseo de preservar viñedos antiguos en la región. Con una producción muy limitada y bajos rendimientos, este es el último lanzamiento de Bodega Ribera del Cuarzo.",
            },
            araucanaMalbec: {
              paragraph:
                "ARAUCANA MALBEC proviene de nuestro viñedo Araucana de 5 hectáreas, que posee características únicas y distintivas. Suelos calcáreos, noches frías y vientos constantes son desafíos permanentes para nuestras vides, las cuales responden generando una excelente concentración y una marcada acidez.",
            },
            araucanaAzul: {
              paragraph:
                "Araucana AZUL es un blend de barricas. Seleccionamos las barricas que demuestran mayor elegancia del sector sur del viñedo, donde el mayor contenido de carbonato de calcio brinda una mayor potencia y expresión.",
            },
            riberaParcela: {
              paragraph:
                "Parcela Única representa la culminación de nuestras mejores uvas, cuidadosamente seleccionadas de la parcela más especial ubicada dentro del Viñedo Araucana, situado en el cuadrante suroeste. Aquí, la composición elevada de carbonato de calcio confiere una potencia elevada y una profundidad de expresión inigualable. Es en esta sección específica del viñedo donde nuestras uvas enfrentan las condiciones más extremas, desafiando vientos implacables. Son precisamente estas adversidades las que dan lugar a la exquisita intensidad y finura que distinguen a nuestro vino.",
            },
          },
          world: {
            title: "En el mundo",
            riberaClasico: {
              paragraph:
                "Las uvas de Clasico Malbec provienen de 8 viñedos ubicados a lo largo de los 200 km a ambos lados del río. A través de este vino, nuestro objetivo es mostrar la diversidad de la zona clásica del valle del Río Negro.",
            },
            riberaEspecial: {
              paragraph:
                "Ribera del Cuarzo ESPECIAL proviene de nuestro Viñedo Araucana de 5 hectáreas, que posee características únicas y distintivas. Los suelos calcáreos, las noches frías y los vientos constantes son desafíos permanentes para nuestras vides, las cuales responden generando una excelente concentración y una marcada acidez.",
            },
            riberaParcela: {
              paragraph:
                "Parcela Única representa la culminación de nuestras mejores uvas, cuidadosamente seleccionadas de la parcela más especial ubicada dentro del Viñedo Araucana, situado en el cuadrante suroeste. Aquí, la composición elevada de carbonato de calcio confiere una potencia elevada y una profundidad de expresión inigualable. Es en esta sección específica del viñedo donde nuestras uvas enfrentan las condiciones más extremas, desafiando vientos implacables. Son precisamente estas adversidades las que dan lugar a la exquisita intensidad y finura que distinguen a nuestro vino.",
            },
          },
        },
        form: {
          title: "Email enviado correctamente",
          error: "Hubo un error al enviar el correo electrónico",
          btn: "Cerrar",
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
