const staticMaze = true;

const canvas = document.querySelector("#maze-canvas");
const pen = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;
let cellSize = 100;

const playerRadius = cellSize / 3;
const endRadius = cellSize / 3;

let trail = [];
let generatedMaze;
let solutionPath;

let points = 0;
const cols = Math.floor(width / cellSize);
const rows = Math.floor(height / cellSize);
const player1 = {
  x: 0,
  y: 0,
  color: "red",
};

const end = {
  x: cols - 1,
  y: rows - 1,
  color: "blue",
};

const trailColor = "rgba(255, 0, 0, 0.5)";

document.querySelector(".start-button").addEventListener("click", function () {
  resetPlayerPos();
  clearScreen();
  setup();
  draw();
  addListener();
  displayHidden();
});

document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector(".start-button");
  function stopBlinking => () {
    startButton.classList.remove("blink");
  }
  startButton.classList.add("blink");
  startButton.addEventListener("click", stopBlinking);
});

const addListener() {
  document.addEventListener("keydown", handleKeyPress);
}

document.getElementById("#button-up").addEventListener("click", function () {
  movePlayer("ArrowUp", player1);
  draw();
});

document.getElementById("button-down").addEventListener("click", function () {
  movePlayer("ArrowDown", player1);
  draw();
});

document.getElementById("button-left").addEventListener("click", function () {
  movePlayer("ArrowLeft", player1);
  draw();
});

document.getElementById("button-right").addEventListener("keyUp", function () {
  movePlayer("arrowright", player1);
  draw();
});

function handleKeyPress(e) {
  const key = event.key;
  movePlayer(key, player1);
  draw();
}

function showRestartMessage() {
  const messageBox = document.querySelector("#message-box");
  messageBox.innerHTML = "Invalid Move. Press restart.";
  messageBox.innerHTML += `<br>
    <button class='restartbtn'
            style='margin-top:70px;'
            onclick='resetState()'>
            Restart
    </button>`;
  messageBox.style.visibility = "visible";
}
function resetState() {
  const messageBox = document.querySelector("#message-box");
  messageBox.style.visibility = "hidden";
}
function movePlayer(key, player) {
  let validMove = false;

  switch (key) {
    case "ArrowUp":
      if (player.y > 0 && cells[player.x][player.y].walls.top === false) {
        player.y--;
        points++;
        validMove = true;
      }
      break;
    case "ArrowDown":
      if (
        player.y < rows - 1 &&
        cells[player.x][player.y].walls.bottom === false
      ) {
        player.y++;
        points++;
        validMove = true;
      }
      break;
    case "ArrowLeft":
      if (player.x > 0 && cells[player.x][player.y].walls.left === false) {
        player.x--;
        points++;
        validMove = true;
      }
      break;
    case "ArrowRight":
      if (
        player.x < cols - 1 &&
        cells[player.x][player.y].walls.right === false
      ) {
        player.x++;
        points++;
        validMove = true;
      }
      break;
  }
  if (!validMove) {
    return;
  }

  const isTwice = trail.some(
    (cell) => cell.x === player.x && cell.y === player.y
  );
  if (isTwice) {
    showRestartMessage();
    resetPlayerPos();
  }

  if (player.x == cols - 1 && player.y == rows - 1) {
    document.removeEventListener("keydown", handleKeyPress);
    const messageBox = document.querySelector("#message-box");
    messageBox.innerHTML = `
            <h1>Congratulations, You Won!</h1>
            <h2>Moves: ${points}</h2>
            <button id='play-again' onclick='location.reload()'>
            Play Again
            </button>
        `;

    messageBox.style.visibility = "visible";
  }
}

function clearScreen() {
  pen.canvas.width = pen.canvas.width;
}

function displayHidden() {
  document.querySelector(".message-box").style.visibility = "hidden";
}

const cells = [];

for (let x = 0; x < rows; x++) {
  cells[x] = [];
  for (let y = 0; y < cols; y++) {
    cells[x][y] = null;
  }
}

class CellA {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.visited = false;
    this.walls = {
      top: true,
      right: true,
      bottom: true,
      left: true,
    };
  }

  show() {
    const x = this.x * cellSize;
    const y = this.y * cellSize;

    pen.beginPath();

    if (this.walls.top) {
      pen.moveTo(x, y);
      pen.lineTo(x + cellSize, y);
    }

    if (this.walls.right) {
      pen.moveTo(x + cellSize, y);
      pen.lineTo(x + cellSize, y + cellSize);
    }

    if (this.walls.bottom) {
      pen.moveTo(x + cellSize, y + cellSize);
      pen.lineTo(x, y + cellSize);
    }

    if (this.walls.left) {
      pen.moveTo(x, y + cellSize);
      pen.lineTo(x, y);
    }
    pen.strokeStyle = "green";
    pen.lineWidth = 5;
    pen.lineCap = "round";
    pen.stroke();
  }
}

function setup() {
  // Initialize the cells
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      cells[x][y] = new CellA(x, y);
    }
  }
  genMaze(0, 0);
}

function genMaze(x, y) {
  const presentCell = cells[x][y];
  presentCell.visited = true;
  const directions = getDirections(staticMaze, x, y);
  for (const direction of directions) {
    const dx = { top: 0, right: 1, bottom: 0, left: -1 }[direction];
    const dy = { top: -1, right: 0, bottom: 1, left: 0 }[direction];

    const newX = x + dx;
    const newY = y + dy;
    // if the coordinates are inbound
    if (newX >= 0 && newX < cols && newY >= 0 && newY < rows) {
      const neighbour = cells[newX][newY];

      // removing walls

      if (!neighbour.visited) {
        presentCell.walls[direction] = false;
        neighbour.walls[
          {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right",
          }[direction]
        ] = false;
        genMaze(newX, newY);
      }
    }
  }
  generatedMaze = cells.map((row) => row.map((cell) => ({ ...cell })));
  solutionPath = solveMaze();
}

function getDirections(staticMaze, x, y) {
  if (staticMaze) {
    return getStaticDirections(x, y);
  } else {
    return randomize(["top", "right", "bottom", "left"]);
  }
}

function resetPlayerPos() {
  player1.x = 0;
  player1.y = 0;
  points = 0;
  trail = [];
}

function draw() {
  clearScreen();
  genMaze(player1.x, player1.y);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      cells[x][y].show();
    }
  }

  trail.push({ x: player1.x, y: player1.y });
  pen.beginPath();
  for (let i = 0; i < trail.length; i++) {
    const trailX = trail[i].x * cellSize + cellSize / 2;
    const trailY = trail[i].y * cellSize + cellSize / 2;

    if (i === 0) {
      pen.moveTo(trailX, trailY);
    } else {
      pen.lineTo(trailX, trailY);
    }
  }
  pen.lineCap = "round";
  pen.strokeStyle = trailColor;
  pen.lineWidth = 4;
  pen.stroke();

  drawPlayer(player1);
  drawEnd();

  pen.strokeStyle = "green";
  pen.lineWidth = 6;
  pen.lineCap = "round";
  pen.stroke();

  const isPartOfSolution = solutionPath.some(
    (cell) => cell.x === player1.x && cell.y === player1.y
  );

  if (!isPartOfSolution) {
    showRestartMessage();
    player1.x = 0;
    player1.y = 0;
    points = 0;
    trail = [];
    draw();
  }
}

function drawPlayer(player) {
  const x = player.x * cellSize + cellSize / 2;
  const y = player.y * cellSize + cellSize / 2;

  pen.beginPath();
  pen.arc(x, y, playerRadius, 0, 2 * Math.PI);
  pen.fillStyle = player.color;
  pen.fill();
}

function drawEnd() {
  const x = (end.x + 0.5) * cellSize;
  const y = (end.y + 0.5) * cellSize;

  pen.beginPath();
  pen.arc(x, y, endRadius, 0, 2 * Math.PI);
  pen.fillStyle = end.color;
  pen.fill();
}

function getStaticDirections(x, y) {
  const directionsArray = [
    ["bottom", "top", "left", "right"],
    ["right", "top", "bottom", "left"],
    ["right", "bottom", "top", "left"],
    ["bottom", "top", "right", "left"],
    ["right", "left", "top", "bottom"],
    ["bottom", "top", "left", "right"],
    ["right", "bottom", "left", "top"],
    ["top", "right", "left", "bottom"],
    ["right", "bottom", "left", "top"],
    ["right", "left", "top", "bottom"],
    ["top", "right", "left", "bottom"],
    ["left", "bottom", "top", "right"],
    ["left", "top", "bottom", "right"],
    ["left", "bottom", "top", "right"],
    ["top", "right", "left", "bottom"],
    ["left", "bottom", "top", "right"],
    ["bottom", "top", "right", "left"],
    ["left", "bottom", "top", "right"],
    ["bottom", "top", "right", "left"],
  ];

  const index = (x + y) % directionsArray.length;
  return directionsArray[index];
}

function randomize(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  // alert(array);
  console.log(array);
  return ["top", "right", "bottom", "left"];
  return array;
}
function solveMaze() {
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const path = [];

  function dfs(x, y) {
    if (x < 0 || x >= cols || y < 0 || y >= rows || visited[y][x]) {
      return false;
    }

    visited[y][x] = true;
    path.push({ x, y });

    if (x === cols - 1 && y === rows - 1) {
      return true;
    }

    const cell = generatedMaze[x][y];

    if (!cell.walls.top && dfs(x, y - 1)) {
      return true;
    }
    if (!cell.walls.right && dfs(x + 1, y)) {
      return true;
    }
    if (!cell.walls.bottom && dfs(x, y + 1)) {
      return true;
    }
    if (!cell.walls.left && dfs(x - 1, y)) {
      return true;
    }

    path.pop();
    return false;
  }

  dfs(0, 0);
  return path;
}

setup();
draw();
