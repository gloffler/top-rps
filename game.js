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

function playGame(humanChoice) {
  let humanScore = 0;
  let computerScore = 0;
  let message;

  let roundWinner = playRound(humanChoice.toLowerCase(), getComputerChoice());
  if (roundWinner == "computer") {
    computerScore++;
  } else if (roundWinner == "human") {
    humanScore++;
  }

  if (humanScore === computerScore) {
    message = "Draw!";
  } else if (humanScore > computerScore) {
    message = "Human wins!";
  } else {
    message = "Computer wins!";
  }

  resultDiv.textContent = message;
}

//playGame();
const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    console.log("You clicked " + e.target.textContent);
    playGame(e.target.textContent);
  }
});

const resultDiv = document.getElementById("result");
