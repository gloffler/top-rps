function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber <= 0.3) {
        return "Rock";
    } else if (randomNumber >= 0.6) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
