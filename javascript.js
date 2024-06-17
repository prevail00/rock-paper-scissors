let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

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
    console.log(`Computer's choice: ${computerChoice}`);
    return computerChoice;
}

function getHumanChoice() {
    const message = "Input rock, paper or scissors";
    let userChoice;
    while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        userChoice = prompt(message).toLowerCase();
    }
    console.log(`User's choice: ${userChoice}`);
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    let result;
    switch (humanChoice) {
        case "rock":
          switch (computerChoice) {
            case "rock":
                result = "Rock vs. Rock. It's a tie";
                break;

            case "paper":
                computerScore++;
                result = "You lose! Paper beats Rock";
                break;

            case "scissors":
                humanScore++;
                result = "You win! Rock beats Scissors";
          }
          break;
      
        case "paper":
            switch (computerChoice) {
                case "rock":
                    humanScore++;
                    result = "You win! Paper beats Rock";
                    break;
    
                case "paper":
                    result = "Paper vs. Paper. It's a tie";
                    break;
    
                case "scissors":
                    computerScore++;
                    result = "You lose! Scissors beats Paper";
            }
            break;
        
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    result = "You lose! Rock beats Scissors";
                    break;
    
                case "paper":
                    humanScore++;
                    result = "You win! Scissors beats Paper";
                    break;
    
                case "scissors":
                    result = "Scissors vs. Scissors. It's a tie!";
            }
    }
    console.log(result);
    console.log(`Your score: ${humanScore}`);
    console.log(`PC score: ${computerScore}`);    
    roundsPlayed++;
    return result;
}

function playGame() {
    while (roundsPlayed < 5) {
        playRound(getHumanChoice(), getComputerChoice());   
    }
    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (humanScore == computerScore) {
        console.log("It's a tie");
    }
    else {
        console.log("You lose!");
    }
}

playGame();