function twice(num) {
  const strNum = String(num);
  if (strNum.length % 2 === 0 &&
    strNum.substring(0, (strNum.length / 2)) ===
    strNum.substring((strNum.length / 2))) {
    return num;
  } else return num * 2;
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));