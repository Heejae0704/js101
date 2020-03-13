function greetings(arr, obj) {
  const fullName = arr.join(" ");
  const fullTitle = ["a", "e", "i", "o", "u"].includes(
    obj.title[0].toLowerCase()
  )
    ? "an " + obj.title + " " + obj.occupation
    : "a " + obj.title + " " + obj.occupation;

  return `Hello, ${fullName}! Nice to have ${fullTitle} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Expert", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
