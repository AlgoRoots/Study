const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const body = document.body;
const button = document.querySelector("button");

function setRandomColor() {
  const direction = Math.round(Math.random() * 360);
  const chosenColorsFirst = colors[Math.floor(Math.random() * colors.length)];
  const chosenColorsSecond = colors[Math.floor(Math.random() * colors.length)];
  if (chosenColorsFirst === chosenColorsSecond) {
    return handleClick();
  }

  body.style.background = `linear-gradient(${direction}deg,${chosenColorsFirst}, ${chosenColorsSecond})`;
}

button.addEventListener("click", setRandomColor);
