function scaleUp() {
  const dot = document.getElementById("i-dot");
  const comingSoon = document.getElementById("coming-soon");
  dot.style.animation = "scaleUp 1s ease-in-out forwards";

  /**
   * More info about the options object passed to the eventListener:
   * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   */
  dot.addEventListener(
    "animationend",
    function () {
      comingSoon.classList.remove("hidden");
    },
    {
      once: true,
    }
  );
}

function initScale() {
  const dot = document.getElementById("i-dot");
  const dotBBox = dot.getBBox();
  const dotCenterX = dotBBox.x + dotBBox.width / 2;
  const dotCenterY = dotBBox.y + dotBBox.height / 2;
  dot.style.transformOrigin = `${dotCenterX}px ${dotCenterY}px`;
}

document.addEventListener("DOMContentLoaded", function () {
  const dot = document.getElementById("i-dot");
  initScale();
  dot.addEventListener("mouseover", scaleUp);
});
