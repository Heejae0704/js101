// our interest is only for '(' and ')' -> parse those from the string
// In all cases, number of opening '(' should be equal or more than the number of ')'
// at the end of parsing, the number of '(' and ')' should be equal

// input -> str
// output -> boolean

// data structure -> array, parsed from string?

function isBalanced(str) {
  const parenArr = str.split("").filter(char => {
    return (char === "(" || char === ")");
  })
  let numOpenParen = 0;
  let numClosedParen = 0;
  for (let idx = 0; idx < parenArr.length; idx++) {
    if (parenArr[idx] === "(") {
      numOpenParen++
    } else {
      numClosedParen++
    }
    if (numOpenParen < numClosedParen) return false;
  }
  if (numOpenParen !== numClosedParen) return false;
  return true;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

