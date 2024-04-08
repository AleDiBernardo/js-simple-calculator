const buttons = document.querySelectorAll("input");

let resultOp = 0;

// Adding Event Listener to btn
for (let i = 0; i < 16; i++) {
  buttons[i].addEventListener("click", display);
}

// console.log(buttons);
