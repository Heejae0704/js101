function sequence(num) {
  const arr = [];
  for (let idx = 1; idx <= num; idx++) {
    arr.push(idx);
  }
  return arr;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));