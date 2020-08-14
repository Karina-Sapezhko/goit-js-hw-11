const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
let timer;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomBackgroundBody = (colors) => {
  let maxNum = colors.length;
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, maxNum)];
};

btnStart.addEventListener("click", () => {
  timer = setInterval(randomBackgroundBody, 1000, colors);
  btnStart.disabled = true;
});
btnStop.addEventListener("click", () => {
  clearInterval(timer);
  btnStart.disabled = false;
});
