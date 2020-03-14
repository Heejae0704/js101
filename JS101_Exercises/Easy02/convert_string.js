function stringToSignedInteger(str) {
  let num = 0;
  if (str[0] === "+" || str[0] === "-") {
    for (let idx = 1; idx < str.length; idx++) {
      num += (str[idx].charCodeAt() - 48)
      * Math.pow(10, (str.length - 1 - idx));
    }
    if (str[0] === "+") {
      return num;
    } else {
      return -num;
    }
  } else {
    for (let idx = 0; idx < str.length; idx++) {
      num += (str[idx].charCodeAt() - 48)
      * Math.pow(10, (str.length - 1 - idx));
    }
    return num;
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true