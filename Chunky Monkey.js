function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newarr = [];
  let j=0;
  for (let i=0;i<arr.length;i+=size){
newarr[j]= arr.slice(i,i+size);
j++;

  }
 
  return newarr
}

//chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
