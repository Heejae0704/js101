// Array.prototype.reduce to multiply all elements
// get length of array to get the number of entries in the array

function multiplicativeAverage(arr) {
  const multi = arr.reduce((accu, curr) => {
    return accu * curr;
  }, 1);
  console.log((multi / arr.length).toFixed(3));
  return (multi / arr.length).toFixed(3);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"