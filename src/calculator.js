function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;


function subtract(a, b) {
  return a - b;
}

const subtract = (a, b) => a - b;

function multiply(a, b) {
  return a * b;
}

const multiply = (a, b) => a * b;

function divide(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return a / b;
}

const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return a / b;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
