function runningTotal(arr) {
  console.log(_runningTotal(arr));
}

function _runningTotal(arr) {
  const newArr = [];
  let runningTotal = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    runningTotal += arr[idx];
    newArr.push(runningTotal);
  }
  return newArr;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []