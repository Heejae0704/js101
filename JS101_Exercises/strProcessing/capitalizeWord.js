function wordCap(str) {
  const strArr = str.split(" ");
  const newArr = strArr.map(word => {
    if (word[0].match(/[a-z]/)) {
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    } else return word[0] + word.substring(1).toLowerCase();
  });
  const newStr = newArr.join(" ");
  console.log(newStr);
  return newStr;
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'