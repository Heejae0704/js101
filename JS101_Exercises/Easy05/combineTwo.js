function interleave (arr1, arr2) {
  const newArr = [];
  arr1.forEach((el, idx) => {
    newArr.push(el);
    newArr.push(arr2[idx]);
    return null;
  });
  console.log(newArr);
  return newArr;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]