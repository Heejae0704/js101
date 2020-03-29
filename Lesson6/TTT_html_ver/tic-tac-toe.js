/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
const gameStatus = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const cells = document.querySelectorAll("[class*='cell']");
const startBtn = document.querySelector(".js-btn-start");
const p1flag = document.querySelector(".js-btn-player1");
const p2flag = document.querySelector(".js-btn-player2");
const cellArr = [];
for (let idx = 1; idx <= 9; idx++) {
  cellArr.push(document.querySelector(`.cell-0${idx}`));
}
const modal = document.querySelector(".modal");
const okBtn = document.querySelector(".btn-ok");
const endGameModal = document.querySelector(".end-game");
const endGameMessage = document.querySelector(".end-game-message");
const modeSelect = document.querySelector(".mode-select");
const multiPlayerBtn = document.querySelector(".btn-multi-player");
const singlePlayerBtn = document.querySelector(".btn-single-player");
let currentTurn = 1;
let isSinglePlayer = false;

function paintGameStatus() {
  cells.forEach((_, idx) => {
    if (gameStatus[idx] === 1) {
      cells[idx].innerText = "🔵";
    } else if (gameStatus[idx] === 2) {
      cells[idx].innerText = "🔴";
    } else {
      cells[idx].innerText = "";
    }
  });
}

function isWinner(gameStatus, playerNum) {
  const playerStatus = gameStatus.map(el => {
    if (el === playerNum) {
      return true;
    } else return false;
  });
  const checkArr = [];
  checkArr.push(playerStatus[0] && playerStatus[1] && playerStatus[2],
                playerStatus[3] && playerStatus[4] && playerStatus[5],
                playerStatus[6] && playerStatus[7] && playerStatus[8],
                playerStatus[0] && playerStatus[3] && playerStatus[6],
                playerStatus[1] && playerStatus[4] && playerStatus[7],
                playerStatus[2] && playerStatus[5] && playerStatus[8],
                playerStatus[0] && playerStatus[4] && playerStatus[8],
                playerStatus[2] && playerStatus[4] && playerStatus[6]);

  return checkArr.includes(true);
}

function isFull() {
  return !gameStatus.includes(0);
}

function displayErrorMessage() {
  console.log("Error!!");
}

function handlePlayerClick(event) {
  const currentUser = currentTurn;
  const location = Number(event.target.classList[1][6]);
  if (gameStatus[location - 1] === 0) {
    gameStatus[location - 1] = currentUser;
    p1flag.classList.toggle("hidden");
    p2flag.classList.toggle("hidden");
    if (currentUser === 1) {
      currentTurn = 2;
    } else currentTurn = 1;
  } else displayErrorMessage();
  paintGameStatus();
  if (isSinglePlayer === true) {
    while (true) {
      let randomLocation = Math.floor(Math.random() * 9);
      if (!gameStatus.includes(0)) break;
      if (gameStatus[randomLocation] === 0) {
        gameStatus[randomLocation] = 2;
        setTimeout(paintGameStatus, 1000);
        currentTurn = 1;
        break;
      }
    }
  }

  if (isWinner(gameStatus, 1)) {
    console.log("Winner is player 1");
    endGameMessage.innerText = "Winner is player 1";
    endGame();
  } else if (isWinner(gameStatus, 2)) {
    console.log("Winner is player 2");
    endGameMessage.innerText = "Winner is player 2";
    endGame();
  } else if (isFull()) {
    console.log("Board is full!");
    endGameMessage.innerText = "Board is full, and the game is tie!";
    endGame();
  }
}

function playerChoosesSquare() {
  gameStatus.forEach((_, idx) => {
    cellArr[idx].addEventListener("click", handlePlayerClick);
  });
}

function gameStart() {
  modal.classList.add("hidden");
  modeSelect.classList.add("hidden");
  startBtn.classList.add("hidden");
  p1flag.classList.remove("hidden");
  p2flag.classList.add("hidden");
  playerChoosesSquare();
}

function singlePlayerStart() {
  isSinglePlayer = true;
  gameStart();
}

function multiPlayerStart() {
  isSinglePlayer = false;
  gameStart();
}

function handleStartButton() {
  modal.classList.remove("hidden");
  modeSelect.classList.remove("hidden");
  singlePlayerBtn.addEventListener("click", singlePlayerStart);
  multiPlayerBtn.addEventListener("click", multiPlayerStart);
}

function startGame() {
  startBtn.addEventListener("click", handleStartButton);
}

function resetGame() {
  for (let idx = 0; idx < 9; idx++) {
    gameStatus[idx] = 0;
  }
  paintGameStatus();
  startBtn.classList.remove("hidden");
  p1flag.classList.add("hidden");
  p2flag.classList.add("hidden");
  modal.classList.add("hidden");
  endGameModal.classList.add("hidden");
  currentTurn = 1;
}

function playerCannotChoosesSquare() {
  gameStatus.forEach((_, idx) => {
    cellArr[idx].removeEventListener("click", handlePlayerClick);
  });
}

function handleResetButton() {
  resetGame();
  playerCannotChoosesSquare();
}

function endGame() {
  p1flag.classList.add("hidden");
  p2flag.classList.add("hidden");
  modal.classList.remove("hidden");
  endGameModal.classList.remove("hidden");
  okBtn.addEventListener("click", handleResetButton);
}

function init() {
  paintGameStatus();
  startGame();
}

init();