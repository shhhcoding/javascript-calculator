let nonOperatorButtons = document.querySelectorAll(".non-operator");
let operatorButtons = document.querySelectorAll(".operator");
let screenBottom = document.querySelector("#screen-bottom");
let screenTop = document.querySelector("#screen-top");
let equalsButton = document.querySelector("#equals");
let resetButton = document.querySelector("#reset");
let gitHubButton = document.querySelector("#gitHub");
let jsButton = document.querySelector("#js");

screenBottom.innerHTML = "0";
let number1 = "";
let number2 = "";
let operator = "";
let isOperatorSelected = false;

function writeToScreen(text) {
  if (screenBottom.innerHTML.includes("=")) return;
  screenBottom.innerHTML === "0"
    ? (screenBottom.innerHTML = text)
    : (screenBottom.innerHTML += text);
  if (isOperatorSelected) {
    number2 += text;
  } else {
    number1 += text;
  }
}

function selectOperator(text) {
  if (number1 === "" || screenBottom.innerHTML.includes("=")) return;
  isOperatorSelected = true;
  operator = text;
  screenBottom.innerHTML = "";
  screenTop.innerHTML = number1 + " " + operator;
}

function calculate() {
  if (
    number1 === "" ||
    number2 === "" ||
    operator === "" ||
    screenBottom.innerHTML.includes("=")
  )
    return;
  screenTop.innerHTML = number1 + " " + operator + " " + number2;
  parseNumbers();
  let result = 0;
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "x":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    case "%":
      result = number1 % number2;
      break;
    case "C":
      reset();
      break;
    default:
      break;
  }

  screenBottom.innerHTML = "= " + result;
}

function parseNumbers() {
  number1.includes(".")
    ? (number1 = parseFloat(number1))
    : (number1 = parseInt(number1));

  number2.includes(".")
    ? (number2 = parseFloat(number2))
    : (number2 = parseInt(number2));
}

function reset() {
  number1 = "";
  number2 = "";
  operator = "";
  screenBottom.innerHTML = 0;
  screenTop.innerHTML = "";
  isOperatorSelected = false;
}

nonOperatorButtons.forEach((e) => {
  e.addEventListener("click", () => {
    writeToScreen(e.innerHTML);
  });
});

operatorButtons.forEach((e) => {
  e.addEventListener("click", () => {
    selectOperator(e.innerHTML);
  });
});

equalsButton.addEventListener("click", () => {
  calculate();
});

resetButton.addEventListener("click", () => {
  reset();
});

gitHubButton.addEventListener("click", () => {
  window.open("https://github.com/aghayeffemin", '_blank').focus();
});

jsButton.addEventListener("click", () => {
  window.open("https://www.javascript.com/", '_blank').focus();
});
