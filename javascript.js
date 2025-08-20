function getHumanChoice(){
    let choice = prompt("Enter your choice :");
    let humanResult = choice.toLowerCase();
    return humanResult;
}

function getComputerChoice(){
    let random = Math.floor(Math.random()*3);

    if(random === 0){
        computerResult="rock";
    }
    else if(random === 1){
        computerResult="paper";
    }
    else{
        computerResult="scissors";
    }
    return computerResult;
}

var humanScore=0;
var computerScore=0;

function playGame(){
    function playRound(humanChoice,computerChoice){
        if(humanChoice==='rock'){
            if(computerChoice==='paper'){
                computerScore++;
            }
            else if(computerChoice==='scissors'){
                humanScore++;
            }
        }
        if(humanChoice==='paper'){
            if(computerChoice==='rock'){
                humanScore++;
            }
            else if(computerChoice==='scissors'){
                computerScore++;
            }
        }
        if(humanChoice==='scissors'){
            if(computerChoice==='rock'){
                computerScore++;
            }
            else if(computerChoice==='paper'){
                humanScore++;
            }
        }
    }

    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());

    if(humanScore>computerScore){
        console.log(`The winner of this game is you with a score of ${humanScore} !`);
    }
    else if(computerScore>humanScore){
        console.log(`The winner of this game is the computer with a score of ${computerScore} !`);
    }
    else{
        console.log("Oops ! It's a tie");
    }
}

playGame();
