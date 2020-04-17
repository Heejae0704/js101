// if the number is positive, num % 1440 -> num and convert
// if the number is negative, num % 1440 and + 1440 -> num, then convert

// Math.floor(num / 60) -> hour
// num % 60 -> minutes

function timeOfDay(num) {
  if (num >= 0) {
    num %= 1440;
  } else {
    num = (num % 1440) + 1440;
  }
  const hour = Math.floor(num / 60);
  const min = num % 60;

  const hourStr = String(hour).padStart(2, '0');
  const minStr = String(min).padStart(2, '0');

  return `${hourStr}:${minStr}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");