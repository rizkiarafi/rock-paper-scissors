let humanScore = 0;
let botScore = 0;
let roundCount = 0;

playGame();

function playGame() {
  const humanSelection = getHumanChoice();
  const botSelection = getBotChoice();

  console.log(`||Round ${roundCount + 1}||`);

  playRound(humanSelection, botSelection);

  if (roundCount >= 5) {
    if (humanScore === botScore) console.log("The match has ended evenly...");
    else if (humanScore > botScore) console.log("You've won the match!");
    else console.log("You've lost the match!");
  } else {
    playGame();
  }

  function playRound(humanChoice, botChoice) {
    if (humanChoice.toLowerCase() === "rock") {
      getResult(botChoice, "draw", "lose", "win");
    } else if (humanChoice.toLowerCase() === "paper") {
      getResult(botChoice, "win", "draw", "lose");
    } else if (humanChoice.toLowerCase() === "scissors") {
      getResult(botChoice, "lose", "win", "draw");
    }
    roundCount++;
    console.log(`Your score: ${humanScore} || Bot score: ${botScore}`);
  }

  function getResult(botChoice, result1, result2, result3) {
    console.log(`Bot choice is: ${botChoice}`);
    switch (botChoice.toLowerCase()) {
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
      botScore++;
      return "You've lost this round!";
    } else {
      return "It's a draw!";
    }
  }
}

function getBotChoice() {
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
