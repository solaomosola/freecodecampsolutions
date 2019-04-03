/*
Algroithm to solve this
1. Combine the arrays
2. Create an Object with the key and statistics from the new array
3. Pick the keys of the object with value =1 (initial value - 0 in my case)
*/
function diffArray(arr1, arr2) {
var newArr = [];
let fullArr = [...arr1].concat(arr2);
let fullObj = {}
for (let i=0;i<fullArr.length;i++){
  if (fullObj.hasOwnProperty(fullArr[i])){
    fullObj[fullArr[i]][1]++
  }
  else{
    fullObj[fullArr[i]]=[fullArr[i],0];
  }
}

Object.entries(fullObj).map((item)=>{

  if(item[1][1]==0){
    newArr.push(item[1][0])
  }
})
  // Same, same; but different.
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) );

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
