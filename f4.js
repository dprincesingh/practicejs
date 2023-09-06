// Write a function that takes an array of numbers as input and returns the largest number in the array.
const numbers = [44, 687, 89, 34, 65];


function largestnumber(array){
    largest = array[0]
    for (let num of array) {
        if(num>largest){
            largest= num
        }
    }
    return largest
}
console.log(largestnumber(numbers));