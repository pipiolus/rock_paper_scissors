let playerChoice;
let playerScore = 0;
let pcScore = 0;

let weapons = document.querySelectorAll('.btn');


const getComputerChoice = () => {

    let choices = ['rock', 'paper', 'scissors'];

    let pcChoice = choices[Math.floor(Math.random() * choices.length)];

    return pcChoice;
}

