# Fietsenrace

Deze oefening demonstreert het gebruik van JavaScript om een eenvoudige animatie te maken waarbij twee fietsen tegen elkaar racen.

## Bestanden

- **index.html**: Het belangrijkste HTML-bestand dat de structuur van de pagina bevat.
- **css/reset.css**: Een CSS-resetbestand om consistente styling te garanderen.
- **css/style.css**: Het CSS-bestand met de stijlen voor de race en de animaties.
- **js/script.js**: Het JavaScript-bestand dat de logica voor de race bevat.

## Hoe te Gebruiken

1. Open `index.html` in je webbrowser om de race te starten.
2. Klik op de knop "Start Race" om de race te beginnen.

## Uitleg

### HTML

- De HTML-pagina bevat twee afbeeldingen van fietsen binnen een `div` met de klasse `race-track`.
- Er is een knop met de id `button-start-race` om de race te starten.

### CSS

- **reset.css**: Dit bestand bevat een aangepaste CSS-reset om een consistente basisstijl te garanderen.
- **style.css**: Dit bestand bevat de stijlen voor de race, inclusief de achtergrond, de positie van de fietsen en de animaties.
  - De klasse `.bike` bevat de basisstijlen voor de fietsen.
  - De klasse `.bike-2` past de positie van de tweede fiets aan.
  - De keyframes `@keyframes wobble` definiëren een eenvoudige schommelende animatie voor de fietsen.
  - De klasse `.button-start-race` bevat de stijlen voor de startknop.

### JavaScript

- **script.js**: Dit bestand bevat de logica voor de race.
  - Wanneer de DOM is geladen, wordt een event listener toegevoegd aan de startknop.
  - De functie `startRace` wordt aangeroepen wanneer de knop wordt ingedrukt.
  - De snelheid van elke fiets wordt willekeurig bepaald en de fietsen beginnen te bewegen.
  - Na de race wordt de winnaar bepaald en wordt een melding weergegeven.

## Bronnen

- [MDN Web Docs over CSS Animaties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [CSS Tricks over Keyframe Animaties](https://css-tricks.com/snippets/css/keyframe-animation-syntax/)

