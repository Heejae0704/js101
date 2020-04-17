function removeVowels(arr) {
  const result = arr.map(el => el.split("").filter(char => !"aeiou".includes(char.toLowerCase())).join(""));
  console.log(result);
  return result;
}


removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
