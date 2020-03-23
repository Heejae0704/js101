function findFibonacciIndexByLength(num) {
  let f1 = 1;
  let f2 = 1;
  let count = 2;
  while (String(f2).length < num) {
    let temp = f2;
    f2 = f1 + f2;
    f1 = temp;
    count++;
  }
  return count;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74