// game variables. 
let numberOfGames = 5;
let playerScore = 0;
let compScore = 0;
let playerHand = "";

let buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        alert(event.target.value);
    }
});

// get computer choice
function getComputerChoice() {
    const choiceOfHand = ["Rock", "Paper", "Scissors"];
    let compHand = choiceOfHand[Math.floor(Math.random() * 3)];
    return compHand.toLowerCase();
}
// get player choice
// function getPlayerChoice() {
//     let playerHand = rpsBtn.value;
//     alert(playerHand);
//     return playerHand.toLowerCase(); 
// }

function playGame(player, comp) {
    // if tie play the game again
    if (player === comp) {
        console.log("It's a Tie! Play again.");
        playGame(getPlayerChoice(), getComputerChoice());
    }
    else if ((player === "rock" && comp === "scissors") ||
             (player === "paper" && comp === "rock") ||
             (player === "scissors" && comp === "paper")) {

        console.log("You Win! " + player + " beats " + comp);
        // update player score 
        playerScore++;
    }
    else {
        console.log("You Lose! " + comp + " beats " + player);
        // update computer score
        compScore++;
    }    
}

// function game() {
//     // run the game based on numberOfGames
//     for (let i = 0; i < numberOfGames; i++ ) {
//         playGame(getPlayerChoice(), getComputerChoice());
//     }    
//     // prints the winner based on the game score
//     if (playerScore > compScore) {
//         console.log("Player Wins!: Score: " + playerScore + " | " + compScore);
//     }
//     else {
//         console.log("Computer Wins!: Score: " + compScore + " | " + playerScore);
//     }
// }
// // runs the game()

// game();