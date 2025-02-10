# Watch: Achtergrondkleur wijzigen

Bekijk deze oefening aandachtig. Merk onder andere volgende zaken op:

## HTML

1. De JavaScript file wordt ingeladen in index.html, vóór het sluiten van de `</body>` tag

## JavaScript

2. We zoeken alle `<div>` elementen met de classe `color-div` aan de hand van de `querySelectorAll()` functie op regel 2.

3. Al deze `<div>` elementen worden opgeslagen in een **variabele** genaamd `divs`, ook op regel 2.

4. Op regel 4 overlopen we al deze `<div>`elementen. Elk element geven we een andere kleur aan de hand van een zelfgeschreven functie, genaamd `getRandomColor()`.

5. Een functie is een stukje JavaScript dat iets doet. Dat kan vanalles zijn. Een functie wordt uitgevoerd als je deze aanroept. De functie `getRandomColor()` genereert een willekeurige hexadecimale kleurwaarde, vb: #77a9c1.

6. Op regel 1 checken we eerst of alle HTML is ingeladen. Dit doen we aan de hand van het event 'DOMContentLoaded'. Wanneer dit event wordt uitgestuurd, weet de JavaScript file dat alle HTML is ingeladen. Daarna pas zal alle JavaScript code worden uitgevoerd.
