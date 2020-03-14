function penultimate(sentence) {
  const senArr = sentence.split(" ");
  return senArr[senArr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true