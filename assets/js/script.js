const buttons = document.querySelectorAll("input");
const displayElem = document.getElementById("result");


let resultOp = 0;
let firstNum = 0;
let secNum = 0;
let operator = "";

// Adding Event Listener to number btn to display it
for (let i = 0; i < 10; i++) {
  buttons[i].addEventListener("click", display);
}

// Add event listener to = btn
buttons[10].addEventListener("click", calculate);

// Add event listener to C btn
buttons[11].addEventListener("click", clearDisplay)


// Adding event Listener to operator btn
for (let i = 12; i < 16; i++) {
  buttons[i].addEventListener("click", operatorFunc);
}



// console.log(buttons);
