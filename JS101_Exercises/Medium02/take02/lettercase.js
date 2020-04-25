// input -> string
// output -> object

// loop through the string
// count the number of chars
// check if the string is upperCase alphabet, count the occurance
// check if the string is lowerCase alphabet, count the occurance
// check if neither of those, count the occurance

// percentage -> occurance / length * 100 -> toFixed(2) => make it a function


function letterPercentages(str) {
  console.log(_letterPercentages(str))
}

function percentage(num, total) {
  return ( num / total * 100 ).toFixed(2);
}

function matchingCharNum(str, regex) {
  let matchingArr = str.match(regex) || [];
  return matchingArr.length;
}

function _letterPercentages(str) {

  const length = str.split("").length;

  return {
    lowercase: percentage(matchingCharNum(str, /[a-z]/g), length),
    uppercase: percentage(matchingCharNum(str, /[A-Z]/g), length),
    neither: percentage(matchingCharNum(str, /[^a-z]/gi), length),
  }
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }