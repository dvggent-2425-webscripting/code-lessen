const startTimerButton = document.querySelector("#start-timer");
const timerText = document.querySelector("#timer");

let time = 10;
let interval = null;

startTimerButton.addEventListener("click", () => {
  // Zorg ervoor dat het interval niet herbegint als we nog aan het aftellen zijn.
  if (interval !== null) return;

  // Zet de timer op 10 wanneer we (opnieuw) starten.
  time = 10;
  timerText.textContent = time;

  interval = setInterval(() => {
    time--;
    timerText.textContent = time;
    if (time === 0) {
      clearInterval(interval);

      interval = null; // Maak het mogelijk om opnieuw te starten.
    }
  }, 1000);
});
