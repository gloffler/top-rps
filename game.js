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

function playRound(humanChoice, computerChoice) {

}

const rounds = 1;
let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < rounds; i++) {
    let roundWinner = playRound(getHumanChoice(), getComputerChoice());
    if (roundWinner == "computer") {
        computerScore++;
    } else if (roundWinner == "human") {
        humanScore++;
    }
}