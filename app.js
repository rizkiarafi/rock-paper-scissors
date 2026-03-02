playGame();

function playGame() {
  const humanChoiceButtonContainer =
    document.querySelector("#buttons-container");

  const choiceInfoElement = document.querySelector("#choice-info");
  const humanChoiceElement = choiceInfoElement.querySelector("#human-choice");
  const botChoiceElement = choiceInfoElement.querySelector("#bot-choice");

  const rules = {
    rock: { rock: "draw", paper: "lose", scissors: "win" },
    paper: { rock: "win", paper: "draw", scissors: "lose" },
    scissors: { rock: "lose", paper: "win", scissors: "draw" },
  };

  let humanScore = 0;
  let botScore = 0;
  let roundCounter = 1;

  let hasFinalResultShown = false;

  humanChoiceButtonContainer.addEventListener("click", (e) => {
    if (e.target.id !== humanChoiceButtonContainer.id) {
      const humanSelection = getHumanChoice(e).toLowerCase();
      const botSelection = getBotChoice().toLowerCase();

      if (roundCounter === 5) {
        if (!hasFinalResultShown) showFinalResult();
        hasFinalResultShown = true;
      } else {
        playRound(humanSelection, botSelection);
      }
    }
  });

  function playRound(humanSelection, botSelection) {
    const roundResult = rules[humanSelection][botSelection];

    console.log(`||Round ${roundCounter}||`);
    console.log(`Human: ${humanSelection} || Bot: ${botSelection}`);

    choiceInfoElement.style.display = "block";
    humanChoiceElement.textContent = humanSelection;
    botChoiceElement.textContent = botSelection;

    showResult(roundResult);
    console.log(`Human score: ${humanScore} || Bot score: ${botScore}`);

    roundCounter++;
  }

  function showFinalResult() {
    if (humanScore > botScore) console.log("You've won the game!");
    else if (humanScore < botScore) console.log("You've lost the game!");
    else console.log("The match has ended evenly!");
  }

  function showResult(roundResult) {
    switch (roundResult) {
      case "win":
        humanScore++;
        console.log("WIN!");
        break;
      case "lose":
        botScore++;
        console.log("LOSE!");
        break;
      default:
        console.log("DRAW!");
    }
  }

  function resetGame() {
    roundCounter = 1;
    humanScore = 0;
    botScore = 0;
  }
}

function getHumanChoice(e) {
  if (e.target.id === "rock") return "Rock";
  else if (e.target.id === "paper") return "Paper";
  else if (e.target.id === "scissors") return "Scissors";
}

function getBotChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) return "Rock";
  else if (randomNum === 1) return "Paper";
  else return "Scissors";
}
