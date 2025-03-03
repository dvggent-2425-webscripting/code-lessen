# Confetti

Deze oefening behandelt basis JavaScript-concepten zoals `variabelen`, `eventListeners`, `setTimeout()`en `class` manipulatie met `classList`.

## Functionaliteit

Maak een confetti-effect met JavaScript en CSS waarbij:

- Een knop het effect activeert.
- Het effect na een paar seconden verdwijnt.

## Stappen

1. Analyseer de aangeleverde HTML & CSS bestanden.
   - CSS `@keyframes`: Zorgt voor de animatie van confetti.
   - `:nth-child()` selector in CSS: Geeft elk confetti-element apart een unieke kleur en starttijd.
2. Selecteer elementen met `document.querySelector()`.
3. Voeg een event listener toe om de knop te laten werken.
4. Gebruik `classList.add()` om de `show` klasse toe te voegen.
5. Verwijder de klasse met setTimeout() na een paar seconden.
