function multiplyList(arr1, arr2) {
  const newArr = [];
  arr1.forEach((el, idx) => {
    newArr.push(el * arr2[idx]);
    return null;
  });
  console.log(newArr);
  return newArr;
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]