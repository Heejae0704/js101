function crunch(str) {
  let newStr = "";
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx + 1] && str[idx] === str[idx + 1]) continue;
    newStr += str[idx];
  }
  console.log(newStr);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');