const memo = {};
function fibonacci(num) {
  if (num === 1 || num === 2) return 1;
  if (memo[num]) {
    return memo[num];
  } else {
    memo[num] = fibonacci(num - 1) + fibonacci (num - 2);
    return memo[num];
  }
}

function fibonacciProcedual(num) {
  if (num === 1 || num === 2) return 1;
  let total1 = 1;
  let total2 = 1;
  let total3;
  for (let idx = 3; idx <= num; idx++) {
    total3 = total1 + total2;
    total1 = total2;
    total2 = total3;
  }
  return total3;
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(75));
console.log(fibonacciProcedual(75));