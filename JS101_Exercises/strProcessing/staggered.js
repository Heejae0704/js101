function staggeredCase(str) {
  const result = str
  .split("")
  .map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else return char.toLowerCase();
  }).join("");
  console.log(result);
  return result;
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 NuMbErS"

function staggeredCase2(str) {
  let idx = -1;
  const result = str
  .split("")
  .map((char) => {
    if (char.match(/[a-zA-Z]/)) idx++;
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else return char.toLowerCase();
  }).join("");
  return result;
}

console.log(staggeredCase2("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase2("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase2("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);