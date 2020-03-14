const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return String(number).trimStart() === "" || Number.isNaN(number);
}

prompt("Welcome to Calculator!");

prompt("Please enter the first number:");
let num1 = Number(readline.question());

while (invalidNumber(num1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  num1 = Number(readline.question());
}

prompt("Please enter the second number:");
let num2 = Number(readline.question());

while (invalidNumber(num2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  num2 = Number(readline.question());
}

console.log(`${num1} ${num2}`);

prompt(
  "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"
);
let operator = readline.question();

while (!["1", "2", "3", "4"].includes(operator)) {
  prompt("Must choose 1, 2, 3 or 4");
  operator = readline.question();
}

let output = 0;
switch (operator) {
  case "1":
    prompt("Performing add operation");
    output = num1 + num2;
    break;
  case "2":
    prompt("Performing subtract operation");
    output = num1 - num2;
    break;
  case "3":
    prompt("Performing multiply operation");
    output = num1 * num2;
    break;
  case "4":
    prompt("Performing divide operation");
    output = num1 / num2;
    break;
  default:
    break;
}

prompt(`The result is: ${output}`);
