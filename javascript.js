// game variables. 
let playerScore = 0;
let compScore = 0;


let buttons = document.querySelector(".buttons");
let results = document.querySelector(".result");
let score = document.querySelector(".score");

buttons.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        let playerHand = event.target.value.toLowerCase();
        playGame (playerHand, getComputerChoice());
    }
});

// get computer choice
function getComputerChoice() {
    const choiceOfHand = ["Rock", "Paper", "Scissors"];
    let compHand = choiceOfHand[Math.floor(Math.random() * 3)];
    return compHand.toLowerCase();
}

function playGame(player, comp) {
    // if tie play the game again
    if (player === comp) {
        results.textContent = "It's a Tie! Play again.";
    }
    else if ((player === "rock" && comp === "scissors") ||
             (player === "paper" && comp === "rock") ||
             (player === "scissors" && comp === "paper")) {

        updateScore("player", player, comp);
    }
    else {
        updateScore("computer", player, comp);
    }
}
// update player and computer score
function updateScore(winner, player, comp) {
    if (winner === "player") {
        playerScore++;
        // If player score is 5 print winner
        if (playerScore === 5) {
            score.textContent = "Player: " + playerScore + " " + "Computer: " + compScore;
            playerScore = 0;
            compScore =0;
            results.textContent = "Player Wins!";
        }
        else {
            results.textContent = "You Win! " + player + " beats " + comp;
            score.textContent = "Player: " + playerScore + " " + "Computer: " + compScore;
        }
    }
    else if (winner === "computer") { 

        compScore++;
        // If computer score is 5 print winner
        if (compScore === 5) {
            score.textContent = "Player: " + playerScore + " " + "Computer: " + compScore;
            playerScore = 0;
            compScore = 0;
            results.textContent = "Computer wins!"
        }
        else {
            results.textContent = "You Lose! " + comp + " beats " + player; 
            score.textContent = "Player: " + playerScore + " " + "Computer: " + compScore;  
        }
    }
}