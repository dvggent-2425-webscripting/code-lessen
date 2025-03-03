/**
 * We halen het element met class `.table` uit de DOM
 */
const board = document.querySelector(".table");

/**
 * We maken een lijst van symbolen in een willekeurige volgorde
 */
const symbols = ["🍎", "🍌", "🍇", "🍉", "🍎", "🍌", "🍇", "🍉"];
symbols.sort(() => 0.5 - Math.random());

/**
 * We maken een aantal variabelen aan. Je kan dit zien als de 'denkruimte' in ons hoofd.
 */
let firstCard, secondCard;
let lockBoard = false;

/**
 * We maken voor elk element in deze lijst een `div`, die we toevoegen aan de tafel.
 */
function createBoard() {
  symbols.forEach((symbol) => {
    const card = document.createElement("div"); // Maak een `div` element aan
    card.classList.add("card"); // Voeg een class toe aan de `div`
    card.dataset.symbol = symbol; // Voeg een data-attribuut toe aan de `div`
    card.addEventListener("click", (event) => flipCard(event)); // Voeg een eventListener toe aan de `div`

    // Leg de kaart op tafel
    board.appendChild(card);
  });
}

/**
 * Maak de opgeslagen variabelen terug leeg.
 */
function resetBoard() {
  // TODO
}

/**
 * We bekijken de omgedraaide card en voeren de nodige checks uit
 */
function flipCard(event) {
  // TODO
}

/**
 * Als de kaarten gelijk zijn, resetten we het bord.
 * Als de kaarten verschillend zijn, draaien we ze na 1 seconde terug om.
 */
function checkForMatch() {
  // TODO
}

createBoard();
