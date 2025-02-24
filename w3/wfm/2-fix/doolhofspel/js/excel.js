//  Uitleg:
//  1. setInterval: Dit is een functie die een andere functie herhaaldelijk uitvoert met een vastgestelde tijdsinterval (in milliseconden).
//     Bijvoorbeeld: setInterval(myFunction, 1000) voert myFunction elke seconde uit.

//  2. switch statement: Dit is een manier om verschillende acties uit te voeren op basis van verschillende voorwaarden.
//     Bijvoorbeeld:
//     switch(expression) {
//       case x:
//         // code om uit te voeren als expression gelijk is aan x
//         break;
//       case y:
//         // code om uit te voeren als expression gelijk is aan y
//         break;
//       default:
//         // code om uit te voeren als expression niet gelijk is aan x of y
//     }

let stepNumber = 0;

function executeStep() {
  doStep(stepNumber);
  stepNumber++;
}

setInterval(executeStep, 1000);

function doStep(stepNumber) {
  switch (stepNumber) {
    case 1:
      movePlayer("ArrowDown", player1);
      break;
    case 2:
      movePlayer("ArrowRight", player1);
      break;
    case 3:
      movePlayer("ArrowRight", player1);
      break;
    case 4:
      movePlayer("ArrowDown", player1);
      break;
    case 5:
      movePlayer("ArrowRight", player1);
      break;
    case 6:
      movePlayer("ArrowDown", player1);
      break;
  }
  draw();
}
