function getComputerChoice(){
    let computerResult = Math.floor(Math.random()*3);

    if(computerResult === 0){
        console.log("rock");
    }
    else if(computerResult === 1){
        console.log("paper");
    }
    else{
        console.log("scissors");
    }
    
    return computerResult;
}

getComputerChoice();

function getHumanChoice(){
    let humanResult = prompt("Enter your choice :");

    console.log(humanResult);

    return humanResult;
}

getHumanChoice();

var humanScore=0;
var computerScore=0;

function playRound(humanChoice,computerChoice){

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);