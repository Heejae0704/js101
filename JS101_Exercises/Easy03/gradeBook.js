function getGrade(score1, score2, score3) {
  const mean = (score1 + score2 + score3) / 3;
  if (mean <= 100 && mean >= 90) return 'A';
  if (mean < 90 && mean >= 80) return 'B';
  if (mean < 80 && mean >= 70) return 'C';
  if (mean < 70 && mean >= 60) return 'D';
  return 'F';
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));