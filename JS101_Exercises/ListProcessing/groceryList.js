function buyFruit(arr) {
  const resultArr = [];
  arr.forEach(el => {
    for (let idx = 0; idx < el[1]; idx++) {
      resultArr.push(el[0]);
    }
  });
  return resultArr;
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]