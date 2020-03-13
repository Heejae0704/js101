function printEvens(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) console.log(i);
  }
  return;
}

printEvens(99);
