const rlSync = require("readline-sync");
const name = rlSync.question("What is your name? ");

if (name[name.length - 1] === "!") {
  console.log(
    `HELLO ${name
      .slice(0, name.length - 1)
      .toUpperCase()}. WHY ARE WE SCREAMING?`
  );
} else {
  console.log(`Hello ${name}.`);
}
