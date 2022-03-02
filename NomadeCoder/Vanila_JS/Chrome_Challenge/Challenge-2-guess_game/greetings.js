const rangeForm = document.querySelector(".range_form");
const numRangeInput = document.querySelector(".range_form input");

const guessForm = document.querySelector("#guess_form");
const numGuessInput = document.querySelector(".guess_number");
const numGuessBtn = document.querySelector(".guess_number");

const result = document.querySelector(".result");
const resultSpan = result.querySelector("span");

const MINIMUM_VALUE = 0;

console.log(numRangeInput);

function onSubmitRange(event) {
  event.preventDefault();
  const rangeNumber = parseInt(numRangeInput.value);
  console.log(rangeNumber);
}

function onSubmitGuessNum(event) {
  const maxValue = parseInt(numRangeInput.value);
  const guessValue = parseInt(numGuessInput.value, 10);
  event.preventDefault();

  // if (
  //   numRangeInput.value === "" &&
  //   numGuessInput.value === "" &&
  //   guessValue > maxValue
  // ) {
  //   alert("Please set the range of numbers first.");
  //   return;
  // }
  if (numRangeInput.value === "") {
    alert("Please set the range of numbers first.");
    return;
  } else if (guessValue > maxValue) {
    alert("Please set it less than the maximum number.");
    return;
  }

  let randomNum = Math.ceil(
    Math.random() * (maxValue - MINIMUM_VALUE) + MINIMUM_VALUE
  );

  resultSpan.innerHTML = `You chose: ${guessValue}, the machine chose: ${randomNum}<br/>
  <strong> ${maxValue === randomNum ? "You won!" : "You lost!"} </strong>`;
}

rangeForm.addEventListener("submit", onSubmitRange);
guessForm.addEventListener("submit", onSubmitGuessNum);
