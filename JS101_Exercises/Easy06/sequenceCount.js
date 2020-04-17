function sequence(count, startNum) {
  if (count === 0) return [];
  let idx = 1;
  const arr = [];
  while (idx <= count) {
    arr.push(startNum * idx);
    idx++;
  }
  console.log(arr);
  return arr;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []