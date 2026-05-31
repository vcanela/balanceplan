// ===========================================================================
// PRODUCTOS LOCALES (Nueva Zelanda) — capa de localización de la lista de súper
// ---------------------------------------------------------------------------
// CÓMO AMPLIAR ESTO:
//   1) LOCAL_CATALOGO: inventario de lo que SÍ consigues (referencia editable).
//      Es una MUESTRA; agrega lo que quieras, no afecta la lógica por sí solo.
//   2) REGLAS: lo que de verdad maneja las anotaciones. Cada regla dice
//      "si el ingrediente del plan contiene estas palabras → muestra este
//      producto local". Para que un ingrediente se anote, agrega/ajusta una
//      regla aquí. El orden importa: las reglas más específicas van primero.
//   3) POOLS: sustitutos disponibles localmente por categoría del plan, para
//      lo que NO se consigue (papaya, tostadas, etc.).
// ===========================================================================

// 1) Inventario local (muestra). Formato: "Nombre — tamaño (categoría)".
window.LOCAL_CATALOGO = [
  "Bananas — 1kg (Fruta y verdura)",
  "Royal Gala Apples — 1kg (Fruta y verdura)",
  "Granny Smith Apples — kg (Fruta y verdura)",
  "Mandarins — 1kg (Fruta y verdura)",
  "Navel Oranges — kg (Fruta y verdura)",
  "Green Kiwifruit — 1kg (Fruta y verdura)",
  "Gold Pineapple — 1pk (Fruta y verdura)",
  "Broccoli — 1 unidad (Fruta y verdura)",
  "Cauliflower — c/u (Fruta y verdura)",
  "Carrots — 1kg (Fruta y verdura)",
  "Brown Onions — 1kg (Fruta y verdura)",
  "Leeks — c/u (Fruta y verdura)",
  "NZ Celery — c/u (Fruta y verdura)",
  "Crown Pumpkin — c/u (Fruta y verdura)",
  "White Washed Potatoes / Pams Washed White Potatoes (Fruta y verdura)",
  "Red Kumara — 1kg (Fruta y verdura)",
  "Avocado — 1 unidad (Fruta y verdura)",
  "Chicken Breast (Boneless & Skinless) — 500g (Carne)",
  "Chicken Tenderloins — 500g (Carne)",
  "Chicken Thighs (Boneless & Skinless) — 500g (Carne)",
  "Chicken Drumsticks — 1kg (Carne)",
  "Sliced & Shredded Chicken (Carne)",
  "Beef Mince — 1kg (Carne)",
  "Beef Rump Steak — 500g (Carne)",
  "Beef Prime Scotch Steak — 500g (Carne)",
  "Lamb Shoulder Chops — 1kg (Carne)",
  "Pork Shoulder Chops — 1kg / Pork Loins & Fillets (Carne)",
  "Pork Mince & Stir Fry (Carne)",
  "Bacon / Ham & Pork Slices (Carne)",
  "Fresh Salmon Fillet — 500g (Pescado)",
  "Smoked Salmon / Smoked Fish & Mussels (Pescado)",
  "Sealord Tuna (Chunky Style In Spring Water) — 95g (Pescado, lata)",
  "Frozen Prawns & Other Seafood (Pescado, congelado)",
  "Free Range Eggs / Barn Eggs (Lácteos y huevo)",
  "Private Label Butter — 500g / Olivani / Anchor (Lácteos)",
  "Private Label Milk Standard — 1/2/3L (Lácteos)",
  "Vitasoy Unsweetened Oat Milk — 1L / Dairy Free Milk (Lácteos)",
  "Private Label Edam Cheese — 1kg (Lácteos)",
  "Bouton d'Or Feta Cheese — 200g (Lácteos)",
  "Ornelle Camembert Cheese — 110g (Lácteos)",
  "Chesdale Processed Cheese Slices — 250g (Lácteos)",
  "Private Label Cream — 300/500ml / Nestle Reduced Cream (Lácteos)",
  "Meadow Fresh Sour Cream Traditional — 250g (Lácteos)",
  "Dairy Free Yoghurt / Anchor Uno Strawberry (Lácteos)",
  "Private Label Frozen Peas — 1kg (Congelado)",
  "Private Label Mixed Vegetables — 1kg / McCain Mixed Vegetables (Congelado)",
  "Frozen Peas Corn & Beans (Congelado)",
  "McCain Hash Brown Shredded — 750g (Congelado)",
  "Private Label / McCain Fries (Congelado)",
  "Pams Rolled Oats (Despensa)",
  "Pams Peanut Butter (Despensa)",
  "Private Label Plain Flour — 1.5kg (Despensa)",
  "Private Label Tomatoes Chopped In Juice — 400g (Despensa)",
  "Dried Fruit (Despensa)",
  "Olivani Olive Oil Spread — 500g (Despensa, untable)",
  "Special Blend Granulated Coffee — 90g (Bebidas)",
  "Griffin's Crackers / Biscuits (Snacks)",
  "Cadbury Dairy Milk / Chocolate Blocks (Snacks)",
  "Ploughmans Sourdough / Wholemeal / Country Grains Bread — 750g (Panadería)",
  "Fresh Bread Rolls & Buns (Panadería)",
  "Golden Crumpets — 6pk (Panadería)"
];

// 2) Reglas de equivalencia: palabra(s) en el ingrediente del plan → producto local.
//    Orden = de más específico a más general (la primera que coincide gana).
//    Palabra suelta = coincidencia por palabra completa; frase con espacios = subcadena.
window.LOCAL_REGLAS = [
  // --- proteína animal ---
  { kw: ["pechuga de pollo", "pollo"], local: "Chicken Breast (Boneless & Skinless)" },
  { kw: ["salmon"], local: "Fresh Salmon Fillet (500g)" },
  { kw: ["bistec de pulpa de cerdo", "cerdo", "bistec"], local: "Pork Shoulder Chops / Pork Loin" },
  { kw: ["atun"], local: "Sealord Tuna en Spring Water (95g)" },
  { kw: ["camaron", "camarones"], local: "Frozen Prawns & Other Seafood" },
  { kw: ["claras de huevo", "huevo", "claras"], local: "Free Range Eggs" },
  { kw: ["res", "molida"], local: "Beef Mince / Rump Steak" },
  // --- lácteos ---
  { kw: ["crema de cacahuate", "crema de almendras", "crema de avellanas"], local: "Pams Peanut Butter" },
  { kw: ["jocoque", "sour cream", "crema acida"], local: "Meadow Fresh Sour Cream (250g)" },
  { kw: ["crema"], local: "Private Label Cream (300ml)" },
  { kw: ["mantequilla", "ghee"], local: "Private Label Butter (o Olivani / Anchor)" },
  { kw: ["leche de almendras", "leche de soya", "leche de coco", "leche vegetal", "lechada", "leche de tu preferencia"], local: "Vitasoy Unsweetened Oat Milk (o Dairy Free Milk)" },
  { kw: ["leche de vaca", "leche"], local: "Private Label Milk Standard" },
  { kw: ["yogurt", "yoghurt"], local: "Dairy Free Yoghurt / Anchor Uno — no hay griego natural sin azúcar" },
  { kw: ["queso feta", "feta"], local: "Bouton d'Or Feta Cheese (200g)" },
  { kw: ["queso de cabra"], local: "Feta (Bouton d'Or) como reemplazo" },
  { kw: ["queso panela", "queso tipo panela", "panela", "queso mozzarella", "mozzarella"], local: "Edam o Feta — no hay panela/mozzarella" },
  { kw: ["queso parmesano", "parmesano"], local: "Edam rallado (no hay parmesano)" },
  { kw: ["requeson", "ricota", "ricotta"], local: "No hay requesón — usa Cottage o Feta" },
  // --- cereales / tubérculos / pan ---
  { kw: ["harina de avena", "avena", "hojuelas"], local: "Pams Rolled Oats (licúalas para harina de avena)" },
  { kw: ["harina"], local: "Private Label Plain Flour" },
  { kw: ["pan para hamburguesa", "bollo", "thins", "oroweat", "nature"], local: "Fresh Bread Rolls & Buns" },
  { kw: ["pan integral", "masa madre", "pan de masa madre"], local: "Ploughmans Wholemeal / Sourdough (750g)" },
  { kw: ["camote", "kumara"], local: "Red Kumara" },
  { kw: ["elote"], local: "Frozen Peas Corn & Beans (maíz congelado)" },
  { kw: ["papa"], local: "White Washed Potatoes (Pams)" },
  // --- fruta y verdura ---
  { kw: ["platano", "plátano", "banana"], local: "Bananas" },
  { kw: ["manzana"], local: "Royal Gala / Granny Smith Apples" },
  { kw: ["naranja"], local: "Navel Oranges" },
  { kw: ["piña", "pina"], local: "Gold Pineapple" },
  { kw: ["mandarina"], local: "Mandarins" },
  { kw: ["kiwi"], local: "Green Kiwifruit" },
  { kw: ["brocoli", "brócoli"], local: "Broccoli" },
  { kw: ["coliflor"], local: "Cauliflower" },
  { kw: ["zanahoria"], local: "Carrots" },
  { kw: ["cebolla"], local: "Brown Onions" },
  { kw: ["apio"], local: "NZ Celery" },
  { kw: ["calabaza"], local: "Crown Pumpkin" },
  { kw: ["aguacate"], local: "Avocado" },
  // --- grasas / despensa / otros ---
  { kw: ["aceite de oliva", "aceite de aguacate", "aceite"], local: "Olivani Olive Oil Spread (ojo: es untable, no aceite puro)" },
  { kw: ["chocolate"], local: "Cadbury Dairy Milk / Chocolate Blocks (no hay 70-80% cacao en tu lista)" },
  { kw: ["jitomate", "pure de tomate", "puré de tomate", "salsa de tomate"], local: "Tomatoes Chopped In Juice (lata; fresco no está en tu lista)" },
  { kw: ["pasas", "datiles", "dátiles"], local: "Dried Fruit" },
  { kw: ["chicharo", "chícharo"], local: "Private Label Frozen Peas" },
  { kw: ["verduras mixtas", "mixtas", "mixta"], local: "Private Label Mixed Vegetables (congeladas)" },
  { kw: ["cafe", "café", "soluble"], local: "Special Blend Granulated Coffee" }
];

// 3) Sustitutos locales por categoría del plan (para lo que NO se consigue).
window.LOCAL_POOLS = {
  "Frutas": ["Manzana", "Plátano", "Kiwi verde", "Mandarina", "Naranja", "Piña"],
  "Verduras": ["Brócoli", "Zanahoria", "Coliflor", "Calabaza", "Verduras mixtas congeladas"],
  "Cereales y tubérculos": ["Papa", "Kumara", "Avena (Pams)", "Pan integral (Ploughmans)"],
  "Proteínas": ["Pechuga de pollo", "Carne molida", "Salmón", "Atún en agua", "Huevos"]
};

// --- lógica de localización ---
window.localiza = (function(){
  const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
  function matchRule(nItem, kw){
    if(kw.indexOf(" ")>=0) return nItem.indexOf(kw)>=0;            // frase: subcadena
    return new RegExp("\\b"+kw.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b").test(nItem); // palabra completa
  }
  return function(item, categoria){
    const n = norm(item);
    for(const r of window.LOCAL_REGLAS){
      for(const kw of r.kw){ if(matchRule(n, norm(kw))) return {estado:"ok", texto:r.local}; }
    }
    const pool = window.LOCAL_POOLS[categoria];
    return { estado:"falta", sugerencias: pool ? pool.slice(0,2).join(", ") : "" };
  };
})();
