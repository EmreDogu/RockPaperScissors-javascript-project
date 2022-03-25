function computerPlay() {
    let array = ["Rock", "Paper", "Scissors"];
    let random = array[Math.floor(Math.random()*array.length)];
    return random;
}
