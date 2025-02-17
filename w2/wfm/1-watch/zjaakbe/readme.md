# Zjaak.be

## Bestanden

- **index.html**: Het belangrijkste HTML-bestand dat de structuur van de pagina bevat.
- **css/reset.css**: Een CSS-resetbestand om een consistente basisstijl te garanderen.
- **css/style.css**: Het CSS-bestand met de stijlen voor de pagina en de animaties.
- **js/logo-animation.js**: Het JavaScript-bestand dat de animaties voor het logo bevat.

## Doel

Het doel van deze oefening is om te begrijpen hoe de animaties en interacties op de "Zjaak.be" pagina werken. Je zult de bestaande code bestuderen en mogelijk aanpassen om de animaties te verbeteren of nieuwe animaties toe te voegen.

## Tips

1. **Bestudeer de HTML-structuur**: Bekijk de `index.html` om te begrijpen hoe de pagina is opgebouwd. Let vooral op de SVG-elementen die worden gebruikt voor het logo.

2. **CSS-animaties**: Bekijk de `style.css` om te zien hoe de CSS-animaties zijn gedefinieerd. Let op de keyframes en de animatie-eigenschappen die worden gebruikt.

3. **JavaScript-interacties**: Bekijk de `logo-animation.js` om te begrijpen hoe de JavaScript-code de animaties en interacties op de pagina beheert. Let op de event listeners en de functies die worden gebruikt om de animaties te starten.

4. **Experimenteer met aanpassingen**: Probeer de bestaande animaties aan te passen of nieuwe animaties toe te voegen. Test je wijzigingen regelmatig in de browser om te zien hoe ze eruitzien.

## Voorbeeldcode

Hier is een voorbeeld van hoe je een eenvoudige animatie kunt toevoegen aan een SVG-element:

```js
document.addEventListener("DOMContentLoaded", (event) => {
  const dot = document.getElementById("i-dot");
  dot.style.animation = "scaleUp 1s ease-in-out forwards";
});
```

In de code wordt ook gebruik gemaakt van **BBox** om de grootte van het SVG-element te bepalen. Dit kan handig zijn om de animaties nauwkeurig af te stemmen op de grootte van het element.
Of om te schalen vanuit het midden van het element.

```js
const bbox = dot.getBBox();
const centerX = bbox.x + bbox.width / 2;
const centerY = bbox.y + bbox.height / 2;
dot.style.transformOrigin = `${centerX}px ${centerY}px`;
```

Meer info over BBox vind je op de [MDN Website](https://developer.mozilla.org/en-US/docs/Web/API/SVGGraphicsElement/getBBox)
