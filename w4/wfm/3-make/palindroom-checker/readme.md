# Palindroom

Deze oefening laat de gebruiker een woord invoeren en controleert of het een palindroom is. Een palindroom is een woord dat van achter naar voren hetzelfde is als van voren naar achter. De achtergrondkleur verandert afhankelijk van het resultaat.

## Stappenplan

- Haal de `<input>` en `<button>` uit de DOM en sla ze op in variabelen.
- Voeg een `eventListener` toe voor de knop, zodat er iets gebeurt bij een `klik`.
- Lees de waarde (input.value) uit die de gebruiker invoert en maak deze kleine letters zonder speciale tekens.
- Maak een lege string aan waarin we het omgekeerde woord gaan opbouwen.
- Gebruik een `for-lus` om het woord van achter naar voren te doorlopen en het omgekeerde woord op te bouwen.
- Vergelijk het oorspronkelijke woord met het omgekeerde woord:
  - Als ze gelijk zijn, toon "Het woord is een palindroom!" en voeg de CSS-klasse `palindrome-yes` toe aan de body.
  - Als ze niet gelijk zijn, toon "Het woord is geen palindroom" en voeg de CSS-klasse `palindrome-no` toe aan de body.

## Tips

- Gebruik de `toLowerCase()` methode om het woord naar kleine letters om te zetten.
- Gebruik de `replace()` methode met een REGEX om speciale tekens en spaties te verwijderen uit de invoer: `myString.replace(/[^a-zA-Z0-9]/g, "")`
- Loop door het woord van achter naar voren met een `for-lus`.
- Voeg de CSS-klassen toe of verwijder ze met `classList.add()` en `classList.remove()`.
- Gebruik de `textContent` om de resultaatboodschap weer te geven in de HTML.
