/**
 * Displays and concatenate value of input
 * @date 4/8/2024 - 2:35:41 PM
 *
 */
function display() {
  const value = this.value;
  const displayElem = document.getElementById("result");

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

function calculate(operand, operator) {
  console.log("Numero: " + operand + " Operazione: " + operator);

  console.log();
  switch (operator) {
    case "+":
      console.log("somma");
      resultOp += operand;
      console.log("Somma: " + resultOp);
      break;
    case "-":
      console.log("sottrazione");
      resultOp -= operand;

      break;
    case "x":
      console.log("moltiplicazione");
      resultOp *= operand;

      break;
    case "÷":
      console.log("divisione");
      resultOp /= operand;

      break;
    case "c":
      resultOp = 0;
      break;
  }

  return resultOp;
}
