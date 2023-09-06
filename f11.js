// Write a function that takes an array of numbers as input and returns a new array where each number is squared. For example, if the input is [1, 2, 3, 4, 5], the function should return [1, 4, 9, 16, 25].

const arr = [1, 2, 3, 4, 5]


function sqaure(array){
     const squaredarray = array.map(value=>{
        return value *value
     })
     return squaredarray
}

console.log(sqaure(arr));