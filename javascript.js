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

function operate(num1,operation, num2) {
  if (operation == "+") {
    num1 = Number(num1);
    num2 = Number(num2);
    return add(num1, num2); 
  } else if (operation == "-") {
    num1 = Number(num1);
    num2 = Number(num2);
    return subtract(num1, num2); 
  } else if (operation == "*" || operation == "x") {
    num1 = Number(num1);
    num2 = Number(num2);
    return multiply(num1, num2); 
  } else if (operation == "/") {
    num1 = Number(num1);
    num2 = Number(num2);
    return divide(num1, num2); 
  } else {
    return "operation is not supported";
  }
}

let equation = "";
let num1 = prompt("Enter a number: ");
let operation = prompt("Enter operation: ");
let num2 = prompt("Enter second number: ");
console.log(operate(num1, operation, num2));