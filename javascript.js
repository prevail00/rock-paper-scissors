let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRoundCount = 5;

function getComputerChoice() {
    let computerChoice;
    const pcChoice = document.querySelector("#pc-choice"); 
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
        computerChoice = "rock";
    }
    else if (randomNumber > 0.33 && randomNumber < 0.66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    pcChoice.textContent = `Computer's choice: ${computerChoice}`;
    return computerChoice;
}

function getHumanChoice(humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    const userChoice = document.querySelector("#user-choice"); 
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        alert("Please choose rock, paper of scissors!");
        return;
    }
    userChoice.textContent = `User's choice: ${humanChoice}`;
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (roundsPlayed >= maxRoundCount) {
        return;
    }
    let result;
    const roundResult = document.querySelector("#round-result"); 
    switch (humanChoice) {
        case "rock":
          switch (computerChoice) {
            case "rock":
                roundResult.textContent = "Rock vs. Rock. It's a tie";
                break;

            case "paper":
                computerScore++;
                roundResult.textContent = "You lose! Paper beats Rock";
                break;

            case "scissors":
                humanScore++;
                roundResult.textContent = "You win! Rock beats Scissors";
          }
          break;
      
        case "paper":
            switch (computerChoice) {
                case "rock":
                    humanScore++;
                    roundResult.textContent = "You win! Paper beats Rock";
                    break;
    
                case "paper":
                    roundResult.textContent = "Paper vs. Paper. It's a tie";
                    break;
    
                case "scissors":
                    computerScore++;
                    roundResult.textContent = "You lose! Scissors beat Paper";
            }
            break;
        
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    roundResult.textContent = "You lose! Rock beats Scissors";
                    break;
    
                case "paper":
                    humanScore++;
                    roundResult.textContent = "You win! Scissors beat Paper";
                    break;
    
                case "scissors":
                    roundResult.textContent = "Scissors vs. Scissors. It's a tie!";
            }
    }
    roundsPlayed++;

    updateScore(roundsPlayed, humanScore, computerScore);

    if (roundsPlayed == maxRoundCount) {
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
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
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