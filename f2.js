// Given an array of numbers, write a function to find the sum of all the even numbers in the array.


const  numbers = [1,2,3,4,5]

function addArraynumber(arr){
    let sum = 0 
    for (let num of arr) {
        sum+=num
    } 
    return sum
}

console.log(addArraynumber(numbers));