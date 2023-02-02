// // Function to make the computer randomly choose rock paper or scissors//
function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
  }


//Function plays single round of RPS 
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats scissors.";
        } else {
            return "You lose! Paper beats rock.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock.";
        } else {
            return "You lose! Scissors beats paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beats paper.";
        } else {
            return "You lose! Rock beats scissors.";
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
            let playerSelection = prompt("Do you choose rock, paper or scissors?");
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
    console.log(game);