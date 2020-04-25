/* 
valid triangle
angle1 + angle2 + angle3 === 180
angle1 > 0 && angle2 > 0 && angle3 > 0

maxAngle = Math.max(angle1, angle2, angle3)

maxAngle === 90 -> right
maxAngle < 90 -> acute
amxangle > 90 -> obtuse

*/

function isValid(angle1, angle2, angle3) {
  if (angle1 + angle2 + angle3 !== 180) return false;
  if (angle1 <= 0 || angle2 <= 0 || angle3 <=0) return false;
  else return true;
}

function _triangle(angle1, angle2, angle3) {
  if (!isValid(angle1, angle2, angle3)) return 'invalid'
  const maxAngle = Math.max(angle1, angle2, angle3);
  if (maxAngle === 90) return 'right';
  if (maxAngle > 90) return 'obtuse';
  if (maxAngle < 90) return 'acute'; 
}

function triangle(angle1, angle2, angle3) {
  console.log(_triangle(angle1, angle2, angle3))
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"