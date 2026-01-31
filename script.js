function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function disableButtons() {
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
}

function outputText(text) {
  const para = document.createElement("p");
  para.textContent = text;
  resultsDiv.appendChild(para);
}

function getLose(computerChoice, humanChoice) {
    outputText("It's a loss :( \n+1 point to the computer");
    outputText(`${computerChoice} beat ${humanChoice}`);
    computerScore += 1;
}

function getWin(computerChoice, humanChoice) {
    outputText("That's a win! \n+1 point for you.");
    outputText(`${humanChoice} beat ${computerChoice}`);
    humanScore += 1;
}

function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        disableButtons();

        if (humanScore === computerScore){
            outputText(`This game ended in a draw with a score of: ${humanScore} : ${computerScore}`);
        }
        else if (humanScore > computerScore) {
            outputText(`You won this game with a score of: ${humanScore} : ${computerScore}`);
        } else {
            outputText(`This game was won by the computer, with a score of: ${computerScore} : ${humanScore}`);
        }
    }
}

function playRound (humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) 
        {outputText("It's a tie! Replay the round.");}

    else if (humanChoice === "rock") {
        computerChoice === "paper" ?
        getLose(computerChoice, humanChoice) :
        getWin(computerChoice, humanChoice);

    } else if (humanChoice === "paper") {
        computerChoice === "scissors" ?
        getLose(computerChoice, humanChoice) :
        getWin(computerChoice, humanChoice);

    } else {
        computerChoice === "rock" ?
        getLose(computerChoice, humanChoice) :
        getWin(computerChoice, humanChoice);
    }

    checkGameOver();
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const resultsDiv = document.querySelector("#results");

let humanScore = 0;
let computerScore = 0;

btnRock.addEventListener('click', () => playRound("rock"));
btnPaper.addEventListener('click', () => playRound("paper"));
btnScissors.addEventListener('click', () => playRound("scissors"));
