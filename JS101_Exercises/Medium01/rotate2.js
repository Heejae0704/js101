function rotateRightmostDigits(num, idx) {
  // make num string and then arr to get length
  // location of the char -> str.length - idx
  // extract the char -> const char = splice(str.length - idx, 1)

  const arr = String(num).split("");
  const charLoc = arr.length - idx;
  const char = arr.splice(charLoc, 1);
  arr.push(char);
  const result = Number(arr.join(""));
  return result;
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

function maxRotation(num) {
  let rotatedNum = num;
  for (let idx = String(num).length; idx >= 1; idx--) {
    rotatedNum = rotateRightmostDigits(rotatedNum, idx);
  }
  console.log(rotatedNum);
  return rotatedNum;
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845