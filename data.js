// Proyecto Balance — datos del plan (PROTOTIPO)
// Semana 1: transcrita completa. Semana 2: parcial (para demostrar el flujo).
// Etiquetas posibles: "vegano", "vegetariano", "1xsemana"
window.PLAN = {
  titulo: "Proyecto Balance",
  autor: "Gary Díaz Nutrición",
  semanas: [
    {
      n: 1,
      comidas: {
        Desayuno: [
          {
            nombre: "Pancakes de Avena y Blueberries",
            etiquetas: ["vegetariano"],
            ingredientes: [
              "½ taza de avena en hojuelas",
              "½ plátano maduro",
              "4 claras de huevo (o ½ taza si las compras líquidas)",
              "1 cda de extracto de vainilla",
              "1 cda de chía",
              "8 moras azules (blueberries)",
              "½ taza de yogurt griego natural sin azúcar (para acompañar)",
              "1 cda de jarabe de maple sin azúcar (para acompañar)"
            ],
            pasos: [
              "Pon todo (menos las moras) en la licuadora y muele.",
              "Vierte la mezcla en círculos pequeños en un sartén con aceite de aguacate.",
              "Antes de que se cuezan del todo, agrega las moras azules a cada uno.",
              "Cocina por ambos lados.",
              "Acompaña con yogurt griego y jarabe de maple."
            ]
          },
          {
            nombre: "Egg & Sweet Potato Hashbrown",
            etiquetas: ["vegetariano"],
            ingredientes: [
              "1 huevo entero + 3 claras (1/3 de taza si líquidas)",
              "1 taza de champiñones",
              "Cebolla y jitomate al gusto",
              "½ cda de aceite de oliva o aguacate",
              "Pizca de sal y pimienta",
              "70g de camote amarillo crudo rallado",
              "1 cda de jarabe (opcional) o salsa roja al gusto"
            ],
            pasos: [
              "Revuelve en un bowl el huevo y las claras.",
              "Sofríe cebolla, jitomate y champiñones en una sartén con 1 cdita de aceite.",
              "Agrega la mezcla de huevo y haz un huevo revuelto; sazona con sal y pimienta.",
              "Hashbrown: mezcla el camote rallado con 1 cdita de aceite, sal y pimienta. Extiéndelo en una sandwichera y cocina (si no tienes, sustituye por 1 tortilla de maíz).",
              "Acompaña con jarabe opcional o salsa roja."
            ]
          },
          {
            nombre: "Crepas Dulces con Manzana",
            etiquetas: ["vegetariano"],
            ingredientes: [
              "4 claras de huevo (½ taza si líquidas)",
              "2 cdas de yogurt griego sin azúcar",
              "1/3 de taza de avena",
              "1 cda de chía o linaza",
              "1 manzana picada",
              "Pizca de canela",
              "1 cda de jarabe de maple sin azúcar"
            ],
            pasos: [
              "Mezcla los ingredientes de la crepa en la licuadora.",
              "En un sartén caliente con 1 cdita de aceite, vierte un poco de mezcla y mueve el sartén para esparcirla. Repite hasta terminar la mezcla.",
              "Haz taquitos con las crepas, rellena con la manzana picada y agrega jarabe de maple."
            ]
          },
          {
            nombre: "Tostadas Mexicanas",
            etiquetas: ["vegetariano"],
            ingredientes: [
              "2 tostadas horneadas",
              "½ taza de frijoles machacados",
              "80g de aguacate",
              "Salsa roja o verde al gusto"
            ],
            pasos: [
              "Calienta las tostadas.",
              "Unta los frijoles machacados, agrega el aguacate y la salsa al gusto."
            ]
          }
        ],
        Comida: [
          {
            nombre: "Dijon Salmón",
            etiquetas: [],
            ingredientes: [
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
            pasos: [
              "Mezcla en un plato hondo la mostaza, aminos de coco, ajo, jugo de limón, chile, paprika y sal.",
              "Marina el salmón en esa salsa 10–20 minutos.",
              "Cocina en una sartén con 1 cdita de aceite de oliva (o agua) hasta el término deseado.",
              "Guarda un poco de salsa para agregarla al servir.",
              "Acompaña con el chayote, zanahoria y papa; agrega mantequilla y sal a las verduras."
            ]
          },
          {
            nombre: "Jennifer Aniston Salad",
            etiquetas: ["vegetariano"],
            ingredientes: [
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
            pasos: [
              "Coloca en un bowl la quinoa, garbanzos, pepino, cebolla, perejil, menta, pistaches y queso feta.",
              "Mezcla el aderezo en un plato hondo y viértelo sobre la ensalada."
            ]
          },
          {
            nombre: "Tostadas de Pollo y \"Chorizo\" de Champiñones",
            etiquetas: [],
            ingredientes: [
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
            pasos: [
              "Suaviza los chiles en agua hirviendo 5 min y licúalos con el jitomate, ajo y sal.",
              "En una sartén con 1 cda de aceite cocina los champiñones con la salsa hasta que reduzca (queda como un \"chorizo\").",
              "Arma las tostadas con el pollo, el chorizo de champiñones y el aguacate."
            ]
          },
          {
            nombre: "Yakimeshi de Camarón",
            etiquetas: [],
            ingredientes: [
              "1 taza de arroz cocido",
              "1 zanahoria picada en cubitos pequeños",
              "Calabacita picada en cubitos pequeños",
              "1 huevo batido",
              "10 camarones",
              "1 cdita de mantequilla",
              "Salsa de soya baja en sodio al gusto"
            ],
            pasos: [
              "En una sartén con 1 cdita de mantequilla cocina la zanahoria y calabacita a fuego medio ~3 min.",
              "Agrega los camarones; cuando cambien de color, agrega el arroz.",
              "Haz a un lado y revuelve el huevo en el hueco; mezcla todo y sazona con salsa de soya."
            ]
          }
        ],
        Cena: [
          {
            nombre: "Alubias",
            etiquetas: ["vegano"],
            ingredientes: [
              "1 taza de alubias cocidas",
              "2 cdas de líquido de cocción de las alubias",
              "Jugo de 1 limón",
              "1 cda de cilantro picado",
              "80g de aguacate en cubitos",
              "Sal y pimienta al gusto"
            ],
            pasos: [
              "Mezcla todos los ingredientes en un plato hondo y sirve."
            ]
          },
          {
            nombre: "Stirfry de Pollo",
            etiquetas: [],
            ingredientes: [
              "135g de pechuga de pollo cruda sin hueso ni piel",
              "1 cda de aceite",
              "¼ de cebolla en medias lunas",
              "½ taza de zanahoria picada",
              "½ taza de ramilletes de brócoli",
              "Champiñones al gusto",
              "Aderezo \"naranja\" (de la sección de aderezos)",
              "1 tortilla"
            ],
            pasos: [
              "En una sartén con aceite cocina la cebolla y la zanahoria.",
              "Agrega el pollo en cuadritos y cocina unos minutos.",
              "Agrega champiñones y brócoli; termina con el aderezo naranja. Acompaña con la tortilla."
            ]
          },
          {
            nombre: "Ceviche de Atún",
            etiquetas: [],
            ingredientes: [
              "1 lata de atún en agua bien drenada (o atún fresco)",
              "½ taza de cebolla picada",
              "1 zanahoria picada",
              "Cilantro picado al gusto",
              "80g de aguacate",
              "Limón y sal al gusto",
              "1–2 tostadas deshidratadas"
            ],
            pasos: [
              "Revuelve el atún con la cebolla, zanahoria, cilantro, aguacate, limón y sal.",
              "Sirve sobre las tostadas."
            ]
          },
          {
            nombre: "Rajas con Queso y Elote",
            etiquetas: ["vegetariano"],
            ingredientes: [
              "90g de queso tipo panela",
              "1 taza de rajas de chile poblano (puedes comprarlas congeladas)",
              "½ taza de elote desgranado (1 elote)",
              "1 tortilla de maíz"
            ],
            pasos: [
              "En una sartén con poco aceite cocina las rajas.",
              "Agrega el elote y la panela hasta que el queso se suavice. Sirve con tortilla."
            ]
          }
        ],
        Snacks: [
          {
            nombre: "Fresas con crema de frutos secos",
            etiquetas: ["vegetariano"],
            ingredientes: ["20 fresas pequeñas", "4 cdtas de crema de almendras, cacahuate o avellanas sin azúcar"],
            pasos: ["Acompaña las fresas con la crema de frutos secos."]
          },
          {
            nombre: "Uvas con nuez",
            etiquetas: ["vegano"],
            ingredientes: ["20 uvas", "20 mitades de nuez"],
            pasos: ["Combina y disfruta."]
          },
          {
            nombre: "Ciruelas con nuez",
            etiquetas: ["vegano"],
            ingredientes: ["4 ciruelas", "20 mitades de nuez"],
            pasos: ["Combina y disfruta."]
          }
        ]
      }
    },
    {
      n: 2,
      comidas: {
        Desayuno: [
          {
            nombre: "Toast de Requesón y Aguacate",
            etiquetas: ["vegetariano"],
            ingredientes: [
              "2 rebanadas de pan integral tostado (120g de pan de masa madre)",
              "40g de queso ricotta o requesón",
              "Rodajas de jitomate al gusto",
              "Salsa roja o verde al gusto"
            ],
            pasos: ["Tuesta el pan, unta el requesón, agrega jitomate y salsa."]
          },
          {
            nombre: "Blueberry Pie Overnight Oats",
            etiquetas: ["vegetariano"],
            ingredientes: [
              "½ taza de avena en hojuelas",
              "½ taza de leche de almendras, soya o coco sin azúcar",
              "1 cda de jarabe de maple sin azúcar",
              "1 cda de chía",
              "3 fresas pequeñas picadas",
              "20 mitades de nuez troceadas"
            ],
            pasos: ["Mezcla todo en un frasco y refrigera toda la noche. En la mañana agrega el topping."]
          }
        ],
        Comida: [
          {
            nombre: "Spicy Salmon Poke Bowl",
            etiquetas: [],
            ingredientes: [
              "170g de salmón en cubitos",
              "½ taza de arroz integral cocido al vapor",
              "Pepino picado",
              "½ zanahoria picada",
              "1 cda de ajonjolí",
              "80g de aguacate",
              "1 cda de mayonesa + 1 cda de sriracha"
            ],
            pasos: [
              "Mezcla la mayonesa con sriracha y revuelve con el salmón.",
              "Sobre el arroz acomoda el salmón, pepino, zanahoria, aguacate y ajonjolí."
            ]
          },
          {
            nombre: "Tacos Tropicales de Garbanzos",
            etiquetas: ["vegano"],
            ingredientes: [
              "½ taza de garbanzos cocidos",
              "Jícama rebanada muy delgada (en lugar de tortilla)",
              "½ jitomate picado",
              "½ taza de piña picada",
              "Cebolla y cilantro picados",
              "Pepino picado",
              "Jugo de limón, sal y pimienta"
            ],
            pasos: [
              "Mezcla los garbanzos con jitomate, piña, cebolla, cilantro y pepino.",
              "Sirve sobre las láminas de jícama a modo de taco; sazona con limón, sal y pimienta."
            ]
          }
        ],
        Cena: [
          {
            nombre: "Ensalada de Betabel y Edamames",
            etiquetas: ["vegetariano"],
            ingredientes: [
              "1 betabel pequeño cocido en cubos",
              "1 taza de edamames cocidos sin vaina",
              "1 cda de queso de cabra",
              "½ taza de garbanzos",
              "Vinagre balsámico al gusto"
            ],
            pasos: ["Mezcla todos los ingredientes y agrega el vinagre balsámico."]
          },
          {
            nombre: "Tostadas Frescas de Pavo",
            etiquetas: [],
            ingredientes: [
              "2 tostadas horneadas",
              "70g de pechuga de pavo",
              "80g de aguacate",
              "Pepino en rodajas",
              "10 tomates cherry picados"
            ],
            pasos: ["Sobre las tostadas unta el aguacate, agrega el pavo, el pepino y los tomates."]
          }
        ],
        Snacks: [
          {
            nombre: "Papaya con pistaches",
            etiquetas: ["vegano"],
            ingredientes: ["2 tazas de papaya", "20 pistaches"],
            pasos: ["Combina y disfruta."]
          },
          {
            nombre: "Duraznos con crema de frutos secos",
            etiquetas: ["vegano"],
            ingredientes: ["2 duraznos", "1 cda de crema de almendras o cacahuate"],
            pasos: ["Acompaña los duraznos con la crema."]
          }
        ]
      }
    }
  ]
};
