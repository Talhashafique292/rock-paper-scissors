function getComputerChoice(){
    let x = Math.random() * 10;
    if (x < 4 ) {
        console.log("rock");
    } else if (x < 7){
        console.log("paper");
    } else {
        console.log("scissors");  
    }
}

getComputerChoice()