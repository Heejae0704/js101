const rlSync = require("readline-sync");

const length = Number(
  rlSync.question("Enter the length of the room in meters: \n")
);
const width = Number(
  rlSync.question("Enter the width of the room in meters: \n")
);

console.log(
  `The area of the room is ${(length * width).toFixed(2)} sqaure meters. (${(
    length *
    width *
    10.7639
  ).toFixed(2)} square feet).`
);
