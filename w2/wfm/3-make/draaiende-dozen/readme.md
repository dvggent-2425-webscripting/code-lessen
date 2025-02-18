# Draaiende Dozen

## Overzicht

In deze oefening gaan jullie werken aan de "Draaiende Dozen" pagina. Het doel is om de JavaScript code zelf te schrijven zodat de dozen draaien wanneer erop geklikt wordt en terugkeren naar hun oorspronkelijke staat wanneer op de reset-knop wordt geklikt.

## Bestanden

- **index.html**: Het HTML-bestand dat de structuur van de pagina bevat.
- **css/style.css**: Het CSS-bestand met de stijlen voor de pagina en de animaties.
- **js/main.js**: Het JavaScript-bestand dat jullie zelf gaan schrijven om de interacties te implementeren.

## Doel

Het doel van deze oefening is om de JavaScript code te schrijven die ervoor zorgt dat de dozen draaien wanneer erop geklikt wordt en terugkeren naar hun oorspronkelijke staat wanneer op de reset-knop wordt geklikt.

## Instructies

1. **HTML en CSS Bestuderen**: Bekijk de `index.html` en `style.css` bestanden om te begrijpen hoe de pagina is opgebouwd en gestyled. Let vooral op de elementen met de klasse `box` en de reset-knop met het id `reset`.

2. **JavaScript Schrijven**: Schrijf de JavaScript code in `main.js` om de interacties te implementeren.

### Stappenplan

1. **Selecteer de Dozen**:
   - Gebruik `document.querySelectorAll` om alle elementen met de klasse `box` te selecteren en sla deze op in een variabele.

2. **Voeg Click Event Listeners Toe aan de Dozen**:
   - Voeg een click event listener toe aan elke doos.
   - Wanneer een doos wordt aangeklikt, voeg de klasse `active` toe aan de doos.
   - Gebruik `setTimeout` om de klasse `active` na een bepaalde tijd (bijvoorbeeld 1 seconde) weer te verwijderen.

3. **Selecteer de Reset-Knop**:
   - Gebruik `document.getElementById` om de reset-knop te selecteren en sla deze op in een variabele.

4. **Voeg een Click Event Listener Toe aan de Reset-Knop**:
   - Voeg een click event listener toe aan de reset-knop.
   - Wanneer op de reset-knop wordt geklikt, verwijder de klasse `active` van alle dozen om ze terug te zetten naar hun oorspronkelijke staat.

5. **Test je Code**:
   - Test je code regelmatig in de browser om te controleren of de interacties correct werken.

Veel succes en plezier met het werken aan de "Draaiende Dozen" oefening!