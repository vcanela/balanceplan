// Proyecto Balance — datos del plan
// Menús de las 4 semanas + listas de súper + meal prep.
// Transcrito del manual "Proyecto Balance" (Gary Díaz Nutrición) para consulta personal.
// Etiquetas posibles en recetas: "vegano", "vegetariano", "1xsemana".
window.PLAN = {
  "titulo": "Proyecto Balance",
  "autor": "Gary Díaz Nutrición",
  "pantryStaples": [
    "Sal",
    "Ajo",
    "Stevia 100% pura o monk fruit (opcionales)",
    "Vinagre balsámico",
    "Vinagre de manzana",
    "Extracto de vainilla",
    "Pimienta",
    "Café y té",
    "Aceite para cocinar (aguacate u oliva)",
    "Consomé natural sin azúcar y sin glutamato",
    "Especias de tu preferencia",
    "Salsa de soya / liquid aminos (Bragg o baja en sodio)"
  ],
  "mealPrep": [
    "Lava y desinfecta las frutas y verduras de la semana; puedes pelarlas y picarlas para tenerlas listas en el refri.",
    "Cuece y guarda los vegetales/tubérculos que se necesiten ya cocidos (papa, camote, betabel, chayote, calabacitas…).",
    "Cuece arroz, quinoa, frijoles, garbanzos y lentejas; congela en porciones para las 4 semanas.",
    "Cocina las proteínas animales (pollo, pescado, cerdo, res) y congélalas en porciones; pasa al refri la que usarás una noche antes.",
    "Prepara una salsa de jitomate o tomate verde para acompañar; también puedes congelarla (opcional)."
  ],
  "semanas": [
    {
      "n": 1,
      "dias": [
        {"Desayuno": 0, "Comida": 0, "Cena": 0, "Snacks": 0},
        {"Desayuno": 1, "Comida": 1, "Cena": 1, "Snacks": 1},
        {"Desayuno": 2, "Comida": 2, "Cena": 2, "Snacks": 0},
        {"Desayuno": 3, "Comida": 3, "Cena": 3, "Snacks": 2}
      ],
      "comidas": {
        "Desayuno": [
          {
            "nombre": "Pancakes de Avena y Blueberries",
            "etiquetas": ["vegetariano"],
            "ingredientes": [
              "½ taza de avena en hojuelas",
              "½ plátano maduro",
              "4 claras de huevo (o ½ taza si las compras líquidas)",
              "1 cda de extracto de vainilla",
              "1 cda de chía",
              "8 moras azules (blueberries)",
              "½ taza de yogurt griego natural sin azúcar (para acompañar)",
              "1 cda de jarabe de maple sin azúcar (para acompañar)"
            ],
            "pasos": [
              "Pon todo (menos las moras) en la licuadora y muele.",
              "Vierte la mezcla en círculos pequeños en un sartén con aceite de aguacate.",
              "Antes de que se cuezan del todo, agrega las moras azules a cada uno.",
              "Cocina por ambos lados.",
              "Acompaña con yogurt griego y jarabe de maple."
            ]
          },
          {
            "nombre": "Egg & Sweet Potato Hashbrown",
            "etiquetas": ["vegetariano"],
            "ingredientes": [
              "1 huevo entero + 3 claras (1/3 de taza si líquidas)",
              "1 taza de champiñones",
              "Cebolla y jitomate al gusto",
              "½ cda de aceite de oliva o aguacate",
              "Pizca de sal y pimienta",
              "70g de camote amarillo crudo rallado",
              "1 cda de jarabe (opcional) o salsa roja al gusto"
            ],
            "pasos": [
              "Revuelve en un bowl el huevo y las claras.",
              "Sofríe cebolla, jitomate y champiñones en una sartén con 1 cdita de aceite.",
              "Agrega la mezcla de huevo y haz un huevo revuelto; sazona con sal y pimienta.",
              "Hashbrown: mezcla el camote rallado con 1 cdita de aceite, sal y pimienta. Extiéndelo en una sandwichera y cocina (si no tienes, sustituye por 1 tortilla de maíz).",
              "Acompaña con jarabe opcional o salsa roja."
            ]
          },
          {
            "nombre": "Crepas Dulces con Manzana",
            "etiquetas": ["vegetariano"],
            "ingredientes": [
              "4 claras de huevo (½ taza si líquidas)",
              "2 cdas de yogurt griego sin azúcar",
              "1/3 de taza de avena",
              "1 cda de chía o linaza",
              "1 manzana picada",
              "Pizca de canela",
              "1 cda de jarabe de maple sin azúcar"
            ],
            "pasos": [
              "Mezcla los ingredientes de la crepa en la licuadora.",
              "En un sartén caliente con 1 cdita de aceite, vierte un poco de mezcla y mueve el sartén para esparcirla. Repite hasta terminar la mezcla.",
              "Haz taquitos con las crepas, rellena con la manzana picada y agrega jarabe de maple."
            ]
          },
          {
            "nombre": "Tostadas Mexicanas",
            "etiquetas": ["vegetariano"],
            "ingredientes": [
              "2 tostadas horneadas",
              "½ taza de frijoles machacados",
              "80g de aguacate",
              "Salsa roja o verde al gusto"
            ],
            "pasos": [
              "Calienta las tostadas.",
              "Unta los frijoles machacados, agrega el aguacate y la salsa al gusto."
            ]
          }
        ],
        "Comida": [
          {
            "nombre": "Dijon Salmón",
            "etiquetas": [],
            "ingredientes": [
              "170g de salmón crudo",
              "2 cdas de mostaza dijon",
              "1 cda de aminos de coco o salsa de soya baja en sodio",
              "½ cdita de ajo triturado",
              "1 cda de jugo de limón",
              "Chile en polvo, paprika y sal al gusto",
              "1 chayote al vapor",
              "1 zanahoria al vapor",
              "1 papa cocida",
              "1 cdita de mantequilla"
            ],
            "pasos": [
              "Mezcla en un plato hondo la mostaza, aminos de coco, ajo, jugo de limón, chile, paprika y sal.",
              "Marina el salmón en esa salsa 10–20 minutos.",
              "Cocina en una sartén con 1 cdita de aceite de oliva (o agua) hasta el término deseado.",
              "Guarda un poco de salsa para agregarla al servir.",
              "Acompaña con el chayote, zanahoria y papa; agrega mantequilla y sal a las verduras."
            ]
          },
          {
            "nombre": "Jennifer Aniston Salad",
            "etiquetas": ["vegetariano"],
            "ingredientes": [
              "1 taza de quinoa cocida",
              "½ taza de garbanzos cocidos",
              "1 taza de pepino picado con cáscara",
              "Cebolla morada al gusto",
              "2 cdas de perejil picado",
              "1 cda de menta picada",
              "20 pistaches sin cáscara",
              "1 cda de queso feta desmoronado",
              "Aderezo: 1 cdita mostaza dijon, 2 cdas vinagre de manzana, jugo de ½ limón amarillo, 1 cdita miel, 1 cda aceite de oliva, sal y pimienta"
            ],
            "pasos": [
              "Coloca en un bowl la quinoa, garbanzos, pepino, cebolla, perejil, menta, pistaches y queso feta.",
              "Mezcla el aderezo en un plato hondo y viértelo sobre la ensalada."
            ]
          },
          {
            "nombre": "Tostadas de Pollo y \"Chorizo\" de Champiñones",
            "etiquetas": [],
            "ingredientes": [
              "120g de pechuga de pollo asada",
              "1 taza de champiñones picados finos",
              "1 chile pasilla y 1 chile guajillo",
              "1 jitomate asado",
              "1 diente de ajo",
              "1 cda de aceite de aguacate",
              "2 tostadas horneadas",
              "40g de aguacate",
              "Pizca de sal con ajo"
            ],
            "pasos": [
              "Suaviza los chiles en agua hirviendo 5 min y licúalos con el jitomate, ajo y sal.",
              "En una sartén con 1 cda de aceite cocina los champiñones con la salsa hasta que reduzca (queda como un \"chorizo\").",
              "Arma las tostadas con el pollo, el chorizo de champiñones y el aguacate."
            ]
          },
          {
            "nombre": "Yakimeshi de Camarón",
            "etiquetas": [],
            "ingredientes": [
              "1 taza de arroz cocido",
              "1 zanahoria picada en cubitos pequeños",
              "Calabacita picada en cubitos pequeños",
              "1 huevo batido",
              "10 camarones",
              "1 cdita de mantequilla",
              "Salsa de soya baja en sodio al gusto"
            ],
            "pasos": [
              "En una sartén con 1 cdita de mantequilla cocina la zanahoria y calabacita a fuego medio ~3 min.",
              "Agrega los camarones; cuando cambien de color, agrega el arroz.",
              "Haz a un lado y revuelve el huevo en el hueco; mezcla todo y sazona con salsa de soya."
            ]
          }
        ],
        "Cena": [
          {
            "nombre": "Alubias",
            "etiquetas": ["vegano"],
            "ingredientes": [
              "1 taza de alubias cocidas",
              "2 cdas de líquido de cocción de las alubias",
              "Jugo de 1 limón",
              "1 cda de cilantro picado",
              "80g de aguacate en cubitos",
              "Sal y pimienta al gusto"
            ],
            "pasos": [
              "Mezcla todos los ingredientes en un plato hondo y sirve."
            ]
          },
          {
            "nombre": "Stirfry de Pollo",
            "etiquetas": [],
            "ingredientes": [
              "135g de pechuga de pollo cruda sin hueso ni piel",
              "1 cda de aceite",
              "¼ de cebolla en medias lunas",
              "½ taza de zanahoria picada",
              "½ taza de ramilletes de brócoli",
              "Champiñones al gusto",
              "Aderezo \"naranja\" (de la sección de aderezos)",
              "1 tortilla"
            ],
            "pasos": [
              "En una sartén con aceite cocina la cebolla y la zanahoria.",
              "Agrega el pollo en cuadritos y cocina unos minutos.",
              "Agrega champiñones y brócoli; termina con el aderezo naranja. Acompaña con la tortilla."
            ]
          },
          {
            "nombre": "Ceviche de Atún",
            "etiquetas": [],
            "ingredientes": [
              "1 lata de atún en agua bien drenada (o atún fresco)",
              "½ taza de cebolla picada",
              "1 zanahoria picada",
              "Cilantro picado al gusto",
              "80g de aguacate",
              "Limón y sal al gusto",
              "1–2 tostadas deshidratadas"
            ],
            "pasos": [
              "Revuelve el atún con la cebolla, zanahoria, cilantro, aguacate, limón y sal.",
              "Sirve sobre las tostadas."
            ]
          },
          {
            "nombre": "Rajas con Queso y Elote",
            "etiquetas": ["vegetariano"],
            "ingredientes": [
              "90g de queso tipo panela",
              "1 taza de rajas de chile poblano (puedes comprarlas congeladas)",
              "½ taza de elote desgranado (1 elote)",
              "1 tortilla de maíz"
            ],
            "pasos": [
              "En una sartén con poco aceite cocina las rajas.",
              "Agrega el elote y la panela hasta que el queso se suavice. Sirve con tortilla."
            ]
          }
        ],
        "Snacks": [
          {
            "nombre": "Fresas con crema de frutos secos",
            "etiquetas": ["vegetariano"],
            "ingredientes": ["20 fresas pequeñas", "4 cdtas de crema de almendras, cacahuate o avellanas sin azúcar"],
            "pasos": ["Acompaña las fresas con la crema de frutos secos."]
          },
          {
            "nombre": "Uvas con nuez",
            "etiquetas": ["vegano"],
            "ingredientes": ["20 uvas", "20 mitades de nuez"],
            "pasos": ["Combina y disfruta."]
          },
          {
            "nombre": "Ciruelas con nuez",
            "etiquetas": ["vegano"],
            "ingredientes": ["4 ciruelas", "20 mitades de nuez"],
            "pasos": ["Combina y disfruta."]
          }
        ]
      },
      "listaSuper": {
        "Frutas": [
          "Ciruelas 4 piezas", "Fresas 80 piezas", "Limón amarillo 2 piezas", "Limón verde 8 piezas",
          "Manzana roja 2 piezas", "Manzana verde 1 pieza", "Moras azules 16 piezas",
          "Papaya picada 1 taza", "Plátano 1 pieza", "Uvas 40 piezas"
        ],
        "Verduras": [
          "Ajo triturado 1 cdita", "Brócoli 1 ramillete pequeño", "Calabacita verde 1 pieza",
          "Cebolla 1 pieza", "Cebolla morada 1 pieza", "Champiñones 4 tazas rebanados",
          "Chayote 2 piezas (cocer al vapor)", "Chile guajillo 2 piezas", "Chile pasilla 2 piezas",
          "Cilantro 1 manojo", "Espinacas 2 tazas", "Jitomate saladet 4 piezas",
          "Menta fresca picada 2 cdas", "Pepinos pequeños 6 piezas", "Perejil 1 manojo",
          "Rajas de chile poblano 1 taza (congeladas)", "Tallos de apio pequeños 2 piezas",
          "Zanahoria 7 piezas (cocer al vapor)"
        ],
        "Cereales y tubérculos": [
          "Arroz cocido 1 taza (prefiere integral)", "Avena en hojuelas 2 tazas",
          "Camote amarillo 2 piezas ~100g c/u (ralladas)", "Papa 2 piezas (cocer al vapor)",
          "Quinoa cocida 2 tazas", "Tortilla de maíz 4 piezas", "Tostadas horneadas 12 piezas"
        ],
        "Proteínas": [
          "Alubias cocidas 1 taza", "Atún fresco en medallón 180g o 2 latas en agua",
          "Camarones 10 piezas medianas", "Claras de huevo 22 piezas (4 tazas)",
          "Frijoles cocidos y machacados ½ taza", "Garbanzos cocidos o de lata 1 taza",
          "Huevo entero 3 piezas", "Pechuga de pollo 620g", "Proteína en polvo 1 scoop (opcional)",
          "Salmón 340g", "Yogurt griego natural sin azúcar 2 tazas", "Queso tipo panela 90g"
        ],
        "Grasas, semillas y otros": [
          "Aceite de oliva extra virgen o de aguacate", "Aceitunas 12 piezas", "Aguacate 480g",
          "Canela en polvo 1 cda", "Cátsup sin azúcar (opcional)", "Chile en polvo tipo Tajín o cayena",
          "Crema de cacahuate/almendras/avellanas sin azúcar 16 cditas", "Extracto de vainilla",
          "Jarabe de maple sin azúcar", "Leche de almendras/soya/coco sin azúcar 2 tazas", "Linaza 4 cdas",
          "Mantequilla o ghee 2 cditas", "Miel de maple o abeja 2 cditas", "Mostaza dijon",
          "Nuez 60 mitades", "Paprika", "Pistaches 40 piezas", "Queso feta desmoronado 2 cdas",
          "Sal con ajo", "Salsa de soya baja en sodio o aminos", "Semillas de chía 1 cda",
          "Vinagre de manzana 4 cdas"
        ],
        "Aderezos y salsas": ["Salsa verde o roja"]
      }
    },
    {
      "n": 2,
      "dias": [
        {"Desayuno": 0, "Comida": 0, "Cena": 0, "Snacks": 0},
        {"Desayuno": 1, "Comida": 1, "Cena": 1, "Snacks": 1},
        {"Desayuno": 2, "Comida": 2, "Cena": 2, "Snacks": 2},
        {"Desayuno": 3, "Comida": 3, "Cena": 3, "Snacks": 3}
      ],
      "comidas": {
        "Desayuno": [
          {
            "nombre": "Toast de Requesón y Aguacate",
            "etiquetas": [],
            "ingredientes": [
              "2 rebanadas de pan integral tostado o 25g de pan de masa madre",
              "3 cdas de requesón o queso ricota",
              "40g de aguacate",
              "Rodajas de jitomate al gusto",
              "Salsa roja o verde al gusto",
              "Malteada de chocolate: 1 taza de leche de almendras o soya sin azúcar",
              "1 cdita de crema de almendras o cacahuate",
              "½ plátano congelado",
              "1 cdita de cacao en polvo",
              "Hielo y endulzante sin calorías al gusto"
            ],
            "pasos": [
              "Prepara el toast: coloca el requesón sobre el pan, agrega el aguacate, las rodajas de jitomate y salsa al gusto.",
              "Para la malteada, licúa la leche, la crema de almendras o cacahuate, el plátano congelado, el cacao, hielo y endulzante al gusto."
            ]
          },
          {
            "nombre": "Blueberry Pie Overnight Oats",
            "etiquetas": [],
            "ingredientes": [
              "½ taza de avena en hojuelas",
              "½ taza de yogurt griego",
              "½ taza de leche de almendras, soya o coco sin azúcar",
              "1 cda de chía",
              "1 cda de jarabe de maple sin azúcar",
              "1 cdita de extracto de vainilla",
              "½ taza de moras azules",
              "5 fresas pequeñas picadas",
              "20 mitades de nuez troceadas (topping)"
            ],
            "pasos": [
              "En un frasco de vidrio coloca la avena, yogurt, leche, chía, jarabe de maple, vainilla, moras azules y fresas.",
              "Mezcla muy bien y refrigera toda la noche.",
              "En la mañana agrega el topping de nuez troceada."
            ]
          },
          {
            "nombre": "Papas con Frijoles",
            "etiquetas": ["vegano"],
            "ingredientes": [
              "1 papa cocida",
              "½ taza de frijoles machacados",
              "1 taza de espinacas crudas",
              "1 cdita de aceite de oliva o aguacate",
              "Salsa verde o roja al gusto",
              "Aloha smoothie: 1 taza de leche de almendras o soya sin azúcar",
              "½ plátano congelado",
              "5 fresas congeladas",
              "6 cuadritos de piña (opcional)",
              "Hielo y endulzante sin calorías al gusto (opcional)"
            ],
            "pasos": [
              "En una sartén con la cdita de aceite coloca la papa y las espinacas; espera a que las espinacas se suavicen y las papas se doren.",
              "Agrega los frijoles y pizca de sal y pimienta.",
              "Acompaña con salsa verde o roja al gusto.",
              "Para el aloha smoothie, licúa la leche, el plátano congelado, las fresas, la piña, hielo y endulzante al gusto."
            ]
          },
          {
            "nombre": "Cheesecake Toast",
            "etiquetas": ["1xsemana"],
            "ingredientes": [
              "1 huevo",
              "½ taza de yogurt griego natural sin azúcar",
              "1 cdita de vainilla",
              "Pizca de canela",
              "1 cda de jarabe de maple sin azúcar",
              "10 fresas picadas",
              "2 rebanadas de pan integral o 50g de pan de masa madre",
              "20 mitades de nuez"
            ],
            "pasos": [
              "Mezcla en un bowl el huevo, yogurt, vainilla, canela y jarabe de maple.",
              "Aplana el centro de los panes con los dedos o una cuchara y agrega la mezcla a cada uno; coloca las fresas y nueces encima.",
              "Lleva al hornito eléctrico 10–15 min a 160°C.",
              "Receta para consumir solo una vez por semana."
            ]
          }
        ],
        "Comida": [
          {
            "nombre": "Spicy Salmon Poke Bowl",
            "etiquetas": [],
            "ingredientes": [
              "170g de salmón o atún fresco en cubitos",
              "½ taza de arroz integral cocido al vapor",
              "Pepino picado al gusto",
              "½ zanahoria picada",
              "1 cda de ajonjolí",
              "80g de aguacate",
              "1 cdita de mayonesa",
              "1 cdita de sriracha"
            ],
            "pasos": [
              "En un plato hondo mezcla el salmón o atún con la mayonesa y la sriracha.",
              "En otro plato pon el arroz de base y agrega el salmón, pepino, zanahoria, aguacate y ajonjolí.",
              "Agrega aderezo \"soya y limón\" de la sección de aderezos con balance.",
              "El salmón va crudo, pero si prefieres puedes sellarlo en sartén al término que te agrade."
            ]
          },
          {
            "nombre": "Tacos Tropicales de Garbanzos",
            "etiquetas": ["vegano"],
            "ingredientes": [
              "½ taza de garbanzos cocidos",
              "½ jitomate picado",
              "½ taza de piña picada",
              "½ pepino pequeño picado",
              "2 cdas de cebolla morada picada",
              "1 cda de cilantro picado y desinfectado",
              "Jugo de 1 limón",
              "20 mitades de cacahuate natural",
              "Sal y pimienta al gusto",
              "Chile serrano picado al gusto (opcional)",
              "80g de aguacate (acompañar)",
              "Jícama rebanada muy delgada (en lugar de tortilla)"
            ],
            "pasos": [
              "Para las tortillas usa la jícama rebanada muy delgada (puedes pedir en el súper que la rebanen, o picarla y mezclarla con todo).",
              "Mezcla en un plato hondo los garbanzos, jitomate, piña, pepino, cebolla, cilantro, limón, cacahuate, sal y pimienta (y chile serrano si quieres).",
              "Agrega la mezcla a las tortillas de jícama.",
              "Acompaña con 80g de aguacate."
            ]
          },
          {
            "nombre": "Sopa de Tortilla",
            "etiquetas": [],
            "ingredientes": [
              "1 taza de tiras de tortilla u totopos de maíz horneados (puedes deshidratar 2 tortillas)",
              "1 jitomate grande cocido",
              "¼ de diente de ajo",
              "½ taza de agua (más al gusto)",
              "Pizca de sazonador",
              "Pizca de orégano seco",
              "1 cda de chile chipotle",
              "120g de pechuga de pollo (cocida o asada)",
              "80g de aguacate (acompañar)",
              "Cebolla desflemada al gusto",
              "1 cdita de jocoque (sour cream) o yogurt griego (opcional)"
            ],
            "pasos": [
              "En la licuadora coloca el jitomate cocido, ajo, agua, sazonador, orégano y chile chipotle.",
              "Mezcla bien, vierte en una olla y calienta a fuego alto.",
              "Sirve el caldillo en un plato hondo y agrega las tortillas.",
              "Acompaña con pollo, aguacate, cebolla desflemada y jocoque o yogurt griego (opcional)."
            ]
          },
          {
            "nombre": "Pollo Buffalo con Camote a la Francesa y Ensalada",
            "etiquetas": ["1xsemana"],
            "ingredientes": [
              "170g de pechuga de pollo cruda sin piel en cubitos",
              "1/3 de taza de salsa buffalo (ver marcas sugeridas)",
              "1 cdita de aceite",
              "1 camote amarillo mediano (sweet potato)",
              "Paprika y chile en polvo al gusto",
              "Pizca de sal",
              "Aceite en spray o 1 cdita",
              "1 taza de lechuga",
              "Puñito de espinacas",
              "Pepino y zanahoria rallada al gusto",
              "Aderezo Ranch (de aderezos con balance)"
            ],
            "pasos": [
              "Camote a la francesa: lava el camote, pártelo a lo largo estilo papas, acomódalo sin encimar en una charola, rocía aceite y agrega paprika, chile y sal.",
              "Hornéalo a 160°C ~30 min (o air fryer). Sin horno: cuécelo al vapor y dóralo en sartén.",
              "Marina el pollo con la salsa buffalo y cuécelo en sartén con 1 cdita de aceite.",
              "Ensalada: mezcla lechuga, espinacas, pepino y zanahoria con el Aderezo Ranch.",
              "Receta para consumir solo una vez por semana."
            ]
          }
        ],
        "Cena": [
          {
            "nombre": "Ensalada de Betabel y Edamames",
            "etiquetas": ["vegano"],
            "ingredientes": [
              "1 betabel pequeño cocido en cubos (el congelado ya viene precocido)",
              "1 taza de edamames cocidos sin vaina (o garbanzos)",
              "1 cda de queso de cabra",
              "Vinagre balsámico al gusto"
            ],
            "pasos": [
              "Mezcla los ingredientes y agrega vinagre balsámico al gusto."
            ]
          },
          {
            "nombre": "Tostadas Frescas de Pavo",
            "etiquetas": [],
            "ingredientes": [
              "2 tostadas horneadas",
              "90g de pechuga de pavo",
              "80g de aguacate",
              "½ limón",
              "1 pepino pequeño en rodajas",
              "10 tomates cherry picados"
            ],
            "pasos": [
              "Machaca el aguacate con limón y sal.",
              "Unta el aguacate en las tostadas y agrega el pavo, los tomates y el pepino."
            ]
          },
          {
            "nombre": "Croquetas de Atún",
            "etiquetas": [],
            "ingredientes": [
              "1 lata de atún en agua bien drenada",
              "1/3 de cebolla picada",
              "½ jitomate picado",
              "1 huevo",
              "3 cdas de harina de avena (licúa las hojuelas)",
              "1 cdita de aceite",
              "Salsa verde o roja al gusto"
            ],
            "pasos": [
              "Revuelve todo en un plato hondo y forma tortitas pequeñas con las manos.",
              "Cocina en sartén con 1 cdita de aceite a fuego bajo hasta su cocción.",
              "Acompaña con salsa verde o roja."
            ]
          },
          {
            "nombre": "Portobello Relleno de Camarones",
            "etiquetas": ["1xsemana"],
            "ingredientes": [
              "1 portobello",
              "Vinagre balsámico (para marinar)",
              "1 jitomate cocido",
              "Pizca de sazonador",
              "Pizca de sal con ajo",
              "1 cda de cebolla picada",
              "1 cdita de albahaca fresca o seca",
              "5 camarones medianos sin cáscara, cocidos y picados"
            ],
            "pasos": [
              "Saca el relleno del portobello y déjalo marinar en un poco de vinagre balsámico.",
              "Salsa: licúa el jitomate cocido, sazonador, sal con ajo, cebolla y albahaca.",
              "Agrega los camarones picados a la salsa y rellena el portobello.",
              "Hornea a 160°C ~10 min (o en sartén con tapa a fuego bajo).",
              "Receta para consumir solo una vez por semana."
            ]
          }
        ],
        "Snacks": [
          {
            "nombre": "Papaya con pistaches",
            "etiquetas": [],
            "ingredientes": ["2 tazas de papaya", "20 pistaches"],
            "pasos": ["Combina y disfruta."]
          },
          {
            "nombre": "Duraznos con crema de frutos secos",
            "etiquetas": [],
            "ingredientes": ["2 duraznos", "1 cdita de crema de almendras o cacahuate"],
            "pasos": ["Acompaña los duraznos con la crema."]
          },
          {
            "nombre": "Uvas con nuez",
            "etiquetas": [],
            "ingredientes": ["20 uvas", "20 mitades de nuez"],
            "pasos": ["Combina y disfruta."]
          },
          {
            "nombre": "Choco Chip Cookie",
            "etiquetas": ["1xsemana"],
            "ingredientes": [
              "½ plátano",
              "45g de avena en hojuelas",
              "1 cdita de extracto de vainilla",
              "1 cda de crema de almendras, cacahuate o avellanas sin azúcar",
              "1 cda de leche de tu preferencia",
              "16g de chocolate amargo 80% cacao en trocitos"
            ],
            "pasos": [
              "Licúa el plátano, avena, vainilla, crema de frutos secos y leche.",
              "Coloca la mezcla en forma de galleta en un plato apto para microondas (con papel encerado debajo).",
              "Agrega encima el chocolate en trocitos.",
              "Microondas 1½ minutos. Receta para consumir solo una vez por semana."
            ]
          }
        ]
      },
      "listaSuper": {
        "Frutas": [
          "Duraznos 4 piezas", "Fresas 30 piezas pequeñas (10 congeladas)", "Limón 5 piezas",
          "Moras azules 1 taza", "Papaya picada 4 tazas", "Piña picada 2 tazas",
          "Plátano 3 piezas (congelar 2 por mitades)", "Uvas 40 piezas"
        ],
        "Verduras": [
          "Ajo ½ diente", "Albahaca fresca o seca 1 cdita", "Betabel 2 piezas pequeñas",
          "Cebolla morada 1 pieza", "Chile chipotle adobado 1 latita", "Chile serrano 2 piezas (opcional)",
          "Cilantro 1 manojo", "Espinacas crudas 3 tazas", "Jitomate saladet 7 piezas",
          "Lechuga 1 taza", "Pepino 6 piezas", "Portobello 1 pieza", "Tomate cherry 20 piezas",
          "Zanahoria 2 piezas"
        ],
        "Cereales y tubérculos": [
          "Arroz cocido al vapor 1 taza (prefiere integral)", "Avena en hojuelas 4 tazas",
          "Camote amarillo 1 pieza ~100g", "Pan integral 6 rebanadas o 150g de masa madre",
          "Papa 2 piezas medianas", "Tostadas horneadas 4 piezas",
          "Totopos deshidratados en tiras 2 tazas o 2 tortillas"
        ],
        "Proteínas": [
          "Atún en agua 2 latas", "Camarones 5 piezas", "Edamames cocidos sin vaina 1 taza",
          "Frijoles machacados 1 taza", "Garbanzos cocidos 1 taza", "Huevo 3 piezas",
          "Pechuga de pavo 180g", "Pechuga de pollo 660g", "Requesón o queso ricota 6 cdas",
          "Salmón 340g", "Yogurt griego natural sin azúcar 2 tazas"
        ],
        "Grasas, semillas y otros": [
          "Aguacate 720g", "Ajo en polvo", "Ajonjolí 2 cdas", "Cacahuate natural 40 mitades",
          "Cacao o cocoa en polvo 2 cditas", "Cebolla en polvo", "Chía 2 cdas",
          "Chile en polvo tipo Tajín o cayena (opcional)", "Chocolate amargo 70-80% cacao 16g",
          "Crema de almendras/cacahuate/avellanas sin azúcar 7 cditas", "Eneldo seco", "Extracto de vainilla",
          "Jarabe de maple sin azúcar 4 cdas", "Jocoque seco (sour cream) 2 cditas (opcional)",
          "Leche de almendras/soya/coco sin azúcar 5 tazas", "Mayonesa 2 cditas", "Nuez 70 mitades",
          "Orégano seco", "Paprika", "Perejil seco", "Pistaches 40 piezas", "Queso de cabra 2 cdas",
          "Salsa buffalo 1/3 de taza", "Sriracha 2 cditas (opcional)", "Vinagre de arroz 2 cdas"
        ],
        "Aderezos y salsas": [
          "Salsa verde o roja",
          "Ranch: 2 cdas yogurt griego + ½ cdita cebolla en polvo + ½ cdita ajo en polvo + ½ cdita eneldo + ½ cdita perejil seco + 1 cda vinagre de arroz + 2 cdas agua + pizca de sal y pimienta"
        ]
      }
    },
    {
      "n": 3,
      "dias": [
        {"Desayuno": 0, "Comida": 0, "Cena": 0, "Snacks": 0},
        {"Desayuno": 1, "Comida": 1, "Cena": 1, "Snacks": 1},
        {"Desayuno": 2, "Comida": 2, "Cena": 2, "Snacks": 2},
        {"Desayuno": 3, "Comida": 3, "Cena": 3, "Snacks": 3}
      ],
      "comidas": {
        "Desayuno": [
          {
            "nombre": "Tacos de Frijoles",
            "etiquetas": ["vegano"],
            "ingredientes": [
              "2 tortillas de maíz",
              "½ taza de frijoles machacados",
              "40g de aguacate",
              "Jitomate al gusto",
              "Licuado energético: 1 taza de leche de almendras sin azúcar",
              "½ plátano congelado",
              "5 fresas congeladas",
              "Puñito de espinacas",
              "1 cda de linaza",
              "½ scoop de proteína en polvo o colágeno (opcional)"
            ],
            "pasos": [
              "Arma los tacos con las tortillas, los frijoles machacados, el aguacate y el jitomate.",
              "Licúa la leche, el plátano congelado, las fresas, las espinacas, la linaza y la proteína (opcional) para el licuado energético."
            ]
          },
          {
            "nombre": "Pear and Vanilla Mug Cake",
            "etiquetas": [],
            "ingredientes": [
              "½ pera en cuadritos pequeños",
              "2 cditas de monk fruit o 1 sobre del endulzante de tu preferencia",
              "1 cdita de canela",
              "1 huevo",
              "3 cdas de harina de avena (o harina de trigo integral)",
              "1 cdita de extracto de vainilla",
              "2 cdas de leche de almendras, coco o soya sin azúcar",
              "¼ de cdita de polvo para hornear",
              "½ cdita de mantequilla derretida o ghee",
              "20 mitades de nuez en trocitos",
              "Pizca de sal"
            ],
            "pasos": [
              "Mezcla en un recipiente la pera, el monk fruit y la canela; microondas 30 seg y mezcla bien.",
              "En el mismo recipiente agrega el huevo, harina de avena, vainilla, leche vegetal, polvo para hornear, mantequilla, nuez y pizca de sal.",
              "Vacía en una taza de cerámica (que la mezcla llegue a la mitad) y compacta con un tenedor.",
              "Microondas 2 minutos y listo."
            ]
          },
          {
            "nombre": "Chilaquiles en Salsa de Cilantro",
            "etiquetas": [],
            "ingredientes": [
              "4 tostadas horneadas partidas",
              "Salsa: ¼ de taza de jocoque (sour cream) o yogurt griego sin azúcar",
              "2 tomates verdes pequeños pelados y cocidos o asados",
              "1 cda de cilantro picadito",
              "Pizca de sal con ajo",
              "90g de pechuga de pollo asada",
              "40g de aguacate",
              "Cebolla al gusto (opcional)",
              "Aparte: 1 taza de papaya y 20 mitades de nuez"
            ],
            "pasos": [
              "Parte las tostadas horneadas.",
              "Licúa el jocoque o yogurt, los tomates verdes, el cilantro y la sal con ajo para la salsa.",
              "Agrega la salsa a las tostadas.",
              "Acompaña con el pollo asado, aguacate y cebolla (opcional).",
              "Aparte sirve 1 taza de papaya y 20 mitades de nuez."
            ]
          },
          {
            "nombre": "Pan Francés Diferente",
            "etiquetas": ["1xsemana"],
            "ingredientes": [
              "1 huevo",
              "1 cdita de extracto de vainilla",
              "½ plátano (congela la otra mitad)",
              "Pizca de canela",
              "2 rebanadas de pan integral o 25g de pan de masa madre",
              "1 cdita de aceite de aguacate o mantequilla",
              "10 fresas picadas",
              "1 cda de jarabe de maple sin azúcar"
            ],
            "pasos": [
              "Licúa el huevo, la vainilla, el medio plátano y la canela.",
              "Pasa las rebanadas de pan por la mezcla hasta que se impregnen.",
              "Cocina en sartén con 1 cdita de aceite o mantequilla, bien por ambos lados.",
              "Sirve con las fresas picadas y el jarabe de maple. Solo una vez por semana."
            ]
          }
        ],
        "Comida": [
          {
            "nombre": "Brochetas de Pollo con Puré de Camote",
            "etiquetas": [],
            "ingredientes": [
              "170g de pechuga de pollo en cubos (crudo; 120g ya cocido)",
              "½ pimiento rojo picado",
              "½ pimiento amarillo picado",
              "1 cdita de aceite",
              "Palillos largos",
              "Puré: 1 camote amarillo mediano cocido al vapor con cáscara",
              "1 cdita de mantequilla",
              "2 cdas de leche",
              "20g de queso tipo panela o mozzarella",
              "Sal y pimienta al gusto"
            ],
            "pasos": [
              "Ensarta en los palillos un cubo de pollo seguido de pimiento de cada color hasta llenarlos.",
              "Cocina las brochetas en sartén con el aceite (puedes agregar un toque de sazonador).",
              "Puré: licúa el camote cocido con cáscara, mantequilla, leche, queso, sal y pimienta.",
              "Acompaña las brochetas con el puré de camote."
            ]
          },
          {
            "nombre": "\"Picadillo\" de Pescado",
            "etiquetas": [],
            "ingredientes": [
              "170g de filete de pescado blanco",
              "Salsa: 1 jitomate asado",
              "1 cdita de chile chipotle adobado (lata)",
              "Pizca de sazonador",
              "Pizca de sal con ajo",
              "1/3 de taza de agua",
              "1 zanahoria picada",
              "1 papa pequeña picada",
              "12 aceitunas sin hueso picaditas",
              "1 tortilla de maíz"
            ],
            "pasos": [
              "Cuece el pescado en agua hirviendo, desmenuza y reserva.",
              "Licúa el jitomate asado, chipotle, sazonador, sal con ajo y agua para la salsa.",
              "En sartén con 1 cdita de aceite cocina la zanahoria y la papa hasta que estén suaves.",
              "Agrega el pescado y la salsa; cocina unos minutos.",
              "Agrega las aceitunas picadas y acompaña con la tortilla de maíz."
            ]
          },
          {
            "nombre": "Ceviche de Lentejas",
            "etiquetas": ["vegano"],
            "ingredientes": [
              "½ taza de lentejas cocidas y bien escurridas (frías)",
              "½ pepino picado",
              "½ zanahoria picada",
              "2 cdas de cebolla picada",
              "2 cdas de cilantro desinfectado y picado",
              "½ pimiento morrón amarillo picadito",
              "80g de aguacate",
              "Jugo de 1 limón",
              "Pizca de sal",
              "2–3 tostadas horneadas"
            ],
            "pasos": [
              "En un plato hondo mezcla las lentejas, pepino, zanahoria, cebolla, cilantro, pimiento, aguacate, limón y sal.",
              "Mezcla muy bien y acompaña con las tostadas horneadas."
            ]
          },
          {
            "nombre": "Cerdo a la BBQ",
            "etiquetas": ["1xsemana"],
            "ingredientes": [
              "170g de bistec de pulpa de cerdo",
              "Salsa BBQ: ½ cdita de sriracha",
              "½ cda de salsa de soya",
              "½ cda de salsa de tomate (ver marcas)",
              "½ cda de paprika",
              "1 cdita de sazonador",
              "1½ cdas de vinagre de manzana",
              "1 cdita de miel de maple",
              "1 elote amarillo asado",
              "Ensalada de lechuga, pepino y jitomate",
              "Aderezo: 1 cdita de aceite de oliva y limón al gusto"
            ],
            "pasos": [
              "Mezcla la salsa BBQ: sriracha, soya, salsa de tomate, paprika, sazonador, vinagre y miel de maple.",
              "En sartén con 1 cdita de aceite cocina el bistec en láminas o cubitos por un lado.",
              "Voltea, agrega la salsa y cocina unos minutos.",
              "Acompaña con el elote asado y la ensalada con su aderezo. Solo una vez por semana."
            ]
          }
        ],
        "Cena": [
          {
            "nombre": "Barquitos de Spicy Tuna",
            "etiquetas": [],
            "ingredientes": [
              "1 lata de atún en agua drenada",
              "1 cdita de sriracha",
              "1 cda de mayonesa",
              "1 cdita de ajonjolí",
              "1 cda de jitomate picadito",
              "40g de aguacate",
              "Hojas de lechuga (las que necesites)"
            ],
            "pasos": [
              "Mezcla el atún con la sriracha, mayonesa, ajonjolí, jitomate y aguacate.",
              "Sirve la mezcla en hojas de lechuga a modo de barquitos."
            ]
          },
          {
            "nombre": "Hummus Tostadas",
            "etiquetas": ["vegano"],
            "ingredientes": ["2 tostadas horneadas", "3 cdas de hummus", "Rodajas de pepino al gusto"],
            "pasos": ["Unta las tostadas con el hummus y agrega el pepino encima."]
          },
          {
            "nombre": "Avo & Mozzarella Toast",
            "etiquetas": [],
            "ingredientes": [
              "2 rebanadas de pan integral tostado o 25g de pan de masa madre",
              "90g de queso mozzarella",
              "80g de aguacate",
              "1 taza de champiñones rebanados",
              "Chorrito de agua",
              "Paprika al gusto",
              "Pizca de sal"
            ],
            "pasos": [
              "Champiñones a la paprika: en sartén con un chorrito de agua, paprika y sal, suaviza los champiñones.",
              "Coloca sobre el pan el aguacate machacado, el queso mozzarella y los champiñones."
            ]
          },
          {
            "nombre": "Panela en Salsa Verde o Roja",
            "etiquetas": [],
            "ingredientes": [
              "90g de queso tipo panela o mozzarella",
              "Salsa verde o roja al gusto",
              "Nopales asados al gusto (o cualquier verdura)",
              "1 tortilla de maíz"
            ],
            "pasos": [
              "Asa el queso en una sartén.",
              "Agrega la salsa verde o roja.",
              "Acompaña con nopales asados (o cualquier verdura) y la tortilla."
            ]
          }
        ],
        "Snacks": [
          {
            "nombre": "Sandía con pistaches",
            "etiquetas": [],
            "ingredientes": ["2 tazas de sandía picada", "20 pistaches"],
            "pasos": ["Combina y disfruta."]
          },
          {
            "nombre": "Mango con almendras",
            "etiquetas": [],
            "ingredientes": ["2 tazas de mango", "20 almendras"],
            "pasos": ["Combina y disfruta."]
          },
          {
            "nombre": "Manzana con chocolate amargo",
            "etiquetas": [],
            "ingredientes": ["1 manzana", "16g de chocolate amargo 80% cacao"],
            "pasos": ["Combina y disfruta."]
          },
          {
            "nombre": "Tiramisú con Balance",
            "etiquetas": ["1xsemana"],
            "ingredientes": [
              "2 cdas de chía",
              "½ taza de yogurt griego",
              "1/3 de taza de leche vegetal sin azúcar",
              "1 cda de cacao en polvo",
              "1 cdita de café soluble descafeinado"
            ],
            "pasos": [
              "En un recipiente de vidrio mezcla la chía, yogurt, leche vegetal, cacao y café soluble.",
              "Mezcla muy bien y deja reposar 1 hora en el refri. Solo una vez por semana."
            ]
          }
        ]
      },
      "listaSuper": {
        "Frutas": [
          "Fresas 20 piezas", "Limón 4 piezas", "Mango 4 tazas picado", "Manzanas 2 piezas",
          "Papaya picada 2 tazas", "Pera 1 pieza", "Plátano 2 piezas (congelar 1 por mitad)",
          "Sandía picada 4 tazas", "Uvas 20 piezas"
        ],
        "Verduras": [
          "Cebolla 1 pieza", "Champiñones 2 tazas rebanado", "Chile chipotle adobado 1 latita",
          "Cilantro 1 manojo", "Espinacas 2 tazas", "Jitomate 6 piezas", "Lechuga 2 tazas",
          "Nopales 2 pencas (opcional)", "Pepino 4 piezas", "Pimiento amarillo 2 piezas",
          "Pimiento rojo 1 pieza", "Tomate verde 4 piezas", "Zanahorias 3 piezas"
        ],
        "Cereales y tubérculos": [
          "Camote amarillo 1 pieza ~100g", "Elote amarillo 1 pieza", "Harina de avena 6 cdas",
          "Pan integral 6 rebanadas o 150g de masa madre", "Papa 2 piezas medianas",
          "Tortilla de maíz 5 piezas", "Tostadas horneadas 16 piezas"
        ],
        "Proteínas": [
          "Atún en agua 2 latas", "Bistec de pulpa de cerdo 190g", "Filete de pescado 340g",
          "Frijoles machacados 1 taza", "Huevo 3 piezas", "Hummus de garbanzo 6 cdas",
          "Jocoque seco o yogurt griego sin azúcar ½ taza", "Lentejas cocidas bien escurridas 1 taza",
          "Pechuga de pollo 610g", "Proteína o colágeno en polvo 1 scoop (opcional)",
          "Queso mozzarella 270g", "Queso panela o mozzarella 40g", "Yogurt griego natural ½ taza"
        ],
        "Grasas, semillas y otros": [
          "Aceitunas sin hueso 24 piezas", "Aguacate 440g", "Ajonjolí 2 cditas", "Almendras 40 piezas",
          "Cacao en polvo 1 cda", "Café soluble descafeinado 1 cdita", "Chía 2 cdas",
          "Chocolate amargo 70-90% cacao 32g", "Jarabe de maple sin azúcar",
          "Leche de almendras sin azúcar 4 tazas", "Leche de vaca 4 cdas (60ml)", "Linaza 2 cdas",
          "Mantequilla 3 cditas", "Mayonesa 2 cdas", "Nuez 80 mitades", "Palillos largos de brocheta",
          "Paprika", "Pistaches 40 piezas", "Polvo para hornear", "Puré o salsa de tomate ½ taza",
          "Salsa de soya baja en sodio o aminos", "Sriracha", "Vinagre de manzana 2 cdas"
        ],
        "Aderezos y salsas": ["Salsa verde o roja"]
      }
    },
    {
      "n": 4,
      "dias": [
        {"Desayuno": 0, "Comida": 0, "Cena": 0, "Snacks": 0},
        {"Desayuno": 1, "Comida": 1, "Cena": 1, "Snacks": 1},
        {"Desayuno": 3, "Comida": 2, "Cena": 2, "Snacks": 2},
        {"Desayuno": 4, "Comida": 3, "Cena": 3, "Snacks": 3}
      ],
      "comidas": {
        "Desayuno": [
          {
            "nombre": "Arroz con Leche",
            "etiquetas": [],
            "ingredientes": [
              "¼ de taza de arroz blanco",
              "1 taza de leche de almendras",
              "Canela al gusto",
              "Extracto de vainilla",
              "10 pasitas",
              "10 mitades de nuez",
              "Proteína a media mañana (elige 1): 90g pechuga de pavo / 90g queso panela / 90g pechuga de pollo / 1 huevo cocido / 90g atún / ½ scoop proteína"
            ],
            "pasos": [
              "En una ollita coloca la leche, canela y vainilla; deja hervir y agrega el arroz hasta su cocción, revolviendo para que no se pegue.",
              "Sirve y agrega las pasitas y las nueces.",
              "Este desayuno necesita proteína: a media mañana cómela (elige una opción) y agrega la verdura que quieras."
            ]
          },
          {
            "nombre": "Avo Egg Toast Especial",
            "etiquetas": [],
            "ingredientes": [
              "2 rebanadas de pan integral tostado",
              "80g de aguacate",
              "Limón al gusto",
              "Pizca de sal",
              "1 cda de cilantro picado",
              "Tiras de jitomate asado",
              "1 huevo estrellado"
            ],
            "pasos": [
              "Guacamole especial: machaca el aguacate con limón, sal, cilantro y tiras de jitomate asado.",
              "Coloca el guacamole sobre el pan y agrega el huevo estrellado."
            ]
          },
          {
            "nombre": "Sunshine Smoothie",
            "etiquetas": [],
            "ingredientes": [
              "½ taza de lechada de almendras, soya o coco sin azúcar",
              "¼ de taza de yogurt griego natural sin azúcar",
              "1 plátano congelado (congelar una noche antes)",
              "1 naranja chica pelada sin semillas",
              "Agua y hielo al gusto",
              "Endulzante sin calorías al gusto (opcional)",
              "½ scoop de proteína en polvo de vainilla (opcional)"
            ],
            "pasos": [
              "Coloca todos los ingredientes en la licuadora.",
              "Mezcla muy bien y disfruta."
            ]
          },
          {
            "nombre": "Hot Cakes de Camote / Linaza",
            "etiquetas": [],
            "ingredientes": [
              "100g de camote cocido u horneado sin cáscara (1 camote mediano)",
              "4 claras de huevo",
              "1 cda de linaza",
              "Pizca de canela",
              "1 manzana picadita",
              "1 cda de jarabe de maple sin azúcar"
            ],
            "pasos": [
              "Mezcla el camote, claras, linaza y canela.",
              "Cocina en sartén con 1 cdita de aceite de oliva o aguacate en forma de círculos.",
              "Sirve y acompaña con la manzana picada (puedes dorarla) y el jarabe de maple."
            ]
          },
          {
            "nombre": "Vegan Barbacoa Tacos",
            "etiquetas": ["vegano"],
            "ingredientes": [
              "1 jitomate asado",
              "1 cda de cebolla picada",
              "¼ de diente de ajo (opcional)",
              "Chile chipotle al gusto (lata)",
              "Pizca de sazonador",
              "1 cdita de aceite",
              "½ taza de lentejas cocidas y escurridas",
              "2 tortillas de maíz o 4 de nopal"
            ],
            "pasos": [
              "Licúa el jitomate asado, cebolla, ajo, chipotle y sazonador para la salsa.",
              "En sartén con 1 cdita de aceite coloca las lentejas, agrega la salsa y cocina hasta que reduzca.",
              "Sirve la mezcla en las tortillas."
            ]
          }
        ],
        "Comida": [
          {
            "nombre": "Burrito de Pollo",
            "etiquetas": [],
            "ingredientes": [
              "2 tortillas de harina integral pequeñas (o ezekiel)",
              "120g de pechuga de pollo asada con sal y pimienta",
              "Lechuga al gusto",
              "Jitomate al gusto",
              "Cebolla al gusto",
              "40g de aguacate"
            ],
            "pasos": [
              "Asa la pechuga de pollo con sal y pimienta.",
              "Arma los burritos con las tortillas, el pollo, lechuga, jitomate, cebolla y aguacate.",
              "Puedes agregar salsa verde o roja al gusto."
            ]
          },
          {
            "nombre": "Tofu Teriyaki",
            "etiquetas": ["vegano"],
            "ingredientes": [
              "Salsa: 1 cda de harina de avena, 1 cdita de ajo triturado, pizca de jengibre en polvo, 3 cdas de salsa de soya, 1 cda de jarabe de maple sin azúcar, 2 cdas de agua",
              "100g de tofu extra firme",
              "1 cdita de aceite de oliva o aguacate",
              "1 cda de harina de avena (para el tofu)",
              "1 pimiento verde picado",
              "½ taza de arroz integral al vapor",
              "1 cda de semillas de ajonjolí"
            ],
            "pasos": [
              "Mezcla la salsa: harina de avena, ajo, jengibre, salsa de soya, jarabe de maple y agua.",
              "Corta el tofu en láminas (sécalo antes), úntalo con el aceite y la cda de harina de avena.",
              "Saltea el pimiento en sartén con aceite y retíralo; en la misma sartén dora el tofu por ambos lados.",
              "Agrega el pimiento y la salsa; cocina unos minutos.",
              "Sirve sobre el arroz integral y termina con el ajonjolí."
            ]
          },
          {
            "nombre": "Pasta en Salsa Cremosa",
            "etiquetas": [],
            "ingredientes": [
              "1 cda de cebolla",
              "1 cdita de ajo picado",
              "1/3 de taza de puré de tomate (ver marcas)",
              "1/3 de taza de leche de almendras sin azúcar",
              "1 taza de pasta ya cocida (penne)",
              "100g de queso mozzarella"
            ],
            "pasos": [
              "En una sartén coloca la cebolla, ajo, puré de tomate y leche de almendras.",
              "Agrega la pasta cocida y el queso mozzarella.",
              "Cocina unos minutos hasta que el queso se derrita y sirve."
            ]
          },
          {
            "nombre": "Hamburguesa de Pollo con Ensalada de Col",
            "etiquetas": ["1xsemana"],
            "ingredientes": [
              "Ensalada: ½ zanahoria rallada, ½ taza de col blanca, ½ taza de col morada, pizca de sal",
              "1 cdita de cilantro",
              "Jugo de ½ limón",
              "1 cdita de crema ácida o jocoque",
              "1 cdita de mayonesa",
              "Pizca de azúcar, sal y pimienta",
              "Pan para hamburguesa integral (Nature's Own)",
              "120g de pollo asado (170g si lo pesas crudo)",
              "80g de aguacate"
            ],
            "pasos": [
              "Ensalada de col: mezcla zanahoria, col blanca, col morada y pizca de sal; masajea y deja reposar, retira el agua.",
              "Agrega cilantro, limón, crema ácida o jocoque, mayonesa, azúcar, sal y pimienta.",
              "Arma la hamburguesa: pan integral, el pollo asado y encima la ensalada de col.",
              "Acompaña con 80g de aguacate. Solo una vez por semana."
            ]
          }
        ],
        "Cena": [
          {
            "nombre": "Tostadas de Frijoles",
            "etiquetas": ["vegano"],
            "ingredientes": [
              "2 tostadas horneadas",
              "½ taza de frijoles machacados",
              "80g de aguacate",
              "Salsa roja al gusto"
            ],
            "pasos": [
              "Coloca los frijoles machacados sobre las tostadas.",
              "Agrega el aguacate y salsa roja al gusto."
            ]
          },
          {
            "nombre": "Thin Turkey Sandwich",
            "etiquetas": [],
            "ingredientes": [
              "1 bollo thins de Oroweat",
              "90g de pechuga de pavo",
              "1 cdita de mostaza dijon",
              "Lechuga al gusto",
              "Jitomate al gusto",
              "40g de aguacate"
            ],
            "pasos": [
              "Unta el bollo con la mostaza dijon.",
              "Arma el sándwich con el pavo, lechuga, jitomate y aguacate."
            ]
          },
          {
            "nombre": "Ensalada con Pera y Nuez",
            "etiquetas": ["vegano"],
            "ingredientes": [
              "1 taza de lechuga",
              "1 taza de espinacas baby",
              "½ pera en cuadritos",
              "1 pepino en cuadritos",
              "3 fresas picadas",
              "½ taza de garbanzos cocidos",
              "40g de aguacate",
              "Aderezo \"Mostaza dulce\" (de aderezos con balance)"
            ],
            "pasos": [
              "En un bowl mezcla lechuga, espinacas, pera, pepino, fresas, garbanzos y aguacate.",
              "Acompaña con el aderezo \"Mostaza dulce\"."
            ]
          },
          {
            "nombre": "Crepa Salada",
            "etiquetas": [],
            "ingredientes": [
              "1 huevo + 3 claras (½ taza si líquidas)",
              "1 puñito de espinacas",
              "1 cda de avena en hojuelas",
              "Pizca de sazonador y de sal",
              "90g de pechuga de pollo asada o queso panela",
              "40g de aguacate",
              "Jitomate al gusto (opcional)"
            ],
            "pasos": [
              "Licúa el huevo, claras, espinacas, avena, sazonador y sal.",
              "Esparce la mezcla en un sartén antiadherente formando una tortilla grande delgada; cocina por ambos lados.",
              "Rellena con el pollo o queso panela, aguacate y jitomate (opcional) y envuelve."
            ]
          }
        ],
        "Snacks": [
          {
            "nombre": "Manzana con crema de almendras",
            "etiquetas": [],
            "ingredientes": ["1 manzana", "2 cditas de crema de almendras o cacahuate"],
            "pasos": ["Combina y disfruta."]
          },
          {
            "nombre": "Pera con semillas de calabaza",
            "etiquetas": [],
            "ingredientes": ["1 pera", "2 cdas de semillas de calabaza"],
            "pasos": ["Combina y disfruta."]
          },
          {
            "nombre": "Fresas con chocolate amargo",
            "etiquetas": [],
            "ingredientes": ["20 fresas", "32g de chocolate amargo 80% cacao"],
            "pasos": ["Combina y disfruta."]
          },
          {
            "nombre": "Carlota de Limón",
            "etiquetas": ["1xsemana"],
            "ingredientes": [
              "40g de avena en hojuelas",
              "½ taza de lechada vegetal",
              "½ taza de agua",
              "1 cda de jarabe de maple sin azúcar",
              "½ taza de yogurt griego",
              "Endulzante sin calorías al gusto",
              "El jugo de un limón"
            ],
            "pasos": [
              "Mezcla la avena, lechada vegetal, agua y jarabe de maple en un recipiente apto para microondas; microondas 90 seg.",
              "Aparte mezcla el yogurt griego, endulzante y jugo de limón.",
              "Coloca la mezcla de yogurt sobre la de avena y refrigera mínimo 2 hrs. Solo una vez por semana."
            ]
          }
        ]
      },
      "listaSuper": {
        "Frutas": [
          "Fresas 46 piezas", "Limón 5 piezas", "Manzana 3 piezas", "Naranja 1 pieza chica",
          "Pasas 20 piezas", "Pera 3 piezas", "Plátano 2 piezas (congelar sin cáscara por mitad)"
        ],
        "Verduras": [
          "Cebolla 1 pieza", "Chile chipotle 1 latita", "Cilantro 1 manojo", "Col blanca picada ½ taza",
          "Col morada picada ½ taza", "Espinacas baby 3 tazas", "Jitomate 6 piezas", "Lechuga 4 tazas",
          "Pepino 2 piezas", "Pimiento verde 2 piezas", "Zanahoria 1 pieza"
        ],
        "Cereales y tubérculos": [
          "Arroz blanco crudo ½ taza", "Arroz cocido 2 tazas (prefiere integral)", "Avena en hojuelas 60g",
          "Bollo thins de Oroweat 2 bollos (4 panes) o pan de masa madre 50g", "Camote amarillo 100g",
          "Harina de avena 4 cdas", "Pan integral 4 rebanadas o 100g de masa madre",
          "Pan para hamburguesa integral (Oroweat o Nature's Own) 1 bollo / 2 panes",
          "Pasta cocida (penne) 2 tazas", "Tortilla de harina integral 4 piezas",
          "Tortilla de maíz 2 piezas (o 4 de nopal)", "Tostadas horneadas 4 piezas"
        ],
        "Proteínas": [
          "Claras de huevo 11 piezas (2 tazas)", "Frijoles machacados 1 taza", "Garbanzos cocidos 1 taza",
          "Huevo 3 piezas", "Lentejas cocidas ½ taza", "Pechuga de pavo 180g", "Pechuga de pollo 700g",
          "Proteína o colágeno en polvo 1 scoop (opcional)", "Queso mozzarella 200g",
          "Tofu extra firme 100g", "Yogurt griego natural 1 taza"
        ],
        "Grasas, semillas y otros": [
          "Aguacate 680g", "Canela en polvo", "Chocolate amargo 70-90% cacao 64g",
          "Crema de cacahuate o almendras 4 cditas", "Jarabe de maple sin azúcar 4 cdas",
          "Jengibre en polvo", "Jocoque (sour cream) o yogurt griego 1 cdita",
          "Leche de almendras sin azúcar 5 tazas", "Linaza 2 cdas", "Mayonesa 1 cdita",
          "Mostaza amarilla", "Mostaza dijon 2 cditas", "Nuez 20 mitades",
          "Puré o salsa de jitomate ½ taza", "Salsa de soya baja en sodio o aminos 6 cdas",
          "Semillas de ajonjolí 2 cdas", "Semillas de calabaza 4 cdas", "Vinagre balsámico"
        ],
        "Aderezos y salsas": [
          "Salsa verde o roja",
          "Aderezo mostaza dulce: 1 cda mostaza amarilla + 1 cdita aceite de oliva + 2 cdas vinagre balsámico + 1 cdita jarabe de maple sin azúcar + sal y stevia al gusto"
        ]
      }
    }
  ]
};
