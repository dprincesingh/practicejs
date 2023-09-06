// Write a function that takes a string as input and returns a new string where each word in the original string is reversed, but the words themselves remain in the same order. For example, if the input is "Hello World," the function should return "olleH dlroW."

let string = "Hello World"

function rev(string){
    let reverse = []
    let arry = string.split(" ")
    for(let value of arry){
        
        reverse.push((value.split("").reverse().join("")))
    }
    return reverse.join(" ")
}
console.log(rev(string));
