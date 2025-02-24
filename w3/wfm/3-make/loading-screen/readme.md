# Loading Screen

In deze oefening gaan jullie werken aan de "Loading Screen" pagina. Het doel is om de JavaScript code zelf te schrijven zodat de laadbalk begint te vullen wanneer op de startknop wordt geklikt en een bericht weergeeft wanneer het laden voltooid is.

## Stappenplan

### 1. HTML en CSS bestuderen

Bekijk de `index.html` en `main.css` bestanden om te begrijpen hoe de pagina is opgebouwd en gestyled. Let vooral op de elementen met de klasse `loading-bar` en de knop met het id `start`.

### 2. JavaScript schrijven

Schrijf de JavaScript code in `main.js` om de interacties te implementeren.

1. **Selecteer de Laadbalk en de Knop**:

   - Gebruik `document.querySelector` om de laadbalk en de knop te selecteren en sla deze op in variabelen.

2. **Voeg een Click Event Listener Toe aan de Knop**:

   - Voeg een `click` event listener toe aan de startknop.
   - Wanneer op de knop wordt geklikt, start de `fillBar` animatie van de laadbalk door de `animation` stijl toe te voegen. Stel ook de gepaste `animation-duration`, `animation-timing-function` en `animation-fill-mode` in en voeg een `animation-delay` van `0.01s` toe.

3. **Toon het Bericht na het Laden**:

   - Gebruik `setTimeout` om een bericht weer te geven nadat de animatie van de laadbalk is voltooid (bijvoorbeeld na 3 seconden).

4. **Test je Code**:
   - Test je code regelmatig in de browser om te controleren of de interacties correct werken.
