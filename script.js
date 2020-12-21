const buttons = document.querySelectorAll('button');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
let PLAYERSCORE = 1;
let COMPUTERSCORE = 1; 
const RELOADBUTTON = document.querySelector('#playAgain');
document.getElementById('#result');

function computerPlay() {            
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]    
}

function playRound(playerSelection) {
    const computerSelection = computerPlay(); 
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            playerScore.textContent = PLAYERSCORE++;
            result.textContent = 'You win! Rock crushes Scissors!';
        } else if (computerSelection === 'Paper') {
            computerScore.textContent = ' ' + COMPUTERSCORE++;
            result.textContent = 'You lose! Paper covers Rock!';
        } else {
            result.textContent = 'Tie! Rock draws against Rock!';
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            playerScore.textContent = ' ' + PLAYERSCORE++;
            result.textContent = 'You win! Paper covers Rock!';
        } else if (computerSelection === 'Scissors') {
            computerScore.textContent = ' ' + COMPUTERSCORE++;
            result.textContent = 'You lose! Scissors cuts Paper!';
        } else {
            result.textContent = 'Tie! Paper draws against Paper!';
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            playerScore.textContent = ' ' + PLAYERSCORE++;
            result.textContent = 'You win! Scissors cuts Paper!';
        } else if (computerSelection === 'Rock') {
            computerScore.textContent = ' ' + COMPUTERSCORE++;
            result.textContent = 'You lose! Rock crushes Scissors!';
        } else {
            result.textContent = 'Tie! Scissors draws against Scissors!';
        }
    }
    gameOver();
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    })
});

function gameOver () {
    if (PLAYERSCORE === 6) {
        result.textContent = 'You win the game! Congratulations!';
        document.querySelectorAll('button.selection').forEach(elem => {
            elem.disabled = true;
        });
        
    } else if (COMPUTERSCORE === 6) {
        result.textContent = 'You lose the game! Boo-hoo!';
        document.querySelectorAll('button.selection').forEach(elem => {
            elem.disabled = true;
        });
        buttons.style.opacity = 1;
    }
};

function reloadGame () {
    RELOADBUTTON.addEventListener('click', () => 
        location.reload()
    )};

reloadGame();