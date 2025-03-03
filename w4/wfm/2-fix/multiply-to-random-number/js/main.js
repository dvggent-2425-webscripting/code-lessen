const multiplicationInput = document.querySelector(".multiplication-input");
const generateTableButton = document.querySelector(".generate-table");
const multiplicationTable = document.querySelector(".multiplication-table");

generateTableButton.addEventListener("click", () => {
  const num = parseInt(multiplicationInput.value);
  const maxMultiplier = Math.floor(Math.random() * 10) + 5;
  multiplicationTable.innerHTML = "";

  // TODO 1: Schrijf een conditional die de waarde checkt. Indien de waarde een geldig getal is, toon dan onderstaande code:
  //
  //   for (let i = 1; i <= maxMultiplier; i++) {
  //     const li = document.createElement("li");
  //     li.textContent = `${num} x ${i} = ${num * i}`;
  //     multiplicationTable.appendChild(li);
  //   }
  //
  // TODO 2: Zorg ervoor dat de tekst "Voer een geldig getal in!" wordt getoond indien er geen geldig getal werd ingevoerd.
  //
});
