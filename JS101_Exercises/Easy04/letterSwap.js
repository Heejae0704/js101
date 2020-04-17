// split the sentence to word
// for each word, find the first letter and the last letter
// create a new word with first latter and the last letter swapped
// include the new word to a new word array
// join the new word array with space and return

function _swap(str) {
  const wordArr = str.split(' ');
  const newWordArr = [];
  for (let idx = 0; idx < wordArr.length; idx++) {
    const word = wordArr[idx];
    if (word.length === 1) {
      newWordArr.push(word);
      continue;
    }
    const firstLetter = word[0];
    const lastLetter = word[word.length - 1];
    const newWord = lastLetter + word.slice(1, -1) + firstLetter;
    newWordArr.push(newWord);
  }
  return newWordArr.join(" ");
}

function swap(str) {
  console.log(_swap(str));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"