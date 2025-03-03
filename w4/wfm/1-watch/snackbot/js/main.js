const snackInput = document.querySelector("#snack-input");
const checkButton = document.querySelector("#check-snack");
const message = document.querySelector("#message");

checkButton.addEventListener("click", () => {
  const snack = snackInput.value.toLowerCase();

  if (snack === "frieten") {
    message.textContent = "Lekker! Met mayonaise of ketchup? 🍟";
  } else if (snack === "hamburger") {
    message.textContent = "Goede keuze! Extra kaas? 🍔";
  } else if (snack === "loempia") {
    message.textContent = "Mmm, dat wordt smullen! 🥢";
  } else {
    message.textContent = "Dat ken ik niet... maar het klinkt lekker! 🤔";
  }
});
