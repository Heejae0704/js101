const readline = require('readline-sync');
const mes = require('./carloan_mes').en;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return String(number).trim() === "" ||
         number < 0 ||
         Number.isNaN(number);
}

function convertToMonth(apr, loanYear) {
  const monIntRate = apr / 12;
  const loanMonth = loanYear * 12;
  return [monIntRate, loanMonth];
}

function calcMonthlyPayment(loan, monIntRate, loanMonth) {
  return loan * (monIntRate / (1 - Math.pow((1 + monIntRate), (-loanMonth))));
}

prompt(mes.welcome);
let cont;

do {
  prompt(mes.loanAmount);
  let loan = Number(readline.question());
  while (invalidNumber(loan)) {
    prompt(mes.numError);
    loan = Number(readline.question());
  }

  prompt(mes.apr);
  let apr = Number(readline.question()) / 100;
  while (invalidNumber(apr)) {
    prompt(mes.numError);
    apr = Number(readline.question()) / 100;
  }

  prompt(mes.loanYear);
  let loanYear = Number(readline.question());
  while (invalidNumber(apr) || parseInt(loanYear, 10) !== loanYear) {
    prompt(mes.numError + " Loan Year should be an integer.");
    loanYear = Number(readline.question());
  }

  const [monIntRate, loanMonth] = convertToMonth(apr, loanYear);
  const monthlyPayment = calcMonthlyPayment(loan, monIntRate, loanMonth);

  prompt(mes.monthlyPayment);
  prompt(`$${monthlyPayment.toFixed(2)} for ${loanMonth} months`);

  prompt(mes.cont);
  cont = readline.question().toLowerCase();
  while (!(cont === "yes" || cont === "no" || cont === "y" || cont === "n")) {
    prompt(mes.contError);
    cont = readline.question().toLowerCase();
  }

} while (cont === "yes" || cont === "y");
