let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function getComputerChoice() {
  const randomNum = Math.random();

  if (randomNum < 1 / 3) {
    return "Rock";
  } else if (randomNum < 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  return prompt("Choose your hand sign!");
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === "rock") {
    getResult(computerChoice, "draw", "lose", "win");
  } else if (humanChoice.toLowerCase() === "paper") {
    getResult(computerChoice, "win", "draw", "lose");
  } else if (humanChoice.toLowerCase() === "scissors") {
    getResult(computerChoice, "lose", "win", "draw");
  }
}

function getResult(computerChoice, result1, result2, result3) {
  console.log(`Computer choice is: ${computerChoice}`);
  switch (computerChoice.toLowerCase()) {
    case "rock":
      console.log(checkResult(result1));
      break;
    case "paper":
      console.log(checkResult(result2));
      break;
    case "scissors":
      console.log(checkResult(result3));
      break;
  }
}

function checkResult(result) {
  if (result === "win") {
    humanScore++;
    return "You've won this round!";
  } else if (result === "lose") {
    computerScore++;
    return "You've lost this round!";
  } else {
    return "It's a draw!";
  }
}
