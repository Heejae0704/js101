function asciiValue(str) {
  let total = 0;
  for (let idx = 0; idx < str.length; idx++) {
    total += str[idx].charCodeAt();
  }
  console.log(total);
}

asciiValue("Four score"); // 984
asciiValue("Launch School"); // 1251
asciiValue("a"); // 97
asciiValue(""); // 0
