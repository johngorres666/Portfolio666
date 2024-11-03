const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "Its a Tie NIGGA";

    if (playerChoice === computerChoice) {
        result = "It's a Draw!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN NIGGA!" : "YOU LOSE NIGGA!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN NIGGA!" : "YOU LOSE NIGGA!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN NIGGA!" : "YOU LOSE NIGGA!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch (result) {
        case "YOU WIN NIGGA!":
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE NIGGA!":
            resultDisplay.classList.add("redText");
            break;
        default:
            resultDisplay.classList.remove("greenText", "redText"); 
            break;
    }
}

