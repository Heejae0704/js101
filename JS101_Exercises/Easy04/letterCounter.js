// split the sentence to word
// count the length of each word
// result object: if key is not there, create key and assign 1
// if key is already there, increment the value

function _wordSizes(str) {
  const newStr = str.toLowerCase().split("").filter(el => "abcdefghijklmnopqrtstuvwxyz0123456789 ".includes(el));
  console.log(newStr.join(""));
  return _letterCounter(newStr.join(""));
}

function _letterCounter(str) {
  const wordArr = str.split(' ');
  const wordLengthArr = wordArr.map(el => el.length);
  const counterObj = {};
  for (let idx = 0; idx < wordArr.length; idx++) {
    let keys = Object.keys(counterObj);
    let length = String(wordLengthArr[idx]);
    if (length[idx] === "0") continue;
    if (keys.includes(length)) {
      counterObj[length]++;
    } else {
      counterObj[length] = 1;
    }
  }
  return counterObj;
}

function letterCounter(str) {
  console.log(_letterCounter(str));
}

function wordSizes(str) {
  console.log(_wordSizes(str));
}

letterCounter('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
letterCounter('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
letterCounter("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
letterCounter('');                                            // {}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}