// Write a function that takes an object as input and returns an array of all the keys in the object. For example, if the input object is { name: "John", age: 30, city: "New York" }, the function should return ["name", "age", "city"].

const person = { name: "John", age: 30, city: "New York" };

function keyinarray(object) {
    let arrayOFkey = []
  for (const key in object) {
         arrayOFkey.push(key)
  }
  return arrayOFkey
}

console.log(keyinarray(person));
