let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//=================================================================

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    }
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "human";
    }
    return "computer";
}

//=========================================================================
function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

//========================================================================
function displayScore() {
    const scoreDiv = document.getElementById('score-display');
    scoreDiv.innerHTML = `
        Human Score: ${humanScore}<br>
        Computer Score: ${computerScore}
    `;
}

//==========================================================================
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    console.log(`\nHuman choice: ${playerChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    const winner = determineWinner(playerChoice, computerChoice);
    updateScore(winner);

    if (winner === 'tie') {
        console.log("It's a tie");
    } else if (winner === 'human') {
        console.log("You win");
    } else {
        console.log("Computer wins");
    }

    displayScore();

    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

//=========================================================================
// Selecting buttons
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

rockButton.addEventListener("click", () => playRound('rock'));
paperButton.addEventListener("click", () => playRound('paper'));
scissorsButton.addEventListener("click", () => playRound('scissors'));

//=======================================================================

function declareWinner() {
    const winnerDiv = document.getElementById('winner-display');
    if (humanScore > computerScore) {
        winnerDiv.textContent = "You won the game!";
    } else if (humanScore < computerScore) {
        winnerDiv.textContent = "Computer won the game!";
    } else {
        winnerDiv.textContent = "It's a tie!";
    }
}

// Initialize the game
const scoreDiv = document.getElementById('score-display');
const winnerDiv = document.getElementById('winner-display');
scoreDiv.innerHTML = `
    Human Score: ${humanScore}<br>
    Computer Score: ${computerScore}
`;