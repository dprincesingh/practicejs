// Write a function that takes an array of names as input and prints each name with a greeting message to the console. For example, if the input is ["Alice", "Bob", "Charlie"], the function should print:


const names = ["Alice", "Bob", "Charlie"]

function printname(arr){
    arr.forEach(name => {
        console.log("hello "  , name);
    });
}


printname(names)