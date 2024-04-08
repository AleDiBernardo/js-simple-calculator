/**
 * Displays and concatenate value of input
 * @date 4/8/2024 - 2:35:41 PM
 *
 */
function display() {
  const value = this.value;
  const result = document.getElementById("result");
    let op;
  if (!isNaN(parseInt(value))) {
    console.log("Sono il numero: " + value);
    op = result.innerHTML += value;
    console.log(op);
  } else {

    switch (value) {
      case "+":
        console.log("somma");
        break;
      case "-":
        console.log("sottrazione");
        break;
      case "÷":
        console.log("divisione");
        break;
      case "x":
        console.log("moltiplicazione");
        break;

      default:
        console.log("cancella");
        break;
    }
    result.innerHTML = "0";

  }
  
}


// function operation() {

// }
