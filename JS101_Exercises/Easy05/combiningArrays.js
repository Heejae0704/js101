// copy the first array
// compare each value in second array
// if the value is not there, push the value
// if there is, continue

function union(arr1, arr2) {
  const newArr = arr1.concat(arr2);
  console.log ([...new Set(newArr)]);
  return [...new Set(newArr)];
}

union([1, 3, 5], [3, 6, 9]);