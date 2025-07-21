const wrapper = document.getElementById('container-wrapper');

wrapper.addEventListener('mouseover', () => {
    wrapper.classList.toggle('hover');
});

wrapper.addEventListener('mouseout', () => {
    wrapper.classList.toggle('hover');
});



const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".buttons");
const computerDisplay = document.getElementById("computerDisplay");
const playerDisplay = document.getElementById("playerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const playerChoice = button.id; // Get the id of the clicked button
        playGame(playerChoice); // Call the game function with the player's choice
    });
});

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer chose: ${computerChoice}`);

    let result = "";
    if(playerChoice === computerChoice) {
        result = "It is  a tie!";
    }
    else{
        switch(playerChoice){
            case "rock":
                (computerChoice === "scissors") ? result = "You win!" : result = "You lose!";
                scoreUpdate(result);
                break;
            case "paper":
                (computerChoice === "rock") ? result = "You win!" : result = "You lose!";
                scoreUpdate(result);
                break;
            case "scissors":
                (computerChoice === "paper") ? result = "You win!" : result = "You lose!";
                scoreUpdate(result);
                break;
            default:
                result = "Invalid choice!";
        }
    }
    playerDisplay.textContent = `You chose: ${playerChoice}`;
    computerDisplay.textContent = `Computer chose: ${computerChoice}`;
    resultDisplay.textContent = result;
};

function scoreUpdate(result) {
    (result === "You win!") ? playerScoreDisplay.textContent = `Player Scores: ${++playerScore}` : computerScoreDisplay.textContent = `Computer Scores: ${++computerScore}`;
}