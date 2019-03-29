function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  let thekey;
  arr = arr.sort((a,b)=>a-b);
  console.log(arr)
  for (let i=0;i<arr.length;i++){
   if(num<=arr[i]){
     thekey=i;
     break;
   }
   
  }
  if (thekey===undefined)thekey=arr.length;
  //console.log(arr);
  return thekey;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));
//console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
//console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
