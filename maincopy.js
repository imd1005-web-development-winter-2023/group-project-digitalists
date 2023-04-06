//
//  JS File

// Constants
const root = document.documentElement;
const playerOneWins = document.querySelector(".o-wins .message");
const playerTwoWins = document.querySelector(".x-wins .message");
const playerTurn = document.querySelector(".player-turn .message");
const resetButton = document.querySelector(".reset-game");
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
let theme = "basic";
let currentPlayer = "o";
let moves = 0;
let board = ["x", "o", "x", "", "o", "", "", "", ""];


// Function to reset the board
function resetBoard() {
  // Remove all symbols from the tiles
  tiles.forEach(tile => {
    if (tile.children.length > 0) {
      tile.removeChild(tile.children[0]);
    }
  });
  draw();
}

function resetGame() {
  currentPlayer = "o";
  moves = 0;
  board = ["", "", "", "", "", "", "", "", ""];
  playerOneWins.innerText = "0";
  playerTwoWins.innerText = "0";
  playerTurn.innerText = "It is player 1's turn.";
  //just hiding img, not deleting
  grid.querySelectorAll("img").forEach((img) => (img.style.display = "none"));
  grid.querySelectorAll("p").forEach((p) => (p.style.display = "block"));
  draw();
}

// Changing Game Theme
function changeBasic() {
  //change xs and os
  theme = "basic";
  console.log(theme);
  root.style.setProperty('--background-colour', '#1d3557');
  root.style.setProperty('--text-colour', '#f1faee');
  root.style.setProperty('--border-colour', 'black');
  root.style.setProperty('--o-player', 'green');
  root.style.setProperty('--x-player', 'red');
  root.style.setProperty('--button-text', 'black');
  root.style.setProperty('--button-background', '#bebebe');
  //root.style.setProperty('--background-image', '');

  draw();
}

function changeDoodle() {
  //change xs and os
  theme = "doodle";
  console.log(theme);
  root.style.setProperty('--background-colour', '#BBBBBB');
  root.style.setProperty('--text-colour', '#04052d');
  root.style.setProperty('--border-colour', '#b7434f');
  root.style.setProperty('--o-player', '#276ee0');
  root.style.setProperty('--x-player', '#ef8607');
  root.style.setProperty('--button-text', '#04052d');
  root.style.setProperty('--button-background', '#b7434f');
  //root.style.setProperty('--background-image', '');

  draw();
}

function changeSpring() {
  //change xs and os
  theme = "spring";
  root.style.setProperty('--background-colour', '#9bff80');
  root.style.setProperty('--text-colour', '#87092d');
  root.style.setProperty('--border-colour', '#f1e973');
  root.style.setProperty('--o-player', '#ce1f44');
  root.style.setProperty('--x-player', '#e29bc4');
  root.style.setProperty('--button-text', '#87092d');
  root.style.setProperty('--button-background', '#f1e973');
  //root.style.setProperty('--background-image', '');
}

function changeSummer() {
  //change xs and os
  root.style.setProperty('--background-colour', '#46b0e2');
  root.style.setProperty('--text-colour', '#b78101');
  root.style.setProperty('--border-colour', '#f1b715');
  root.style.setProperty('--o-player', '#eef2f4');
  root.style.setProperty('--x-player', '#ec5f4c');
  root.style.setProperty('--button-text', '#b78101');
  root.style.setProperty('--button-background', '#f1b715');
  //root.style.setProperty('--background-image', '');
}

function changeFall() {
  //change xs and os
  root.style.setProperty('--background-colour', '#BBBBBB');
  root.style.setProperty('--text-colour', '#04052d');
  root.style.setProperty('--border-colour', '#b7434f');
  root.style.setProperty('--o-player', '#276ee0');
  root.style.setProperty('--x-player', '#ef8607');
  root.style.setProperty('--button-text', '#04052d');
  root.style.setProperty('--button-background', '#b7434f');
  //root.style.setProperty('--background-image', '');
}

function changeWinter() {
  //change xs and os
  root.style.setProperty('--background-colour', '#BBBBBB');
  root.style.setProperty('--text-colour', '#04052d');
  root.style.setProperty('--border-colour', '#b7434f');
  root.style.setProperty('--o-player', '#276ee0');
  root.style.setProperty('--x-player', '#ef8607');
  root.style.setProperty('--button-text', '#04052d');
  root.style.setProperty('--button-background', '#b7434f');
  //root.style.setProperty('--background-image', '');
}

function changePixel() {
  //change xs and os
  root.style.setProperty('--background-colour', '#BBBBBB');
  root.style.setProperty('--text-colour', '#04052d');
  root.style.setProperty('--border-colour', '#b7434f');
  root.style.setProperty('--o-player', '#276ee0');
  root.style.setProperty('--x-player', '#ef8607');
  root.style.setProperty('--button-text', '#04052d');
  root.style.setProperty('--button-background', '#b7434f');
  //root.style.setProperty('--background-image', '');
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
  //checking for p
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

function draw(){
  while(grid.firstChild){
    grid.removeChild(grid.firstChild);
  }
  console.log("e");
  for(let i = 0; i < board.length; i++){
    const tile = document.createElement("div");
    tile.classList.add("tile");
    if(board[i] === ""){
      tile.textContent="";
      //if current player x, set board[i] x, etc
      tile.addEventListener("click", (event)=>{console.log("clickedtile", i)});
    }
    if(board[i] === "o"){
      console.log(theme);
      const img = document.createElement("img");
      img.setAttribute("src", `./images/o-${theme}.svg`);
      tile.appendChild(img);
    }
    if(board[i] === "x"){
      const img = document.createElement("img");
      img.setAttribute("src", `./images/x-${theme}.svg`);
      tile.appendChild(img);
    }
    grid.appendChild(tile);
  }
}

draw();

// Event Listeners
resetButton.addEventListener("click", resetGame);
basicButton.addEventListener("click", changeBasic);
doodleButton.addEventListener("click", changeDoodle);
springButton.addEventListener("click", changeSpring);
summerButton.addEventListener("click", changeSummer);
fallButton.addEventListener("click", changeFall);
winterButton.addEventListener("click", changeWinter);
pixelButton.addEventListener("click", changePixel);
grid.addEventListener("click", handleMove);
