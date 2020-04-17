function isUppercase(str) {
  const result = str.split("")
  .filter(el => "abcdefghijklmnopqtstuvwxyz".
  includes(el.toLowerCase()))
  .every(el => {
    return el.charCodeAt() >= 65 && el.charCodeAt() <= 90;
  });
  console.log(result);
  return result;
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true