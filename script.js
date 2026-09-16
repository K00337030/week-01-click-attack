let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");
const powerButton = document.getElementById("powerButton");

function addPoint() {
    score += 1;
    scoreDisplay.innerText = score;
    updateDisplay();
}
attackButton.addEventListener("click", addPoint);

function resetGame() {
    score = 0;
    scoreDisplay.innerText = score;
    updateDisplay();
}
resetButton.addEventListener("click", resetGame);

function addFivePoints() {
    score += 5;
    scoreDisplay.innerText = score;
    updateDisplay();
}
powerButton.addEventListener("click", addFivePoints);

function updateDisplay() {
    scoreDisplay.innerText = score;
    if (score >= 20) {
        title.innerText = "YOU WIN!";
    }
    else {
        title.innerText = "Click Attack";
    }
}
