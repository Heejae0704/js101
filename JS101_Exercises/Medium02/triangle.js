function _triangle(num1, num2, num3) {
  const arr = [num1, num2, num3].sort((a, b) => b - a);
  console.log(arr);
  if (arr.some(el => el <= 0) || arr[0] >= arr[1] + arr[2]) return "invalid";
  if (arr[0] === arr[1] && arr[0] === arr[2]) return "equilateral";
  if (arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2]) return "isosceles";
  return "scalene";
}

function triangle(num1, num2, num3) {
  console.log(_triangle(num1, num2, num3));
}


triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"