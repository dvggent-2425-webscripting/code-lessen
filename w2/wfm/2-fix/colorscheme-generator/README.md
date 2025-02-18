# Watch: Achtergrondkleur wijzigen

Bekijk deze oefening aandachtig. Merk onder andere volgende zaken op:

## HTML

1. De JavaScript file wordt ingeladen in `index.html`, vóór het sluiten van de `</body>` tag.

## JavaScript

2. We zoeken alle `<div>` elementen met de klasse `color-div` aan de hand van de `querySelectorAll()` functie op regel 2.

3. Al deze `<div>` elementen worden opgeslagen in een **variabele** genaamd `divs`, ook op regel 2.

4. Op regel 4 overlopen we al deze `<div>` elementen. Elk element geven we een andere kleur aan de hand van een zelfgeschreven functie, genaamd `getRandomColor()`.

5. Een functie is een stukje JavaScript dat iets doet. Dat kan van alles zijn. Een functie wordt uitgevoerd als je deze aanroept. De functie `getRandomColor()` genereert een willekeurige hexadecimale kleurwaarde, bijvoorbeeld: #77a9c1.

6. Op regel 1 checken we eerst of alle HTML is ingeladen. Dit doen we aan de hand van het event 'DOMContentLoaded'. Wanneer dit event wordt uitgestuurd, weet de JavaScript file dat alle HTML is ingeladen. Daarna pas zal alle JavaScript code worden uitgevoerd.

## Oefening

In deze oefening zitten enkele fouten die je moet oplossen:

1. **Fout in de HTML**: Controleer of de JavaScript file correct is ingeladen in `index.html`. Zorg ervoor dat het pad naar de JavaScript file klopt en dat deze vóór het sluiten van de `</body>` tag wordt ingeladen.

2. **Fout in de JavaScript**: Controleer de `querySelectorAll()` functie. Zorg ervoor dat alle `<div>` elementen met de klasse `color-div` correct worden geselecteerd en opgeslagen in de variabele `divs`.

3. **Fout in de `getRandomColor()` functie**: Controleer of de functie `getRandomColor()` correct een willekeurige hexadecimale kleurwaarde genereert. Zorg ervoor dat de gegenereerde kleurwaarden geldig zijn.

4. **Fout in de event listener**: Controleer of de event listener voor het 'DOMContentLoaded' event correct is ingesteld. Zorg ervoor dat alle JavaScript code pas wordt uitgevoerd nadat alle HTML is ingeladen.

5. **Fout in de kleurtoewijzing**: Controleer of de kleuren correct worden toegewezen aan de `<div>` elementen. Zorg ervoor dat elk element een andere kleur krijgt.

Veel succes met het oplossen van de fouten in de "Color Scheme Generator" oefening!