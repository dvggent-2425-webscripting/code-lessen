# Slide-in Panels Oefening

In deze oefening ga je zelf de JavaScript schrijven om de interactieve slide-in panels te laten werken. Je maakt gebruik van **data-attributen** om informatie op te slaan en gebruikt twee verschillende **click-events** om de panels te openen en te sluiten.

## Stappenplan

### 1. HTML en CSS bestuderen

Bekijk de `index.html` en `main.css` bestanden om te begrijpen hoe de pagina is opgebouwd en gestyled. Let er op dat er nog een gedeelte van de CSS niet gescheven is.

### 2. JavaScript schrijven

Schrijf de JavaScript code in `main.js` om de interacties te implementeren.

1. **Klik-event voor openen van panel**:

   - Selecteer alle buttons die een panel openen (`button` elements)
   - Voeg een `click` event listener toe aan elke button
   - Haal via `dataset` de juiste informatie op uit de data-attributen (`data-target`, `data-heading`, `data-content`)
   - Zoek het juiste panel op basis van data-target en voeg een class toe om het zichtbaar te maken
   - Vul de titel en content van het panel met de waarden uit de data-attributen

2. **Klik-event voor sluiten van panel**:

   - Selecteer alle close-buttons in de panels (`.close-button` class)
   - Voeg een `click` event listener toe aan elke close-button.
   - Verwijder de class die het panel zichtbaar maakt.

### 3. CSS aanvullen

- De basis van de CSS is al geschreven, maar je moet de _transformaties_ nog toevoegen.
- Gebruik `transform` en `translate` om de panels te laten inschuiven en uitschuiven.
- Zorg ervoor dat wanneer een panel actief is (`.active` class), deze correct wordt weergegeven.
