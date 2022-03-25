function computerPlay() {
    let array = ["Rock", "Paper", "Scissors"];
    let random = array[Math.floor(Math.random()*array.length)];
    return random;
}

function roundPlay(computerSelection, playerSelection) {
    if (playerSelection==computerSelection) {
        alert("It's a tie!");
    }else if (playerSelection=="Rock" && computerSelection=="Scissors") {
        alert("You win! Rock beats Scissors");
    }else if (playerSelection=="Paper" && computerSelection=="Rock") {
        alert("You win! Paper beats Rock");
    }else if (playerSelection=="Scissors" && computerSelection=="Paper") {
        alert("You win! Scissors beats Paper");
    }else {
        alert("You lose! " + computerSelection + " beats " + playerSelection);
    }
}

var computerSelection = computerPlay();
var playerSelection = "Rock";

console.log(roundPlay(computerSelection, playerSelection));