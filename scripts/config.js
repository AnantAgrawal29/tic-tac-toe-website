function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  backdrop.style.display = "block";
  overlay.style.display = "block";
  formElement.querySelector("input").focus();
}

function closePlayerConfig() {
  backdrop.style.display = "none";
  overlay.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsElement.textContent = "";
  formElement.querySelector("input").value = "";
}

function savePLayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();
  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsElement.textContent = "Please enter a valid name";
    return;
  }
  const updatedPLayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPLayerDataElement.querySelector("h3").textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;
  closePlayerConfig();
}
