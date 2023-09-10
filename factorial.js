// const num = 5;

function calculateFactorial(n) {
  let ans = 1;
  if (n === 1 || n === 0) {
    return ans;
  } else {
     ans = n*calculateFactorial(n-1)
     
    } return ans 
   
  }

console.log(calculateFactorial(6));