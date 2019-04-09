/*
Intermediate Algorithm Scripting: Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function addTogether() {
  let sumFunc=(a)=>(b)=>{
   if (typeof(a)!=="number") return undefined;
   if (typeof(b)!=="number") return undefined
   return a+b
    };
let sum;

if (arguments[0]!==undefined) {
 if (typeof(arguments[0])==="number"){
  sum = sumFunc(arguments[0]);
  
  if(arguments[1]!=undefined){ 
  if (typeof(arguments[1])==="number"){
    sum = sum(arguments[1]);
  }
  else
  sum=undefined
  }
}else sum=undefined;
}
  return sum;
}

console.log(addTogether(2,3));
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt")===undefined)
console.log(addTogether(2, "3")===undefined)
console.log(addTogether(2)([3])===undefined)
