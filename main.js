//
//  JS File

// Constants
const playerOneWins = document.querySelector(".o-wins .message");
const playerTwoWins = document.querySelector(".x-wins .message");
const playerTurn = document.querySelector(".player-turn .message");
const resetButton = document.querySelector(".reset-game");
const themeButtons = document.querySelectorAll(".theme-buttons button");
const grid = document.querySelector(".grid");

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
