// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'


let string = 'webmaster'

let inorder = string.split("").sort().join("")

console.log(inorder);