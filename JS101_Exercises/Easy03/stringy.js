function stringy(num) {
  let result = "";
  for (let idx = 1; idx <= num; idx++) {
    if (idx % 2 === 1) {
      result += "1";
    } else {
      result += "0";
    }
  }
  console.log(result);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"