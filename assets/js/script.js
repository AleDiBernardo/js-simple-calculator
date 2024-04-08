const buttons = document.querySelectorAll("input");


// Adding Event Listener to num btn
for (let i = 0; i < 10; i++) {
    buttons[i].addEventListener("click", display);
}

// Adding Event Listener to fx btn
for (let i = 10; i < 16; i++) {
    buttons[i].addEventListener("click", display);
}






console.log(buttons);
