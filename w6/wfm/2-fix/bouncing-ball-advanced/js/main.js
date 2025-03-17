let ball = document.getElementById("ball");
let containerHeight = 480;
let gravity = 0.6;
let velocity = 0;
let position = 0;
let bounceFactor = 0.7;
let animating = false;

document.addEventListener("DOMContentLoaded", () => {
  function dropBall() {
    if (animating) return;
    animating = true;
    velocity = 0;
    position = 0;

    function animate() {
      velocity += gravity;
      position += velocity;

      if (position < containerHeight - 48) {
        position = containerHeight - 48;
        velocity *= -bounceFactor;
      }

      ball.style.top = position + "px";

      if (Math.abs(velocity) > 0.5 && position < containerHeight - 48) {
        requestAnimationFrame();
      } else {
        animating = false;
      }
    }
  }

  document.getElementById("reset-ball").addEventListener("click", dropBall);
});
