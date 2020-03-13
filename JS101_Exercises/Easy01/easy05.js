const rlSync = require("readline-sync");
const bill = Number(rlSync.question("What is the bill? "));
const tipPer = Number(rlSync.question("What is the tip percentage? "));

const tip = (bill * tipPer) / 100;
const total = tip + bill;

console.log("\nThe tip is $" + tip.toFixed(2));
console.log("The total is $" + total.toFixed(2));
