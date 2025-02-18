# Interactieve Lichtschakelaar 💡

## Overzicht

In deze oefening gaan jullie werken aan de "Interactieve Lichtschakelaar" pagina. Het doel is om de JavaScript code zelf te schrijven zodat de lamp aan- en uitgeschakeld kan worden en kan knipperen wanneer de muis ingedrukt wordt gehouden.

## Bestanden

- **index.html**: Het HTML-bestand dat de structuur van de pagina bevat.
- **css/main.css**: Het CSS-bestand met de stijlen voor de pagina.
- **css/lightbulb.css**: Het CSS-bestand met de stijlen voor de lamp en de animaties.
- **js/main.js**: Het JavaScript-bestand dat jullie zelf gaan schrijven om de interacties te implementeren.

## Doel

Het doel van deze oefening is om de JavaScript code te schrijven die ervoor zorgt dat de lamp aan- en uitgeschakeld kan worden en kan knipperen wanneer de muis ingedrukt wordt gehouden.

## Instructies

1. **HTML en CSS Bestuderen**: Bekijk de `index.html`, `main.css` en `lightbulb.css` bestanden om te begrijpen hoe de pagina is opgebouwd en gestyled. Let vooral op de elementen met de id's `bulb`, `switchCheckbox`, en `switch`.

2. **JavaScript Schrijven**: Schrijf de JavaScript code in `main.js` om de interacties te implementeren.

**Lamp Aan- en Uitschakelen**:
   - Voeg een event listener toe aan de schakelaar om de lamp aan en uit te schakelen wanneer de schakelaar wordt omgezet.
   - Gebruik de `checked` eigenschap van de schakelaar om te bepalen of de lamp aan of uit moet zijn.
   - Pas de klasse van de lamp aan om de juiste stijl toe te passen (bijvoorbeeld `on` voor aan en `off` voor uit).

**Lamp Laten Knipperen**:
   - Voeg een event listener toe aan de schakelaar om de lamp te laten knipperen wanneer de muis ingedrukt wordt gehouden.
   - Gebruik `setInterval` om de lamp te laten knipperen terwijl de muis ingedrukt wordt gehouden en `clearInterval` om het knipperen te stoppen wanneer de muis wordt losgelaten.

**Tel het Aantal Keer dat de Lamp is Ingeschakeld**:
   - Voeg een teller toe die bijhoudt hoe vaak de lamp is ingeschakeld en toon dit op de pagina.


## Excelleren

Als extra uitdaging kun je de volgende functionaliteit toevoegen:

1. **Bereken het Totale Energieverbruik**:
   - Voeg een functie toe die het totale energieverbruik berekent en dit bijhoudt zolang de lamp aan staat. Toon het totale verbruik op de pagina.

2. **Voeg een Dimmer Toe**:
   - Voeg een dimmer toe waarmee de helderheid van de lamp kan worden aangepast. Pas de stijl van de lamp aan op basis van de dimmerinstelling.    