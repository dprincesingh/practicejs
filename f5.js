// Write a function that takes an array of strings as input and returns a new array containing the lengths of those strings.

let names = ["prince", "Abhishek", "chotu", "vijay", "dheeraj"];

function lengthofstrings(array){
    let strlength = []
    for(let str of array){
        strlength.push(str.length)
    } return strlength
}

console.log(lengthofstrings(names));