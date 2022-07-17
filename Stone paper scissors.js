let playerEl = document.getElementById("player-el");
let retryEl = document.getElementById("retry-el");
let startgameEl = document.getElementById("startgame-el");
let resetEl = document.getElementById("reset-el");
let rockEl = document.getElementById("rock-el");
let paperEl = document.getElementById("paper-el");
let scissorEl = document.getElementById("scissor-el");
let compEl = document.getElementById("computer-el");
let messageEl = document.getElementById("message-el");
let winEL = document.getElementById("win-el");
let playerchoice = "";
let message = messageEl.innerHTML;
rockEl.disabled = true;
paperEl.disabled = true;
scissorEl.disabled = true; 
let win = 0;

function WinFromLocalStorage(){
winEL.textContent = localStorage.getItem("wins");
winEL.textContent = "Wins : " + winEL.textContent;
}

function computer() {
    let computer = Math.floor(Math.random() * 3 + 1);
    if (computer == 1) {
        computerchoice = "Rock"
        compEl.textContent = "Computer : "+ computerchoice
    } else if (computer == 2) {
        computerchoice = "Paper"
        compEl.textContent = "Computer : "+ computerchoice
    } else {
        computerchoice = "Scissors";
        compEl.textContent = "Computer : "+ computerchoice
    }
}
 function player(){
    playerEl.textContent = "Player : "
    compEl.textContent = "Computer : "
    messageEl.textContent = "Make Your Move"
rockEl.addEventListener("click", function () {
    playerchoice = "Rock";
    playerEl.textContent = "Player :" + playerchoice;
    paperEl.disabled = true;
    scissorEl.disabled = true;
    computer();
    Condition();
    rockEl.disabled = true;
    startgameEl.disabled = true;

})
paperEl.addEventListener("click", function () {
    playerchoice = "Paper";
    playerEl.textContent = "Player :" + playerchoice;
    rockEl.disabled = true;
    scissorEl.disabled = true;
    computer();
    Condition();
    paperEl.disabled = true;
    startgameEl.disabled = true;
})

scissorEl.addEventListener("click", function () {
    playerchoice = "Scissors"
    playerEl.textContent = "Player :" + playerchoice;
    rockEl.disabled = true;
    paperEl.disabled = true;
    computer();
    Condition();
    scissorEl.disabled = true;
    startgameEl.disabled = true;
})
 }

    function Condition(){  
    if (playerchoice == "Rock" && computerchoice == "Rock") {
        messageEl.textContent = "Its a draw";
    } else if (playerchoice == "Rock" && computerchoice == "Paper") {
        messageEl.textContent = "Computer Wins"
    } else if (playerchoice == "Rock" && computerchoice == "Scissors") {
        messageEl.textContent = "Player Wins"
      
    } else if (playerchoice == "Paper" && computerchoice == "Rock") {
        messageEl.textContent = "Player Wins"
       
    } else if (playerchoice == "Paper" && computerchoice == "Scissors") {
        messageEl.textContent = "Computer Wins"
    }else if(playerchoice == "Paper" && computerchoice == "Paper"){
        messageEl.textContent = "Its a draw"
    }
    else if (playerchoice == "Scissors" && computerchoice == "Rock" ) {
        messageEl.textContent == "Computer Wins"
    }
     else if (playerchoice == "Scissors" && computerchoice == "Paper") {
        messageEl.textContent = "Player Wins"
    }
    else if(playerchoice == "Scissors" && computerchoice == "Scissors"){
        messageEl.textContent = "Its a draw";
    }else {
        messageEl.textContent = "Try Again"
    }


}
    
function startgame(){
    rockEl.disabled = false;
    paperEl.disabled = false;
    scissorEl.disabled = false;   

    player();
}
function retrygame(){ 
    startgameEl.disabled = false;
    player();
}

function resetgame(){
    location.reload();
    winEL.innerHTML = "WINS starts from 0";
}