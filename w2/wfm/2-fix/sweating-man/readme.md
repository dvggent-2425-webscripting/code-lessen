# Sweating Man

## Overzicht

In deze oefening gaan jullie werken aan de "Sweating Man" pagina. Het doel is om de event listeners toe te voegen aan het script `script.js` en de rest van de code te begrijpen.

## Bestanden

- **index.html**: Het belangrijkste HTML-bestand dat de structuur van de pagina bevat.
- **css/reset.css**: Een CSS-resetbestand om een consistente basisstijl te garanderen.
- **css/style.css**: Het CSS-bestand met de stijlen voor de pagina.
- **js/script.js**: Het JavaScript-bestand dat de logica voor de animaties en interacties bevat.

## Doel

Het doel van deze oefening is om de event listeners toe te voegen aan het script `script.js` zodat de temperatuur kan worden verhoogd of verlaagd met de toetsen 'h' en 'l'. Daarnaast moet je de rest van de code begrijpen en eventueel aanpassen om de animaties te verbeteren.

## JavaScript

- **script.js**: Dit bestand bevat de logica voor de animaties en interacties.

#### Belangrijke Functies

1. **initialize()**: Deze functie wordt aangeroepen wanneer de DOM volledig is geladen. Het selecteert de relevante elementen en voegt een event listener toe aan het `object` element om te wachten tot de SVG is geladen.

2. **onObjectLoad()**: Deze functie wordt aangeroepen wanneer de SVG is geladen. Het roept `getElementsFromObject()` aan om alle relevante elementen uit de SVG te halen, stelt de initiële staat in met `setInitialState()`, en voegt event listeners toe met `addEventListeners()`.

3. **getElementsFromObject(objectElement)**: Deze functie haalt alle elementen met een id uit de SVG en slaat ze op in variabelen of arrays voor later gebruik.

4. **setInitialState()**: Deze functie stelt de initiële staat van de elementen in, zoals het verbergen van de zweetdruppels en de zon.

5. **addEventListeners()**: Deze functie moet worden uitgebreid om event listeners toe te voegen voor de toetsen 'h' en 'l' om de temperatuur te verhogen of verlagen.

## Opdracht

1. **Voeg Event Listeners Toe**: Voeg de event listeners toe in de functie `addEventListeners()` om de temperatuur te verhogen of verlagen met de toetsen 'h' en 'l'. Gebruik de volgende code als voorbeeld:

2. **Begrijp de rest van de Code**: Bestudeer de rest van de code in `main.js` om te begrijpen hoe de animaties en interacties werken. Probeer de code aan te passen om de animaties te verbeteren of nieuwe animaties toe te voegen.
