// Write a function that takes an array of strings and returns a new array containing only the strings that have more than 5 characters.

let names = ["prince", "Abhishek", "chotu", "vijay", "dheeraj"];

function find5charname(array) {
  let nameof5char = [];
  for (let name of array) {
    if (name.length > 5) {
      nameof5char.push(name);
    }
  }
  return nameof5char;
}
console.log(find5charname(names));
