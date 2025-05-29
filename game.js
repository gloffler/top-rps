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

function getHumanChoice() {
    let choice = prompt("Your choice:", "").toLowerCase();
    switch (choice) {
            case "rock":
            case "paper":
            case "scissors": 
                break;
            default:
                getHumanChoice();
        }
        return choice
}
