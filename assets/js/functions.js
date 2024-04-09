/**
 * Displays and concatenate value of input
 * @date 4/8/2024 - 2:35:41 PM
 *
 */
function display() {
  const value = this.value;

  if (isNaN(parseInt(value))) {
    const result = calculate(parseInt(displayElem.innerHTML), value);
    displayElem.innerHTML = "";
  } else if (!isNaN(parseInt(value))) {
    displayElem.innerHTML += parseInt(value);
    console.log("Concatenazione: " + displayElem.innerHTML);
  }
  console.log(result.innerHTML);
}

/**
 * Clear the display
 * @date 4/9/2024 - 11:00:58 AM
 */
function clearDisplay() {
  displayElem.innerHTML = "";
}

/**
 * Saves the second number and does the calculations
 * @date 4/9/2024 - 10:59:55 AM
 */
function calculate() {
  let secNum = parseInt(displayElem.innerHTML);
  console.log("Secondo Numero: " + secNum);
  switch (operator) {
    case "+":
      displayElem.innerHTML = "" + (firstNum + secNum);
      break;
    case "-":
      displayElem.innerHTML = "" + (firstNum - secNum);
      break;
    case "x":
      displayElem.innerHTML = "" + (firstNum * secNum);
      break;
    case "÷":
      if (secNum === 0) {
        displayElem.innerHTML = "Errore";
      } else {
        displayElem.innerHTML = "" + (firstNum / secNum);
      }
      break;

    default:
      break;
  }
}

/**
 * Save the operator and first num
 * @date 4/9/2024 - 10:59:29 AM
 */
function operatorFunc() {
  operator = this.value;
  firstNum = parseInt(displayElem.innerHTML);
  clearDisplay();
  console.log("Operatore: " + operator + "\nPrimo Numero: " + firstNum);
}
