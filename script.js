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

function playGame(humanSelection){
    let humanScore = 0;
    let computerScore = 0;
    //const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
        let x = playRound(humanSelection,computerSelection);
    if (x=="L"){
        computerScore++;
    }
    if(x=="W"){
        humanScore++;
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
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");


rockBtn.addEventListener("click",()=>{
    humanSelection = "R";
    console.log(playGame(humanSelection));
});
paperBtn.addEventListener("click",()=>{
    humanSelection = "P";
    console.log(playGame(humanSelection));
});
scissorBtn.addEventListener("click",()=>{
    humanSelection = "S";
    console.log(playGame(humanSelection));
});

const displayScore = document.createElement("div");

//console.log(playGame(humanSelection));