# Springende Basketbal

Dit project simuleert een basketbal die stuitert wanneer je op de knop drukt. De animatie wordt gemaakt met `requestAnimationFrame()`, wat zorgt voor een soepele beweging.

De HTML, CSS en JS krijg je aangeleverd. De JavaScript bevat echter enkele fouten die je moet opsporen en verbeteren.

## Hoe werkt de animatie?

De bal beweegt door drie belangrijke variabelen:

- **`velocity` (snelheid)**: Dit bepaalt hoe snel de bal beweegt. Elke frame wordt deze snelheid aangepast door de zwaartekracht.
- **`position` (positie)**: Dit bepaalt hoe hoog de bal is. De positie verandert steeds op basis van de snelheid.
- **`gravity` (zwaartekracht)**: Dit zorgt ervoor dat de bal naar beneden versnelt.

Wanneer de bal de grond raakt, wordt de snelheid omgekeerd en verminderd (dit simuleert stuiteren). De animatie wordt gestopt wanneer de bal bijna stil ligt.

## Tips

- Gebruik `console.log()` om te debuggen
- Let goed op de namen van variabelen en elementen
- Controleer of functies correct worden opgeroepen en de correcte parameters bevatten
- Check of de logica in alle conditionals correct is
