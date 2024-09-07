import { log } from 'console';
import inquirer from 'inquirer'; // For ES module syntax
import { type } from 'os';

// ===========================================================
// function getComputerChoice() {
//     let x = Math.random() * 10;
//     if (x < 4) {
//         console.log("rock");
//     } else if (x < 7) {
//         console.log("paper");
//     } else {
//         console.log("scissors");
//     }
// }

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}
//==================================================================
// async function getHumanChoic() {
//     let question = [
//         {
//             type: 'input',
//             name: "number",
//             message: "Please enter the number between 0 and 10:     ",
//             validate: (input) => {
//                 if (input >= 0 && input <= 10) {
//                     return true;
//                 } else {
//                     console.log("Please enter a valid number")
//                 }
//             }
//         }]

//     let answers = await inquirer.prompt(question);
//     let y = parseInt(answers.number, 10)
//     if (y < 4) {
//         console.log("rock");
//     } else if (y < 7) {
//         console.log("paper");
//     } else {
//         console.log("scissors");
//     }
// }

async function getHumanChoic(){
    const question = [{
        type: "list",
        name: 'choices',
        message: "Choose rock, paper, or scissors:",
        choices: ['rock', 'paper', 'scissors']
    }]
    const answers = await inquirer.prompt(question);
    return answers.choices;
}

function determineWinner(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        return "It's a tie"
    }
    if (
        (humanChoice == 'rock' && computerChoice=='scissors') ||
        (humanChoice == 'scissors' && computerChoice=='paper') ||
        (humanChoice == 'paper' && computerChoice=='rock') 
        
    ) {
        return "you win"
    } else {
        return "computer wins"
    }

}

getHumanChoic();
getComputerChoice()
determineWinner()

