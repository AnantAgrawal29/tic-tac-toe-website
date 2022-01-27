let gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let currentRound = 1;
let editedPlayer = 0;
let activePlayer = 0;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const backdrop = document.getElementById("backdrop");
const overlay = document.getElementById("config-overlay");
const formElement = document.querySelector("form");
const errorsElement = document.querySelector("#config-errors");
const gameArea = document.getElementById("active-game");
const activePLayerName = document.getElementById("active-player-name");
const gameOverContent = document.getElementById("game-over");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelBtn = document.getElementById("cancel-config-btn");
const startNewBtn = document.getElementById("start-game-btn");
const gameElements = document.querySelectorAll("#game-board li");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
cancelBtn.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

startNewBtn.addEventListener("click", startNewGame);
formElement.addEventListener("submit", savePLayerConfig);

for (const gameElement of gameElements) {
  gameElement.addEventListener("click", selectGameField);
}

// const gameBoard = document.getElementById("game-board");
// gameBoard.addEventListener("click", selectGameField);
