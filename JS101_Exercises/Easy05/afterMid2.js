function afterMidnight(str) {
  const hours = Number(str.split(":")[0]);
  const minutes = Number(str.split(":")[1]);
  return ((hours * 60) + minutes) % 1440;
}

function beforeMidnight(str) {
  return (1440 - afterMidnight(str)) % 1440;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);