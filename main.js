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

// Event Listeners
