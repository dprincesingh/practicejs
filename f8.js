// Write a function that takes an object as input and returns an array of all the values in the object. For example, if the input object is { name: "John", age: 30, city: "New York" }, the function should return ["John", 30, "New York"].


const person = { name: "John", age: 30, city: "New York" };

function valueinarray(object) {
    let arrayOFvalue = []
  for (const key in object) {
         
     arrayOFvalue.push(object[key]);
  }
  return arrayOFvalue
}

console.log(valueinarray(person));



