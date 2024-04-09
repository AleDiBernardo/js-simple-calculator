/**
 * Displays and concatenate value of input
 * @date 4/8/2024 - 2:35:41 PM
 *
 */
function display() {
  const value = this.value;

  let numConcat = displayElem;

  if (isNaN(parseInt(value))) {
    const result = calculate(parseInt(numConcat.innerHTML), value);
    numConcat.innerHTML = "";
  } else if (!isNaN(parseInt(value))) {
    numConcat.innerHTML += parseInt(value);
    console.log("Concatenazione: " + numConcat.innerHTML);
  }
  console.log(result.innerHTML);
}

// function calculate(operand, operator) {
//   console.log("Numero: " + operand + " Operazione: " + operator);

//   console.log();
//   switch (operator) {
//     case "+":
//       console.log("somma");
//       resultOp += operand;
//       console.log("Somma: " + resultOp);
//       break;
//     case "-":
//       console.log("sottrazione");
//       resultOp -= operand;

//       break;
//     case "x":
//       console.log("moltiplicazione");
//       resultOp *= operand;

//       break;
//     case "÷":
//       console.log("divisione");
//       resultOp /= operand;

//       break;
//     case "c":
//       resultOp = 0;
//       break;
//   }

//   return resultOp;
// }

function clearDisplay() {
  displayElem.innerHTML = "";
}

function calculate() {
  secNum = parseInt(displayElem.innerHTML);
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
      displayElem.innerHTML = "" + (firstNum / secNum);
      break;

    default:
      break;
  }

  // console.log("calculate");
}

function operatorFunc() {
  operator = this.value;
  firstNum = parseInt(displayElem.innerHTML);
  displayElem.innerHTML = "";
  console.log("Operatore: " + operator + "\nPrimo Numero: " + firstNum);
}
