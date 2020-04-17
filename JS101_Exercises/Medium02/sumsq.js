function sumSquare(num) {
  let total = 0;
  for (let idx = 1; idx <= num; idx++) {
    total += idx;
  }
  return total ** 2;
}

function sumOfSquares(num) {
  let total = 0;
  for (let idx = 1; idx <= num; idx++) {
    total += idx ** 2;
  }
  return total;
}

function sumSquareDifference(num) {
  console.log(sumSquare(num) - sumOfSquares(num));
  return sumSquare(num) - sumOfSquares(num);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150