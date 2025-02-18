# Loading Screen

## Overzicht

In deze oefening gaan jullie werken aan de "Loading Screen" pagina. Het doel is om de JavaScript code zelf te schrijven zodat de laadbalk begint te vullen wanneer op de startknop wordt geklikt en een bericht weergeeft wanneer het laden voltooid is.

## Bestanden

- **index.html**: Het HTML-bestand dat de structuur van de pagina bevat.
- **css/main.css**: Het CSS-bestand met de stijlen voor de pagina en de animaties.
- **js/main.js**: Het JavaScript-bestand dat jullie zelf gaan schrijven om de interacties te implementeren.

## Doel

Het doel van deze oefening is om de JavaScript code te schrijven die ervoor zorgt dat de laadbalk begint te vullen wanneer op de startknop wordt geklikt en een bericht weergeeft wanneer het laden voltooid is.

## Instructies

1. **HTML en CSS Bestuderen**: Bekijk de `index.html` en `main.css` bestanden om te begrijpen hoe de pagina is opgebouwd en gestyled. Let vooral op de elementen met de klasse `loading-bar` en de knop met het id `start`.

2. **JavaScript Schrijven**: Schrijf de JavaScript code in `main.js` om de interacties te implementeren.

### Stappenplan

1. **Selecteer de Laadbalk en de Knop**:
   - Gebruik `document.querySelector` om de laadbalk en de knop te selecteren en sla deze op in variabelen.

2. **Voeg een Click Event Listener Toe aan de Knop**:
   - Voeg een click event listener toe aan de startknop.
   - Wanneer op de knop wordt geklikt, start de animatie van de laadbalk door de `animation` stijl toe te voegen.

3. **Toon het Bericht na het Laden**:
   - Gebruik `setTimeout` om een bericht weer te geven nadat de animatie van de laadbalk is voltooid (bijvoorbeeld na 3 seconden).

4. **Test je Code**:
   - Test je code regelmatig in de browser om te controleren of de interacties correct werken.
