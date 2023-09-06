const array = [ 4 , 5 ,7 , 89 ,9 ]
 let array1 = []


array.forEach((value,index,array)=>{
   array1.push((value+1 , index+1))
})


console.log(array1);