const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const display = document.querySelector(".display");
const numberButton = document.querySelectorAll(".numberButton");
const functionButton = document.querySelectorAll(".functionButton");
const clear = document.querySelector(".clear");

let operatorLogic = true;
let memory = 0;
let memoryTwo = 0;
let memoryThree = 0;
let operatorFunction = "";

function updateDisplay(e) {
  display.innerHTML = this.innerHTML;
}
function setMemoryButton(e) {
  if (operatorLogic === true) {
    memory = parseInt(this.innerHTML);
  } else {
    memoryTwo = parseInt(this.innerHTML);
    operate();
  }
}

function reset() {
  memory = 0;
  memoryTwo = 0;
  display.innerHTML = memory;
  operatorLogic = true;
}
function mathButton(e) {
  operatorLogic = false;
  operatorFunction = this.innerHTML;
}

function operate() {
  switch (operatorFunction) {
    case "+":
      memory = memory + memoryTwo;
      console.log(memory, memoryTwo);
      display.innerHTML = memory;
      break;
    case "-":
      memory = memory - memoryTwo;
      console.log(memory, memoryTwo);
      display.innerHTML = memory;
      break;
    case "*":
      memory = memory * memoryTwo;
      console.log(memory, memoryTwo);
      display.innerHTML = memory;
      break;
    case "/":
      memory = memory / memoryTwo;
      console.log(memory, memoryTwo);
      display.innerHTML = memory;
      break;
    case "%":
      memory = memory % memoryTwo;
      console.log(memory, memoryTwo);
      display.innerHTML = memory;
      break;
  }
}

numberButton.forEach((btn) => btn.addEventListener("click", updateDisplay));
numberButton.forEach((btn) => btn.addEventListener("click", setMemoryButton));
functionButton.forEach((btn) => btn.addEventListener("click", mathButton));
clear.addEventListener("click", reset);
