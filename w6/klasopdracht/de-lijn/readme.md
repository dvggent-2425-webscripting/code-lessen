# Opdracht: Interactief Busbord voor De Lijn

## Inleiding

In deze opdracht bouw je een interactieve webpagina voor een **dynamisch busbord** van **De Lijn**. De HTML- en CSS-bestanden zijn al gegeven, maar jij schrijft de **JavaScript-functionaliteit** om het busbord correct te laten werken.

## Doel

Deze opdracht helpt je bij het oefenen van **JavaScript**, met focus op:  

- **DOM-manipulatie**  
- **Events verwerken**  
- **UI dynamisch updaten op basis van timers en gebruikersinteractie**  

Je simuleert real-time businformatie en zorgt ervoor dat het busbord **live** bijgewerkt wordt.

---

## Minimale requirements  

Om te slagen voor deze opdracht, moet je minstens de volgende functionaliteiten implementeren:

### 1. Dynamisch busbord bijwerken  
- Schrijf een functie om het busbord **elke seconde** bij te werken met de aankomsttijden van de bussen.  
- **Bussen moeten verdwijnen** zodra hun aankomsttijd **minder dan 0 seconden** is.  

### 2. Halte selecteren  
- Voeg functionaliteit toe aan de knop **"Toon Bussen"** zodat de gebruiker een **halte** kan kiezen.  
- Het busbord moet alleen de bussen tonen die bij de geselecteerde halte stoppen.  

### 3. Dynamische breedte van het invoerveld  
- Zorg ervoor dat de breedte van het invoerveld zich **automatisch** aanpast op basis van de placeholdertekst : 
```js searchInput.setAttribute('size', searchInput.getAttribute('placeholder').length - 2);```

---

## Excelleren 

Wil je extra uitdaging? Implementeer dan de volgende functies:  

- **Geen bussen beschikbaar?**  
  - Als er **geen bussen** meer zijn voor de geselecteerde halte, toon dan de melding:  
    **"Geen bussen die komen."**  

- **Staking activeren/deactiveren**  
  - Voeg functionaliteit toe aan de knop **"Activeer staking"** om stakingen **aan** en **uit** te schakelen.  
  - Wanneer een staking actief is, moeten de bussen die **niet rijden** een speciale opmaak krijgen.  

- **Onbetrouwbare bus**  
  - Zorg ervoor dat **minstens één bus sowieso niet aankomt**.  
  - Als een bus binnen **10 seconden** zou arriveren, moet hij langer onderweg zijn (bijvoorbeeld door de resterende tijd steeds te verlengen).  

TIP: Maak gebruik van volgende array om de businformatie te simuleren:  
```js  
const bussen = [
    { lijn: "1", richting: "Station", aankomst: 30, willStrike: false, halte: 1 },
    { lijn: "3", richting: "Blaarmeersen", aankomst: 45, willStrike: true, halte: 1 },
    { lijn: "5", richting: "Zwijnaarde", aankomst: 60, willStrike: false, halte: 2 },
    { lijn: "7", richting: "Sint-Pieters", aankomst: 20, willStrike: false, halte: 1 },
];
```

TIP 2: Kijk in de CSS welke klassen je kan gebruiken om de opmaak van de bussen aan te passen.

