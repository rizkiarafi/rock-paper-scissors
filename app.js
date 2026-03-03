playGame();

function playGame() {
  const humanChoiceButtonContainer =
    document.querySelector("#buttons-container");

  const choiceInfoElement = document.querySelector("#choice-info");

  const humanChoiceElement = choiceInfoElement.querySelector("#human-choice");
  const botChoiceElement = choiceInfoElement.querySelector("#bot-choice");

  const roundCountElement = document.querySelector("#round-count");
  const roundResultElement = document.querySelector("#round-result");

  const humanScoreElement = document.querySelector("#human-score");
  const botScoreElement = document.querySelector("#bot-score");

  const finalSection = document.querySelector("#final-section");
  const resetGameButton = finalSection.querySelector("#reset-game");
  const finalResultElement = finalSection.querySelector("#final-result");

  const rules = {
    rock: { rock: "draw", paper: "lose", scissors: "win" },
    paper: { rock: "win", paper: "draw", scissors: "lose" },
    scissors: { rock: "lose", paper: "win", scissors: "draw" },
  };

  let humanScore = 0;
  let botScore = 0;
  let roundCounter = 0;

  resetGameButton.addEventListener("click", resetGame);

  humanChoiceButtonContainer.addEventListener("click", (e) => {
    if (e.target.id !== humanChoiceButtonContainer.id && roundCounter < 5) {
      const humanSelection = getHumanChoice(e).toLowerCase();
      const botSelection = getBotChoice().toLowerCase();

      playRound(humanSelection, botSelection);

      if (roundCounter === 5) {
        showFinalResult();
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

    setRound(roundCounter + 1);
  }

  function showFinalResult() {
    finalSection.style.display = "block";
    if (humanScore > botScore)
      finalResultElement.textContent = "You've won the match!";
    else if (humanScore < botScore)
      finalResultElement.textContent = "You've lost the match!";
    else finalResultElement.textContent = "The match has ended evenly";
  }

  function showResult(roundResult) {
    switch (roundResult) {
      case "win":
        setHumanScore(humanScore + 1);
        roundResultElement.textContent = "WIN!";
        break;
      case "lose":
        setBotScore(botScore + 1);
        roundResultElement.textContent = "LOSE!";
        break;
      default:
        roundResultElement.textContent = "DRAW!";
    }
  }

  function setHumanScore(score) {
    humanScore = score;
    humanScoreElement.textContent = humanScore;
  }

  function setBotScore(score) {
    botScore = score;
    botScoreElement.textContent = botScore;
  }

  function setRound(round) {
    roundCounter = round;
    roundCountElement.textContent = `Round ${roundCounter}`;
  }

  function resetGame() {
    finalSection.style.display = "none";
    choiceInfoElement.style.display = "none";
    roundCountElement.textContent = "Choose your handsign!";

    setRound(0);
    setHumanScore(0);
    setBotScore(0);
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
