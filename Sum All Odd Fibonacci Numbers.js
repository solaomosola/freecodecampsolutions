function sumFibs(num) {
  let sum = 0;
  let first=1,second=1;
  let count = 0;
  let fib = 0;
  while(sum<num){
    console.log(`first = ${first}`)
    console.log(`second = ${second}`)
    sum = first + second;
    fib += (first%2)===0?0:first ;
    fib += (second%2)===0?0:second
    //console.log(first,(first%2)===0?0:first,second,(second%2)===0?0:second, fib)
    first = second;
    second = sum;
   
  }
  console.log(sum)
   console.log(fib)
  
  return sum;
}

sumFibs(10);
