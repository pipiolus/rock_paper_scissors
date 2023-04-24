let playerChoice;
let playerScore = 0;
let pcScore = 0;

let weapons = document.querySelectorAll('.btn');


const getComputerChoice = () => {

    let choices = ['rock', 'paper', 'scissors'];

    let pcChoice = choices[Math.floor(Math.random() * choices.length)];

    return pcChoice;
}



weapons.forEach(button => {
    button.addEventListener('click', () => {
        const image = document.querySelector('img');
        playerChoice = image.alt;
        
    })
})

const playRound = (playerChoice, pcChoice) => {
    return console.log(playerChoice);
}
