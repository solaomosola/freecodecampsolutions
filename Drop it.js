/*
Intermediate Algorithm Scripting: Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function dropElements(arr, func) {
  // Drop them elements.
  let retArray = arr,index=0;
  
  while(retArray.length>0){
    if (!func(retArray[0]))
    {
      retArray.splice(0,1);
      }
    else
   { 
    break;
    }
  }
 
  return retArray;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([1, 2, 3, 4], function(n) {return n > 5;})
