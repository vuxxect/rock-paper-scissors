function getComputerChoice() {
let num = Math.random() * 3;
    if (num >= 0 && num < 1) {
        return "rock";
    } else if (num >= 1 && num < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper or scissors.");
    choice = choice.toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        console.log("Incorrect value.");
    }
}

function getLose() {
    console.log("It's a loss :(\n+1 point to the computer\n");
    computerScore += 1;
}

function getWin() {
    console.log("That's a win!\n+1 point for you.\n");
    humanScore += 1;
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) 
        {console.log("It's a tie! Replay the round.");}

    else if (humanChoice == "rock") {
        if (computerChoice == "paper") 
        {getLose(); console.log(computerChoice + " beat " + humanChoice)}
        else 
        {getWin(); console.log(humanChoice + " beat " + computerChoice)}

    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") 
        {getLose(); console.log(computerChoice + " beat " + humanChoice)}
        else {getWin(); console.log(humanChoice + " beat " + computerChoice)}

    } else {
        if (computerChoice == "rock") 
        {getLose(); console.log(computerChoice + " beat " + humanChoice)}
        else 
        {getWin(); console.log(humanChoice + " beat " + computerChoice)}
    }
}

function playGame() {
   console.log("This game will last 5 rounds.");
   for (let index = 0; index < 5; index++) {
    playRound(getHumanChoice(), getComputerChoice());
} 
    if (humanScore == computerScore){
        console.log("This game ended in a draw with a score of: " + humanScore + ":" + computerScore);
    }
    else if (humanScore > computerScore) {
        console.log("You won this game with a score of: " + humanScore + ":" + computerScore);
    } else {
        console.log("This game was won by the computer, with a score of: " + computerScore + ":" + humanScore);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();