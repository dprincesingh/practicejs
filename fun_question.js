// Write a JavaScript function that reverses a number.

function reverseNumber(num){
   let numString = num.toString().split("").reverse().join("")
   return Number(numString)
}

console.log(reverseNumber(23456));