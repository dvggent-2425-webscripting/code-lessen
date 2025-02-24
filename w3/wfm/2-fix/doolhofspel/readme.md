# Maze game

Dit project bevat een eenvoudig doolhofspel waarin een speler zich door een doolhof moet bewegen. De kernfunctionaliteit wordt verzorgd door de main.js, terwijl de excel.js extra uitdagingen biedt voor wie wil excelleren.

## Spelregels

- Klik op start - de button stopt met 'gloeien'
- Gebruik de **pijltoetsen** of de **buttons** om van de rode bol naar de blauwe bol te navigeren
  - Beweeg je in de foute richting? Dan komt er een melding en kan je opnieuw beginnen.
  - Geraak je tot aan de blauwe bol? Dan ben je gewonnen en komt er ook een melding.

## Wat moet je doen?

### 1. Fix de fouten in main.js

De `main.js` bevat enkele fouten die je moet oplossen om het spel correct te laten functioneren. Denk hierbij aan:

- Onjuiste logica voor spelersbewegingen.
- Event listeners die niet correct werken.
- Mogelijk ontbrekende of foutief geïmplementeerde functies.

**Jouw taak**:

- Doorloop de main.js zorgvuldig.
- Zoek de fouten en los ze op.
- Zorg dat de speler zich correct door het doolhof kan bewegen met de pijltjestoetsen.
- Controleer of de startknop correct werkt om het spel te starten.

### 2. Excelleren (optioneel): Automatic maze

Wil je een stap verder gaan? Voeg dan de `excel.js` toe en implementeer de gevraagde functionaliteiten zodat het spel automatisch (correct) wordt gespeeld, zonder dat de gebruiker iets moet doen:

**Functionaliteiten**:

- Maak een variabele aan waarin je het aantal gedane stappen zal bijhouden
- Schrijf adhv `setInterval()` een script dat elke seconde de functie `executeStep()` uitvoert.
- Geef het stapnummber mee aan een nieuwe fuctie, genaamd `doStep(stepNumber)` en vermeerder het aantal stappen met 1.
- Afhankelijk van de stap voert `doStep(stepNumber)` een stap in een bepaalde richting uit. Gebruik hiervoor een `switch` statement om te bepalen welke richting de speler moet bewegen. Bekijk in **main.js** welke functie je kunt gebruiken om de speler te bewegen en voer die uit in de switch statement.

Tip: Het spel wordt bestuurd met de knoppen, die gelijk zijn aan de pijltjes (`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`).
