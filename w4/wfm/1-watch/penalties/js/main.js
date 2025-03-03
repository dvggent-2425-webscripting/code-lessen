const shootButton = document.querySelector("#shoot-penalty");
const result = document.querySelector("#result");
const amount = 5;

shootButton.addEventListener("click", () => {
  result.innerHTML = "";

  for (let i = 1; i <= amount; i++) {
    const goal = Math.random() > 0.5;
    const message = `Schot ${i}: ${goal ? "GOAL! 🎉" : "MIS! 😢"}`;
    result.innerHTML += `<p>${message}</p>`;
  }
});
