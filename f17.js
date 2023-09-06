
// Given a string, write a function that does the following:

// Splits the string into an array of words (words are separated by spaces).
// Uses map to capitalize the first letter of each word.
// Uses reduce to concatenate the capitalized words into a single sentence with spaces between them.


const sentence = "this is a simple example";


function capitalize (string){
    let arr = string.trim()

     arr  = arr.split(" ")



    arr = arr.map((value , index)=>{
        if(value.length>1 || index===0){
            return value[0].toUpperCase() + value.slice(1).toLowerCase()
        }else{
            return value
        }
    })

    return arr.join(" ")
 
}


