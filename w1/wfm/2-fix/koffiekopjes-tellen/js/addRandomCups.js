/**
 * Deze functie genereert een willekeurig aantal <div> elementen.
 * De elementen krijgen willekeurig ofwel de class 'clean-cup', ofwel
 * de class 'dirty-cup'.
 *
 * TODO: zorg ervoor dat elke keer je de pagina laadt, het aantal cups
 * verandert.
 */

function addRandomCups() {
  const wrapper = document.querySelector(".wrapper");
  const totalCups = Math.floor(Math.random() * 20) + 1;

  wrapper.innerHTML = "";

  for (let i = 0; i < totalCups; i++) {
    const cup = document.createElement("div");
    cup.className = Math.random() > 0.5 ? "dirty-cup" : "clean-cup";
    wrapper.appendChild(cup);
  }
}

addRandomCups();
