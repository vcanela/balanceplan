# Balance Plan

App web mobile-first para consultar un plan de comidas semanal desde el celular,
en lugar de cargar un PDF impreso. Pensada para el flujo práctico de cada mañana:
*¿qué cocino hoy?*, *¿qué ingredientes necesito?*, *¿cómo se prepara?*

## Cómo usarla en el celular

Abre la URL de GitHub Pages en Safari y usa **Compartir → Agregar a pantalla de inicio**.
Queda como un ícono y abre a pantalla completa, igual que una app.

## Características

- Menú flexible por semana → Desayuno · Comida · Cena · Snacks.
- Ficha de receta con **ingredientes como checklist** (marca lo que ya tienes) y
  **pasos numerados** con letra grande.
- El estado del checklist se guarda localmente en el navegador.

## Estructura

- `index.html` — toda la interfaz (HTML + CSS + JS, sin dependencias).
- `data.js` — los datos del plan (semanas → comidas → recetas).

## Estado

Prototipo. Semana 1 transcrita completa; Semana 2 parcial.

## Notas

Los PDFs originales del plan **no se incluyen** en el repositorio (material de pago).
Este proyecto es solo una herramienta de consulta personal del contenido.
