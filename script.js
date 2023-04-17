let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    
    let choices = ['rock', 'paper', 'scissors'];

    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

   return computerChoice;

}

function playRound (playerPick, computerPick) {

    computerPick = getComputerChoice();

    playerPick = prompt("Choose your weapon!").toLowerCase();
   

    //round results

    if (computerPick === playerPick) {

        return "this round was a tie!";
    }

    if (computerPick === 'rock' && playerPick === 'paper') {

        playerWins += 1;
        return ("You win! Paper beats Rock!");
    }
    
    if (computerPick === 'rock' && playerPick === 'scissors') {

        computerWins += 1;
        return "You loose! Rock beats Scissors!";
    }

    if (computerPick === 'paper' && playerPick === 'rock') {

        computerWins += 1;
        return "You loose! Paper beats Rock!";

    }

    if (computerPick === 'paper' && playerPick === 'scissors') {

        playerWins += 1;
        return "You Win! Scissors beats Paper!";
    }

    if (computerPick === 'scissors' && playerPick === 'rock') {
        playerWins += 1;
        return "You win! Rock beats Scissors!";
    }

    if (computerPick === 'scissors' && playerPick === 'paper') {

        computerWins += 1;
        return "You loose! Scissors beats Paper!";
    }
}

function game(){
    if (computerWins === 5) {
        return "Computer won this game!"
    }
    
    else if (playerWins === 5) {
        return "You won this game!"
    }

    else {
       return playRound();
    }
};