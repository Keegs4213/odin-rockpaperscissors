// Scores start at 0
let playerScore = 0;
let computerScore = 0;


// Play 5 rounds, prompt case-insensitive playerSelection
for(let i = 0; i < 5; i++) {
    let playerSelection = prompt("Do you choose rock, paper or scissors?").toLowerCase();

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log("Invalid choice, please select rock, paper or scissors");
        i--;
        continue;
}
}
// Function to make the computer randomly choose rock paper or scissors//
function getComputerChoice() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let computerChoice = Math.random();
    if (computerChoice <= 0.34) {
        computerChoice = rock;
    } else if (computerChoice <= 0.67) {
        computerChoice = paper;
    } else {
        computerChoice = scissors;
    }
    console.log("Computer: " + computerChoice);
}
        
//Function plays single round of RPS --- redo this
function playRound(playerSelection,computerSelection) {    
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats scissors.";
        }
    } else {
        return "You lose! Paper beats rock."
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock."
        }
        else {
            return "You lose! Scissors beats paper."
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beats paper."
        }
        else {
            return "You lose! Rock beats scissors."
        }
    } else {
        return "Invalid selection. Please choose rock paper or scissors.";
    }
}


// Function to play 5 round game and return winner







//     let tie = "Tie! You selected " + playerSelection + " and the computer selected " + computerSelection;
//     let paperBeatRock = "You win! You selected " + playerSelection + " and the computer selected " + computerSelection;
//     let scissorsBeatPaperLoss = "You lose! You selected "  + playerSelection + " and the computer selected " + computerSelection;
//     let paperBeatRockLoss = "You lose! You selected " + playerSelection + "and the computer selected " + computerSelection;
//     let rockBeatScissors = "You win! You selected " + playerSelection + " and the computer selected " + computerSelection; 
//     let rockBeatScissorsLoss = "You lose! You selected " + playerSelection + " and the computer selected " + computerSelection;
//     let scissorsBeatPaper = "You win! You selected " + playerSelection + " and the computer selected " + computerSelection;

//     if (playerSelection === computerSelection) {
//     return tie;
//     } else if (computerSelection === rock && playerSelection === scissors) {
//         return paperBeatRockLoss;
//     } else if (computerSelection === rock && playerSelection === paper) {
//         return paperBeatRock;
//     } else if (computerSelection === scissors && playerSelection === paper) {
//         return scissorsBeatPaperLoss;
//     } else if (computerSelection === scissors && playerSelection === scissors) {
//         return rockBeatScissors;
//     } else if (computerSelection === rock && playerSelection === scissors) {
//         return rockBeatScissorsLoss;
//     } else {
//         return scissorsBeatPaper;
//     } 
// }



// Score comparison to declare who wins or if the game is tied
if (playerScore > computerScore) {
    return "You won!"
} else if (playerScore < computerScore) {
    return "You lost!"
} else {
    return "It's a tie!"
}    
console.log(game);

    // //function to format the input as case insensitive
    // function capitalize(playerSelection) {
    //     let allLowerCase = playerSelection.toLowerCase();
    //     let capitalizeFirstLetter = allLowerCase.charAt(0).toUpperCase() + allLowerCase.slice(1);
    //     return capitalizeFirstLetter;
    // }
    //    let playerSelection = "Rock";
    //    let computerSelection = getComputerChoice();

    // console.log(playRound(capitalize(playerSelection), computerSelection));

    // Player Selection 
 // prompt()


// computer selection    getComputer Choice = computerSelection;


// game function using round function - use loop to play 5 rounds and keep score
