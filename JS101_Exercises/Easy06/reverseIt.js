function reverseSentence(str) {
  console.log(str.split(" ").reverse().join(" "));
  return str.split(" ").reverse().join(" ");
}


reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

function reverseWords(str) {
  console.log(str.split(" ").map(el => {
    if (el.length < 5) return el;
    return el.split("").reverse().join("");
  }).join(" "));
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"