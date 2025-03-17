document.getElementById("fade-button").addEventListener("click", function () {
  let text = document.getElementById("fade-text");
  let opacity = 0;
  let translateY = 100;

  function fadeIn() {
    // We voeren requestAnimationFrame() enkel uit indien de tekst nog niet volledig zichbaar is f op de juiste plaatst staat.
    if (opacity < 1 || translateY > 0) {
      // 1. We passen de opacity aan
      if (opacity < 1) {
        opacity += 0.05;
        text.style.opacity = opacity;
      }

      // 2. We passen de Y-positie aan
      if (translateY > 0) {
        translateY -= 1;
        text.style.transform = `translateY(${translateY}px`;
      }

      requestAnimationFrame(fadeIn);
    }
  }

  fadeIn();
});
