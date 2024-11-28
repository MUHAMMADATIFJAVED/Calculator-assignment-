let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay('0');
}

function calculate() {
  if (currentInput === '' || previousInput === '' || !operator) return;
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Error';
      break;
  }

  updateDisplay(result);
  currentInput = result.toString();
  previousInput = '';
  operator = null;
}

function updateDisplay(value) {
  const display = document.getElementById('display');
  display.value = value;
}
