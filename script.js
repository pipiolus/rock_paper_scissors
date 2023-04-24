let playerScore = 0;
let pcScore = 0;

let weapons = document.querySelectorAll('.btn');


const getComputerChoice = () => {

    let choices = ['rock', 'paper', 'scissors'];

    let pcChoice = choices[Math.floor(Math.random() * choices.length)];

    return pcChoice;
}

const playGame = () => {
    let playerChoice;

    weapons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('rock')) {
                playerChoice = 'rock';
                console.log(playerChoice)
            } else if (button.classList.contains('paper')) {
                playerChoice = 'paper';
            } else {
                playerChoice = 'scissors';
            }
        });
    });
}