function reverseNumber(num) {
  console.log(parseInt(String(num).split("").reverse().join(""), 10));
  return parseInt(String(num).split("").reverse().join(""), 10);
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1