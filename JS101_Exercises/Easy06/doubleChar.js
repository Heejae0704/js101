function repeater(str) {
  const newStr = str.split("").map(el => el.repeat(2)).join("");
  console.log(newStr);
  return newStr;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

function doubleConsonants(str) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const newStr = str.split("").map(el => {
    if (consonants.includes(el.toLowerCase())) {
      return el.repeat(2);
    } else return el;
  }).join("");
  console.log(newStr);
  return newStr;
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""