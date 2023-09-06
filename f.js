const fruits = ["apple", "banana", "cherry", "grape", "kiwi", "mango", "orange", "pear", "strawberry", "watermelon"];
const vegetables = ["carrot", "broccoli", "cucumber", "spinach", "tomato", "zucchini", "bell pepper", "lettuce", "eggplant", "celery"];


const fruitObject = {};

for(let fruit of fruits) fruitObject[fruit] = fruit

// console.log(fruitObject);
console.log(fruitObject.mango);