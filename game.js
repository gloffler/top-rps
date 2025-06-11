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

const resultDiv = document.getElementById("result");

let round = 0;
const maxRounds = 3;
let humanScore = 0;
let computerScore = 0;
let message;

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    if (round < maxRounds) {
      let roundWinner = playRound(
        e.target.textContent.toLowerCase(),
        getComputerChoice()
      );

      if (roundWinner == "computer") {
        computerScore++;
      } else if (roundWinner == "human") {
        humanScore++;
      }

      resultDiv.textContent = round + 1;
      round++;

      if (round >= maxRounds) {
        if (humanScore === computerScore) {
          resultDiv.textContent = "Draw! Reset in 3 seconds...";
        } else if (humanScore > computerScore) {
          resultDiv.textContent = "Human wins! Reset in 3 seconds...";
          round = 0;
        } else {
          resultDiv.textContent = "Computer wins! Reset in 3 seconds...";
          round = 0;
        }

        setTimeout(() => {
          round = 0;
          humanScore = 0;
          computerScore = 0;
          resultDiv.textContent = "New Round!";
        }, 3000);
      }
    }
  }
});
