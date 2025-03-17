# Tikkende tijdbom

In deze oefening zorg je ervoor dat er een tikkende tijdbom geanimeerd word. De gebruiker krijgt 20 seconden de tijd om de juiste code (1234) in te vullen. Lukt dit, dan wordt de bom geneutraliseerd, lukt dit niet, dan ontploft de bom.

## Doel van de oefening

Het doel is om de bom volledig werkend te krijgen:

- De bom moet aftellen van 20 naar 0
- De bom moet trillen/schudden tijdens het aftellen
- Je moet de bom kunnen ontmantelen door de juiste code (1234) in te voeren
- Als de tijd op is, moet de bom "ontploffen" met een animatie

## Stappenplan

### 1. Timer instellen met setInterval()

De bom moet elke seconde aftellen. Dit kun je doen met `setInterval()`. In de functie die je aan `setInterval()` meegeeft:

- Check of de bom nog actief is
- Verminder de waarde van het element met id `bomb-timer` met 1
- Controleer of de waarde 0 is. Zo ja:
  - stop de timer
  - Voeg de klasse `.explode` toe aan het juiste element
  - Pas `textContent` van het juiste element aan naar "💥 BOEM!"

### 2. Shake animatie toevoegen met requestAnimationFrame()

De bom moet constant een klein beetje bewegen. Dit kun je doen met `requestAnimationFrame()`. Dit werkt als volgt:

- Maak een functie `shakeBomb()`.
- Check of de bom nog actief is
- Verander de transform-eigenschap van het element met id `bomb` met willekeurige x- en y-waardes tussen -2 en +2.
- Gebruik `requestAnimationFrame()` om de functie steeds opnieuw uit te voeren.
- Start `shakeBomb()` direct na het laden van de pagina.

### 3. Ontmantelingsfunctie maken

Gebruikers moeten de code kunnen invoeren om de bom te stoppen. Dit doe je zo:

- Voeg een event listener toe aan de "Stop de bom"-knop.
- Controleer of de ingevoerde code `code-input.value` overeenkomt met de waarde `1234`.
- Als de code correct is:
  - Stop de timer
  - Zorg ervoor dat de bom niet meer actief is en dus stopt met shaken
  - Verander de tekst naar "🎉 Bom geneutraliseerd!".
  - Geef de bom een groene kleur.
- Als de code fout is, toon een `alert()` met een foutmelding.
