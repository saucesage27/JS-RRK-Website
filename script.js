// script.js

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("HelloButton");
  const container = document.getElementById("container");
  const calculatorContainer = document.getElementById("calculator-container");

  button.addEventListener("click", function () {
    const body = document.body;
    body.style.animation = "";
    button.style.display = "none";
    container.style.display = "block";
    showCalculator();
  });

  function showCalculator() {
    calculatorContainer.style.display = "block";
  }
});

const numberButtons = document.querySelectorAll('input[type="button"]');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const display = document.getElementById('display');

class Calculator {
  constructor() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
    this.display = document.getElementById('display');
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        return;
    }

    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  updateDisplay() {
    display.value = this.currentOperand;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function displayNumber(number) {
    calculator.appendNumber(number);
    calculator.updateDisplay();
  }

  var num0 = document.getElementById('number0');
  num0.addEventListener("click", function () {
    displayNumber(0);
  });

  var num00 = document.getElementById('number00');
  num00.addEventListener("click", function () {
      displayNumber("00");
  });

  var num9 = document.getElementById('number9');
  num9.addEventListener("click", function () {
      displayNumber(9);
  });

  var num8 = document.getElementById('number8');
  num8.addEventListener("click", function () {
      displayNumber(8);
  });

  var num7 = document.getElementById('number7');
  num7.addEventListener("click", function () {
      displayNumber(7);
  });

  var num6 = document.getElementById('number6');
  num6.addEventListener("click", function () {
      displayNumber(6);
  });

  var num5 = document.getElementById('number5');
  num5.addEventListener("click", function () {
      displayNumber(5);
  });

  var num4 = document.getElementById('number4');
  num4.addEventListener("click", function () {
      displayNumber(4);
  });

  var num3 = document.getElementById('number3');
  num3.addEventListener("click", function () {
      displayNumber(3);
  });

  var num2 = document.getElementById('number2');
  num2.addEventListener("click", function () {
      displayNumber(2);
  });

  var num1 = document.getElementById('number1');
  num1.addEventListener("click", function () {
      displayNumber(1);
  });
});

  const calculator = new Calculator();
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.value);
      calculator.updateDisplay();
    });
  });

  equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
  });

  clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
  });

  
