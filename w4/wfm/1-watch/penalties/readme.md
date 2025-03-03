# Penalties

Je neemt een aantal penalty's (bepaald door `const amount = ...`) en na het klikken op de knop vertelt de computer je of je hebt gescoord of gemist. Dit gebeurt met een `for-loop`.

## Stappenplan

- De gebruiker klikt op de knop om penalty's te schieten.
- De `for-loop` wordt uitgevoerd en genereert een willekeurig resultaat per penalty.
- Bij elke penalty wordt bepaald of het een goal (50% kans) of een misser is.
- Na alle penalty's wordt het totaal aantal goals getoond.

## Hoe werkt de for-loop?

- De code binnen de accolades `{}` van de for-loop wordt meerdere keren uitgevoerd:

  - `let i = 1;`: We beginnen bij schot 1.
  - `i <= amount`: De loop gaat door tot het aantal penalty’s is bereikt.
  - `i++`: Na elk schot gaat i met 1 omhoog, zodat we bij de volgende penalty komen.

- We genereren een goal of een misser door een random waarde te genereren en dan inline te checken of het getal groter of kleiner is dan 0.5, op regel 9: `const goal = Math.random() > 0.5`
  - `Math.random()` geeft een willekeurig getal tussen 0 en 1.
  - Als het getal groter is dan 0.5 (`> 0.5`), is het een goal (`true`).
  - Als het 0.5 of lager is, wordt het een misser (`false`).
