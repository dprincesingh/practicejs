// Write a function that takes an array of numbers as input, squares each number, and then returns a new array containing only the squared numbers that are greater than 10. For example, if the input is [2, 4, 6, 8, 10, 12, 14], the function should return [144, 196].

const array = [2, 4, 6, 8, 10, 12, 14]


function squaredarray (array){
    const arr1 = array.map(value=> value*value)
    const arr2 = arr1.filter(value=> value>10)
    return arr2


}

console.log(squaredarray(array));