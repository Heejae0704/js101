function cleanUp(str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let cleanedStr = '';
  for (let idx = 0; idx < str.length; idx++) {
    if (alpha.includes(str[idx].toLowerCase())) {
      cleanedStr += str[idx];
    } else if (cleanedStr[cleanedStr.length - 1] !== " ") {
      cleanedStr += " ";
    }
  }
  return cleanedStr;
}

console.log(cleanUp("---what's my +*& line?"));