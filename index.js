// ROCK PAPER SCISSORS GAME

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const inputName = document.getElementById("nameInput");
const playGameBtn = document.getElementById("play");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

let playerName = "";
let playerScore = 0;
let computerScore = 0;
const winCondition = 5;

playGameBtn.addEventListener("click", startGame);
rockBtn.addEventListener("click", (evt) => handlePlayerChoice(evt, "rock"));
paperBtn.addEventListener("click", (evt) => handlePlayerChoice(evt, "paper"));
scissorsBtn.addEventListener("click", (evt) => handlePlayerChoice(evt, "scissors"));

function startGame(evt) {
    evt.preventDefault();
    playerName = inputName.value.trim();

    if (playerName === "") {
        alert("Please enter your name to start playing.");
        return;
    }

    playerDisplay.textContent = `${playerName}:`;
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    resultDisplay.textContent = "";

    // Apply the animation classes
    const topper = document.querySelector('.topper');
    const bottom = document.querySelector('.bottom');
    topper.classList.add('shrink');
    bottom.classList.add('reveal');
}

function handlePlayerChoice(evt, playerChoice) {
    evt.preventDefault();
    if (!playerName) {
        alert("Please enter your name to start the game!");
        return;
    }
    playGame(playerChoice);
}

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "YOU WIN THIS ROUND!";
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        result = "YOU LOSE THIS ROUND!";
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    playerDisplay.textContent = `${playerName}: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    checkForWinner();
}

function checkForWinner() {
    if (playerScore === winCondition || computerScore === winCondition) {
        const winner = playerScore === winCondition ? playerName : "Computer";
        alert(`${winner} wins the game! The game will now restart.`);
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    resultDisplay.textContent = "";
    playerDisplay.textContent = `PLAYER:`;
    computerDisplay.textContent = `COMPUTER:`;
    inputName.value = "";
    playerName = "";

    // Remove animation classes to allow replay animation
    const topper = document.querySelector('.topper');
    const bottom = document.querySelector('.bottom');
    topper.classList.remove('shrink');
    bottom.classList.remove('reveal');
}
