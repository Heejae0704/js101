function swapName(str) {
  const strArr = str.split(" ");
  const [firstName, lastName] = [strArr[0], strArr[1]];
  console.log(lastName + ", " + firstName);
  return null;
}

swapName('Joe Roberts');    // "Roberts, Joe"