function centerOf(str) {
  const length = str.length;
  if (length % 2 === 0) {
    // 'abcd' bc 4/2 = 2 and print idx 1, 2
    console.log(str[(length / 2) - 1] + str[length / 2]);
  } else {
    // 'abc' b 3/2 = 1.5 and print idx 1
    console.log(str[Math.ceil(length / 2) - 1]);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"