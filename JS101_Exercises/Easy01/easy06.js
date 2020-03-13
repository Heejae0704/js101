const rlSync = require("readline-sync");
const number = Number(
  rlSync.question("Please enter an integer greater than 0: ")
);
const operation = rlSync.question(
  'Enter "s" to compute the sum, or "p" to compute the product. '
);

let result;
if (operation === "s") {
  result = 0;
  for (let i = 1; i <= number; i++) {
    result += i;
  }
} else if (operation === "p") {
  result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
}

console.log(result);
