const mesObj = require('./mes');

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return String(number).trimStart() === "" || Number.isNaN(number);
}

let mes = mesObj.en;

prompt("Select language (en/ko): ");
  let lan = readline.question().toLowerCase();
  while (!(lan === "en" || lan === "ko")) {
    prompt("Select correct language! (en/ko): ");
    lan = readline().toLowerCase();
  }

  if (lan === "en") {
    mes = mesObj.en;
  } else if (lan === "ko") {
    mes = mesObj.ko;
  }

prompt(mes.welcome);
let cont;

do {
  prompt(mes.firstNum);
  let num1 = Number(readline.question());
  while (invalidNumber(num1)) {
    prompt(mes.NumError);
    num1 = Number(readline.question());
  }

  prompt(mes.secondNum);
  let num2 = Number(readline.question());
  while (invalidNumber(num2)) {
    prompt(mes.NumError);
    num2 = Number(readline.question());
  }

  console.log(`${num1} ${num2}`);

  prompt(mes.operation);
  let operator = readline.question();
  while (!["1", "2", "3", "4"].includes(operator)) {
    prompt("Must choose 1, 2, 3 or 4");
    operator = readline.question();
  }

  let output = 0;
  switch (operator) {
    case "1":
      prompt(mes.add);
      output = num1 + num2;
      break;
    case "2":
      prompt(mes.subtract);
      output = num1 - num2;
      break;
    case "3":
      prompt(mes.multiply);
      output = num1 * num2;
      break;
    case "4":
      prompt(mes.divide);
      output = num1 / num2;
      break;
    default:
      break;
  }

  prompt(mes.result + `${output.toFixed(2)}`);
  prompt(mes.cont);
  cont = readline.question().toLowerCase();
  while (!(cont === "yes" || cont === "no" || cont === "y" || cont === "n")) {
    prompt(mes.contError);
    cont = readline.question().toLowerCase();
  }

} while (cont === "yes" || cont === "y");
