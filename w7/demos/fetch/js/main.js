// Stap 1
// Check je console!
document
  .getElementById("fetch-btn")
  .addEventListener("click", async function () {
    const apiUrl = "https://api.kanye.rest/";

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log("Ophalen gelukt:", data);
    } catch (error) {
      console.error("Fout bij ophalen van data:", error);
    }
  });

// Resultaat na stap 2
// document
//   .getElementById("fetch-btn")
//   .addEventListener("click", async function () {
//     const apiUrl = "https://api.kanye.rest/";

//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       document.getElementById("result").innerText = `"${data.quote}"`;
//     } catch (error) {
//       console.error("Fout bij ophalen van data:", error);
//       document.getElementById("result").innerText = "Er ging iets mis!";
//     }
//   });

// Resultaat na stap 3
// document
//   .getElementById("fetch-btn")
//   .addEventListener("click", async function () {
//     const apiUrl = "https://api.waifu.pics/sfw/waifu";

//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       document.getElementById("result").innerHTML = `<img src="${data.url}">`;
//     } catch (error) {
//       console.error("Fout bij ophalen van afbeelding:", error);
//     }
//   });
