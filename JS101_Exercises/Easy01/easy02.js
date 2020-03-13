function printOdds(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) console.log(i);
  }
  return;
}

printOdds(99);
