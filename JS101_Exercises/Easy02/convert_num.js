function integerToString(num) {
  if (num === 0) {
    return "0";
  }
  const digits = Math.floor(Math.log10(num));
  let str = "";
  for (let idx = 0; idx <= digits; idx++) {
    str += String
            .fromCharCode(48 + Math.floor(num / Math.pow(10, digits - idx)));
    num %= Math.pow(10, digits - idx);
  }
  return str;
}

function signedIntegerToString(num) {
  const sign = Math.sign(num);
  if (sign === 1) {
    return "+" + integerToString(num);
  } else if (sign === -1) {
    return "-" + integerToString(Math.abs(num));
  } else return integerToString(0);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");