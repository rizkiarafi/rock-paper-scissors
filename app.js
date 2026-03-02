const rules = {
  rock: { rock: "draw", paper: "lose", scissors: "win" },
  paper: { rock: "win", paper: "draw", scissors: "lose" },
  scissors: { rock: "lose", paper: "win", scissors: "draw" },
};

playGame();

function playGame() {
  let humanScore = 0;
  let botScore = 0;
  let roundCounter = 1;

  while (roundCounter <= 5) {
    playRound();
    roundCounter++;
  }

  function playRound() {
    const humanSelection = getHumanChoice().toLowerCase();
    const botSelection = getBotChoice().toLowerCase();
    const gameResult = rules[humanSelection][botSelection];

    console.log(`||Round ${roundCounter}||`);
    console.log(`Human: ${humanSelection} || Bot: ${botSelection}`);
    showResult(gameResult);
    console.log(`Human score: ${humanScore} || Bot score: ${botScore}`);
  }

  function showResult(gameResult) {
    switch (gameResult) {
      case "win":
        humanScore++;
        console.log("You've won the match!");
        break;
      case "lose":
        botScore++;
        console.log("You've lost against the bot!");
        break;
      default:
        console.log("The match has ended evenly");
    }
  }
}

function getHumanChoice() {
  return prompt("What is your handsign?");
}

function getBotChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) return "Rock";
  else if (randomNum === 1) return "Paper";
  else return "Scissors";
}
