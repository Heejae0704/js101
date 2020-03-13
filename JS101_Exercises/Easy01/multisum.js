function multisum(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i === num) {
      total += i;
    }
  }
  console.log(total);
}

multisum(3); // 3
multisum(5); // 8
multisum(10); // 33
multisum(1000); // 234168
