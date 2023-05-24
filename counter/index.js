let display = document.querySelector(".counterapp");
let incrementbuttons = document.getElementById("increment");
let decrementbuttons = document.getElementById("decrement");

incrementbuttons.addEventListener("click", increment);
decrementbuttons.addEventListener("click", decrement);

let value = 0;
function increment(e) {
  console.log("increment Counter");

  value += 1;

  display.textContent = value;
}

function decrement(e) {
  console.log("decrement Counter");

  value -= 1;

  display.textContent = value;
}
