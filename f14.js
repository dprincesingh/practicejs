// Create an array of objects, where each object represents a person and has properties for "name" and "age." Then, write a function that takes this array of objects as input and returns an array containing the names of all the people who are older than 25 years old.


const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 28 }
];

 peopleof25above = (array) =>  array.filter(person=>person.age>25).map(person=> person.name)
   

console.log(peopleof25above(people));