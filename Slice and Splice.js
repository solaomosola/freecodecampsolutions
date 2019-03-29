function frankenSplice(arr1, arr2, n) {
 let return_array=[];
 return_array = arr2.slice(0,arr2.length);
 
 return_array.splice(n,0,...arr1);
 console.log(return_array.length)
  // It's alive. It's alive!
  return return_array; 
} 

frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2], ["a", "b"], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
frankenSplice([1, 2, 3], [4, 5], 1);
frankenSplice([1, 2, 3], [4, 5], 1) //should return [4, 1, 2, 3, 5]. 
