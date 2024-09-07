import inquirer from 'inquirer'; // For ES module syntax


function getComputerChoice() {
    let x = Math.random() * 10;
    if (x < 4) {
        console.log("rock");
    } else if (x < 7) {
        console.log("paper");
    } else {
        console.log("scissors");
    }
}

async function getHumanChoic() {
    let question = [
        {
            type: 'input',
            name: "number",
            message: "Please enter the number between 0 and 10:     ",
            validate: (input) => {
                if (input >= 0 && input <= 10) {
                    return true;
                } else {
                    console.log("Please enter a valid number")
                }
            }
        }]

    let answers = await inquirer.prompt(question);
    let y = parseInt(answers.number, 10)
    if (y < 4) {
        console.log("rock");
    } else if (y < 7) {
        console.log("paper");
    } else {
        console.log("scissors");
    }
}

getHumanChoic()
// getComputerChoice()

