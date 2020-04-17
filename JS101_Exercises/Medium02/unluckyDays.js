function fridayThe13ths(year) {
  let count = 0;
  for (let month = 1; month <= 12; month++) {
    const dayString = String(year) + "-" + String(month) + "-13";
    if (new Date(dayString).getDay() === 5) count++;
  }
  console.log(count);
  return count;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

