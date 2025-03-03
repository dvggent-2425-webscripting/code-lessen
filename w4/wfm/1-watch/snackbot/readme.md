# Snack bot

De Snack Bot vraagt welke snack je wilt eten en geeft een reactie gebaseerd op je keuze. Dit gebeurt met een `if-else` statement (een voorwaarde die bepaalt wat er gebeurt).

## Stappenplan

- De gebruiker voert een snack in via een invoerveld.
- De knop wordt aangeklikt, waarna de JavaScript-code checkt welke snack is ingevoerd.
- De if-else statement vergelijkt de invoer met een aantal opties en geeft een passend antwoord.
- Indien de snack niet herkend wordt, wordt een standaardantwoord gegeven.

## Alternatief: switch-statement

We kunnen dit ook met een `switch`-statement doen.
Probeer dit eens in de plaats van de if-else:

```
switch (snack) {
    case "frieten":
        result.textContent = "Lekker! Met mayonaise of ketchup? 🍟";
        break;
    case "hamburger":
        result.textContent = "Goede keuze! Extra kaas? 🍔";
        break;
    case "loempia":
        result.textContent = "Mmm, dat wordt smullen! 🥢";
        break;
    default:
        result.textContent = "Dat ken ik niet... maar het klinkt lekker! 🤔";
}
```

### Wat is het verschil?

- `if-else` is flexibeler (je kan complexere voorwaarden gebruiken).
- `switch` is overzichtelijker bij veel vaste opties.

Meer info over het Switch statement: [MDN: Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch).
