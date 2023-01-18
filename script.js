// Function to make the computer randomly choose rock paper or scissors//
const getRandomValue = Math.random();

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
}

//Function plays single round of RPS
function round(playerSelection,computerSelection){


}
    
