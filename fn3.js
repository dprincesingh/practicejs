// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'


let string = 'Web Development Tutorial';

let arr = string.split(" ");


let longest = "";




for (let i = 0; i < arr.length; i++) {
  
  if (arr[i].length > longest.length) {
    longest = arr[i];
  }
}

console.log(`The longest string is: ${longest}`);


