const array = [ 4 , 5 ,7 , 8 ,9 ]


  let array2 = array.map((value,index,array)=>{
    if(value%2===0){
        return value
    }else{
        return 0
    }
     
 })

 console.log(array2);