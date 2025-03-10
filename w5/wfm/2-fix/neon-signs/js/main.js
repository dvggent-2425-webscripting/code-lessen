/**
 * Array van objecten. Elk object heeft volgende properties:
 * text (string), isOff (boolean), toggle (function)
 */
const signs = [
  {
    text: "Open",
    isOff: false,
    toggle: function () {
      this.isOff = !this.isOff;
    },
  },
  {
    text: "Bar",
    isOff: false,
    toggle: function () {
      this.isOff = this.isOn;
    },
  },
];

/**
 * Na het laden van de DOM worden hier de sign elementen uit de bovenstaande
 * array toegevoegd als <div> elementen in de DOM.
 * Elk element krijgt ook een eventListener, die de toggleSign() functie
 * aanroept.
 */
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("neon-container");

  signs.forEach((sign) => {
    const signElement = document.createElement("div");

    signElement.classList.add("neon-sign");
    signElement.textContent = sign.text;

    if (sign.isOff) {
      signElement.classList.add("neon-off");
    }

    signElement.addEventListener("click", () => toggleSign(sign, signElement));
  });
});

/**
 *
 * Functie die eerst de boolean isOff in het object aanpast, daarna wordt deze
 * boolean gebruikt om een klasse toe te voegen of te verwijderen aan een element.
 */
function toggleSign(sign, element) {
  sign.toggle();
  element.classList.toggle("neon-off", sign.isOff);
}
