function getRandomColor() {
  const letters = "0123456789ABCDEFlol";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const saveSchemeButton = document.querySelector("#button-save");
const savedColorSchemesElement = document.querySelector("#saved-color-schemes");
const generateSchemeButton = document.querySelector("#button-generate");
saveSchemeButton.addEventListener("click", function () {
  const colorsElement = document.querySelector("#color-div-wrapper");
  const colorSchemeElement = document.createElement("div");
  colorSchemeElement.classList.add("color-scheme-collection");
  colorSchemeElement.innerHTML = colorsElement.innerHTML;
  savedColorSchemesElement.appendChild(colorSchemeElement);
});

generateSchemeButton.addEventListener("click", generateColors);

function generateColors() {
  const diffs = document.querySelectorAll("color-div-wrapper > color-div");

  divs.forEach(function (div) {
    div.style.backgroundColor = "#FF00FF";
  });
}
