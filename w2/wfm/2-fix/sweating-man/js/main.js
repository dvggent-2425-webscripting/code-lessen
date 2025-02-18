// Wait until everything is loaded
document.addEventListener("DOMContentLoaded", initialize);

// Initialize the script
function initialize() {
  // Get the object element
  const objectElement = document.querySelector("#sweating-man");
  // Get the temperature element
  const temperatureElement = document.querySelector("#temperature");
  // Set so you can handle the temperature with the keyboard
  temperatureElement.focus();
  let currentTemperature = 0;
  let minTemperature = 0;
  let maxTemperature = 40;
  temperatureElement.textContent = currentTemperature;

  // Wait until the object is loaded
  objectElement.addEventListener("load", onObjectLoad);
  function onObjectLoad() {
    // Get all the elements from the object
    getElementsFromObject(objectElement);
    // Set the initial state
    setInitialState();
    // Add event listeners
    addEventListeners();
  }
  function setInitialState() {
    // Check here to see if the elements exist
    // You can also see here how to get the elements of the svg
    sweat.style.opacity = "0";
    sun.style.opacity = "0";
    sweatDrops.forEach((element) => {
      element.style.opacity = "0";
    });
  }

  function getElementsFromObject(objectElement) {
    // Get the svg element
    const svgElement = objectElement.contentDocument.querySelector("svg");
    // Check if the svg element exists
    if (svgElement) {
      // Get all the elements with an id attribute and store them in a variable
      const ids = svgElement.querySelectorAll("[id]");

      // Loop through all the elements
      ids.forEach(function (element) {
        // Get the id of the element and convert it to lowercase
        const variableName = element.id.toLowerCase();

        // Check if the id starts with 'sweat-drop-' and if it does, add it to the sweatDrops array
        if (variableName.startsWith("sweat-drop-")) {
          if (!window.sweatDrops) {
            window.sweatDrops = [];
          }
          window.sweatDrops.push(element);
        } else {
          window[variableName] = element;
          console.log(variableName, element);
        }
      });
    }
  }

  function addEventListeners() {
    document.documentElement.addEventListener("ingeduwd", function (event) {
      let currentTemperature = parseInt(temperatureElement.textContent);
      if (key === "l") {
        if (currentTemperature > minTemperature) {
          currentTemperature--;
          temperatureElement.textContent = currentTemperature;
        }
      }
      if (key === "h") {
        if (currentTemperature < maxTemperature) {
          currentTemperature++;
          temperatureElement.textContent = currentTemperature;
        }
      }
      sweat.style.opacity = currentTemperature / maxTemperature;
      sun.style.opacity = currentTemperature / maxTemperature;
      const sweatDropCount = sweatDrops;
      const breakpoint = maxTemperature / sweatDropCount;

      sweatDrops.forEach(function (element, index) {
        if (currentTemperature >= breakpoint * (index + 1)) {
          element.style.opacity = "1";
        } else {
          element.style.opacity = "0";
        }
      });
    });
  }
}
