const display = document.querySelector(".display");
const numberButton = document.querySelectorAll(".numberButton");
const functionButton = document.querySelectorAll(".functionButton");
const clear = document.querySelector(".clear");

let operatorLogic = true;
let operatorLogicTwo = true;
let memory = "";
let memoryTwo = "";
let operatorFunctionTwo = "";
let operatorFunction = "";

// Setting the "memory" and display for the numbers clicked. It will concat the strings as you click them
// and display the strings.
function setMemoryButton(e) {
  // If we have not clicked a function, we will fill the first memory and display it
  if (operatorLogic === true) {
    memory = memory + this.innerHTML;
    display.innerHTML = parseFloat(memory);
    // If we have clicked a function after two other functions have been clicked
    // we will run the math
  } else if (operatorLogic === false && operatorLogicTwo === false) {
    memoryTwo = memoryTwo + this.innerHTML;
    display.innerHTML = memoryTwo;
    // If we have clicked a function, we will fill the second memory and display it
  } else {
    memoryTwo = memoryTwo + this.innerHTML;
    display.innerHTML = memoryTwo;
  }
}
//Clears everything
function reset() {
  memory = "";
  memoryTwo = "";
  display.innerHTML = "0";
  operatorLogic = true;
  operatorLogicTwo = true;
  operatorFunctionTwo = "";
  operatorFunction = "";
}

function mathButton(e) {
  // we storing that a function has been clicked
  // if we have clicked a function before this, then store the clicked function and run the operate logic
  if (operatorLogic === false) {
    operatorFunctionTwo = this.innerHTML;
    operate();
    // if we have not clicked a function before this, we will simply store the clicked function
  } else {
    operatorLogic = false;
    operatorFunction = this.innerHTML;
  }
}

function operate() {
  console.log(
    memory,
    memoryTwo,
    operatorFunction,
    operatorFunctionTwo,
    operatorLogic,
    operatorLogicTwo
  );
  // if our second stored function is a '=' then we will run the first switch which will
  // do the math based on the first stored function, display the answer, then clear everything
  // but the displayed info
  if (operatorFunctionTwo === "=") {
    switch (operatorFunction) {
      case "+":
        memory = parseFloat(memory) + parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = parseFloat(memory);
        break;
      case "-":
        memory = parseFloat(memory) - parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = parseFloat(memory);
        break;
      case "*":
        memory = parseFloat(memory) * parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = parseFloat(memory);
        break;
      case "/":
        memory = parseFloat(memory) / parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = parseFloat(memory);
        break;
      case "=":
        memory = parseFloat(memory) / parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = parseFloat(memory);
        break;
    }
    display.innerHTML = parseFloat(memory);
    memoryTwo = 0;
    operatorLogic = true;
    operatorLogicTwo = true;
    operatorFunctionTwo = "";
    operatorFunction = "";
  } else if (operatorLogic === false && operatorLogicTwo === false) {
    console.log("we are in chaining territory");
    switch (operatorFunctionTwo) {
      case "+":
        memory = parseFloat(memory) + parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = memory;
        memoryTwo = "0";
        break;
      case "-":
        memory = parseFloat(memory) - parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = memory;
        memoryTwo = "0";
        break;
      case "*":
        memory = parseFloat(memory) * parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = memory;
        memoryTwo = "0";
        break;
      case "/":
        memory = parseFloat(memory) / parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = memory;
        memoryTwo = "0";
        break;
      case "=":
        memory = parseFloat(memory) / parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = parseFloat(memory);
        memoryTwo = "0";
        break;
    }

    // if the second stored function is not an "=", then we will do the math but keep
    // all the info stored
  } else {
    operatorLogicTwo = false;
    console.log("this is our first function", operatorLogicTwo);
    switch (operatorFunction) {
      case "+":
        memory = parseFloat(memory) + parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = parseFloat(memory);
        memoryTwo = "0";
        break;
      case "-":
        memory = parseFloat(memory) - parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = parseFloat(memory);
        memoryTwo = "0";
        break;
      case "*":
        memory = parseFloat(memory) * parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = parseFloat(memory);
        memoryTwo = "0";
        break;
      case "/":
        memory = parseFloat(memory) / parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = parseFloat(memory);
        memoryTwo = "0";
        break;
      case "=":
        memory = parseFloat(memory) / parseFloat(memoryTwo);
        console.log(memory, memoryTwo);
        display.innerHTML = parseFloat(memory);
        memoryTwo = "0";
        break;
    }
  }
}

numberButton.forEach((btn) => btn.addEventListener("click", setMemoryButton));
functionButton.forEach((btn) => btn.addEventListener("click", mathButton));
clear.addEventListener("click", reset);
