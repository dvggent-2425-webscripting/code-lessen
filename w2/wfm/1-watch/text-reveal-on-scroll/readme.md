# Text Reveal on Scroll

## Overzicht

In deze oefening gaan jullie werken aan de "Text Reveal on Scroll" pagina. Het doel is om het script dat de tekst onthult wanneer je naar beneden scrolt, volledig opnieuw te schrijven.

## Bestanden

- **index.html**: Het belangrijkste HTML-bestand dat de structuur van de pagina bevat.
- **css/reset.css**: Een CSS-resetbestand om een consistente basisstijl te garanderen.
- **css/style.css**: Het CSS-bestand met de stijlen voor de pagina.
- **js/script.js**: Het JavaScript-bestand dat jullie opnieuw gaan schrijven om de tekst te onthullen tijdens het scrollen.

## Doel

Het doel van deze oefening is om het script `script.js` opnieuw te schrijven zodat de tekst op de pagina wordt onthuld wanneer je naar beneden scrolt. Dit script moet ervoor zorgen dat de tekst geleidelijk zichtbaar wordt wanneer deze in het zicht van de gebruiker komt.

## Tips

1. **Gebruik van Event Listeners**: Gebruik de `scroll` event listener om te detecteren wanneer de gebruiker naar beneden scrolt. Voeg deze event listener toe aan het `window` object:
    ```js
    window.addEventListener('scroll', function() {
        // Jouw code hier
    });
    ```

2. **Elementen Selecteren**: Selecteer de elementen die je wilt onthullen tijdens het scrollen. Gebruik bijvoorbeeld `document.querySelectorAll` om alle elementen met een bepaalde klasse te selecteren:
    ```js
    const revealElements = document.querySelectorAll('.reveal');
    ```

3. **Bereken de Positie van de Elementen**: Controleer de positie van elk element ten opzichte van het viewport om te bepalen of het element zichtbaar is. Gebruik de `getBoundingClientRect` methode om de positie van een element te krijgen:
    ```js
    revealElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // Element is zichtbaar
        }
    });
    ```

4. **Voeg een Klasse Toe om de Tekst te Onthullen**: Voeg een klasse toe aan de elementen die zichtbaar zijn om de onthullingsanimatie te starten. Bijvoorbeeld:
    ```js
    element.classList.add('visible');
    ```

5. **CSS Animaties**: Definieer de animaties in je CSS-bestand om de tekst geleidelijk zichtbaar te maken. Gebruik bijvoorbeeld de `opacity` en `transform` eigenschappen:
    ```css
    .reveal {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }
    ```

## Opdracht

1. **Schrijf het Script Opnieuw**: Schrijf het script in `script.js` opnieuw om de tekst te onthullen tijdens het scrollen. Gebruik de bovenstaande tips als leidraad.

2. **Test je Code**: Test je script regelmatig in de browser om te controleren of de tekst correct wordt onthuld tijdens het scrollen.
