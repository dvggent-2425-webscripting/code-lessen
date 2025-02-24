// 1. We halen alle raketten op uit de DOM
const rockets = document.querySelectorAll(".rocket");

// 2. We overlopen elke raket
rockets.forEach((rocket) => {
  // Hier plaatsen we de waardes van de data-attributen in een variabele
  const distance = rocket.dataset.distance;
  const time = rocket.dataset.time;
  const boost = rocket.dataset.boost;

  // Hier roepen we de berekeningsfuncties op en plaatsen we de berekening in de DOM
  const speedElement = rocket.querySelector(".speed");
  speedElement.textContent = calculateSpeed(distance, time, boost);
});

// 3. We berekenen de snelheid van een raket en returnen het resultaat
// Als `time` of `boost` niet worden meegegeven, voorzien we een fallback waarde
function calculateSpeed(distance, time = 10, boost = false) {
  let result = distance / time;

  if (boost === "nitro") {
    result *= 2;
  }

  const speed = Math.round(result);

  return addKmh(speed);
}

// 4. We maken de snelheid leesbaar door het getal te returnen als string met een eenheid naast
function addKmh(speed) {
  return `${speed.toFixed(0)} km/uur`;
}
