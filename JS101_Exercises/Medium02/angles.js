function _triangle(num1, num2, num3) {
  const arr = [num1, num2, num3].sort((a, b) => b - a);
  if (arr.reduce((accu, curr) => accu + curr, 0) !== 180 || arr.some(degree => degree <= 0)) return "invalid";
  if (arr[0] > 90) return "obtuse";
  if (arr[0] === 90) return "right";
  return "acute";
}

function triangle(num1, num2, num3) {
  console.log(_triangle(num1, num2, num3));
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"