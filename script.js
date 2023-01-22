// Function to make the computer randomly choose rock paper or scissors//



function getComputerChoice() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomNum = Math.floor(Math.random() * 3);
    if (getRandomNum = 0) {
        return rock;
    } else if (getRandomValue = 1) {
        return paper;
    } else {
        return scissors;
    }

} // make console log return correct thing before progressing

//Function plays single round of RPS
function playRound(playerSelection,computerSelection) {
    let tie = "Tie! You selected " + playerSelection + " and the computer selected " + computerSelection;
    let paperBeatRock = "You win! You selected " + playerSelection + " and the computer selected " + computerSelection;
    let scissorsBeatPaperLoss = "You lose! You selected "  + playerSelection + " and the computer selected " + computerSelection;
    let paperBeatRockLoss = "You lose! You selected " + playerSelection + "and the computer selected " + computerSelection;
    let rockBeatScissors = "You win! You selected " + playerSelection + " and the computer selected " + computerSelection; 
    let rocksBeatScissorsLoss = "You lose! You selected " + playerSelection + " and the computer selected " + computerSelection;
    let scissorsBeatPaper = "You win! You selected " + playerSelection + " and the computer selected " + computerSelection;

    if (playerSelection === computerSelection) {
        return tie;
    }
}
    // Player Selection 
 // prompt()


// computer selection    getComputer Choice = computerSelection;


// game function using round function - use loop to play 5 rounds
