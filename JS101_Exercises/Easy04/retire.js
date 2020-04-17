const readline = require('readline-sync');

function calcRetire() {
  console.log('What is your age? ');
  const currentAge = Number(readline.prompt());
  console.log('At what age you like to retire? ');
  const retireAge = Number(readline.prompt());

  const currentYear = new Date().getFullYear();
  const yearsToWork = retireAge - currentAge;
  const retireYear = currentYear + yearsToWork

  console.log(`It's ${currentYear}. You will retire in ${retireYear}.`)
  console.log(`You only have ${yearsToWork} years of work to go!`)
}

calcRetire();