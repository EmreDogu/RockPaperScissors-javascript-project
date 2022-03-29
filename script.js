//css ve genel olarak toparlama var (query'leri playerwins gibi başa alma vs.)

let playerWins = 0;
let computerWins = 0;
let gameEnd = 0;

function computerPlay() {
    let array = ["rock", "paper", "scissors"];
    let random = array[Math.floor(Math.random() * array.length)];
    return random;
}

function roundPlay(computerSelection, playerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return true;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return true;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return true;
    } else {
        return false;
    }
}

function checkGameEnd(computerWins, playerWins) {
    const winCondition = document.querySelector(".winCondition");
    if (computerWins > playerWins && computerWins == 3) {
        winCondition.textContent = "Computer has won the game!";
        return true;
    } else if (playerWins > computerWins && playerWins == 3) {
        winCondition.textContent = "Player has won the game!";
        return true;
    }
    return false;
}

function restartGame() {
    playerWins = 0;
    computerWins = 0;
    gameEnd = 0;
    let situation = document.querySelector(".situation");
    let winCondition = document.querySelector(".winCondition");
    let playerWinCount = document.querySelector(".playerWinCount");
    let computerWinCount = document.querySelector(".computerWinCount");
    let restartButton = document.querySelector(".restart");
    restartButton.remove();
    situation.textContent = "Choose either rock, paper or scissors by clicking the corresponding image!";
    winCondition.textContent = "First to 3 wins!";
    playerWinCount.textContent = "?";
    computerWinCount.textContent = "?";
}

const buttonList = document.querySelectorAll("button");
buttonList.forEach(button => {
    button.addEventListener("click", function () {
        if (gameEnd) {
            return;
        }
        let computerSelection = computerPlay();
        const bool = roundPlay(computerSelection, button.className);
        if (bool == true) {
            playerWins++;
            let situation = document.querySelector(".situation");
            let winCondition = document.querySelector(".winCondition");
            let playerWinCount = document.querySelector(".playerWinCount");
            situation.textContent = "You win!";
            winCondition.textContent = `${button.className} beats ${computerSelection}`;
            playerWinCount.textContent = playerWins;
            gameEnd = checkGameEnd(computerWins, playerWins);
        } else if (bool == false) {
            computerWins++;
            let situation = document.querySelector(".situation");
            let winCondition = document.querySelector(".winCondition");
            let computerWinCount = document.querySelector(".computerWinCount");
            situation.textContent = "You lose!";
            winCondition.textContent = `${computerSelection} beats ${button.className}`;
            computerWinCount.textContent = computerWins;
            gameEnd = checkGameEnd(computerWins, playerWins);
        } else {
            let situation = document.querySelector(".situation");
            let winCondition = document.querySelector(".winCondition");
            situation.textContent = "It's a tie!";
            winCondition.textContent = `Computer and you both pick ${computerSelection}`;
        }

        if (gameEnd === true) {
            const announce = document.querySelector(".announce");
            const button = document.createElement("button");
            button.textContent = "Restart the Game!";
            button.classList.add("restart");
            announce.appendChild(button);
        }
    });
});

document.body.addEventListener("click", function (e) {
    if (e.target.className == "restart") {
        restartGame();
    }
});