let numberOfGames = 5;
let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    const choiceOfHand = ["Rock", "Paper", "Scissors"];
    let compHand = choiceOfHand[Math.floor(Math.random() * 3)];
    return compHand.toLowerCase();
}

function getPlayerChoice() {
    let playerHand = null;
    while (playerHand === null){
        playerHand = prompt("Rock Paper or Scissors?");
    }
    return playerHand.toLowerCase(); 
}

function playGame(player, comp) {
    if (player === comp) {
        console.log("It's a Tie! Play again.");
        playerHand = null;
        playGame(getPlayerChoice(), getComputerChoice());
    }
    else if ((player === "rock" && comp === "scissors") ||
             (player === "paper" && comp === "rock") ||
             (player === "scissors" && comp === "paper")) {
        
        console.log("You Win! " + player + " beats " + comp);
        playerScore++;
    }
    else {
        console.log("You Lose! " + comp + " beats " + player);
        compScore++;
    }    
}

function game() {
    for (let i = 0; i < numberOfGames; i++ ) {
        playGame(getPlayerChoice(), getComputerChoice());
        playerHand = null;
    }    

    if (playerScore > compScore) {
        console.log("Player Wins!: Score: " + playerScore + " | " + compScore);
    }
    else {
        console.log("Computer Wins!: Score: " + compScore + " | " + playerScore);
    }
}
game();
