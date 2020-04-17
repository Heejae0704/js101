// map number to its English word -> array of English word -> idx is the number
// sort by the English word of the number -> Sort callback


const WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function sortByWord(num1, num2) {
  if (WORD[num1] < WORD[num2]) {
    return -1;
  } else if (WORD[num2] < WORD[num1]) {
    return 1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(arr) {
  return arr.sort(sortByWord);
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));