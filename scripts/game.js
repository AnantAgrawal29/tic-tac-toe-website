function resetGameStatus() {
  gameOverContent.style.display = "none";
  gameArea.querySelector("ol").style.display = "grid";
  activePLayerName.parentElement.style.display = "block";
  let index = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      gameElements[index].textContent = "";
      gameElements[index].classList.remove("disabled");
      index++;
    }
  }
  gameIsOver = false;
  currentRound = 1;
  activePlayer = 0;
}

function startNewGame() {
  if (players[0].name == "" || players[1].name == "") {
    alert("Please set custom player names for both players!");
    return;
  }
  gameArea.style.display = "block";
  resetGameStatus();
  activePLayerName.textContent = players[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePLayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (gameIsOver /* ||event.target.tagName !== "LI" */) {
    return;
  }

  const selectedField = event.target;

  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  const winnerId = checkGameOver();
  if (winnerId != 0) {
    endGame(winnerId);
  }
  currentRound++;
  switchPlayer();
}

function checkGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] == gameData[i][1] &&
      gameData[i][1] == gameData[i][2]
    ) {
      return gameData[i][0];
    }
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] == gameData[1][i] &&
      gameData[1][i] == gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] == gameData[1][1] &&
    gameData[1][1] == gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] == gameData[1][1] &&
    gameData[1][1] == gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound == 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOverContent.style.display = "block";
  if (winnerId > 0) {
    gameOverContent.firstElementChild.innerHTML =
      "You won, <span>" + players[winnerId - 1].name + "</span>!";
  } else {
    gameOverContent.firstElementChild.textContent = "It's a draw!";
  }
}
