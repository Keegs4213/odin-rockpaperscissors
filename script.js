// Function to make the computer randomly choose Rock paper or scissors//


function getComputerChoice() {
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let getRandomValue = Math.random();
}
if (getRandomValue <= 0.33) {
    return rock;
} 
else if (getRandomValue <= 0.66) {
    return paper;
} else {
    return scissors
}
console.log(getComputerChoice);