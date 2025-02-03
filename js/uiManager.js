import { compareColors } from "./gameLogic";

export const elements = {
  colorBox: () => document.querySelector('[data-testid="colorBox"]'),
  colorOptions: () => document.querySelectorAll('[data-testid="colorOption"]'),
  scoreElement: () => document.getElementById("scoreValue"),
  gameStatus: () => document.querySelector('[data-testid="gameStatus"]'),
  newGameButton: () => document.querySelector('[data-testid="newGameButton"]'),
};

export function updateGameStatus(message) {
  const gameStatus = elements.gameStatus();
  gameStatus.textContent = message;
  gameStatus.classList.toggle("visible", message !== "");
}

export function updateUI(state) {
  const colorBox = elements.colorBox();
  const colorOptions = elements.colorOptions();
  const scoreElement = elements.scoreElement();

  colorBox.style.backgroundColor = state.targetColor;
  scoreElement.textContent = state.score;

  colorOptions.forEach((option, index) => {
    option.style.backgroundColor = state.options[index];
    option.classList.remove("shake");
  });

  updateGameStatus("");
}

export function handleGuess(element, state, onCorrectGuess) {
  const guessedColor = element.style.backgroundColor;
  const isCorrect = compareColors(guessedColor, state.targetColor);

  if (isCorrect) {
    state.score++;
    updateUI(state);
    updateGameStatus("Wow That's Correct!!! 🎉");

    setTimeout(() => {
      onCorrectGuess();
    }, 1500);
  } else {
    element.classList.add("shake");
    updateGameStatus("Wrong guess!!! Try again 😢");

    setTimeout(() => {
      element.classList.remove("shake");
    }, 500);
  }
}

export function setupGameListeners(state, onNewGame) {
  const colorOptions = elements.colorOptions();
  const newGameButton = elements.newGameButton();

  colorOptions.forEach((option) => {
    option.addEventListener("click", (e) =>
      handleGuess(e.target, state, () => {
        const newState = startNewGame(state, false);
        updateUI(newState);
      })
    );
  });

  newGameButton.addEventListener("click", () => onNewGame());
}
