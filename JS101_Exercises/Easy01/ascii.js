function asciiValue(str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    total += str[i].charCodeAt();
  }
  console.log(total);
}

asciiValue("Four score"); // 984
asciiValue("Launch School"); // 1251
asciiValue("a"); // 97
asciiValue(""); // 0
