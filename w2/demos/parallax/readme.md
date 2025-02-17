# Fietsenrace

Deze oefening demonstreert een parallax scroll effect waarbij verschillende elementen (lucht, ballon, weg) met verschillende snelheden bewegen tijdens het scrollen.

## Bestanden

- **index.html**: Het belangrijkste HTML-bestand dat de structuur van de pagina bevat.
- **css/reset.css**: Een CSS-resetbestand om consistente styling te garanderen.
- **css/style.css**: Het CSS-bestand met de stijlen voor de afbeeldingen en teksten.
- **js/script.js**: Het JavaScript-bestand dat de logica voor het scroll effect bevat.

## Uitleg

### JavaScript

- We selecteren de DOM elementen (afbeeldingen) met `getElementById()`
- We voegen een scroll event listener toe op het window object: `window.addEventListener("scroll", (event) => {})`. Dankzij dit scroll event kunnen we telkens wanneer er een pixel gescrold is, de DOM manipuleren:
  - We manipuleren de DOM door via inline styling de `top`, `bottom`, `left` of `right` van de elementen aan te passen. **Tip**: Open de console en kijk wat er gebeurt in de DOM op het moment dat je scrolt.
  - We voeren een berekening uit op basis van de verticale afstand de we hebben gescrold: `scrollY * [factor]`. Per element kiezen we een andere factor, om zo de elementen aan een andere snelheid te laten bewegen.

## Bronnen

- [MDN Web Docs over de scroll event listener](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event)
