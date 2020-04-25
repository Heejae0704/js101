function reverseSentence(str) {
  console.log(str.split(" ").reverse().join(" "));
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

// if word.length >= 5 reverse it

function reverseWords(str) {
  const result = str.split(" ").map(word => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    } else return word;
  }).join(" ")
  console.log(result);
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"