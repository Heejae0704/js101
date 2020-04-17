function printEvens(num) {
  for (let idx = 1; idx <= num; idx++) {
    if (idx % 2 === 0) console.log(idx);
  }
}

printEvens(99);
