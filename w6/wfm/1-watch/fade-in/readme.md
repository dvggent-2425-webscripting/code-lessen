# Fade-in Tekst

Deze oefening demonstreert het gebruik van `requestAnimationFrame()` om een vloeiende fade-in animatie te creëren met JavaScript.

## RequestAnimationFrame()

`requestAnimationFrame()` is een JavaScript method die speciaal ontworpen is voor het maken van animaties.
In tegenstelling tot `setTimeout()` of `setInterval()`, synchroniseert `requestAnimationFrame()` de animatie met de refresh rate van de browser, wat resulteert in vloeiendere animaties en betere prestaties.

## Stappenplan

- We maken een functie `fadeIn()` die de **opacity** van een element geleidelijk verhoogt en de Y-positie geleidelijkaan naar 0 brengt.
- Bij elke stap verhogen we de opacity met een kleine waarde. Hoe kleiner de waarde, hoe trager het verloop. De Y-positie verminderen we telkens met 1 pixel.
- We roepen `requestAnimationFrame(fadeIn)` aan om de functie opnieuw uit te voeren bij het volgende frame.
- Dit proces wordt herhaald totdat de **opacity 1** bereikt (volledig zichtbaar) en de **Y-positie 0** is.
