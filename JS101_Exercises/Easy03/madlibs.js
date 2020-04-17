const readline = require('readline-sync');

const noun = readline.question("Enter a noun: ");
const verb = readline.question("Enter a verb: ");
const adjective = readline.question("Enter a adjective: ");
const adverb = readline.question("Enter an adverb: ");

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
