/* variáveis */
let num1 = 0;
let num2 = 0;
let operator = "";
let result = 0;
/* adicionar digito */
function addDigit(digit) {
  const display = document.getElementById("result");
  if (display.textContent === "0" && digit !== 0) {
    display.textContent = digit;
  } else {
    display.textContent += digit;
  }
}
/* adicionar operador */
function setOperator(op) {
  const display = document.getElementById("result");
  num1 = parseFloat(display.textContent);
  operator = op;
  display.textContent = "0";
}
/* calcular resultado */
function calculateResult() {
  const display = document.getElementById("result");
  num2 = parseFloat(display.textContent);
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      break;
  }
  display.textContent = result.toString();
  num1 = result;
}
/* apagar display */
function clearDisplay() {
  const display = document.getElementById("result");
  display.textContent = "0";
  num1 = 0;
  num2 = 0;
  operator = "";
  result = 0;
}
/* deletar digito */
function deleteDigit() {
  const display = document.getElementById("result");
  const length = display.textContent.length;
  if (length === 1) {
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.substring(0, length - 1);
  }
}