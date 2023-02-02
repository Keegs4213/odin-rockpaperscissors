//Function to make the computer randomly choose rock, paper or scissors
function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

//Function plays single round of rock, paper, scissors - case insensitive input
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Computer selected scissors, rock beats scissors.";
        } else {
            return "You lose! Computer selected paper, paper beats rock.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Computer selected rock, paper beats rock.";
        } else {
            return "You lose! Computer selected scissors, scissors beats paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Computer selected paper, scissors beats paper.";
        } else {
            return "You lose! Computer selected rock, rock beats scissors.";
        }
    } else {
        return "Invalid selection. Please choose rock paper or scissors.";
    }
}

//Play 5 round game - set score to 0 and keep track
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection).includes("win")) {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection).includes("lose")) {
            computerScore++;
        }
    }
    // Score comparison to declare who wins or if the game is tied
    if (playerScore > computerScore) {
        return "You won!";
    } else if (playerScore < computerScore) {
        return "You lost!";
    } else {
        return "It's a tie!";
    }
}
game();