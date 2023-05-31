function add(num1, num2) {
  return num1 + " + " + num2 + " = " + (num1 + num2);
}

function subtract(num1, num2) {
  return num1 + " - " + num2 + " = " + (num1 - num2);
}

function multiply(num1, num2) {
  return num1 + " * " + num2 + " = " + (num1 * num2);
}

function divide(num1, num2) {
  return num1 + " / " + num2 + " = " + (num1 / num2);
}

function operate(num1, num2, operator) {
  if (operator == "+") {
    add(num1, num2);
  } else if (operator == "-") {
    subtract (num1, num2) 
  } else if (operator == "*") {
    multiply(num1, num2);
  } else if (operator == "/") {
    divide(num1, num2);
  } else {
    return "wrong operator!";
  }
}

function display() {
  let newInput = "";
  let userInput;
  let num = 0;
  let userDisplay = document.querySelector(".displayHTML");

  for (let i = 0; i <= 9; i++) {
    userInput = document.querySelector(".number" + i);

    userInput.addEventListener("click", () => {
      let newUserInput = userInput.textContent;

      console.log(newUserInput);
      // userDisplay.textContent = userInput.textContent;
    });
  }
}


  // console.log(userInput.textContent);


  // input.textContent = "nice";


let num1;
let num2;
let operator;

display();
