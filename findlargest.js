const arr = [5, 1, 3, 7, 9, 10, 12, 11];

// function largest(arr){
// let sorted = arr.sort((a,b)=>a-b)

// return (sorted[sorted.length-1]);

// }

function larg(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
}
return largest;
}

console.log(larg(arr));
