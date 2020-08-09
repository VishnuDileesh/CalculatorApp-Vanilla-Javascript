let outDisplay = document.querySelector("#outdisplay");

let displayOutput = "";

function btnclick(x) {
  displayOutput += x;
  outDisplay.textContent = displayOutput;
}

function btncancel() {
  displayOutput = "";
  outDisplay.textContent = "";
}

function btnequal() {
  let calResult = eval(displayOutput);
  displayOutput = calResult;
  outDisplay.textContent = calResult;
}
