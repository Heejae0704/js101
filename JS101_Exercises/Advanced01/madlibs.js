
const template1 = 'The adjective brown noun adverb verb the adjective yellow noun, who adverb verb his noun and looks around';
const template2 = 'The noun verb the noun\'s tail'

const text = {
  adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
  noun: ["fox", "dog", "head", "leg", "tail", "cat"],
  verb: ["jumps", "lifts", "bites", "licks", "pats"],
  adverb: ["easily", "lazily", "noisily", "excitedly"]
}

function madlibs(str) {
  let newStr = str;
  Object.keys(text).forEach(key => {
    const placeholder = new RegExp(`\\b${key}`);
    let newArr = str.split(" ");
    newStr = newStr.split(" ").map(word => {
      if (word.match(placeholder)) {
        return word.replace(placeholder, text[key][Math.floor(Math.random() * text[key].length)])
      } else return word;
      }).join(" ")
  })
  console.log(newStr)
}

madlibs(template1);
madlibs(template2);