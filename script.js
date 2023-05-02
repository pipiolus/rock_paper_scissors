let playerChoice;
let pcChoice;
let playerScore = 0;
let pcScore = 0;

let weapons = document.querySelectorAll('.btn');
let displayPlayerScore = document.getElementById("player-score");
let displayPcScore = document.getElementById("pc-score");
const results = document.getElementById("result");
const winner = document.getElementById("winner");

const getComputerChoice = () => {

    let choices = ['rock', 'paper', 'scissors'];

    pcChoice = choices[Math.floor(Math.random() * choices.length)];

    return pcChoice;
}

weapons.forEach((button) => {
    button.addEventListener('click', () => {
        const img = button.querySelector("img");
        playerChoice = img.alt;

        playRound(playerChoice, pcChoice);

        if (playerScore === 5 || pcScore === 5) displayWinner();
    })
})


const playRound = (playerChoice, pcChoice) => {
    pcChoice = getComputerChoice();
    playerChoice = playerChoice;

    if (playerChoice === pcChoice) displayResult(`You both picked the same weapon! It's a tie!`);

    else if (
        (playerChoice === 'rock' && pcChoice === 'paper') ||
        (playerChoice === 'paper' && pcChoice === 'scissors') ||
        (playerChoice === 'scissors' && pcChoice === 'rock') 
    ) {
        pcScore++;
        updatePcScore();
        displayResult(`Ups, you loose this one. ${capitalize(pcChoice)} beats ${playerChoice}.`);
    }
        
    else if(
        (playerChoice === 'scissors' && pcChoice === 'paper') ||
        (playerChoice === 'paper' && pcChoice === 'rock') ||
        (playerChoice === 'rock' && pcChoice === 'scissors')
    ) {
        playerScore++;
        updatePlayerScore();
        displayResult(`Point for the human! ${capitalize(playerChoice)} beats ${pcChoice}!`);
    }
}

displayPlayerScore.textContent = `Player Score: ${playerScore}`;
displayPcScore.textContent = `Computer Score: ${pcScore}`;

const updatePlayerScore = () => {

    displayPlayerScore.textContent = `Player Score: ${playerScore}`;
}

const updatePcScore = () => {
    displayPcScore.textContent = `Computer Score: ${pcScore}`
}


const displayResult = (str) => {
    results.textContent = str;
}

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);


const displayWinner = () => {
    if (playerScore > pcScore) {
        winner.textContent = `YEAH! Humanity won this game!`
    }
    else {
        winner.textContent = `AAARGH! The computer defeated you.`
    }
}