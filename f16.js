// Given an array of strings, write a function that does the following:

// Uses map to transform each string by adding " - Dev" to the end of it.
// Uses filter to only keep the transformed strings with a length of 10 characters.
// Uses reduce to concatenate the remaining strings into a single sentence with a space between each.
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];


function add_Dev(array){
     let arr1 =  array.map(name=>  `${name}-Dev`)
     arr1 = arr1.filter(name=> name.length >8  )
      arr1 = arr1.reduce((acc,curr)=>acc +" "+  curr,)
      return arr1
}

console.log(add_Dev(names));