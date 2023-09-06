// Calculate Average: Write a function that takes an array of numbers as input and returns the average (mean) of those numbers using the reduce method.


const numbers =[1, 2, 3, 4, 5]

function calculateAverage(array){
    const arr = array.reduce((acc, curvalue)=>{
        return   (acc+curvalue)
        
    })

    return  arr/array.length
}

console.log( calculateAverage(numbers));


