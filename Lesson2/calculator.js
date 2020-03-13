// Ask the user for the first number.

// Ask the user for the second number.

// Ask the user for an operation to perform.

// Perform the operation on the two numbers.

// Print the result to the terminal.

const readline = require("readline-sync");

console.log("Welcome to Calculator!");

const num1 = Number(readline.question("Please enter the first number:\n"));
const num2 = Number(readline.question("Please enter the first number:\n"));
console.log(`${num1} ${num2}`);
const operator = readline.question(
  "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide\n"
);
let output = 0;
switch (operator) {
  case "1":
    console.log("Performing add operation");
    output = num1 + num2;
    break;
  case "2":
    console.log("Performing subtract operation");
    output = num1 - num2;
    break;
  case "3":
    console.log("Performing multiply operation");
    output = num1 * num2;
    break;
  case "4":
    console.log("Performing divide operation");
    output = num1 / num2;
    break;
  default:
    break;
}

console.log(`The result is: ${output}`);
