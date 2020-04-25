// check the numbers can be sides of a triangle
// all three numbers > 0
// two short numbers > longest num

// if not valid triangle -> return 'invalid'

// if it is a valid triangle,

// if all three sides are equal -> 'Equilateral'
// if only two sides are equal -> 'Isosceles'
// else -> 'Scalene'

function triangle(num1, num2, num3) {
  console.log(_triangle(num1, num2, num3))
}

function _triangle(num1, num2, num3) {
  if (num1 <= 0 || num2 <= 0 || num3 <= 0) return 'invalid';
  const arr = [num1, num2, num3].sort((a, b) => a - b);
  if (arr[0] + arr[1] <= arr[2]) return 'invalid';

  if (num1 === num2 && num2 === num3) return 'equilateral';
  if (num1 === num2 || num2 === num3 || num1 === num3) return 'isosceles'
  return 'scalene';
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"