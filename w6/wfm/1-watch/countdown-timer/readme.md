# Countdown timer

Deze countdown-timer is een eenvoudige applicatie die een timer start wanneer op de "Start Timer"-knop wordt gedrukt. De timer telt af van 10 naar 0 en stopt automatisch.

## setInterval()

De functie `setInterval()` wordt gebruikt om elke seconde (1000 milliseconden) de timer te verlagen.
De functie ontvangt **2 parameters**:

- Een **functie** die wordt uitgevoerd bij elke interval
- De **tijdsduur** (in milliseconden) tussen elke uitvoering van de functie

## Werking van de arrow function binnen setInterval()

1. De waarde van de timer `timerValue` wordt met 1 verlaagd.
2. De nieuwe waarde van de timer wordt op de pagina weergegeven door de tekst van het juiste HTML-element te updaten.
3. Er wordt gecontroleerd of de timer de waarde 0 heeft bereikt of lager is geworden.
4. Als de timer 0 heeft bereikt, wordt `clearInterval()` aangeroepen om de interval te stoppen. Dit voorkomt dat de functie blijft doorlopen nadat de countdown is voltooid.
