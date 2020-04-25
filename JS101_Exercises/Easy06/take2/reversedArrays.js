// take a half
// loop through the half and replace with n-i-1
// [1,2,3,4,5]
// half-point: idx 2 (Math.floor(5/2))
// [1,2,3,4]
// half-point: between idx 1, 2. Math.floor(4/2) not inclusive

// 1 (idx 0) with 5 (idx 4)
// 2 (idx 1) with 4 (idx 3)
// use destructuring

function reverse(arr) {
  for(let idx = 0; idx < Math.floor(arr.length / 2); idx++) {
    [arr[idx], arr[arr.length - idx - 1]] = [arr[arr.length - idx - 1], arr[idx]];
  }
  return arr;
}
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true