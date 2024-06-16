let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice;
    if (randomNumber < 0.33) {
        computerChoice = "rock";
    }
    else if (randomNumber > 0.33 && randomNumber < 0.66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    const message = "Input rock, paper or scissors";
    let userChoice;
    while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        userChoice = prompt(message).toLowerCase();
    }
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            return ;
        }
        else if (computerChoice === "paper") {
            computerScore++;
            return "You lose! Paper beats Rock";
        }
        else {
            humanScore++;
            return "You win! Rock beats Scissors";
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            return "You win! Paper beats Rock";
        }
        else if (computerChoice === "paper") {
            return "Paper vs. Paper. It's a tie";
        }
        else {
            computerScore++;
            return "You lose! Scissors beats Paper";
        }
    }
    else {
        if (computerChoice === "rock") {
            computerScore++;
            return "You lose! Rock beats Scissors";
        }
        else if (computerChoice === "paper") {
            humanScore++;
            return "You win! Scissor beats Paper";
        }
        else {
            return "Scissor vs. Scissor. It's a tie";
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


console.log(humanSelection);
console.log(computerSelection);
console.log(playRound(humanSelection, computerSelection))
console.log(`Your score: ${humanScore}`);
console.log(`PC score: ${computerScore}`);
