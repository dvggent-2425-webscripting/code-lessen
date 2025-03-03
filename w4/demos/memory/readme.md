# Memory

Een "Memory"-spel laat goed zien hoe je in JavaScript expliciet alle stappen moet definiëren die in het echte leven automatisch gaan:
We maken gebruik van `event listeners`, `data-attributen`, `functies` en `conditionals`.

## Stappen:

1. Zoek een tafel om op te spelen.
2. Schudt de kaarten
3. Leg de kaarten 1 voor 1, omgedraaid, op tafel
4. Start ronde: Kies een kaart die je wil omdraaien
5. Draai de kaart om
6. Kies een tweede kaart die je wil omdraaien
7. Draai de kaart om
8. Stel vast dat je 2 kaarten hebt omgedraaid, dus dat je ze nu wil vergelijken.
9. Vergelijk de omgedraaide kaarten
   1. Zijn de kaarten gelijk? Laat ze liggen.
   2. Zijn de kaarten verschillend? Draai elke kaart opnieuw om.
10. De volgende speler start nu terug vanaf stap 4.

### Edge cases

- Wat als een speler een derde kaart probeert om te draaien?
- Wat als je op een reeds omgedraaide kaart probeert te klikken?
