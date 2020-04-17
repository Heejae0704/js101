// loop through 0 to length - 2
// compare idx with idx+1
// if idx is bigger than idx+1, swap
// if not, go to next idx

// for each loop, if swap happens at least once, do it again
// if no swap, exit the loop and return the array

function bubbleSort(arr) {
  let isSwap;
  while (true) {
    isSwap = false;
    for (let idx = 0; idx < arr.length - 1; idx++) {
      if (arr[idx] > arr[idx + 1]) {
        let temp = arr[idx];
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = temp;
        isSwap = true;
      }
    }
    if (isSwap === false) break;
  }
  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);
