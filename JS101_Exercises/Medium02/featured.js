function isOdd(num) {
  return !!(num % 2 !== 0);
}

function multipleOf7(num) {
  return (num % 7 === 0);
}

function digitOnce(num) {
  return String(num)
  .split("")
  .every((el, idx, array) => idx === array.indexOf(el));
}

function featured(num) {
  while (true) {
    if (num === 9876543201) {
      console.log("There is no possible number that fulfills those requirements.");
      return "There is no possible number that fulfills those requirements.";
    }
    num += 1;
    if (isOdd(num) && multipleOf7(num) && digitOnce(num)) {
      console.log(num);
      return num;
    }
  }
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is