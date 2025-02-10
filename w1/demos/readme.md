# Wat is JavaScript?

## Rol in webontwikkeling

### Overzicht van de interactie tussen HTML, CSS en JavaScript

Leuke voorbeeldjes:
- [knowlupus.org](http://knowlupus.org/)
- [masitupungato.com](https://www.masitupungato.com/)
- [sbs.com.au/theboat](https://www.sbs.com.au/theboat/)
- [designmattersmedia.com](https://www.designmattersmedia.com/)
- [mikekus.com](https://www.mikekus.com/)
- [multeor.com/game](http://multeor.com/game/)
- [theuselessweb.site/hereistoday](https://theuselessweb.site/hereistoday/)
- [bavet.eu](https://bavet.eu)
- [eat-this.be](https://eat-this.be)

## Installeren van je omgeving

- Code-editor
- Browserconsole
- Linken van JS file

## Eerste keer JS schrijven samen

- HTML doc maken
- JS linken
- `console.log()`
- Titel op pagina aanpassen
    - `querySelector`
    - `innerHTML`

## GIT

- `git pull`
- `git commit -m "update W1"`

## Basis syntaxis

### `let` & `const`

### Variabelen en gegevenstypen

- Strings
- Nummers
- Booleans
- De gevaren van JS
    - Nummers omvormen

### Strings combineren en template literals

Voorbeeld:
```javascript
let age = 25;
const name = "John";
let isStudent = true;

// Nummers omvormen
let strNumber = "123";
let num = Number(strNumber); // 123

// Strings combineren
let greeting = "Hello, " + name + "!";
console.log(greeting); // Hello, John!

// Template literals
let templateGreeting = `Hello, ${name}! You are ${age} years old.`;
console.log(templateGreeting); // Hello, John! You are 25 years old.
```

### Operators en expressies

- Aritmetische operators: `+`, `-`, `*`, `/`, `%`
- Vergelijkingsoperators: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- Logische operators: `&&`, `||`, `!`

### Control flow

- `if`, `else if`, `else`
- `switch`

Voorbeeld:
```javascript
let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("F");
}
```

- `for` loop
- `while` loop

Voorbeeld:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}
```