//JS
function getComputerChoice(){
    let x = Math.random();

    if(x>=.33 && x<.66){
        return "P";
    }
    if(x> .33){
        return "R";
    }
    else{
        return "S";
    }

}

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissor? (R,P,S): ");
    choice = choice.toUpperCase();
    return choice
}

function playRound(humanChoice,computerChoice){
    if(computerChoice === humanChoice){
        return "D"
    }
    if(computerChoice === "P" && humanChoice === "R"){
        return "L"
    }
    if(computerChoice === "S" && humanChoice === "P") {
        return "L"
    }
    if(computerChoice === "R" && humanChoice === "S") {
        return "L"
    }
    else {
        console.log(humanChoice+computerChoice);
        return "W"
    }

}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let x = playRound(humanSelection,computerSelection);
        if (x=="L"){
            computerScore++;
        }
        if(x=="W"){
            humanScore++;
        }
    }
    if(humanScore==computerScore){
        return "Draw"
    }
    if(humanScore>computerScore){
        return "You won!"
    }
    else{
        return "You lose!"
    }
}


console.log(playGame());