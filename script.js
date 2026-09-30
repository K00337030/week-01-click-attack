let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");
const powerButton = document.getElementById("powerButton");
const playerNameInput = document.getElementById("playerName");
const attackValueInput = document.getElementById("attackValue");
const message = document.getElementById("message");
const attacks = [];
const historyList = document.getElementById("history");

// function addPoint() {
//     score += 1;
//     scoreDisplay.innerText = score;
//     updateDisplay();
// }
// attackButton.addEventListener("click", addPoint);

function performAttack() {

  const playerName = playerNameInput.value.trim();
  const attackValue = getAttackValue();

  if (playerName === "") {
    message.innerText = "Please enter your name.";
    return;
  }

  if (attackValue === null) {
    return;
  }

  const isCritical = attackValue === 10;
  const damage = calculateDamage(attackValue, isCritical);

  score += damage;
  message.innerText = `${playerName} caused ${damage} damage.`;

  score += damage;
  attacks.push(damage);
  console.log(attacks);

  updateDisplay();
}
attackButton.addEventListener("click", performAttack);


function resetGame() {
    score = 0;
    attacks.length = 0;
    playerNameInput.value = "";
    attackValueInput.value = "1";
    title.innerText = "Click Attack";
    message.innerText = "Enter your name and choose an attack value.";
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
    updateHistory();
    if (score >= 20) {
        title.innerText = "YOU WIN!";
    }
    else {
        title.innerText = "Click Attack";
    }
}

function getAttackValue() {
  const rawValue = attackValueInput.value.trim();

  if (rawValue === "") {
    message.innerText = "Please enter a valid number.";
    return null;
  }

  const attackValue = Number(rawValue);

  if (Number.isNaN(attackValue)) {
    message.innerText = "Please enter a valid number.";
    return null;
  }

  if (attackValue < 1 || attackValue > 10) {
    message.innerText = "Choose an attack value from 1 to 10.";
    return null;
  }

  return attackValue

}

function calculateDamage(baseDamage, isCritical) {
  if (isCritical) {
    return baseDamage*2;
  }
  return baseDamage
}

function updateHistory() {
  historyList.innerHTML = "";

  for (let index = 0; index < attacks.length; index++) {
    const listItem = document.createElement("li");
    listItem.innerText =
      `Attack ${index + 1}: ${attacks[index]} damage`;
    historyList.appendChild(listItem);
  }

}


