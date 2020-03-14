// Write a program that finds all the words in the english language (anagrams)
// that can be formed by using the letters in a given string.

// input: a string
// output: array of possible words (anagrams)

// for 0 to string.length-1
// word = word + string[i]
// reduced stringArr = arr - string[i]
//   return [word, reducedStringArr]

function reculsiveWord(word, anagram = "", anagrams = []) {
  if (word.length === 0) {
    anagrams.push(anagram);
    return null;
  }

  for (let index = 0; index < word.length; index++) {
    anagram += word[index];
    reculsiveWord(word.slice(0, index) + word.slice(index + 1)
                  ,anagram, anagrams);
    anagram = anagram.slice(0, anagram.length - 1);
  }

  return [...new Set(anagrams)];
}

console.log(reculsiveWord("ABC"));