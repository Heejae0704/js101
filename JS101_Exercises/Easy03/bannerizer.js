function logInBox(str) {
  const count = str.length + 2;
  console.log(`+${"-".repeat(count)}+`);
  console.log(`|${" ".repeat(count)}|`);
  console.log(`| ${str} |`);
  console.log(`|${" ".repeat(count)}|`);
  console.log(`+${"-".repeat(count)}+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');