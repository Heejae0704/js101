function letterCaseCount(str) {
  const obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  const alphabet = "abcdefghijklmnopqtstuvwxyz";
  str.split("").forEach(char => {
    if (alphabet.includes(char)) {
      obj.lowercase++;
    } else if (alphabet.toUpperCase().includes(char)) {
      obj.uppercase++;
    } else obj.neither++;
  });
  console.log(obj);
  return obj;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }