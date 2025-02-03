export const COLORS = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
  "#800080",
  "#008000",
  "#FFC0CB",
  "#A52A2A",
  "#808080",
];

export const gameState = {
  score: 0,
  targetColor: " ",
  options: [],
};

export function getRandomColors(colors) {
  return [...colors].sort(() => 0.5 - Math.random()).slice(0, 6);
}

export function compareColors(color1, color2) {
  const element = document.createElement("article");
  element.style.backgroundColor = color1;
  document.body.appendChild(element);
  const computed1 = window.getComputedStyle(element).backgroundColor;
  document.body.removeChild(element);

  element.style.backgroundColor = color2;
  document.body.appendChild(element);
  const computed2 = window.getComputedStyle(element).backgroundColor;
  document.body.removeChild(element);

  return computed1 === computed2;
}

export function startNewGame(state, resetScore = true) {
  if (resetScore) {
    state.score = 0;
  }

  state.options = getRandomColors(COLORS);
  state.targetColor =
    state.options[Math.floor(Math.random() * state.options.length)];

  return state;
}
