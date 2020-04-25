function greetings(arr, obj) {
  const nickname = arr.join(" ");
  return `Hello, ${nickname}! Nice to have a ${obj.title} ${obj.occupation} around.`
}

const readline = require('readline-sync');
const nickname = readline.question('Waht is your nickname? ');
if (nickname[nickname.length - 1] === '!') {
  console.log(`HELLO ${nickname.toUpperCase().slice(0, -1)}. WHY ARE WE SCREAMING?`)
} else {
  console.log(`Hello, ${nickname}.`)
}



