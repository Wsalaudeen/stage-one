export const COLORS = [
  "#ADD8E6",
  "#87CEEB",
  "#4169E1",
  "#1E90FF",
  "#00BFFF",
  "#0000CD",
  "#4682B4",
  "#6495ED",
  "#008080",
  "#B0E0E6",
  "#6A5ACD",
  "#00008B",
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
