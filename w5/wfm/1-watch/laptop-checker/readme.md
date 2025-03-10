# Laptop Checker

Dit voorbeeld project toont hoe je met objecten kunt werken in JavaScript om informatie over een laptop weer te geven en te manipuleren.

De "Laptop Checker" is een eenvoudige webapplicatie die:

- Informatie over een laptop weergeeft (merk, afbeelding, schermgrootte)
- De aan/uit-status van de laptop kan controleren via een knop

## JavaScript Objecten

Het belangrijkste onderdeel van dit voorbeeld is het JavaScript object. Een object in JavaScript is een verzameling van eigenschappen (properties) en functies (methods).

```
const laptop = {
  brand: "Apple MacBook Pro",
  image: "assets/macbook-pro.jpeg",
  inchSize: 16,
  isOn: false,
  checkStatus: function (element) {
    let status = this.isOn ? "AAN" : "UIT";
    element.textContent = `🔌 De laptop staat ${status}`;
  },
};
```

### Object properties

Dit object bevat 4 properties:

- `brand` (string)
- `image` (string)
- `inchSize` (number)
- `isOn` (boolean)

Properties zijn variabelen die bij het object horen. Je kunt ze benaderen met de **puntnotatie**:

```
laptop.brand // "Apple MacBook Pro"
laptop.inchSize // 16
```

### Object methods

Dit object bevat 1 method: `checkStatus()`

Methods zijn functies die bij het object horen. Ze kunnen acties uitvoeren met de gegevens van het object. In ons voorbeeld heeft het laptop-object de `checkStatus()` methode.

### Het this keyword

Een belangrijk concept in JavaScript objecten is het `this` keyword. this verwijst naar het object waar de code in wordt uitgevoerd.

In het voorbeeld gebruikt de `checkStatus()` methode `this.isOn` om naar de `isOn` property van het laptop-object te verwijzen. Dit betekent: "gebruik de waarde van isOn van hetzelfde object waarvan deze method deel uitmaakt":

```
let status = this.isOn ? "AAN" : "UIT";
```

#### Let op bij het gebruik van `this`

Het is belangrijk om te begrijpen dat this een variabele context heeft. De waarde van this hangt af van hoe een functie wordt aangeroepen.
In dit voorbeeld gebruiken we een arrow-functie bij de eventListener:

```
laptopButton.addEventListener("click", () => {
const statusElement = document.querySelector("#status");
laptop.checkStatus(statusElement);
});
```

Door `laptop.checkStatus()` direct aan te roepen, zorgen we ervoor dat `this` binnen de methode naar het laptop-object verwijst. Als we in plaats daarvan alleen de functie zouden doorgeven, zou `this` naar een ander object kunnen verwijzen (bijvoorbeeld het HTML-element waarop is geklikt).
