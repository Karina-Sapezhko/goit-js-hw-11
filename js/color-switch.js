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
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
};

btnStart.addEventListener("click", () => {
  timer = setInterval(randomBackgroundBody, 1000, colors);
  btnStart.disabled = true;
});
btnStop.addEventListener("click", () => {
  clearInterval(timer);
  btnStart.disabled = false;
});
// -----------------------------------------------------------------------------------
// const switchRef = document.querySelector("#switch");
// const btnDisabled = document.querySelector('[data-action="start"]');
// -----------

// const randomIntegerFromInterval = (min, max) => {
// for (let i = 1, l = colors.length; i <= l; i++) {
//   if (randomIntegerFromInterval(i, l) === i) {
//     document.body.style.backgroundColor = `${colors[i]}`;
//   }
// }
// }
// -------------

// switchRef.addEventListener("click", (event) => {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }
//     let largeBtnStart = event.target.dataset.action === "start";
//     let largeBtnStop = event.target.dataset.action === "stop";

//     if (largeBtnStart) {
//     timer = setInterval(randomBackgroundBody, 1000, colors);
//     btnDisabled.disabled = true;
//     } else if (largeBtnStop) {
//     clearInterval(timer);
//     btnDisabled.disabled = false;
//   }
// });
// -------------
