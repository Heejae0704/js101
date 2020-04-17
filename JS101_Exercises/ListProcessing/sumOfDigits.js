function sum(num) {
  return String(num).split("").reduce((accu, curr) => {
    const currentNumber = parseInt(curr, 10);
    return accu + currentNumber;
  }, 0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));