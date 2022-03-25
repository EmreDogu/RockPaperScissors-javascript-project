function computerPlay() {
    let array = ["rock", "paper", "scissors"];
    let random = array[Math.floor(Math.random()*array.length)];
    return random;
}

function roundPlay(computerSelection, playerSelection) {
    if (!(playerSelection=="rock") && !(playerSelection=="paper") && !(playerSelection=="scissors")) {
        return "wrong input";
    }
    else if (playerSelection==computerSelection) {
        return "tie";
    }else if (playerSelection=="rock" && computerSelection=="scissors") {
        return true;
    }else if (playerSelection=="paper" && computerSelection=="rock") {
        return true;
    }else if (playerSelection=="scissors" && computerSelection=="paper") {
        return true;
    }else {
        return false;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    while (playerWins<3 && computerWins<3) {
        let computerSelection = computerPlay();
        let playerSelection = window.prompt("Enter either rock, paper or scissors:");
        let result = roundPlay(computerSelection, playerSelection.toLowerCase());
        if (result == "tie") {
            alert("It's a tie!");
        }else if (result == true) {
            playerWins += 1;
            alert("You win! " + playerSelection + " beats " + computerSelection.toLowerCase());
        }else if (result == false) {
            computerWins += 1;
            alert("You lose! " + computerSelection + " beats " + playerSelection.toLowerCase());
        }else {
            alert("Please enter either rock, paper or scissors instead of random stuff");
        }
    }

    if (computerWins > playerWins) {
        alert("Computer has won the game!");
    }else {
        alert("Player has won the game!");
    }
}

game();