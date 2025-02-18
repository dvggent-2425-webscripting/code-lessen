# Hover gallerij

## Overzicht

Schrijf de JavaScript-code die ervoor zorgt dat afbeeldingen in een galerij animeren wanneer je er met de muis overheen beweegt.

## Functionaliteit

Er zijn drie afbeeldingen in een galerij.

- Wanneer je met de muis over een afbeelding beweegt, krijgt deze een animatie-effect.
- De animatie vergroot de afbeelding en draait deze een beetje via CSS Keyframes.
- Wanneer je de muis weghaalt, stopt de animatie.

## Doel

Schrijf de code die de hover-animatie activeert wanneer je met de muis **over** de afbeelding beweegt.

### Instructies

1. **HTML en CSS Bestuderen**: Bekijk de `index.html` en `style.css` bestanden om te begrijpen hoe de pagina is opgebouwd en gestyled.

2. **JavaScript Schrijven**: Schrijf de JavaScript code in `main.js` om de interacties te implementeren.

### Stappenplan

1. Haal de afbeeldingen op uit de DOM als een NodeList. Gebruik hiervoor `document.querySelectorAll()`.
2. Loop over de NodeList via de `forEach()` method en voer een functie uit voor elke image.
3. Voeg een eventListener toe voor het `mouseover` event en voor het `mouseout` event.
4. Gebruik `classList.add()` en `classList.remove()` om de klasse toe te voegen en te verwijderen in de corresponderende eventListener.
