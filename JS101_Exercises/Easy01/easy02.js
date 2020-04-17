function printOdds(num) {
  for (let idx = 1; idx <= num; idx++) {
    if (idx % 2 === 1) console.log(idx);
  }
}

printOdds(99);
