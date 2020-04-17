// foeEach or map --> 0 to idx elements
// reduce --> sum of elements

function sumOfSums(arr) {
  return arr
  .map((_, idx, array) => array.slice(0, idx + 1))
  .map(el => el.reduce((accu, curr) => accu + curr, 0))
  .reduce((accu, curr) => accu + curr, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35