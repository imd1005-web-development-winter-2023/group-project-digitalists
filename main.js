//
//  JS File

// Constants
const root = document.documentElement;
const playerOneWins = document.querySelector(".o-wins .message");
const playerTwoWins = document.querySelector(".x-wins .message");
const playerTurn = document.querySelector(".player-turn .message");
const resetButton = document.querySelector(".reset-game");
//const themeButtons = document.querySelectorAll(".theme-buttons button");
const grid = document.querySelector(".grid");

//theme button buttons
const basicButton = document.querySelector(".theme-1");
const doodleButton = document.querySelector(".theme-2");
const springButton = document.querySelector(".theme-3");
const summerButton = document.querySelector(".theme-4");
const fallButton = document.querySelector(".theme-5");
const winterButton = document.querySelector(".theme-6");
const pixelButton = document.querySelector(".theme-7");

// Variables
let currentPlayer = "o";
let moves = 0;
let board = ["", "", "", "", "", "", "", "", ""];


// Reseting the Game
function resetGame() {
  currentPlayer = "o";
  moves = 0;
  board = ["", "", "", "", "", "", "", "", ""];
  playerOneWins.innerText = "0";
  playerTwoWins.innerText = "0";
  playerTurn.innerText = "It is player 1's turn.";
  grid.querySelectorAll("img").forEach((img) => (img.style.display = "none"));
  grid.querySelectorAll("p").forEach((p) => (p.style.display = "block"));
}

// Changing Game Theme
function changeTheme () {

}
function changeDoodle() {
  console.log("text");
  root.style.setProperty('--background-colour', 'white');
}

//Check if Game has ended
function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  if (moves === 9) {
    return true;
  }

  return false;
}

// Handle a Move
function handleMove(event) {
  if (event.target.tagName === "P") {
    const index = [...event.target.parentNode.children].indexOf(event.target);
    if (!board[index]) {
      moves++;
      board[index] = currentPlayer;
      event.target.style.display = "none";
      grid.querySelectorAll("img")[index].style.display = "block";
      if (checkWin()) {
        if (currentPlayer === "o") {
          playerOneWins.innerText = parseInt(playerOneWins.innerText) + 1;
        } else {
          playerTwoWins.innerText = parseInt(playerTwoWins.innerText) + 1;
        }
        resetGame();
      } else {
        currentPlayer = currentPlayer === "o" ? "x" : "o";
        playerTurn.innerText = `It is player ${currentPlayer === "o" ? 1 : 2}'s turn.`;
      }
    }
  }
}
// Event Listeners
resetButton.addEventListener("click", resetGame);
//themeButtons.forEach((button) => button.addEventListener("click", changeTheme));
doodleButton.addEventListener("click", changeDoodle);
grid.addEventListener("click", handleMove);

