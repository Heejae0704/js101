// parse "(" and ")" by looping through the string
// at any given time number of "(" should be more than or equal to ")"
// at the end of the loop, num of "(" and ")" should be the same

function isBalanced(str) {
  let openParenNum = 0;
  let closeParenNum = 0;
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === "(") {
      openParenNum++;
    } else if (str[idx] === ")") {
      closeParenNum++;
    }
    if (openParenNum < closeParenNum) return false;
  }
  if (openParenNum === closeParenNum) return true;
  return false;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
