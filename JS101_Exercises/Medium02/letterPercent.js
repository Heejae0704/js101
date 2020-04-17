/* eslint-disable max-lines-per-function */
// if a char is alphabet
// if yes -> if upperCase: uppercase++, if lowerCase: lowercase++
// if no -> neither++

// object to collect numbers. Later return percentage

function letterPercentages(str) {
  const length = str.length;
  const obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };
  str.split("").forEach(char => {
    if (char.charCodeAt() >= "A".charCodeAt() && char.charCodeAt() <= "Z".charCodeAt()) {
      obj.uppercase++;
    } else if (char.charCodeAt() >= "a".charCodeAt() && char.charCodeAt() <= "z".charCodeAt()) {
      obj.lowercase++;
    } else {
      obj.neither++;
    }
  });
  return {
    lowercase: getPercentage(obj.lowercase, length),
    uppercase: getPercentage(obj.uppercase, length),
    neither: getPercentage(obj.neither, length)
  };
}

function getPercentage(num, total) {
  return ((num / total) * 100).toFixed(2);
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }