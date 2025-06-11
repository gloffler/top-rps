function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber <= 0.3) {
    return "rock";
  } else if (randomNumber >= 0.6) {
    return "paper";
  } else {
    return "scissors";
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
  return choice;
}

function playRound(humanChoice, computerChoice) {
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (humanChoice === computerChoice) {
    return "draw";
  }

  return rules[humanChoice] === computerChoice ? "human" : "computer";
}

function playGame() {
  const rounds = 5;
  let humanScore = 0;
  let computerScore = 0;
  let message;

  for (let i = 0; i < rounds; i++) {
    let roundWinner = playRound(getHumanChoice(), getComputerChoice());
    if (roundWinner == "computer") {
      computerScore++;
    } else if (roundWinner == "human") {
      humanScore++;
    }
  }

  if (humanScore === computerScore) {
    message = "Draw!";
  } else if (humanScore > computerScore) {
    message = "Human wins!";
  } else {
    message = "Computer wins!";
  }

  alert(message);
}

//playGame();
