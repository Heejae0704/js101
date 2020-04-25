/*

odd number -> num % 2 === 1
multiple of 7 -> num % 7 === 0
digit occur just once -> num to string, break each char, for all char -> Array.indexOf(char) === current idx

*/

function _featured(num) {
  while(true) {
    if (num === 9876543201) return "There is no possible number that fulfills those requirements."
    num++;
    if (isOdd(num) && isMultiple7(num) && isDigitOnce(num)) break;
  }
  return num;
}

function isOdd(num) {
  return num % 2 === 1;
}

function isMultiple7(num) {
  return num % 7 === 0;
}

function isDigitOnce(num) {
  const arr = String(num).split("");
  return arr.every((char, idx) => arr.indexOf(char) === idx);
}

function featured(num) {
  console.log(_featured(num))
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   