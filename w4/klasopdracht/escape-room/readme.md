# Inleiding

In deze opdracht gaan jullie een interactieve escape room maken met behulp van HTML, CSS en JavaScript. De HTML en CSS zijn al voor jullie voorbereid. Jullie taak is om de JavaScript te schrijven die de functionaliteit van de verschillende levels implementeert.

## Stappenplan

### Stap 1: Voorbereiding

1. Clone de repository of download de bestanden naar je lokale machine.
2. Open het project in je favoriete code-editor (bijvoorbeeld Visual Studio Code).

### Stap 2: HTML en CSS Verkennen

1. Bekijk de HTML in `index.html` om te begrijpen welke elementen aanwezig zijn en welke ID's en klassen ze hebben.
2. Bekijk de CSS in `main.css` om te zien hoe de pagina is gestyled.

### Stap 3: JavaScript Bestanden

1. Maak een nieuw JavaScript-bestand aan genaamd `main.js` in de map `js`.
2. Link het JavaScript-bestand aan de HTML door de volgende regel toe te voegen net voor de sluitende `</body>`-tag in `index.html`:

```html
<script src="js/main.js"></script>
```

PS: Het `matrix.js` bestand is een voorbeeld van hoe je een matrix kan maken in javascript. Dit bestand is niet nodig voor de opdracht.

### Stap 4: Level 1 - Firewall Scan

1. Selecteer de benodigde elementen in `main.js`.
2. Schrijf een functie om te controleren of een IP-adres geldig is.
```javascript
function isValidIP(ip) {
    const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(ip);
}
```
3. Voeg een event listener toe aan de knop om de invoer te valideren.
   1. Selecteer de knop en voeg een event listener toe.
   2. Roep de functie aan om de invoer te valideren.
   3. Toon een bericht op het scherm of de invoer geldig is of niet.
   4. Als de invoer geldig is, verander de tekstkleur in groen, anders in rood.

### Stap 5: Level 2 - Even of Oneven Teller

1. Selecteer de benodigde elementen in `main.js`.
2. Schrijf een functie om te tellen hoeveel even en oneven cijfers er in een getal zitten.
    1. Maak een teller voor even en oneven cijfers.
    2. Zet het getal om in een string om elk cijfer afzonderlijk te kunnen controleren.
    3. Loop door elk cijfer en controleer of het even of oneven is.
    4. Verhoog de overeenkomstige teller.
    5. Retourneer het aantal even en oneven cijfers.
3. Voeg een event listener toe aan de knop om de invoer te analyseren.
    1. Selecteer de knop en voeg een event listener toe.
    2. Roep de functie aan om de invoer te analyseren.
    3. Toon een bericht op het scherm met het aantal even en oneven cijfers.

### Stap 6: Level 3 - Data-analyse

1. Selecteer de benodigde elementen in `main.js`.
2. Schrijf een functie om het langste woord in een zin te vinden.
   1. Start met het langste woord op nul te zetten.
   2. Splits de zin in woorden.
   3. Loop door elk woord en controleer of het langer is dan het huidige langste woord.
   4. Als het woord langer is, vervang het langste woord door het huidige woord.
   5. Aan het einde van de lus, retourneer het langste woord.
3. Voeg een event listener toe aan de knop om de invoer te analyseren.

### Stap 4: Level 4 - Eerste Getal Vinden

1. Selecteer de benodigde elementen in `main.js`.
2. Schrijf een functie om het eerste getal tussen 1000 en 9999 te vinden dat deelbaar is door zowel 17 als 29.
Tip: Begin met een for-loop die alle getallen tussen 1000 en 9999 doorloopt en controleer of ze deelbaar zijn door 17 en 29 met behulp van de modulo-operator (%).
3. Voeg een event listener toe aan de knop om de functie aan te roepen wanneer erop wordt geklikt.
4. Toon het resultaat op het scherm.

### Stap 7: Testen en Debuggen

1. Test je code door de pagina in een browser te openen en de verschillende levels uit te proberen.
2. Debug je code indien nodig door `console.log()` te gebruiken en eventuele fouten op te lossen.

## Inleveren

Volg de instructies op Canvas.