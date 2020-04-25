function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  console.log(arr.slice(1).concat(arr[0]));
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

function rotateRightmostDigits(number, idx) {
  const arr = String(number).split("")
  const idxNum = arr.splice(arr.length - idx, 1);
  return Number(arr.concat(idxNum).join(""));
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

// 7 35291 -> 35291 7 -> rotateRightmostDigits(num, num-length-0) idx 0
// 3 52917 -> 52917 3 -> rotateRightmostDigits(num, num-length-1) idx 1

function maxRotation(num) {
  const numArr = String(num).slice("");
  let resultNum  = num;
  for (let idx = 0; idx < numArr.length; idx++) {
    resultNum = rotateRightmostDigits(resultNum, numArr.length - idx);
  }
  console.log(resultNum);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845