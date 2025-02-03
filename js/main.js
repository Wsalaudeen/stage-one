import { gameState, startNewGame } from "./gameLogic";
import { setupGameListeners, updateUI } from "./uiManager";

function startGame() {
  const initialState = startNewGame(gameState, true);
  updateUI(initialState);
  setupGameListeners(gameState, () => {
    const newState = startNewGame(gameState, true);
    updateUI(newState);
  });
}

document.addEventListener("DOMContentLoaded", startGame);
