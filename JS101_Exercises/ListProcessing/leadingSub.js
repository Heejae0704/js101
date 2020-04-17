function substringsAtStart(str) {
  return str.split("").map((_, idx) => {
    return str.substring(0, idx + 1);
  });
}

// console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
// console.log(substringsAtStart('a'));        // ["a"]
// console.log(substringsAtStart('xyzzy'));

function substrings(str) {
  let result = [];
  str.split("").forEach((_, idx) => {
    result = result.concat(substringsAtStart(str.slice(idx)));
  });
  return result;
}


// console.log(substrings('abcde'));

function palindromes(str) {
  const allSubArr = substrings(str);
  return allSubArr.filter(el => {
    return el.length !== 1 && el === el.split("").reverse().join("");
  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]