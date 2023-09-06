// Given an array of numbers, write a function that does the following:

// Uses map to double each number in the array.
// Uses filter to only keep the even numbers.
// Uses reduce to find the sum of the remaining even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function manupilation (array){
    let arr1 = array.map(value=>value+value)
    arr1 = arr1.filter(value=> value%2===0)
    arr1 = arr1.reduce((acc,curvalue)=> acc + curvalue,0)
    return arr1

}

console.log(manupilation(numbers));