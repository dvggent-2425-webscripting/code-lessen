# Emoji meter

Deze oefening behandelt basis JavaScript-concepten zoals `variabelen`, `eventListeners` en `arrays`.

## Functionaliteit

Maak een schuifbalk waarmee de gebruiker een emoji kan kiezen die past bij hun gevoel. Voeg ook een knop toe om tussen licht en donker thema te wisselen.

## Het range element

Voor de schuifbalk werd in HTML een `<input>` element gebruikt met attribute `type="range"`. Bekijk op de website van MDN hoe dit element werkt en welke verschillende attributes hier mogelijk zijn:
[MDN: Input type "range"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)

<Input type="range">

## Stappen

1. Analyseer de aangeleverde HTML & CSS bestanden.
2. Selecteer de `slider` en emoji `div` met `document.querySelector()`.
3. Maak een `array` met verschillende emoji’s.
4. Voeg een `event listener` toe aan de slider om de emoji te veranderen bij beweging (`input` event).
5. Verander de _tekst_ van de emoji op basis van de sliderwaarde.

### Extra: Dark mode

6. Selecteer de button met `document.querySelector()`.
7. Voeg een event listener toe aan de knop om `classList.toggle("dark")` te gebruiken voor dark mode.

### Tips:

- **Arrays en indexes**: Een `array` is een lijst met meerdere waarden. In dit geval slaan we emoji’s op in een array. Elke waarde heeft een `index` (positie in de lijst), beginnend bij `0`.
  ```
  myArray[0];  // Het eerste element in de array
  myArray[1];  // Het tweede element in de array
  myArray[2];  // Het derde element in de array
  ```
- De **sliderwaarde** komt overeen met een `index`, waardoor je direct de juiste emoji kunt ophalen:
  ```
  emojiButton.textContent = emojis[emojiSlider.value];
  ```
