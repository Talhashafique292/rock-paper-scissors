
// import inquirer from 'inquirer'; // For ES module syntax

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}
//=================================================================                

async function getHumanChoice() {
    const question = [{
        type: "list",
        name: 'choices',
        message: "Choose rock, paper, or scissors:",
        choices: ['rock', 'paper', 'scissors']
    }]
    // const answers = await inquirer.prompt(question);
    // return answers.choices;
}

//=============================================================
function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie"
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
    if (winner = 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

//========================================================================
function displayScore() {
    console.log(`\nScore`);
    console.log(`Humman Score:  ${humanScore}`);
    console.log(`Computer Score:  ${computerScore}`);

}

//==========================================================================
async function playRound() {
    const humanChoice = await getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`\nHuman choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    const winner = determineWinner(humanChoice, computerChoice)
    updateScore(winner);

    if (winner === 'tie') {
        console.log("It's a tie");
    } else if (winner === 'Human') {
        console.log("You win");
    } else {
        console.log("Computer wins");

    }
    displayScore()
}
//=========================================================================
// selecting button 
const rockButton = document.getElementById("btn")
rockButton.addEventListener("click", ()=>{
    alert ("Rock clicked!")
});


//=======================================================================

async function playGame() {
    // for (let i = 0; i < 5; i++) {
    //     console.log(`\nRound ${i + 1}`);
    //     await playRound();
    // }

    console.log('\nGame Over');
    displayScore()
}


playGame()
