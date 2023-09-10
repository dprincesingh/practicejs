// function findFibonacci(n) {
//   let fib = 0;
//   if (n === 0) {
//     return fib;
//   } else if (n === 1) {
//     return (fib = 1);
//   } else {
//       let prev = 0;
//       let current = 1;
//     for (let i = 2; i <= n; i++) {

//       fib = prev + current;
//       prev = current;
//       current = fib;
//     }
//     return fib;
//   }
// }

// console.log(findFibonacci(10));

function fib(n) {
  if (n === 0) {
    return 0 
  } else if (n === 1) {
    return 1
  } else {
    return fib(n-1)+fib(n-2)
  }
}
console.log(fib(10));
