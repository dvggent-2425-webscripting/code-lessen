/**
 * Een object dat alle eigenschappen bevat over onze laptop.
 */
const laptop = {
  brand: "Apple MacBook Pro",
  image: "assets/macbook-pro.jpeg",
  inchSize: 16,
  isOn: false,
  checkStatus: function (element) {
    let status = this.isOn ? "AAN" : "UIT";
    element.textContent = `🔌 De laptop staat ${status}`;
  },
};

/**
 * We plaatsen de informatie uit het object in de DOM.
 */
document.getElementById("laptop-brand").textContent = laptop.brand;
document.getElementById("laptop-img").src = laptop.image;
document.getElementById("laptop-inch").textContent = laptop.inchSize;

/**
 * We hangen een eventListener aan de button, die bij een klik-event
 * de checkStatus method van de laptop uitvoert.
 *
 * Let op het gebruik van de extra functie zodat de context van `this` klopt.
 */
const laptopButton = document.querySelector("#laptop-button");
laptopButton.addEventListener("click", () => {
  const statusElement = document.querySelector("#status");
  laptop.checkStatus(statusElement);
});
