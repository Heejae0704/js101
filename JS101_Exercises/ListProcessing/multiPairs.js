function multiplyAllPairs(arr1, arr2) {
  const newArr = [];
  arr1.forEach(elArr1 => {
    arr2.forEach(elArr2 => {
      newArr.push(elArr1 * elArr2);
    });
  });
  return newArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));