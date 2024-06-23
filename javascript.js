let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRoundCount = 5;

function getComputerChoice() {
    let computerChoice;
    const pcChoice = document.querySelector("#pc-choice"); 
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
        computerChoice = "Rock";
    }
    else if (randomNumber > 0.33 && randomNumber < 0.66) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
    pcChoice.textContent = `Computer's choice: ${computerChoice}`;
    return computerChoice;
}

function getHumanChoice(humanChoice) {
    const userChoice = document.querySelector("#user-choice"); 
    userChoice.textContent = `User's choice: ${humanChoice}`;
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (roundsPlayed >= maxRoundCount) {
        return;
    }
    const roundResult = document.querySelector("#round-result"); 
    switch (humanChoice) {
        case "Rock":
          switch (computerChoice) {
            case "Rock":
                roundResult.textContent = "Rock vs. Rock. It's a tie";
                break;

            case "Paper":
                computerScore++;
                roundResult.textContent = "You lose! Paper beats Rock";
                break;

            case "Scissors":
                humanScore++;
                roundResult.textContent = "You win! Rock beats Scissors";
          }
          break;
      
        case "Paper":
            switch (computerChoice) {
                case "Rock":
                    humanScore++;
                    roundResult.textContent = "You win! Paper beats Rock";
                    break;
    
                case "Paper":
                    roundResult.textContent = "Paper vs. Paper. It's a tie";
                    break;
    
                case "Scissors":
                    computerScore++;
                    roundResult.textContent = "You lose! Scissors beat Paper";
            }
            break;
        
        case "Scissors":
            switch (computerChoice) {
                case "Rock":
                    computerScore++;
                    roundResult.textContent = "You lose! Rock beats Scissors";
                    break;
    
                case "Paper":
                    humanScore++;
                    roundResult.textContent = "You win! Scissors beat Paper";
                    break;
    
                case "Scissors":
                    roundResult.textContent = "Scissors vs. Scissors. It's a tie!";
            }
    }

    roundsPlayed++;

    updateScore(roundsPlayed, humanScore, computerScore);

    if (roundsPlayed == maxRoundCount) {
        displayFinalScore();
    }
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    if (button.textContent !== "Rock" && button.textContent !== "Paper" && button.textContent !== "Scissors") {
        alert("Invalid input. Please choose Rock, Paper or Scissors!");
        return;
    }
    if (roundsPlayed < maxRoundCount) {
    playRound(getHumanChoice(button.textContent), getComputerChoice());
    }
  });
});

function updateScore(roundsPlayed, humanScore, computerScore) {
    const rounds = document.querySelector("#rounds-played");
    rounds.textContent = `Rounds played: ${roundsPlayed}`;

    const human = document.querySelector("#user-score");
    human.textContent = `Human Score: ${humanScore}`;

    const pc = document.querySelector("#pc-score");
    pc.textContent = `Computer Score: ${computerScore}`;
}

function displayFinalScore() {
    const finalResult = document.querySelector("#header");    
    if (humanScore > computerScore) {
        finalResult.style.color = "green";
        finalResult.textContent = "You win!";
    }
    else if (humanScore == computerScore) {
        finalResult.style.color = "blue";
        finalResult.textContent = "It's a tie";
    }
    else {
        finalResult.style.color = "red";
        finalResult.textContent = "You lose!";
    }
}