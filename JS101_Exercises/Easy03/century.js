// 1901 -> 20th
// 2000 -> 20th
// 4 -> 1st
// 11101 -> 112th

function century(num) {
  console.log(century_(num));
};

function century_(num) {
  let numPart = Math.floor(num / 100) + 1;
  if (num % 100 === 0) {
    numPart -= 1;
  }

  return String(numPart) + handleTh(numPart % 100);
}

function handleTh(firstTwo) {
  if (firstTwo === 11 || firstTwo === 12 || firstTwo === 13) {
    return 'th'
  } else {
    const twoNumStr = String(firstTwo)
    const lastNumStr = twoNumStr[twoNumStr.length - 1];
    switch (lastNumStr) {
      case '1': return 'st';
      case '2': return 'nd';
      case '3': return 'rd';
      default: return 'th';
    }
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"