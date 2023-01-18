// Function to make the computer randomly choose rock paper or scissors//

function getComputerChoice() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomValue = Math.random();
    //console.log(getRandomValue);
    if (getRandomValue <= 0.33) {
        return rock;
    } else if (getRandomValue <= 0.66) {
        return paper;
    } else {
        return scissors;
    }
} // make console log return correct thing before progressing

//Function plays single round of RPS
function round(playerSelection,computerSelection){
    let tie = "Tie! You selected " + playerSelection + " and the computer selected " + computerSelection;
    let paperBeatRock =
    let scissorsBeatPaperLoss = 
    let rockBeatScissors =
    let rocksBeatScissorsLoss =
    let scissorsBeatPaper =

}
    
